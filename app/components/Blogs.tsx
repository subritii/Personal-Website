const Blogs = () => {
  const posts = [
    { title: "Understanding React Server Components", date: "Jan 15, 2024", summary: "A deep dive into how RSCs change the way we build Next.js apps." },
    { title: "My Setup for Productivity", date: "Dec 10, 2023", summary: "VS Code extensions, terminal aliases, and hardware I use daily." },
    { title: "Why I Switched to Tailwind", date: "Nov 22, 2023", summary: "Moving away from CSS-in-JS and embracing utility classes." }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest from the Blog</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
              <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {post.summary}
              </p>
              <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Read more →</a>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
