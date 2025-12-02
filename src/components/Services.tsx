import { Palette, Users, TrendingUp, Map, Code, Database, Globe, Layers } from 'lucide-react';

interface ServicesProps {
  mode: 'design' | 'code';
}

export function Services({ mode }: ServicesProps) {
  const designServices = [
    {
      icon: Palette,
      title: 'UX Consultant',
      description: 'Strategic UX guidance to optimize user experiences and drive business growth through data-driven insights.'
    },
    {
      icon: Layers,
      title: 'Product Design',
      description: 'End-to-end product design from concept to launch, creating intuitive interfaces that users love.'
    },
    {
      icon: TrendingUp,
      title: 'New Business Development',
      description: 'Strategic design thinking to identify opportunities and create compelling digital products for growth.'
    },
    {
      icon: Map,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in your customer\'s journey for maximum engagement.'
    },
    {
      icon: Users,
      title: 'CRM Marketing',
      description: 'Design customer relationship strategies that boost retention and create lasting brand loyalty.'
    }
  ];

  const codeServices = [
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise resource planning solutions that streamline operations across your organization.'
    },
    {
      icon: Globe,
      title: 'B2B Platforms',
      description: 'Scalable B2B web and mobile platforms that connect businesses and drive commerce efficiently.'
    },
    {
      icon: Code,
      title: 'SaaS Development',
      description: 'Cloud-based software as a service solutions built for scale, security, and seamless user experiences.'
    },
    {
      icon: Layers,
      title: 'Corporate Software',
      description: 'Specialized software development tailored to your industry sector and business requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Custom Solutions',
      description: 'Bespoke enterprise applications designed to solve your unique business challenges and workflows.'
    }
  ];

  const services = mode === 'design' ? designServices : codeServices;

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 opacity-10 ${
        mode === 'design' 
          ? 'bg-gradient-to-b from-purple-500/20 to-transparent' 
          : 'bg-gradient-to-b from-blue-500/20 to-transparent'
      }`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 ${
            mode === 'design'
              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
          }`}>
            Our Services
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
          }`}>
            {mode === 'design' ? 'Design Expertise' : 'Development Solutions'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {mode === 'design' 
              ? 'Comprehensive UX-UI design services focused on creating exceptional user experiences and driving business results.'
              : 'Enterprise-grade software development services delivering robust, scalable solutions for modern businesses.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  mode === 'design'
                    ? 'bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40'
                    : 'bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40'
                }`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${
                  mode === 'design'
                    ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500 group-hover:shadow-lg group-hover:shadow-purple-500/50'
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/50'
                }`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${
                  mode === 'design' ? 'text-purple-200' : 'text-blue-200'
                }`}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
