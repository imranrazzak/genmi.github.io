
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtext?: string;
  subtitle?: string; // Added this for compatibility with existing code
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtext,
  subtitle, // Use whichever is provided
  title,
  description,
  center = false,
  className
}) => {
  // Use subtitle as fallback if subtext is not provided
  const displayText = subtext || subtitle;
  
  return (
    <div className={cn("mb-12 space-y-2", center && "text-center", className)}>
      {displayText && (
        <motion.span 
          initial={{
            opacity: 0,
            y: 10
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          transition={{
            duration: 0.5,
            delay: 0.1
          }} 
          className="inline-block text-sm font-medium bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full"
        >
          {displayText}
        </motion.span>
      )}
      
      <motion.h2
        initial={{
          opacity: 0,
          y: 10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.5,
          delay: 0.2
        }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="text-muted-foreground text-lg max-w-3xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
