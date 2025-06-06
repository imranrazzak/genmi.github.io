
import React from 'react';
import Layout from '@/components/Layout';
import PublicationCard from '@/components/PublicationCard';
import SectionTitle from '@/components/SectionTitle';

const Publications = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionTitle title="Our Publications" alignment="center" />
        
        <div className="grid grid-cols-1 gap-6 mt-12">
          <PublicationCard 
            title="DeepChest: Dynamic Gradient-Free Task Weighting for Effective Multi-Task Learning in Chest X-ray Classification"
            authors={["Y Mohamed", "N Mohamed", "K Abouhashad", "F Tang", "S Atito", "S Jameel"]}
            journal="arXiv preprint arXiv:2505.23595"
            year={2025}
            abstract="This paper presents DeepChest, a novel approach for multi-task learning in chest X-ray classification using dynamic gradient-free task weighting to improve effectiveness across multiple diagnostic tasks."
          />

          <PublicationCard 
            title="Navigating loss manifolds via rigid body dynamics: A promising avenue for robustness and generalisation"
            authors={["MD Belgoumri", "MR Bouadjenek", "H Hacid", "I Razzak", "S Aryal"]}
            journal="arXiv preprint arXiv:2505.19527"
            year={2025}
            abstract="This paper explores the use of rigid body dynamics to navigate loss manifolds, presenting a novel approach for improving robustness and generalization in machine learning models."
          />

          <PublicationCard 
            title="From Generation to Detection: A Multimodal Multi-Task Dataset for Benchmarking Health Misinformation"
            authors={["Z Zhang", "Y Zhang", "X Zhou", "L Huang", "I Razzak", "P Nakov", "U Naseem"]}
            journal="arXiv preprint arXiv:2505.18685"
            year={2025}
            abstract="We present a comprehensive multimodal multi-task dataset designed to benchmark methods for both generating and detecting health misinformation across various modalities and contexts."
          />

          <PublicationCard 
            title="TAGS: A Test-Time Generalist-Specialist Framework with Retrieval-Augmented Reasoning and Verification"
            authors={["J Wu", "F Tang", "Y Li", "M Hu", "H Xue", "S Jameel", "Y Xie", "I Razzak"]}
            journal="arXiv preprint arXiv:2505.18283"
            year={2025}
            abstract="We introduce TAGS, a novel test-time framework that combines generalist and specialist approaches with retrieval-augmented reasoning and verification for improved performance."
          />

          <PublicationCard 
            title="Towards Dynamic 3D Reconstruction of Hand-Instrument Interaction in Ophthalmic Surgery"
            authors={["M Hu", "Z Yu", "F Tang", "K Chen", "Y Li", "I Razzak", "J He", "T Birdal", "K Zhou", "Z Ge"]}
            journal="arXiv preprint arXiv:2505.17677"
            year={2025}
            abstract="This work presents a novel approach for dynamic 3D reconstruction of hand-instrument interactions during ophthalmic surgery, enabling better understanding and analysis of surgical procedures."
          />

          <PublicationCard 
            title="Seeing Far and Clearly: Mitigating Hallucinations in MLLMs with Attention Causal Decoding"
            authors={["F Tang", "C Liu", "Z Xu", "M Hu", "Z Peng", "Z Yang", "J Su", "M Lin", "Y Peng", "X Cheng", "I Razzak", "Z Ge"]}
            journal="CVPR"
            year={2025}
            abstract="This research introduces attention causal decoding to address hallucination issues in multimodal large language models, significantly improving the reliability and accuracy of generated content."
          />

          <PublicationCard 
            title="Divide by Question, Conquer by Agent: SPLIT-RAG with Question-Driven Graph Partitioning"
            authors={["R Yang", "H Xue", "I Razzak", "H Hacid", "FD Salim"]}
            journal="arXiv preprint arXiv:2505.13994"
            year={2025}
            abstract="We introduce SPLIT-RAG, a novel retrieval-augmented generation approach that uses question-driven graph partitioning to improve the efficiency and accuracy of information retrieval and generation."
          />

          <PublicationCard 
            title="Addressing the Challenges of Mental Health Conversations with Large Language Models"
            authors={["S Shiwakoti", "SB Shah", "I Razzak", "S Thapa", "U Naseem"]}
            journal="Companion Proceedings of the ACM on Web Conference 2025"
            year={2025}
            abstract="This work addresses the unique challenges of using large language models in mental health conversations, proposing solutions for safe and effective AI-assisted mental health support."
          />

          <PublicationCard 
            title="CBRCL: A CLIP-BERT with Retrieval-Guided Contrastive Learning Multimodal Approach for Crisis-Driven Hate Speech Detection"
            authors={["I Stepanov", "J Rashid", "JW Lee", "S Naseem", "I Razzak"]}
            journal="Companion Proceedings of the ACM on Web Conference 2025"
            year={2025}
            abstract="We present CBRCL, a novel multimodal approach combining CLIP and BERT with retrieval-guided contrastive learning for detecting hate speech in crisis situations."
          />

          <PublicationCard 
            title="Robust Multimodal Learning for Ophthalmic Disease Grading via Disentangled Representation"
            authors={["X Wang", "Y Wang", "S Liang", "F Tang", "C Liu", "M Hu", "C Hu", "J He", "Z Ge", "I Razzak"]}
            journal="MICCAI"
            year={2025}
            abstract="We propose a novel approach for ophthalmic disease grading using disentangled representation learning, achieving robust performance across different imaging modalities and clinical conditions."
          />

          <PublicationCard 
            title="The Eye as a Window to Systemic Health: A Survey of Retinal Imaging from Classical Techniques to Oculomics"
            authors={["I Inam", "I Razzak", "S Jameel"]}
            journal="Available at SSRN"
            year={2025}
            abstract="This comprehensive survey explores retinal imaging techniques from classical methods to modern oculomics approaches, highlighting the eye's role as a window to systemic health."
          />

          <PublicationCard 
            title="Effectiveness of Privacy-preserving Algorithms in LLMs: A Benchmark and Empirical Analysis"
            authors={["J Sun", "B Suleiman", "I Ullah", "I Razzak"]}
            journal="ACM WWW"
            year={2025}
            abstract="We present a comprehensive benchmark and empirical analysis of privacy-preserving algorithms in large language models, evaluating their effectiveness across various metrics and use cases."
          />

          <PublicationCard 
            title="Rhythm of Opinion: A Hawkes-Graph Framework for Dynamic Propagation Analysis"
            authors={["Y Li", "Z Lu", "F Tang", "S Lai", "M Hu", "Y Zhang", "H Xue", "Z Wu", "I Razzak", "Q Li"]}
            journal="arXiv preprint arXiv:2504.15072"
            year={2025}
            abstract="We introduce a Hawkes-Graph framework for analyzing dynamic opinion propagation, providing insights into how opinions spread through social networks over time."
          />

          <PublicationCard 
            title="Mmrc: A large-scale benchmark for understanding multimodal large language model in real-world conversation"
            authors={["H Xue", "F Tang", "M Hu", "Y Liu", "Q Huang", "Y Li", "C Liu", "Z Xu", "C Zhang", "CM Feng", "Y Xie", "I Razzak", "Z Ge", "J Su", "J He", "Y Qiao"]}
            journal="ACL"
            year={2025}
            abstract="This paper presents MMRC, a comprehensive large-scale benchmark designed to evaluate multimodal large language models in real-world conversational scenarios, addressing the gap between laboratory testing and practical deployment."
          />

          <PublicationCard 
            title="Less but Better: Parameter-Efficient Fine-Tuning of Large Language Models for Personality Detection"
            authors={["L Shen", "Y Long", "X Cai", "G Chen", "I Razzak", "S Jameel"]}
            journal="arXiv preprint arXiv:2504.05411"
            year={2025}
            abstract="This work presents parameter-efficient fine-tuning methods for large language models in personality detection tasks, achieving better performance with fewer parameters."
          />

          <PublicationCard 
            title="Ll4g: Self-supervised dynamic optimization for graph-based personality detection"
            authors={["L Shen", "Y Long", "X Cai", "G Chen", "Y Wang", "I Razzak", "S Jameel"]}
            journal="arXiv preprint arXiv:2504.02146"
            year={2025}
            abstract="We propose Ll4g, a self-supervised dynamic optimization approach for graph-based personality detection, improving accuracy through novel optimization strategies."
          />

          <PublicationCard 
            title="SVLA: A Unified Speech-Vision-Language Assistant with Multimodal Reasoning and Speech Generation"
            authors={["ND Huynh", "MR Bouadjenek", "I Razzak", "H Hacid", "S Aryal"]}
            journal="arXiv preprint arXiv:2503.24164"
            year={2025}
            abstract="SVLA presents a unified assistant that integrates speech, vision, and language processing with multimodal reasoning capabilities and speech generation functionality."
          />

          <PublicationCard 
            title="A Gap in Time: The Challenge of Processing Heterogeneous IoT Data in Digitalized Buildings"
            authors={["X Lin", "A Prabowo", "I Razzak", "H Xue", "M Amos", "S Behrens", "FD Salim"]}
            journal="IEEE Pervasive Computing"
            year={2025}
            abstract="This paper addresses the challenges of processing heterogeneous IoT data in digitalized buildings, exploring temporal gaps and data integration issues."
          />

          <PublicationCard 
            title="PG-SAM: Prior-Guided SAM with Medical for Multi-organ Segmentation"
            authors={["Y Zhong", "Z Luo", "C Liu", "F Tang", "Z Peng", "M Hu", "Y Hu", "J Su", "Z Ge", "I Razzak"]}
            journal="arXiv preprint arXiv:2503.18227"
            year={2025}
            abstract="We present PG-SAM, a prior-guided Segment Anything Model adapted for medical multi-organ segmentation tasks, improving accuracy through domain-specific guidance."
          />

          <PublicationCard 
            title="Scalingnoise: Scaling inference-time search for generating infinite videos"
            authors={["H Yang", "F Tang", "M Hu", "Y Li", "Y Liu", "Z Peng", "J He", "Z Ge", "I Razzak"]}
            journal="arXiv preprint arXiv:2503.16400"
            year={2025}
            abstract="Scalingnoise introduces a novel approach for scaling inference-time search in video generation, enabling the creation of infinite-length videos through advanced search strategies."
          />

          <PublicationCard 
            title="Long Context Modeling with Ranked Memory-Augmented Retrieval"
            authors={["G Alselwi", "H Xue", "S Jameel", "B Suleiman", "FD Salim", "I Razzak"]}
            journal="arXiv preprint arXiv:2503.14800"
            year={2025}
            abstract="This work presents a ranked memory-augmented retrieval approach for long context modeling, improving the handling of extended sequences in language models."
          />

          <PublicationCard 
            title="Enforcing Consistency and Fairness in Multi-level Hierarchical Classification with a Mask-based Output Layer"
            authors={["S Chen", "S Jameel", "MR Bouadjenek", "F Tang", "U Naseem", "B Suleiman", "FD Salim", "I Razzak"]}
            journal="arXiv preprint arXiv:2503.15566"
            year={2025}
            abstract="We propose a mask-based output layer approach for enforcing consistency and fairness in multi-level hierarchical classification tasks."
          />

          <PublicationCard 
            title="KG-IRAG: A knowledge graph-based iterative retrieval-augmented generation framework for temporal reasoning"
            authors={["R Yang", "H Xue", "I Razzak", "H Hacid", "FD Salim"]}
            journal="arXiv preprint arXiv:2503.14234"
            year={2025}
            abstract="KG-IRAG introduces a knowledge graph-based iterative retrieval-augmented generation framework specifically designed for temporal reasoning tasks."
          />

          <PublicationCard 
            title="Mswal: 3d multi-class segmentation of whole abdominal lesions dataset"
            authors={["Z Wu", "Q Zhao", "M Hu", "Y Li", "H Xue", "K Dang", "Z Jiang", "A Stefanidis", "Q Wang", "I Razzak"]}
            journal="arXiv preprint arXiv:2503.13560"
            year={2025}
            abstract="We present Mswal, a comprehensive 3D multi-class segmentation dataset for whole abdominal lesions, providing valuable resources for medical image analysis research."
          />

          <PublicationCard 
            title="BAKER: Bayesian Kernel Uncertainty in Domain-Specific Document Modelling"
            authors={["U Azam", "I Razzak", "S Vishwakarma", "H Hacid", "D Zhang", "S Jameel"]}
            journal="Proceedings of the Eighteenth ACM International Conference on Web Search and Data Mining"
            year={2025}
            abstract="BAKER introduces Bayesian kernel uncertainty methods for domain-specific document modeling, improving uncertainty quantification in document analysis tasks."
          />

          <PublicationCard 
            title="GAMED: Knowledge Adaptive Multi-Experts Decoupling for Multimodal Fake News Detection"
            authors={["S Lingzhi", "Y Long", "C Xiaohao", "C Guangming", "L Kang", "I Razzak", "S Jameel"]}
            journal="Proceedings of the Eighteenth ACM International Conference on Web Search and Data Mining"
            year={2025}
            abstract="GAMED presents a knowledge adaptive multi-experts decoupling approach for detecting fake news across multiple modalities, improving detection accuracy through expert specialization."
          />

          <PublicationCard 
            title="PERCY: Personal Emotional Robotic Conversational System"
            authors={["Z Meng", "M Althubyani", "S Xie", "I Razzak", "EB Sandoval", "M Bamdad", "F Cruz"]}
            journal="arXiv preprint arXiv:2503.16473"
            year={2025}
            abstract="PERCY introduces a personal emotional robotic conversational system that understands and responds to human emotions in natural conversations."
          />

          <PublicationCard 
            title="The Role of AI in Early Detection of Life-Threatening Diseases: A Retinal Imaging Perspective"
            authors={["TM Khan", "TA Soomro", "I Razzak"]}
            journal="arXiv preprint arXiv:2505.20810"
            year={2025}
            abstract="This paper explores the role of artificial intelligence in early detection of life-threatening diseases through retinal imaging analysis and diagnostic applications."
          />

          <PublicationCard 
            title="Leveraging Taxonomy and LLMs for Improved Multimodal Hierarchical Classification"
            authors={["S Chen", "MR Bouadjenek", "S Jameel", "U Naseem", "B Suleiman", "FD Salim", "I Razzak"]}
            journal="Proceedings of the 31st International Conference on Computational Linguistics"
            year={2025}
            abstract="This work leverages taxonomic structures and large language models to improve multimodal hierarchical classification across various domains and applications."
          />

          <PublicationCard 
            title="Visual question answering: from early developments to recent advances--a survey"
            authors={["ND Huynh", "MR Bouadjenek", "S Aryal", "I Razzak", "H Hacid"]}
            journal="arXiv preprint arXiv:2501.03939"
            year={2025}
            abstract="This comprehensive survey covers the evolution of visual question answering from early developments to recent advances, providing insights into current state-of-the-art methods."
          />

          <PublicationCard 
            title="Evaluating Large Language Models on Health-Related Claims Across Arabic Dialects"
            authors={["AO Alharbi", "A Alsuhaibani", "AA Alalawi", "U Naseem", "S Jameel", "S Kanhere", "I Razzak"]}
            journal="The 31st International Conference on Computational Linguistics"
            year={2025}
            abstract="This study evaluates large language models' performance on health-related claims across different Arabic dialects, addressing multilingual healthcare AI challenges."
          />

          <PublicationCard 
            title="Uncertainty Modelling in Under-Represented Languages with Bayesian Deep Gaussian Processes"
            authors={["U Azam", "I Razzak", "S Vishwakarma", "S Jameel"]}
            journal="Proceedings of the 31st International Conference on Computational Linguistics"
            year={2025}
            abstract="We present uncertainty modeling approaches for under-represented languages using Bayesian deep Gaussian processes, improving language model reliability for low-resource languages."
          />

          <PublicationCard 
            title="DSRS: DELIGHT sequential recommender system"
            authors={["STU Shah", "F Khan", "S Yamani", "R Alturki", "F Gazzawe", "MI Razzak"]}
            journal="Engineering Applications of Artificial Intelligence 142, 109936"
            year={2025}
            abstract="DSRS presents DELIGHT, a novel sequential recommender system that improves recommendation accuracy through advanced sequential modeling techniques."
          />

          <PublicationCard 
            title="A Cross Population Study of Retinal Aging Biomarkers with Longitudinal Pre-training and Label Distribution Learning"
            authors={["Zongyuan Ge", "Zhen Yu", "Ruiye Chen", "Peng Gui", "Wei Wang", "Imran Razzak", "Hamid Alinejad-Rokny", "Xiaomin Zeng", "Xianwen Shang", "Lei Zhang", "Xiaohong Yang", "Honghua Yu", "Wenyong Huang", "Huimin Lu", "Peter van Wijngaarden", "Mingguang He", "Zhuoting Zhu"]}
            journal="Nature Digital Medicine"
            year={2025}
            abstract="This study presents a comprehensive cross-population analysis of retinal aging biomarkers using longitudinal pre-training and label distribution learning approaches to understand aging patterns across diverse populations."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
