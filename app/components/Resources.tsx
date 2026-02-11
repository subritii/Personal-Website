const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Downloads */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Downloads
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Project Planning Template.pdf</span>
                  <p className="text-sm text-gray-500 mt-1">My go-to template for scoping new projects.</p>
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Design System Checklist.md</span>
                  <p className="text-sm text-gray-500 mt-1">Ensure consistency across your UI.</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Curated Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Refactoring UI", url: "#", desc: "Tips for making your UI look good." },
                { name: "Next.js Documentation", url: "#", desc: "The best React framework docs." },
                { name: "Tailwind CSS", url: "#", desc: "Utility-first CSS framework." }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="group flex items-start justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white group-hover:underline">{link.name}</span>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
