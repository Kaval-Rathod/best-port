import { motion } from 'framer-motion';

const ReactNative = () => {
  const apps = [
    {
      title: 'Social Connect',
      description: 'A modern social networking app with real-time features',
      image: '/social-app.jpg',
      features: ['Real-time Chat', 'Story Sharing', 'Video Calls'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Fitness Tracker',
      description: 'Health monitoring app with device integration',
      image: '/fitness-app.jpg',
      features: ['Activity Tracking', 'Workout Plans', 'Health Stats'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce App',
      description: 'Full-featured shopping experience',
      image: '/shop-app.jpg',
      features: ['Product Search', 'Secure Checkout', 'Order Tracking'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="page-container">
      <motion.h1 
        className="text-7xl font-light mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval as a React Native Developer
      </motion.h1>

      <div className="space-y-32">
        <section>
          <motion.p 
            className="text-2xl font-light leading-relaxed max-w-3xl text-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build native mobile experiences that perform beautifully across platforms. 
            Using React Native, I create apps that feel truly native while maintaining 
            a single, efficient codebase.
          </motion.p>
        </section>

        <section>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Featured Apps
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <motion.article
                key={app.title}
                className="app-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <div className="app-card-phone">
                  <div className="app-screen">
                    {app.image && (
                      <img 
                        src={app.image} 
                        alt={app.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className={`app-content bg-gradient-to-b ${app.color} p-6 flex flex-col justify-end h-full`}>
                      <h3 className="text-2xl font-light mb-4 text-white">{app.title}</h3>
                      <p className="text-sm text-white/80 mb-4">{app.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {app.features.map(feature => (
                          <span key={feature} className="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 border border-black/10 dark:border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-light mb-4">Development Approach</h3>
            <ul className="space-y-4">
              {[
                'Cross-platform Development',
                'Native Module Integration',
                'Performance Optimization',
                'Offline-first Architecture'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="text-sm opacity-60"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-8 border border-black/10 dark:border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-light mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'React Native',
                'TypeScript',
                'Redux Toolkit',
                'React Navigation',
                'Native Modules',
                'Jest & Testing Library'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="text-sm opacity-60"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  {tech}
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
          <div className="inline-flex flex-col items-center space-y-8">
            <p className="text-2xl font-light text-gradient">Have an app idea?</p>
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="button-primary group">
                <span className="button-text">View Apps</span>
              </button>
              <button className="button-primary group">
                <span className="button-text">Discuss Project</span>
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ReactNative; 