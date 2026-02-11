const OffTheClock = () => {
  const timelineEvents = [
    { year: "2015", title: "First Line of Code", description: "Wrote 'Hello World' in Python and got hooked." },
    { year: "2018", title: "Graduated College", description: "Earned my degree in Computer Science." },
    { year: "2020", title: "Moved to a New City", description: "Embraced a new culture and community." },
    { year: "2024", title: "Started this Website", description: "Finally documenting my journey properly." },
  ];

  const philosophies = [
    { title: "Draft Fast, Edit Ruthlessly", description: "Perfection is the enemy of progress. Get it out, then make it great." },
    { title: "Stay Curious", description: "The moment you stop learning is the moment you stop growing." },
    { title: "Simplicity Wins", description: "Complex problems often have simple solutions if you look hard enough." },
  ];

  return (
    <section id="off-the-clock" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Off the Clock</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline / Personal Story */}
          <div>
            <h3 className="text-xl font-semibold mb-8">My Journey</h3>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                  <span className="text-sm font-mono text-gray-500 mb-1 block">{event.year}</span>
                  <h4 className="text-lg font-bold">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Cards */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Philosophy</h3>
            <div className="space-y-4">
              {philosophies.map((phil, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-lg mb-2">{phil.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">&quot;{phil.description}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies / Memories */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-8 text-center">Memories & Hobbies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                <span>Photo / Artifact Placeholder {item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffTheClock;
