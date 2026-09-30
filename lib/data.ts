export type Course = {
  id: string; title: string; creator: string; image: string;
  level: "Beginner" | "Intermediate" | "Advanced"; rating: number; price: number;
};

const img = (s: string) => `https://picsum.photos/seed/${s}/640/400`;

export const courses: Course[] = [
  { id: "1", title: "Learn Figma from Basic", creator: "purepearl studio", image: img("figma"), level: "Beginner", rating: 4.5, price: 25 },
  { id: "2", title: "Build Digital Asset", creator: "purepearl studio", image: img("icons"), level: "Beginner", rating: 4.5, price: 25 },
  { id: "3", title: "the Power of Big Data", creator: "purepearl studio", image: img("bigdata"), level: "Beginner", rating: 4.5, price: 25 },
  { id: "4", title: "Balancing Productivity and Life", creator: "purepearl studio", image: img("domore"), level: "Beginner", rating: 4.5, price: 25 },
  { id: "5", title: "Mastering Money Management", creator: "purepearl studio", image: img("money"), level: "Beginner", rating: 4.5, price: 25 },
  { id: "6", title: "From Idea to Startup Success", creator: "purepearl studio", image: img("startup"), level: "Beginner", rating: 4.5, price: 25 },
];

export const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
export const moreCategories = ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science"];

export const modules = [
  { t: "Module 1: Introduction to Digital Assets", d: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { t: "Module 2: Design Principles for Impact", d: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  { t: "Module 4: User-Centric Design Strategies", d: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { t: "Module 5: Interactive Media and Engagement", d: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { t: "Module 6: Project Showcase and Critique", d: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { t: "Module 7: Optimizing Digital Assets for Various Platforms", d: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
];

export const keyPoints = ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"];

export const reviews = [
  { name: "PurePearl Studio", role: "UI/UX Designer", stars: 5, text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { name: "Albert Flores", role: "UI/UX Designer", stars: 5, text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", role: "UI/UX Designer", stars: 4, text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills." },
  { name: "Brooklyn Simmons", role: "UI/UX Designer", stars: 5, text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
];

export const ratingBars = [{ s: 5, n: 720 }, { s: 4, n: 120 }, { s: 3, n: 21 }, { s: 2, n: 12 }, { s: 1, n: 16 }];
