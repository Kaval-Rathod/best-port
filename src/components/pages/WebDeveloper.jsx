import { motion } from 'framer-motion';

const WebDeveloper = () => {
  return (
    <div className="page-container">
      <motion.h1 
        className="text-6xl font-light mb-16 text-glitch"
        data-text="Kaval is a Web Developer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval is a Web Developer
      </motion.h1>

      <div className="space-y-24">
        <section>
          <motion.p 
            className="text-xl font-light leading-relaxed max-w-2xl role-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I craft digital experiences that live on the web. 
            With a focus on clean code and thoughtful interactions, 
            I build websites that leave an impression.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 role-text">Technical Expertise</h2>
            <ul className="space-y-4">
              {[
                'Modern JavaScript (ES6+)',
                'React & Next.js',
                'Node.js & Express',
                'TypeScript',
                'REST & GraphQL APIs',
                'MongoDB & PostgreSQL'
              ].map((skill, index) => (
                <motion.li
                  key={skill}
                  className="font-light role-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 role-text">Selected Projects</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'Full-stack application with Next.js'
                },
                {
                  title: 'Real-time Dashboard',
                  description: 'Built with React and WebSocket'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="hover-lift p-4 border border-black/10 dark:border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <h3 className="text-lg font-light mb-2 role-text">{project.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-xl font-light role-text">Let's build something together</p>
            <motion.div 
              className="flex space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                View Resume
              </button>
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WebDeveloper; 