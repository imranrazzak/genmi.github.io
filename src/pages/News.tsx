
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Search, Calendar } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample news data
const newsItems = [
  {
    id: "news-workshop",
    title: "Call for Papers: The 2nd International Workshop on Multimedia Computing for Health and Medicine (MCHM'25)",
    summary: "Now we are calling for papers for The 2nd International Workshop on Multimedia Computing for Health and Medicine (MCHM'25) at ACM Multimedia 2025 (CORE A*). We are happy to see another group of colleagues bid the 2nd workshop successfully, Chris Wei Zhou. We welcome submissions relevant to health and medicine topics using multimedia computing.",
    date: "2023-05-20",
    imageUrl: "/lovable-uploads/a9877056-877c-4ef0-8fd9-f2c4dd92d4a3.png",
    featured: true,
    hot: true
  },
  {
    id: "news-1",
    title: "🔥 Our Paper Accepted in CVPR 2023",
    summary: "We're excited to announce that our research on 'Deep Learning Approaches for Medical Image Segmentation' has been accepted for presentation at CVPR 2023, one of the premier computer vision conferences worldwide.",
    date: "2023-05-15",
    imageUrl: "/placeholder.svg",
    featured: true,
    hot: true
  },
  {
    id: "news-2",
    title: "🔥 Dr. Ming Hu Joins Our Research Team",
    summary: "We are delighted to welcome Dr. Ming Hu, a renowned expert in Computer Vision and Machine Learning, to our research team. Dr. Hu brings extensive experience in deep learning applications for healthcare.",
    date: "2023-04-10",
    imageUrl: "/placeholder.svg",
    featured: true,
    hot: true
  },
  {
    id: "news-3",
    title: "Research Grant Awarded for AI in Healthcare Project",
    summary: "Our team has been awarded a significant grant to advance our work on AI applications in healthcare diagnostics. This funding will support our ongoing efforts to develop innovative solutions for medical image analysis.",
    date: "2023-03-22",
    imageUrl: "/placeholder.svg",
    featured: false,
    hot: false
  },
  {
    id: "news-4",
    title: "Workshop on Computer Vision Applications in Medicine",
    summary: "We successfully hosted a workshop on computer vision applications in medicine, with over 200 participants from academia and industry. The event featured keynote speakers from leading research institutions and healthcare organizations.",
    date: "2023-02-15",
    imageUrl: "/placeholder.svg",
    featured: false,
    hot: false
  },
  {
    id: "news-5",
    title: "New Collaboration with National Hospital",
    summary: "We're proud to announce a new collaboration with the National Hospital to implement our AI diagnostic tools in clinical settings. This partnership aims to improve early detection of various conditions through advanced image analysis.",
    date: "2023-01-20",
    imageUrl: "/placeholder.svg",
    featured: false,
    hot: false
  },
  {
    id: "news-6",
    title: "Open Source Release of Medical Image Dataset",
    summary: "To foster research in medical image analysis, we've released a comprehensive dataset of anonymized medical images with expert annotations. This resource is now available to the research community under an open license.",
    date: "2022-12-05",
    imageUrl: "/placeholder.svg",
    featured: false,
    hot: false
  }
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter news items based on search query
  const filteredNews = searchQuery 
    ? newsItems.filter(news => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        news.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : newsItems;
  
  // Separate hot news and regular news
  const hotNews = filteredNews.filter(news => news.hot);
  const regularNews = filteredNews.filter(news => !news.hot);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-12 px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          subtext="Stay Updated"
          title="Latest News & Announcements"
        />

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Search news..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Hot News Section */}
        {hotNews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="text-red-500" size={24} />
              <h2 className="text-2xl font-medium">Hot News</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotNews.map((news, index) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  summary={news.summary}
                  date={news.date}
                  imageUrl={news.imageUrl}
                  index={index}
                  featured={news.featured}
                  hot={news.hot}
                />
              ))}
            </div>
          </div>
        )}

        {/* Featured Workshop Section */}
        <div className="mb-12">
          <div className="bg-genmi-50 p-6 rounded-xl border border-genmi-100">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-genmi-600" size={24} />
              <h2 className="text-2xl font-medium">Featured Workshop</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/a9877056-877c-4ef0-8fd9-f2c4dd92d4a3.png" 
                  alt="ACM Multimedia 2025" 
                  className="rounded-lg w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-medium mb-2">The 2nd International Workshop on Multimedia Computing for Health and Medicine (MCHM'25)</h3>
                <p className="text-muted-foreground mb-4">
                  Now we are calling for papers for The 2nd International Workshop on Multimedia Computing for Health and Medicine (MCHM'25) at ACM Multimedia 2025 (CORE A*). We are happy to see another group of colleagues bid the 2nd workshop successfully, Chris Wei Zhou.
                </p>
                <p className="text-muted-foreground mb-4">
                  We welcome submissions relevant to health and medicine topics using multimedia computing.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>16 March 2025</span>
                  <span className="mx-2">|</span>
                  <span>Dublin, Ireland</span>
                </div>
                <Button variant="default" className="bg-genmi-600 hover:bg-genmi-700">
                  Submit Your Paper
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-12" />

        {/* Regular News Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-6">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((news, index) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                summary={news.summary}
                date={news.date}
                imageUrl={news.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default News;
