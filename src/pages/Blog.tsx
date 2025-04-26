import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    id: 'cross-chain-interoperability',
    title: 'Cross-Chain Interoperability: The Future of DeFi',
    excerpt: 'Exploring how BitConned is leading the way in connecting disparate blockchain networks for a more unified crypto ecosystem.',
    image: '/blog-featured.jpg',
    date: 'May 10, 2025',
    readTime: '8 min read',
    author: 'Alex Johnson',
    authorImage: '/author1.jpg',
  };

  const blogPosts = [
    {
      id: 'security-first-approach',
      title: 'The Security-First Approach to Blockchain Development',
      excerpt: 'How BitConned implements multi-layer security measures to protect users and assets.',
      image: '/blog1.jpg',
      date: 'May 5, 2025',
      readTime: '6 min read',
      category: 'Security'
    },
    {
      id: 'equilibrium-bot-explained',
      title: 'EquilibriumBot: Under the Hood',
      excerpt: 'A technical deep dive into how our proprietary bot maintains price stability across exchanges.',
      image: '/blog2.jpg',
      date: 'April 28, 2025',
      readTime: '10 min read',
      category: 'Technology'
    },
    {
      id: 'token-economics',
      title: 'Token Economics: Balancing Utility and Value',
      excerpt: 'Understanding the economic model behind BitConned\'s dual-token system.',
      image: '/blog3.jpg',
      date: 'April 20, 2025',
      readTime: '7 min read',
      category: 'Economics'
    },
    {
      id: 'solana-integration',
      title: 'Why We Chose Solana for Cross-Chain Integration',
      excerpt: 'The technical advantages that made Solana our blockchain of choice for expansion beyond BSC.',
      image: '/blog4.jpg',
      date: 'April 15, 2025',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: 'community-governance',
      title: 'Community Governance: Power to the People',
      excerpt: 'How BitConned is implementing true decentralized governance through community participation.',
      image: '/blog5.jpg',
      date: 'April 10, 2025',
      readTime: '9 min read',
      category: 'Governance'
    },
    {
      id: 'crypto-regulation',
      title: 'Navigating the Future of Crypto Regulation',
      excerpt: 'Staying compliant while innovating in an evolving regulatory landscape.',
      image: '/blog6.jpg',
      date: 'April 5, 2025',
      readTime: '8 min read',
      category: 'Regulation'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
              BitConned Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Insights, updates, and deep dives into the world of cross-chain technology.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <div className="relative">
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-white/10 border-white/20 text-white w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-bitconned-dark-blue to-black/20 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-bitconned-blue/30 to-black p-8">
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-sm">AJ</span>
                    </div>
                    <span className="text-sm text-gray-300">{featuredPost.author}</span>
                  </div>
                  
                  <Button variant="outline" className="neon-border text-bitconned-neon hover:bg-bitconned-neon/10">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 group transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-center justify-center">
                  <span className="text-3xl">🖼️</span>
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
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-16">
          <Card className="glassmorphism border-white/10 overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Stay updated with BitConned
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates, insights, and announcements directly in your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
