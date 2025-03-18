
import React from 'react';
import { motion } from 'framer-motion';

export interface SectionTitleProps {
  subtext: string;
  title: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtext, 
  title, 
  alignment = 'center' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="inline-block bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
        {subtext}
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-medium">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
