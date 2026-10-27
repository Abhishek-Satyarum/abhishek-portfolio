export type JourneyItem = {
  period: string;
  type: "Education" | "Experience" | "Community" | "Hackathon";
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
};

export const journey: JourneyItem[] = [
  {
    period: "2024 — Present",
    type: "Education",
    title: "B.E. Artificial Intelligence & Data Science",
    organization: "Datta Meghe College of Engineering",
    description:
      "Pursuing a B.E. in Artificial Intelligence & Data Science while building a foundation across software development, data, AI and computer science.",
    highlights: [
      "University of Mumbai",
      "Expected graduation: 2028",
      "CGPA: 8.12",
    ],
  },

  {
    period: "2026",
    type: "Experience",
    title: "AI Summer Internship",
    organization: "MirAI",
    description:
      "Completed an AI-focused internship involving hands-on Generative AI projects, experimentation and practical application development.",
    highlights: [
      "Built multiple AI and Generative AI projects",
      "Developed LabelLens AI as a capstone project",
      "Worked with modern AI application workflows",
    ],
  },

  {
    period: "2026",
    type: "Community",
    title: "Google Student Ambassador — India",
    organization: "Google",
    description:
      "Engaging with students around AI and emerging technologies through learning initiatives, technical demonstrations and community activities.",
    highlights: [
      "AI and technology learning initiatives",
      "Generative AI and Gemini engagement",
      "Student-focused technical activities",
    ],
  },

  {
    period: "2026",
    type: "Community",
    title: "GirlScript Summer of Code",
    organization: "Open Source Contributor",
    description:
      "Contributed to open-source development and worked on improving functionality and user experience in a Python-based project.",
    highlights: [
      "2 pull requests merged",
      "Worked on python-mini-project",
      "Improved FLAMES functionality and UX",
    ],
  },

  {
    period: "2026",
    type: "Community",
    title: "Technical Team Member",
    organization: "SHAIDS",
    description:
      "Contributed to the technical team and supported the student community through website development and technical events.",
    highlights: [
      "Contributed to the SHAIDS website",
      "Supported student technical activities",
      "Participated in community events",
    ],
  },

  {
    period: "2026",
    type: "Hackathon",
    title: "HackCelestial 3.0",
    organization: "Pillai College of Engineering",
    description:
      "Participated in a 24-hour hackathon focused on Hospitality & Travel and Generative AI after clearing the online qualification round.",
    highlights: [
      "Cleared online Round 1",
      "Participated in the 24-hour offline hackathon",
      "Worked as part of a team",
      "Solved a surprise challenge introduced at 2 AM",
    ],
  },

  {
    period: "2026",
    type: "Hackathon",
    title: "Smart India Hackathon",
    organization: "SIH 2026",
    description:
      "Qualified through the internal selection process and worked on submitting an idea, presentation and prototype for the competition.",
    highlights: [
      "Qualified internal round",
      "Prepared idea presentation",
      "Developed and submitted a prototype",
    ],
  },
];