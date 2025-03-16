
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl?: string;
  index?: number;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  summary,
  date,
  imageUrl,
  index = 0,
  featured = false
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-300",
        featured && "md:col-span-2"
      )}
    >
      <div className={cn(
        "grid gap-4",
        imageUrl && featured ? "md:grid-cols-2" : "grid-cols-1"
      )}>
        {imageUrl && (
          <div className="aspect-video md:aspect-auto overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            {formattedDate}
          </div>
          
          <h3 className="text-xl font-medium mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {summary}
          </p>
          
          <Link
            to={`/news/${id}`}
            className="inline-flex items-center text-sm font-medium text-genmi-600 hover:text-genmi-800 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
