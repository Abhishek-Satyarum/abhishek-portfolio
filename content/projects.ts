export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
  status: string;
  stack: string[];
  github: string;
  demo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "labellens-ai",
    title: "LabelLens AI",
    description:
      "An AI-powered food label analysis and comparison application that helps users understand ingredients, nutrition, allergens and product suitability.",
    category: "AI / Generative AI",
    featured: true,
    status: "Live",
    stack: [
      "Python",
      "Streamlit",
      "Google Gemini",
      "Firebase",
      "Pandas",
      "Pillow",
    ],
    github: "https://github.com/Abhishek-Satyarum/LabelLens-AI",
    demo: "https://labellens-ai-eksmtqhneiwveqdefnpxmi.streamlit.app/",
    highlights: [
      "Food label image analysis",
      "Ingredient and additive identification",
      "Nutrition and allergen extraction",
      "Personalized suitability analysis",
      "Product memory and comparison",
    ],
  },

  {
    slug: "git-secret-prevention",
    title: "Git Secret Prevention",
    description:
      "A developer security tool that acts as a pre-commit gate to detect potential secrets before they are accidentally committed to a Git repository.",
    category: "Developer Tool / Security",
    featured: true,
    status: "Open Source",
    stack: [
      "Python",
      "Git Hooks",
      "JSON",
      "Regex",
      "CLI",
    ],
    github:
      "https://github.com/Abhishek-Satyarum/Git_Secret_Prevention",
    highlights: [
      "Pre-commit secret detection",
      "Regex and rule-based scanning",
      "API key and credential detection",
      "Private key and database URL detection",
      "Configurable JSON-based rules",
    ],
  },

  {
    slug: "multi-modal-visual-novel",
    title: "Multi-Modal Visual Novel",
    description:
      "An interactive storytelling experience combining text, visuals and AI-generated content to create a dynamic visual novel.",
    category: "Generative AI",
    featured: true,
    status: "Local",
    stack: [
      "Python",
      "Generative AI",
      "Streamlit",
    ],
    github:
      "https://github.com/Abhishek-Satyarum/The-Multi-Modal-Visual-Novel",
    highlights: [
      "Interactive storytelling",
      "AI-assisted narrative generation",
      "Multi-modal content",
      "Interactive user experience",
    ],
  },

  {
    slug: "life-os",
    title: "Life-OS",
    description:
      "A personal productivity concept designed around organizing everyday activities, information and workflows into a unified system.",
    category: "AI / Productivity",
    featured: true,
    status: "Local",
    stack: [
      "Python",
      "Generative AI",
      "Streamlit",
    ],
    github:
      "https://github.com/Abhishek-Satyarum/Life-OS",
    highlights: [
      "Personal productivity workflows",
      "AI-assisted interactions",
      "Unified information management",
      "Practical everyday use cases",
    ],
  },

  {
    slug: "shaids-website",
    title: "SHAIDS Website",
    description:
      "A website developed as part of the technical team for SHAIDS, supporting the organization's digital presence and student community activities.",
    category: "Web Development",
    featured: false,
    status: "Open Source",
    stack: [
      "JavaScript",
      "Web Development",
      "Git",
    ],
    github:
      "https://github.com/SHAIDS-DMCE/Shaids-Website-25",
    highlights: [
      "Student organization website",
      "Community-focused web experience",
      "Collaborative development",
    ],
  },
];