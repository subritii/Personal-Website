const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          I&apos;m currently open to new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:hello@example.com" className="px-8 py-4 bg-foreground text-background rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            Say Hello
          </a>
          <a href="#" className="px-8 py-4 border border-gray-200 dark:border-gray-800 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Subriti Pradhan. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
