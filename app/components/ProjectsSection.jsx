"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "A website application based on Country API",
    description: "The app displays a list of countries from an API using fetch and provides search functionality: countries can be searched and sorted by name, added to/removed from the favourite list and cart list.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akash-045/ISA6_Front-End_Project",
    previewUrl: "https://frontend-project-rosy.vercel.app",
  },
  {
    id: 2,
    title: "BookMe App",
    description: "The app displays a list of products from an API made on the server side(back-end).",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akash-045/bookMe",
    previewUrl: "https://bookme-m0zg.onrender.com/",
  },
  {
    id: 3,
    title: "ShoeVilla",
    description: "The app displays a list of products from an API made on the server side(back-end).",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akash-045/ISA6_Fullstack_Project",
    previewUrl: "https://shoe-villa-frontend.onrender.com",
  },
  {
    id: 4,
    title: "Ecommerce Website",
    description: "The app displays a list of products from an API using fetch and provides search functionality,Dark mode, add to cart, add to favourite, and delete items from the cart. ",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akash-045",
    previewUrl: "https://product-app-peach.vercel.app",
    
  },
  {
    id: 5,
    title: "Nextjs Portfolio",
    description: "Used Nextjs,Javascript and TailwindCss",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akash-045/My-Portfolio",
    previewUrl: "https://my-portfolio-gamma-red.vercel.app",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //update tag
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;