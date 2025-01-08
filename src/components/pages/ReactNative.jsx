import { motion } from 'framer-motion';

const ReactNative = () => {
  return (
    <div className="page-container">
      <motion.h1 
        className="text-6xl font-light mb-16 text-glitch"
        data-text="Kaval as a React Native Developer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval as a React Native Developer
      </motion.h1>

      <div className="space-y-24">
        <section>
          <motion.p 
            className="text-xl font-light leading-relaxed max-w-2xl role-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build native mobile experiences that perform beautifully across platforms. 
            Using React Native, I create apps that feel truly native while maintaining 
            a single, efficient codebase.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-light mb-8 role-text">Core Capabilities</h2>
              <div className="space-y-4">
                {[
                  'Cross-platform Development',
                  'Native Module Integration',
                  'Performance Optimization',
                  'State Management',
                  'API Integration',
                  'CI/CD Implementation'
                ].map((capability, index) => (
                  <motion.div
                    key={capability}
                    className="hover-lift"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <p className="font-light role-text">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-8 role-text">Tech Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React Native',
                  'TypeScript',
                  'Redux',
                  'React Navigation',
                  'Native Modules',
                  'Jest'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="hover-lift p-2 border border-black/10 dark:border-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <p className="text-sm font-light text-center role-text">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 role-text">Featured Apps</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Social Media App',
                  description: 'Real-time messaging and content sharing'
                },
                {
                  title: 'Fitness Tracker',
                  description: 'Health monitoring with device integration'
                },
                {
                  title: 'E-commerce App',
                  description: 'Seamless shopping experience'
                }
              ].map((app, index) => (
                <motion.div
                  key={app.title}
                  className="hover-lift p-4 border border-black/10 dark:border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <h3 className="text-lg font-light mb-2 role-text">{app.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{app.description}</p>
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
            <p className="text-xl font-light role-text">Have an app idea?</p>
            <motion.div 
              className="flex space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                View Apps
              </button>
              <button className="px-8 py-3 border border-black dark:border-white hover-lift role-text">
                Discuss Project
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ReactNative; 