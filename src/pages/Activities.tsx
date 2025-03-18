
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
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "activity-2",
    title: "Research Workshop",
    description: "Interactive workshop session focusing on computer vision research methodologies.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "activity-3",
    title: "Conference Presentation",
    description: "Team members presenting our latest research at CVPR 2023.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "activity-4",
    title: "Lab Open House",
    description: "Annual open house where we showcase our research to the public and industry partners.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "activity-5",
    title: "Hackathon",
    description: "Weekend hackathon focused on innovative healthcare applications using computer vision.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "activity-6",
    title: "Guest Lecture Series",
    description: "Distinguished researchers share insights and latest developments in AI and computer vision.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "activity-7",
    title: "Student Mentoring",
    description: "Team members guiding undergraduate students on research projects.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "activity-8",
    title: "Industry Collaboration Meeting",
    description: "Meeting with industry partners to discuss research applications and collaboration opportunities.",
    imageUrl: "/placeholder.svg"
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
