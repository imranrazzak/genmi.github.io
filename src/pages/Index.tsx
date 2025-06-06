import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import FeaturedCard from '@/components/FeaturedCard';
import NewsCard from '@/components/NewsCard';
import { ArrowRight, BookOpen, Brain, ImagePlus, Dna, Microscope, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-20 md:pb-28 px-6 rounded-lg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center bg-slate-50">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-block bg-genmi-50 text-genmi-600 px-4 rounded-full text-sm font-medium mb-6 py-[8px]">
            Advancing Personalized, Preventive, and Predictive Medicine Through Cutting-Edge Research
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6">
             Generative AI for Genomics and Medical Imaging{' '}
              <span className="text-gradient">(GenMI)</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mb-8 mx-0 text-base font-normal text-slate-950 text-justify">GenMI focuses on human-centered AI, combining multiomics, biomedical imaging, visualization, and information technologies to develop innovative clinical applications that advance patient health and well-being.  


Our research addresses critical healthcare challenges by developing foundational theories in information technologies and computer science to advance Personalized, Preventive, and Predictive Medicine. We leverage expertise in machine learning, computer vision, data science, artificial intelligence, bioinformatics, information visualization, and behavioral informatics.   To gain comprehensive insights into disease entities, we integrate multi-layered data, including single-cell RNA sequencing, methylomics, and medical imaging. In close collaboration with clinicians at Charité, we develop clinical decision support systems for cancer treatment and solutions for routine clinical tasks, such as the automated annotation of radiological images. 


Through partnerships with leading industry players—such as major hospitals and healthcare companies—we translate cutting-edge research into real-world applications, spanning algorithm development, prototype creation, and commercialization. Breakthroughs in these fields lead to significant advancements in precision and personalized medicine, improving patient care and healthcare infrastructure. 


Our innovations enhance multimedia patient record systems, advanced computer-assisted surgery, AI-driven treatment planning, and telehealth solutions for remote patient monitoring, ultimately increasing healthcare accessibility, efficiency, and outcomes.</motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects" className="bg-genmi-600 text-white rounded-full px-6 py-3 font-medium hover:bg-genmi-700 transition-colors">
                Explore Our Projects
              </Link>
              <Link to="/about" className="text-foreground rounded-full px-6 py-3 font-medium border border-border hover:bg-background/80 transition-colors">
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-genmi-50/50">
        <div className="container mx-auto px-6">
          <SectionTitle subtext="Our Focus" title="Key Research Areas" alignment="center" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* New Research Area: Multi-Modal Large Language Model */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Multi-Modal Large Language Model</h3>
              <p className="text-muted-foreground">
                Developing advanced AI systems that integrate text, images, and structured data to enhance medical diagnosis and treatment planning.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Embodied AI</h3>
              <p className="text-muted-foreground">
                Developing generative models to analyze genetic sequences and identify patterns associated with diseases and treatment responses.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Genomic Sequence Analysis</h3>
              <p className="text-muted-foreground">
                Developing AI models that segment and analyze medical images to identify anatomical structures and anomalies with high precision.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Early Diagnosis and Prognosis</h3>
              <p className="text-muted-foreground">
                Building advanced AI systems for early detection and diagnosis of diseases using both genomic and imaging data.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ImagePlus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Medical Image Segmentation</h3>
              <p className="text-muted-foreground">
                Creating realistic synthetic medical datasets to enhance model training and overcome data privacy and scarcity challenges.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Explainable AI</h3>
              <p className="text-muted-foreground">
                Researching techniques to make AI models more interpretable for healthcare professionals, ensuring trust and clinical adoption.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionTitle subtext="Featured Work" title="Our Latest Projects" className="md:mb-0" />
            <Link to="/projects" className="inline-flex items-center text-genmi-600 hover:text-genmi-800 font-medium transition-colors">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard title="Ophthalmic Surgery" description="Introducing OphNet-3D, the first extensive RGB-D dynamic 3D reconstruction dataset for ophthalmic surgery, comprising 41 sequences from 40 surgeons with fine-grained annotations for bimanual hand pose estimation and hand-instrument interaction reconstruction." imageUrl="/lovable-uploads/1e8ee05f-9f3b-4b1f-a0ff-1cd2984292fd.png" link="https://arxiv.org/pdf/2505.17677" index={0} />
            <FeaturedCard title="Hallucinations in MLLMs" description="We propose to intervene in the propagation process by tackling outlier tokens to enhance in-context inference. With this goal, we present FarSight, a versatile plug-and-play decoding strategy to reduce attention interference from outlier tokens merely by optimizing the causal mask." imageUrl="/lovable-uploads/7032ae34-31d4-4c50-ad10-b23e26adcf69.png" link="/projects/hallucinations-mllms" index={1} />
            <FeaturedCard title="Structure-Informed Guided Mediation Analysis" description="We propose Structure-Informed Guided Mediation Analysis (SIGMA), which guides automated mediation pathway identification through probabilistic causal structure discovery and uncertainty quantification, enabling end-to-end propagation of structural uncertainty from structure learning to effect estimation." imageUrl="/lovable-uploads/5c7eec45-80b9-49fe-b7f0-404d67dddf6d.png" link="/projects/sigma" index={2} />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-genmi-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionTitle subtext="News & Updates" title="Latest Announcements" className="md:mb-0" />
            <Link to="/news" className="inline-flex items-center text-genmi-600 hover:text-genmi-800 font-medium transition-colors">
              View all news <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard id="1" title="OphNet-3D Dataset Released - First Extensive RGB-D Dynamic 3D Reconstruction Dataset for Ophthalmic Surgery" summary="OphNet-3D is the first extensive RGB-D dynamic 3D reconstruction dataset for ophthalmic surgery, comprising 41 sequences from 40 surgeons and totaling 7.1 million frames, with fine-grained annotations of 12 surgical phases, 10 instrument categories, dense MANO hand meshes, and full 6-DoF instrument poses." date="2023-05-15" imageUrl="/lovable-uploads/c787d3ab-3850-4562-a843-ff91940ce691.png" featured={true} index={0} />
            <NewsCard id="2" title="New Publication in Nature Digital Medicine" summary="Our team's groundbreaking work on 'A Cross Population Study of Retinal Aging Biomarkers with Longitudinal Pre-training and Label Distribution Learning' has been published in Nature Digital Medicine." date="22 May 2025" index={1} />
            <NewsCard id="3" title="ACL Oral: A Cross Population Study of Retinal Aging Biomarkers with Longitudinal Pre-training and Label Distribution Learning" summary="We're proud to announce that our research on retinal aging biomarkers has been accepted as an oral presentation at ACL. This work demonstrates the effectiveness of longitudinal pre-training and label distribution learning in cross-population studies." date="2023-03-18" index={2} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-genmi-600 to-genmi-500 rounded-3xl py-16 px-6 md:px-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Interested in Collaborating?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              We're always looking for research collaborators, industry partners, and talented individuals to join our mission of advancing healthcare through AI.
            </p>
            <Link to="/about" className="inline-block bg-white text-genmi-600 rounded-full px-8 py-3 font-medium hover:bg-opacity-95 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Home;
