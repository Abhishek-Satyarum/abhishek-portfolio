export type Moment = {
  id: string;
  year: string;
  title: string;
  category: "Hackathon" | "Community" | "Event" | "Adventure";
  location?: string;
  description: string;
  image?: string;
};

export const moments: Moment[] = [
  {
    id: "hackcelestial-3",
    year: "2026",
    title: "HackCelestial 3.0",
    category: "Hackathon",
    location: "Pillai College of Engineering",
    description:
      "A 24-hour hackathon experience that pushed us to build, collaborate and adapt under pressure — including a surprise challenge at 2 AM.",
  },

  {
    id: "beyond-bytes",
    year: "2026",
    title: "Beyond Bytes",
    category: "Community",
    location: "SHAIDS",
    description:
      "A technical learning session where I had the opportunity to speak to juniors about Snowflake and Google AI Studio with Gemini.",
  },

  {
    id: "technical-events",
    year: "2026",
    title: "Technical Events & Community",
    category: "Event",
    location: "College & Student Communities",
    description:
      "Participating in technical events, volunteering and contributing to student communities while learning from people around me.",
  },

  {
    id: "adventures",
    year: "2026",
    title: "Outside the Code",
    category: "Adventure",
    description:
      "A collection of selected travel and trekking moments that reflect the experiences and people beyond projects and classrooms.",
  },
];