const TechnicalHub = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Tailwind CSS", "PostgreSQL", "AWS", "Figma", "Git", "Docker"
  ];

  const projects = [
    {
      title: "Project Alpha",
      role: "Full Stack Developer",
      challenge: "Users needed a way to visualize complex datasets in real-time without performance degradation.",
      action: "Implemented a virtualized list architecture and optimized WebSocket data streams using custom hooks.",
      result: "Reduced load times by 40% and increased user engagement session duration by 25%.",
      tech: ["React", "D3.js", "WebSockets"]
    },
    {
      title: "E-Commerce Platform",
      role: "Lead Frontend",
      challenge: "The legacy checkout process was causing high cart abandonment due to friction.",
      action: "Redesigned the checkout flow with a multi-step wizard and integrated Stripe for seamless payments.",
      result: "Checkout conversion rate improved by 15% in the first month.",
      tech: ["Next.js", "Stripe", "Redux"]
    }
  ];

  const experience = [
    {
      role: "Senior Developer",
      company: "Tech Corp",
      period: "2023 - Present",
      description: "Leading a team of 5 developers to build scalable web applications."
    },
    {
      role: "Software Engineer",
      company: "StartUp Inc",
      period: "2021 - 2023",
      description: "Developed and maintained core features for the main SaaS product."
    }
  ];

  return (
    <section id="technical-hub" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Hub</h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Featured Work (Case Studies)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">{project.role}</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="block text-gray-900 dark:text-white mb-1">The Challenge:</strong>
                    <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
                  </div>
                  <div>
                    <strong className="block text-gray-900 dark:text-white mb-1">My Action:</strong>
                    <p className="text-gray-600 dark:text-gray-400">{project.action}</p>
                  </div>
                  <div>
                    <strong className="block text-gray-900 dark:text-white mb-1">The Result:</strong>
                    <p className="text-gray-600 dark:text-gray-400">{project.result}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs border border-gray-300 dark:border-gray-700 px-2 py-1 rounded text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Resume (Simplified) */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Experience</h3>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="font-bold">{job.role}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{job.company}</p>
                </div>
                <div className="md:text-right mt-2 md:mt-0">
                  <span className="text-sm font-mono text-gray-500">{job.period}</span>
                  <p className="text-sm text-gray-500 mt-1 max-w-md">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalHub;
