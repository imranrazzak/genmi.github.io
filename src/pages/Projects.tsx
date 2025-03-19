
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Calendar, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Active' | 'Completed' | 'Planning';
  team: string[];
  timeline: string;
  slug: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  category,
  description,
  image,
  status,
  team,
  timeline,
  slug,
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Active' ? 'bg-green-50 text-green-600' :
            status === 'Completed' ? 'bg-blue-50 text-blue-600' :
            'bg-amber-50 text-amber-600'
          }`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <Link
          to={`/projects/${slug}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-genmi-600 hover:text-genmi-800 transition-colors"
        >
          View Details
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Updated projects data with 10 medical imaging projects
  const projects = [
    {
      title: "AI-Powered Brain Tumor Detection",
      category: "Medical Imaging",
      description: "Advanced deep learning algorithms for automated detection and classification of brain tumors from MRI scans.",
      image: "https://images.unsplash.com/photo-1559757175-7cb036e0159e?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. James Wilson", "Lisa Chang"],
      timeline: "2022 - Present",
      slug: "brain-tumor-detection"
    },
    {
      title: "Retinal Disease Classification",
      category: "Medical Imaging",
      description: "Machine learning system for early detection of diabetic retinopathy and other retinal conditions from fundus images.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Maya Patel", "Dr. Marcus Johnson", "Alex Winters"],
      timeline: "2023 - Present",
      slug: "retinal-classification"
    },
    {
      title: "Lung CT Analysis for COVID-19",
      category: "Medical Imaging",
      description: "AI-based tool for quantifying lung involvement in COVID-19 patients using chest CT scans.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Priya Sharma", "Carlos Rodriguez", "Dr. James Wilson"],
      timeline: "2020 - 2022",
      slug: "covid-ct-analysis"
    },
    {
      title: "Cardiac MRI Segmentation",
      category: "Medical Imaging",
      description: "Automated segmentation of cardiac structures in MRI for precise quantification of heart function.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. Marcus Johnson"],
      timeline: "2022 - Present",
      slug: "cardiac-segmentation"
    },
    {
      title: "Skin Lesion Classification",
      category: "Medical Imaging",
      description: "Deep learning models for early detection of melanoma and other skin cancers from dermatological images.",
      image: "https://images.unsplash.com/photo-1576766125323-b95e06c10525?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. James Wilson", "Maya Patel", "Lisa Chang"],
      timeline: "2023 - Present",
      slug: "skin-lesion-detection"
    },
    {
      title: "Dental X-ray Analysis",
      category: "Medical Imaging",
      description: "AI system for detecting dental caries, periodontal diseases, and other conditions from dental radiographs.",
      image: "https://images.unsplash.com/photo-1606811971618-4479a7997d8b?auto=format&fit=crop&q=80",
      status: "Planning" as const,
      team: ["Dr. Aisha Rahman", "Dr. Marcus Johnson", "Carlos Rodriguez"],
      timeline: "2024 - Future",
      slug: "dental-xray-analysis"
    },
    {
      title: "Fetal Ultrasound Monitoring",
      category: "Medical Imaging",
      description: "Real-time AI analysis of fetal ultrasound for early detection of developmental abnormalities.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Priya Sharma", "Dr. Sarah Chen"],
      timeline: "2022 - Present",
      slug: "fetal-ultrasound"
    },
    {
      title: "Bone Fracture Detection",
      category: "Medical Imaging",
      description: "Machine learning algorithms for automated detection of bone fractures in X-ray images with high precision.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Marcus Johnson", "Alex Winters", "Lisa Chang"],
      timeline: "2021 - 2023",
      slug: "fracture-detection"
    },
    {
      title: "Mammography Enhancement",
      category: "Medical Imaging",
      description: "AI-based enhancement and analysis of mammograms for improved breast cancer screening accuracy.",
      image: "https://images.unsplash.com/photo-1579154204845-1e39c9c69d8c?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. James Wilson", "Dr. Aisha Rahman", "Maya Patel"],
      timeline: "2023 - Present",
      slug: "mammography-ai"
    },
    {
      title: "Histopathology Analysis",
      category: "Medical Imaging",
      description: "Deep learning for automated analysis of histopathology slides for cancer detection and grading.",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc7f0?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Carlos Rodriguez", "Dr. Priya Sharma"],
      timeline: "2022 - Present",
      slug: "histopathology-ai"
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Get categories from projects
  const allCategories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Research
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Pioneering Projects in <span className="text-gradient">Medical Imaging</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our innovative research projects applying advanced AI techniques to medical imaging for improved diagnostics and patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Modified to have 2 projects per row */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.slug}
                {...project}
                index={index}
              />
            ))}
          </div>

          {/* Collaboration Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-genmi-50/50 p-10 rounded-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle
                subtext="Collaboration"
                title="Interested in Working with Us?"
                alignment="center"
                className="mb-6"
              />
              <p className="text-muted-foreground text-lg mb-8">
                We welcome collaborations with academic institutions, healthcare organizations, and industry partners who share our vision of advancing healthcare through innovative AI-powered medical imaging.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-genmi-600 hover:bg-genmi-700">
                  Propose a Collaboration
                </Button>
                <Button variant="outline">
                  Learn About Our Process
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
