
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FileText, ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract?: string;
  doi?: string;
  pdfLink?: string;
  index?: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  authors,
  journal,
  year,
  abstract,
  doi,
  pdfLink,
  index = 0
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "bg-white rounded-xl border border-border p-6 hover:shadow-sm transition-shadow duration-300",
        expanded && "shadow-sm"
      )}
    >
      <div className="flex justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm">
            {authors.join(', ')}
          </p>
          <p className="text-genmi-600 text-sm font-medium">
            {journal} • {year}
          </p>
        </div>
      </div>

      {abstract && (
        <div className="mt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-genmi-600 hover:text-genmi-800 transition-colors"
          >
            {expanded ? 'Hide abstract' : 'Show abstract'}
          </button>
          
          {expanded && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-muted-foreground text-sm"
            >
              {abstract}
            </motion.p>
          )}
        </div>
      )}

      <div className="mt-4 flex space-x-4">
        {doi && (
          <a 
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-genmi-600 hover:text-genmi-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            DOI
          </a>
        )}
        {pdfLink && (
          <a 
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-genmi-600 hover:text-genmi-800 transition-colors"
          >
            <FileText className="w-4 h-4 mr-1" />
            PDF
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PublicationCard;
