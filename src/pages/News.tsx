
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import AcceptedPapersCard from '@/components/AcceptedPapersCard';
import { motion } from 'framer-motion';

const News = () => {
  // Image rotation for the featured news item
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rotatingImages = [
    '/lovable-uploads/53eb3f51-3522-49df-b4af-fcb57518dbde.png', // Hufai Lu
    '/lovable-uploads/192cea21-54b9-4099-8deb-a0736cae7d84.png', // Xinlin Zhuang
    '/lovable-uploads/367ca12d-50a9-4f41-bd4a-9ae340f1d3b6.png'  // Yichen Li
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % rotatingImages.length
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [rotatingImages.length]);

  const newsItems = [
    {
      id: 'neurips-2025',
      title: '6 Papers Accepted at NeurIPS 2025!',
      summary: 'Outstanding achievement! Six of our research papers have been accepted at NeurIPS 2025. Congratulations to Yulong, Feilong, Ankan, Xiwei, Haolin, Ming, and Lingzhi for their amazing effort and dedication. This remarkable success showcases the exceptional research quality and collaborative spirit of our team, advancing the frontiers of AI and machine learning research.',
      date: '2025-09-15',
      featured: true,
      hot: true
    },
    {
      id: '0',
      title: '2 Papers Accepted at EMNLP 2025!',
      summary: 'Exciting news! Two of our research papers have been accepted at EMNLP 2025: "A Knowledge-driven Adaptive Collaboration of LLMs for Enhancing Medical Decision-making" and "From Generation to Detection: A Multimodal Multi-Task Dataset for Benchmarking Health Misinformation". These contributions advance AI applications in healthcare and misinformation detection.',
      date: '2025-08-20',
      featured: true,
      hot: true
    },
    {
      id: '1',
      title: 'Many Congratulations to Xinlin Zhuang and Yulong Li!',
      summary: 'Many congratulations to Xinlin Zhuang for receiving ACL best theme paper and Yulong Li for ACM MM dataset track. Their exceptional research contributions continue to advance our field and bring recognition to the GENMI Lab.',
      date: '2025-08-01',
      featured: true,
      hot: true
    },
    {
      id: '1.5',
      title: 'Welcome to Our New PhD and Master Students!',
      summary: 'Warm Welcome our new PhD and Master\'s students to the lab. We are excited to have you join our team and look forward to working together on exciting research ahead. Wishing you a great start and a rewarding journey with us!',
      date: '2025-08-20',
      imageUrl: '/src/assets/llm-reasoning.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Hufai Lu, Xinlin Zhuang, and Yichen Li Join the GENMI Lab Team',
      summary: 'We are excited to welcome three new talented Research Associates to our team: Hufai Lu specializing in multimodal AI systems for healthcare, Xinlin Zhuang focusing on multimodal medical report generation, and Yichen Li working on federated learning in medical applications.',
      date: '2025-07-01',
      imageUrl: rotatingImages[currentImageIndex],
      featured: true
    },
    {
      id: '2',
      title: 'GENMI Releases First OphNet-3D Dataset',
      summary: 'OphNet-3D is the first extensive RGB-D dynamic 3D reconstruction dataset for ophthalmic surgery, comprising 41 sequences from 40 surgeons and totaling 7.1 million frames, with fine-grained annotations of 12 surgical phases, 10 instrument categories, dense MANO hand meshes, and full 6-DoF instrument poses.',
      date: '2025-06-01',
      imageUrl: '/lovable-uploads/44846551-8156-4efd-9864-274a1280112a.png'
    },
    {
      id: '3',
      title: 'New Collaboration with UNSW and Macquarie University, Australia',
      summary: 'Imran Visit to UNSW and Macquarie University, Australia, and given talk on Precision Medicine, strengthening our international research partnerships and advancing collaborative research in medical AI.',
      date: '2025-06-01'
    },
    {
      id: '4',
      title: 'CVPR Oral Presentation - PhD Student Receives Prestigious Recognition',
      summary: 'Our PhD student presents "FarSight" at CVPR: "We argue that adequate contextual information can be extracted directly from the token interaction process. Inspired by causal inference in the decoding strategy, we propose to leverage causal masks to establish information propagation between multimodal tokens. We present FarSight, a versatile plug-and-play decoding strategy to reduce attention interference from outlier tokens."',
      date: '2025-06-01'
    },
    {
      id: '5',
      title: 'Launch of Open-Source Medical AI Toolkit and Ankan Joins GENMI',
      summary: 'We have released our comprehensive toolkit for medical AI research to the open-source community. Additionally, we are excited to welcome Ankan to our team as a new Research Associate, bringing expertise in deep learning architectures for medical image processing.',
      date: '2025-06-01',
      imageUrl: '/lovable-uploads/38a4d370-3c23-44c1-af29-0a402d185442.png'
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
