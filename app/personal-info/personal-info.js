export const personalInfo = {
  name: "Billy Joe",
  initial: "BJ",
  title: "Full Stack Developer",
  description:
    "Creating digital experiences with modern technologies and clean design",
  email: "billy@example.com",
  phone: "+639495416517",
  location: "General Santos City, Philippines",
  avatar: "/images/avatar.jpg",
};

export const heroGreetings = {
  greeting: "Hi! This is Billy",
  subtitle: "I'm a full stack web developer.",
};

export const socialLinks = {
  github: "https://github.com/billy",
  linkedin: "https://linkedin.com/in/billy",
  twitter: "https://twitter.com/billy",
  portfolio: "https://billy-portfolio.com",
};

// Helper functions to get specific data
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id) =>
  projects.find((project) => project.id === id);
