
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
  };
}

export const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden border-0 group transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-center justify-center">
          <img src="/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png" alt="BitConned" className="h-16 w-16" />
        </div>
        <div className="absolute top-4 left-4 bg-bitconned-neon text-bitconned-dark-blue text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <div className="bg-gradient-to-br from-bitconned-blue/20 to-black p-6">
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
          <Calendar className="h-3 w-3" />
          <span>{post.date}</span>
          <span className="mx-1">•</span>
          <Clock className="h-3 w-3" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-bitconned-neon transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-5">
          {post.excerpt}
        </p>
        
        <Link to={`/blog/${post.id}`} className="flex items-center text-bitconned-neon text-sm font-medium">
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </Card>
  );
};
