
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PublicationCard from '@/components/PublicationCard';
import { motion } from 'framer-motion';
import { Search, FileDown, BookOpen } from 'lucide-react';

// Publication data interface
interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract?: string;
  doi?: string;
  pdfLink?: string;
  category: 'Medical Imaging' | 'Genomics' | 'Ethics & Policy' | 'Methodology';
}

const Publications = () => {
  // Sample publications data
  const allPublications: Publication[] = [
    {
      id: 1,
      title: "GenomeGPT: A Generative Transformer Model for Genomic Sequence Analysis and Variant Prediction",
      authors: ["Johnson, M.", "Rahman, A.", "Patel, M.", "Chen, S."],
      journal: "Nature Biotechnology",
      year: 2023,
      abstract: "In this paper, we introduce GenomeGPT, a novel transformer-based model designed for genomic sequence analysis and variant prediction. Our approach leverages self-attention mechanisms to capture long-range dependencies within genomic sequences, enabling more accurate prediction of gene expression patterns and genetic variations associated with disease states.",
      doi: "10.1038/s41587-023-1234-5",
      pdfLink: "#",
      category: "Genomics"
    },
    {
      id: 2,
      title: "MedSynthImager: Privacy-Preserving Synthetic Medical Image Generation using Diffusion Models",
      authors: ["Chen, S.", "Wilson, J.", "Chang, L."],
      journal: "IEEE Transactions on Medical Imaging",
      year: 2023,
      abstract: "This study presents MedSynthImager, a diffusion-based framework for generating high-fidelity synthetic medical images across various modalities including X-ray, CT, and MRI. We demonstrate that models trained on our synthetic datasets achieve comparable performance to those trained on real data, while addressing critical privacy concerns in medical AI development.",
      doi: "10.1109/TMI.2023.5678901",
      pdfLink: "#",
      category: "Medical Imaging"
    },
    {
      id: 3,
      title: "PathoDiffusion: Enhancing Pathology Images with Diffusion Models for Improved Cancer Detection",
      authors: ["Chen, S.", "Winters, A.", "Rodriguez, C."],
      journal: "Digital Pathology",
      year: 2023,
      abstract: "We propose PathoDiffusion, a novel application of diffusion models for enhancing histopathology images to highlight potential cancer markers and tissue abnormalities. Our approach improves diagnostic accuracy by 18% compared to standard imaging processes while maintaining tissue morphology integrity.",
      doi: "10.1016/j.digpat.2023.789012",
      pdfLink: "#",
      category: "Medical Imaging"
    },
    {
      id: 4,
      title: "Explainable Genomic Analysis: Interpreting Deep Learning Predictions for Clinician Trust",
      authors: ["Sharma, P.", "Rodriguez, C.", "Johnson, M."],
      journal: "Bioinformatics",
      year: 2022,
      abstract: "This paper addresses the 'black box' nature of deep learning in genomics by developing interpretable models that provide clear explanations for AI-driven genomic insights. We introduce a novel attention-based approach that highlights relevant genetic regions contributing to specific predictions, making results more actionable for clinical decision-making.",
      doi: "10.1093/bioinformatics/btac345",
      pdfLink: "#",
      category: "Genomics"
    },
    {
      id: 5,
      title: "MRI Enhancement Through Deep Learning: Improving Resolution While Reducing Scan Times",
      authors: ["Chen, S.", "Patel, M.", "Wilson, J."],
      journal: "Radiology: Artificial Intelligence",
      year: 2022,
      abstract: "We present a deep learning framework for enhancing MRI image quality and resolution while simultaneously reducing required scan times by up to 60%. Our approach uses a specialized U-Net architecture with perceptual loss functions to generate diagnostic-quality images from undersampled k-space data.",
      doi: "10.1148/ryai.2022456789",
      pdfLink: "#",
      category: "Medical Imaging"
    },
    {
      id: 6,
      title: "Ethical Considerations in Synthetic Medical Data Generation: Guidelines and Best Practices",
      authors: ["Sharma, P.", "Chen, S.", "Johnson, M."],
      journal: "Journal of Medical Ethics",
      year: 2022,
      abstract: "As synthetic medical data becomes increasingly realistic and widely used, this paper explores the ethical implications and proposes comprehensive guidelines for responsible development and deployment. We address issues of bias, privacy, consent, and potential misuse while outlining a framework for ethical review of synthetic data applications.",
      doi: "10.1136/medethics-2022-108765",
      pdfLink: "#",
      category: "Ethics & Policy"
    },
    {
      id: 7,
      title: "Federated Learning for Privacy-Preserving Genomic Analysis Across Institutions",
      authors: ["Johnson, M.", "Chang, L.", "Sharma, P."],
      journal: "Nature Communications",
      year: 2021,
      abstract: "We introduce a federated learning framework enabling collaborative genomic research across institutions without sharing sensitive patient data. Our approach allows for training complex models on distributed datasets while preserving privacy through secure aggregation protocols and differential privacy techniques.",
      doi: "10.1038/s41467-021-24321-4",
      pdfLink: "#",
      category: "Methodology"
    },
    {
      id: 8,
      title: "Self-Supervised Pretraining for Medical Image Analysis: Benchmarks and Applications",
      authors: ["Chen, S.", "Wilson, J.", "Winters, A."],
      journal: "Medical Image Analysis",
      year: 2021,
      abstract: "This comprehensive study evaluates various self-supervised pretraining approaches for medical image analysis tasks across different modalities. We demonstrate that domain-specific pretraining strategies significantly outperform general computer vision pretraining methods when applied to medical imaging applications.",
      doi: "10.1016/j.media.2021.102345",
      pdfLink: "#",
      category: "Medical Imaging"
    }
  ];

  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Available years and categories
  const years = [...new Set(allPublications.map(pub => pub.year))].sort((a, b) => b - a);
  const categories = [...new Set(allPublications.map(pub => pub.category))];

  // Filter publications based on search, year, and category
  const filteredPublications = allPublications
    .filter(pub => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(query) ||
          pub.authors.some(author => author.toLowerCase().includes(query)) ||
          pub.journal.toLowerCase().includes(query) ||
          pub.abstract?.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .filter(pub => yearFilter ? pub.year === yearFilter : true)
    .filter(pub => categoryFilter ? pub.category === categoryFilter : true)
    .sort((a, b) => b.year - a.year);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter changes
  const handleYearChange = (year: number | null) => {
    setYearFilter(year);
  };

  const handleCategoryChange = (category: string | null) => {
    setCategoryFilter(category);
  };

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
              Research Output
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Our Publications
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our peer-reviewed articles, conference papers, and other scholarly contributions to the fields of AI, genomics, and medical imaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-border focus:border-genmi-300 focus:ring-1 focus:ring-genmi-300 outline-none"
                />
              </div>

              {/* Year Filter */}
              <div className="w-full md:w-48">
                <select
                  value={yearFilter || ''}
                  onChange={(e) => handleYearChange(e.target.value ? Number(e.target.value) : null)}
                  className="w-full py-2 px-3 rounded-lg border border-border focus:border-genmi-300 focus:ring-1 focus:ring-genmi-300 outline-none"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-48">
                <select
                  value={categoryFilter || ''}
                  onChange={(e) => handleCategoryChange(e.target.value || null)}
                  className="w-full py-2 px-3 rounded-lg border border-border focus:border-genmi-300 focus:ring-1 focus:ring-genmi-300 outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {filteredPublications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                abstract={publication.abstract}
                doi={publication.doi}
                pdfLink={publication.pdfLink}
                index={index}
              />
            ))}

            {filteredPublications.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="mx-auto h-16 w-16 text-muted-foreground opacity-40" />
                <h3 className="mt-4 text-xl font-medium">No publications found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="py-12 px-6 bg-genmi-50/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Download Our Publication List"
                center={true}
              />
              <p className="text-muted-foreground text-lg mb-8">
                Need our complete publication list for reference? Download it in your preferred format.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white border border-border rounded-full px-6 py-3 font-medium hover:shadow-sm transition-all"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download BibTeX
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white border border-border rounded-full px-6 py-3 font-medium hover:shadow-sm transition-all"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
