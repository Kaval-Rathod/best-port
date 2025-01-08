import { motion } from 'framer-motion';

const WebDeveloper = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and TypeScript',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: '/project1.jpg'
    },
    {
      title: 'Real-time Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization',
      tags: ['React', 'WebSocket', 'D3.js'],
      image: '/project2.jpg'
    },
    {
      title: 'Social Platform',
      description: 'Feature-rich social media platform with real-time interactions',
      tags: ['React', 'Firebase', 'Redux'],
      image: '/project3.jpg'
    },
    {
      title: 'Portfolio Builder',
      description: 'Dynamic portfolio creation tool for developers',
      tags: ['Vue.js', 'Node.js', 'MongoDB'],
      image: '/project4.jpg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.h1 
        className="text-7xl font-light mb-24 text-glitch"
        data-text="Kaval is a Web Developer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval is a Web Developer
      </motion.h1>

      <div className="space-y-32">
        <section>
          <motion.p 
            className="text-2xl font-light leading-relaxed max-w-3xl text-link"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I craft digital experiences that live on the web. 
            With a focus on clean code and thoughtful interactions, 
            I build websites that leave an impression.
          </motion.p>
        </section>

        <section>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Selected Projects
          </motion.h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <div className="project-card-content project-card-front">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="text-sm opacity-60">{project.description}</p>
                </div>
                <div className="project-card-content project-card-back">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  <div className="relative z-10">
                    <h3 className="project-title mb-4">{project.title}</h3>
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-col items-center space-y-8">
            <p className="text-2xl font-light text-link">Let's build something together</p>
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="button-primary group">
                <span className="button-text">View Resume</span>
              </button>
              <button className="button-primary group">
                <span className="button-text">Get in Touch</span>
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WebDeveloper; 