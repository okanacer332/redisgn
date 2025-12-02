interface FocusAreasProps {
  mode: 'design' | 'code';
}

export function FocusAreas({ mode }: FocusAreasProps) {
  const designFocus = [
    {
      title: 'Customer Journey Mapping',
      description: 'We visualize every touchpoint in your customer\'s experience, identifying pain points and opportunities for improvement.',
      highlights: ['User Research', 'Journey Visualization', 'Touchpoint Analysis', 'Experience Optimization']
    },
    {
      title: 'Product UI Design',
      description: 'Creating beautiful, intuitive interfaces that align with your brand and delight users at every interaction.',
      highlights: ['Interface Design', 'Design Systems', 'Prototyping', 'Visual Design']
    },
    {
      title: 'User Experience',
      description: 'Comprehensive UX strategy that combines research, testing, and iteration to create seamless user experiences.',
      highlights: ['UX Research', 'Usability Testing', 'Information Architecture', 'Interaction Design']
    }
  ];

  const codeFocus = [
    {
      title: 'ERP Solutions',
      description: 'Enterprise resource planning systems that integrate all aspects of your business operations into one unified platform.',
      highlights: ['Process Automation', 'Real-time Analytics', 'Multi-module Integration', 'Scalable Architecture']
    },
    {
      title: 'B2B & SaaS Platforms',
      description: 'Build robust web and mobile platforms designed for business-to-business interactions and software-as-a-service delivery.',
      highlights: ['Multi-tenant Architecture', 'API Development', 'Cloud Infrastructure', 'Security First']
    },
    {
      title: 'Sector-Specific Software',
      description: 'Custom corporate software tailored to your industry\'s unique challenges, compliance requirements, and workflows.',
      highlights: ['Industry Expertise', 'Custom Features', 'Compliance Ready', 'Integration Support']
    }
  ];

  const focusAreas = mode === 'design' ? designFocus : codeFocus;

  return (
    <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden ${
      mode === 'design'
        ? 'bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900'
        : 'bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 ${
            mode === 'design'
              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
          }`}>
            What We Focus On
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
          }`}>
            {mode === 'design' ? 'Our Design Philosophy' : 'Our Tech Stack'}
          </h2>
        </div>

        {/* Focus Areas */}
        <div className="space-y-6 sm:space-y-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                mode === 'design'
                  ? 'bg-slate-800/30 border-purple-500/20 hover:border-purple-500/40 hover:bg-slate-800/50'
                  : 'bg-slate-800/30 border-blue-500/20 hover:border-blue-500/40 hover:bg-slate-800/50'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 ${
                    mode === 'design'
                      ? 'text-purple-200'
                      : 'text-blue-200'
                  }`}>
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {area.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center transition-all duration-300 ${
                        mode === 'design'
                          ? 'bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20'
                          : 'bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20'
                      }`}
                    >
                      <p className={`text-xs sm:text-sm md:text-base ${
                        mode === 'design' ? 'text-purple-300' : 'text-blue-300'
                      }`}>
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}
