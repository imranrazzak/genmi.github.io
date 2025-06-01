
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import AcceptedPapersCard from '@/components/AcceptedPapersCard';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      id: '1',
      title: 'New Research on Federated Learning in Healthcare',
      summary: 'Our latest paper on privacy-preserving federated learning for medical data analysis has been accepted at a top-tier conference.',
      date: '2024-01-15',
      imageUrl: '/lovable-uploads/2d853ee5-6a95-428b-969e-da913c38d778.png',
      featured: true,
      hot: true
    },
    {
      id: '2',
      title: 'GENMI Lab Wins Best Paper Award',
      summary: 'Our work on multimodal medical AI received recognition at the International Conference on Medical Imaging.',
      date: '2024-01-10',
      imageUrl: '/lovable-uploads/44846551-8156-4efd-9864-274a1280112a.png'
    },
    {
      id: '3',
      title: 'New Collaboration with Leading Medical Centers',
      summary: 'We are excited to announce partnerships with several renowned hospitals to advance medical AI research.',
      date: '2024-01-05'
    },
    {
      id: '4',
      title: 'PhD Student Receives Prestigious Fellowship',
      summary: 'Congratulations to our PhD student for receiving a national research fellowship for AI in healthcare.',
      date: '2023-12-20'
    },
    {
      id: '5',
      title: 'Launch of Open-Source Medical AI Toolkit',
      summary: 'We have released our comprehensive toolkit for medical AI research to the open-source community.',
      date: '2023-12-15',
      imageUrl: '/lovable-uploads/5c7eec45-80b9-49fe-b7f0-404d67dddf6d.png'
    },
    {
      id: '6',
      title: 'Workshop on Ethical AI in Medicine',
      summary: 'Join us for our upcoming workshop discussing the ethical implications of AI in medical practice.',
      date: '2023-12-10'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              News & Updates
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest developments, research breakthroughs, and achievements from the GENMI Lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accepted Papers Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <AcceptedPapersCard />
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Latest News"
            title="Recent Updates"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <NewsCard
                key={item.id}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
