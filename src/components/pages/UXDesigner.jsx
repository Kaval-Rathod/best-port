import { motion } from 'framer-motion';

const UXDesigner = () => {
  return (
    <div className="page-container">
      <motion.h1 
        className="text-6xl font-light mb-16 text-glitch"
        data-text="Kaval is a UI/UX Designer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval is a UI/UX Designer
      </motion.h1>

      <div className="space-y-24">
        <section>
          <motion.p 
            className="text-xl font-light leading-relaxed max-w-2xl role-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I design digital experiences that connect with users. 
            Through careful research and thoughtful design decisions, 
            I create interfaces that feel natural and delightful.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 role-text">Design Process</h2>
            <div className="space-y-8">
              {[
                {
                  phase: '01. Research',
                  description: 'Understanding users and their needs'
                },
                {
                  phase: '02. Ideate',
                  description: 'Exploring solutions and possibilities'
                },
                {
                  phase: '03. Design',
                  description: 'Crafting intuitive interfaces'
                },
                {
                  phase: '04. Test',
                  description: 'Validating with real users'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  className="hover-lift"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  <h3 className="text-lg font-light mb-1 role-text">{item.phase}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 role-text">Selected Work</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Mobile Banking App',
                  description: 'Redesigned user flow and interface'
                },
                {
                  title: 'Healthcare Platform',
                  description: 'Improved patient experience'
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
            <p className="text-xl font-light role-text">Ready to create something amazing?</p>
            <motion.div 
              className="flex space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                View Portfolio
              </button>
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                Start Project
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default UXDesigner; 