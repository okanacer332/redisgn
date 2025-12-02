interface PortfolioProps {
  mode: 'design' | 'code';
}

export function Portfolio({ mode }: PortfolioProps) {
  const designProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Product Design',
      description: 'Complete UX redesign increasing conversion by 45%',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Banking App',
      category: 'Customer Journey',
      description: 'Mapped and optimized 12 key user touchpoints',
      gradient: 'from-fuchsia-400 to-purple-500'
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI Design',
      description: 'Modern interface with comprehensive design system',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Healthcare Portal',
      category: 'UX Consulting',
      description: 'Streamlined patient experience and accessibility',
      gradient: 'from-pink-400 to-purple-500'
    }
  ];

  const codeProjects = [
    {
      title: 'Manufacturing ERP',
      category: 'ERP System',
      description: 'Full-scale ERP managing 500+ users across 12 facilities',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'B2B Marketplace',
      category: 'B2B Platform',
      description: 'Multi-vendor platform processing 10K+ transactions daily',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Project Management SaaS',
      category: 'SaaS Development',
      description: 'Cloud-based PM tool serving 50K+ active users',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Logistics Software',
      category: 'Custom Solution',
      description: 'Real-time tracking system for enterprise logistics',
      gradient: 'from-cyan-400 to-teal-500'
    }
  ];

  const projects = mode === 'design' ? designProjects : codeProjects;

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 ${
            mode === 'design'
              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
          }`}>
            Our Work
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
          }`}>
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {mode === 'design' 
              ? 'Explore our portfolio of successful design projects that transformed user experiences.'
              : 'Discover enterprise solutions we\'ve built for businesses across various industries.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105`}
            >
              {/* Project Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8 md:p-10 h-64 sm:h-72 md:h-80 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 text-xs sm:text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600'
              : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
          }`}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
