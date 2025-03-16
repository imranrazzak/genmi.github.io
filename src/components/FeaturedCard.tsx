
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index?: number;
  className?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  index = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      <div 
        className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="mt-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <a
          href={link}
          className="mt-4 inline-flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
