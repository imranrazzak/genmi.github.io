import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample activities data
const activities = [
  {
    id: "activity-1",
    title: "Team Lunch",
    description: "Monthly team lunch where we discuss research progress and celebrate achievements.",
    imageUrl: "/lovable-uploads/f776e046-1db7-4e00-9319-82f135d32753.png"
  }
];

const ActivityCard = ({ title, description, imageUrl, index }: { 
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const Activities = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-12 px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          subtext="Lab Life"
          title="Our Activities"
          alignment="center"
        />
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              imageUrl={activity.imageUrl}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Activities;
