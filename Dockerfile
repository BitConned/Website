# Estágio de build
FROM node:20-alpine as builder

WORKDIR /app

# Instala o git (necessário para algumas dependências)
RUN apk add --no-cache git

# Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# Instala as dependências com cache de camadas
RUN npm ci

# Copia o resto do código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Adiciona configurações de segurança e otimização
RUN echo "tcp_nopush on;" >> /etc/nginx/conf.d/default.conf && \
    echo "tcp_nodelay on;" >> /etc/nginx/conf.d/default.conf && \
    echo "gzip on;" >> /etc/nginx/conf.d/default.conf && \
    echo "gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;" >> /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Define variáveis de ambiente para o nginx
ENV NGINX_WORKER_PROCESSES auto
ENV NGINX_WORKER_CONNECTIONS 1024

# Expõe a porta 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"] 