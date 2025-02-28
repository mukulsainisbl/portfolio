import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <section
      id="statistics"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-black py-12 px-4 md:px-8 lg:px-16"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">GitHub</span> Statistics
      </motion.h2>

      {/* GitHub Calendar */}
      <motion.div
        className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GitHubCalendar
          username="mukulsainisbl"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          }}
        />
      </motion.div>

      {/* GitHub Stats & Top Languages */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* GitHub Stats */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=mukulsainisbl&show_icons=true&locale=en"
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=mukulsainisbl&show_icons=true&locale=en&layout=compact"
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* GitHub Streak */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=mukulsainisbl&"
            alt="GitHub Streak"
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;