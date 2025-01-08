import { motion } from 'framer-motion';

const UXDesigner = () => {
  const designs = [
    {
      title: 'Mobile Banking App',
      description: 'Reimagining financial interactions with intuitive design',
      image: '/banking-app.jpg',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Healthcare Platform',
      description: 'Making healthcare accessible through user-centered design',
      image: '/healthcare.jpg',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'E-learning Dashboard',
      description: 'Educational platform that makes learning engaging',
      image: '/elearning.jpg',
      color: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Smart Home App',
      description: 'Controlling your home with elegant simplicity',
      image: '/smarthome.jpg',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="page-container">
      <motion.h1 
        className="text-7xl pb-5 font-light mb-24 text-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaval as a UI/UX Designer
      </motion.h1>

      <div className="space-y-32">
        <section>
          <motion.p 
            className="text-2xl font-light leading-relaxed max-w-3xl text-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I create digital experiences that delight and inspire. 
            Through thoughtful design and careful attention to detail, 
            I craft interfaces that users love to interact with.
          </motion.p>
        </section>

        <section>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Featured Designs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designs.map((design, index) => (
              <motion.article
                key={design.title}
                className="design-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                {design.image && (
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="design-card-image"
                  />
                )}
                <div className={`design-card-content bg-gradient-to-t ${design.color}`}>
                  <div>
                    <h3 className="design-card-title">{design.title}</h3>
                    <p className="design-card-description">{design.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 border border-black/10 dark:border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-light mb-4">Research</h3>
            <p className="text-sm opacity-60">Understanding user needs through comprehensive research and analysis</p>
          </motion.div>
          <motion.div
            className="p-8 border border-black/10 dark:border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xl font-light mb-4">Design</h3>
            <p className="text-sm opacity-60">Creating intuitive interfaces with attention to every detail</p>
          </motion.div>
          <motion.div
            className="p-8 border border-black/10 dark:border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-light mb-4">Test</h3>
            <p className="text-sm opacity-60">Iterating based on user feedback and real-world testing</p>
          </motion.div>
        </section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-col items-center space-y-8">
            <p className="text-2xl font-light text-gradient">Ready to create something amazing?</p>
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="button-primary group">
                <span className="button-text">View Portfolio</span>
              </button>
              <button className="button-primary group">
                <span className="button-text">Start Project</span>
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default UXDesigner; 