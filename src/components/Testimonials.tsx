import { Star } from 'lucide-react';

interface TestimonialsProps {
  mode: 'design' | 'code';
}

export function Testimonials({ mode }: TestimonialsProps) {
  const designTestimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, RetailTech',
      company: 'E-Commerce',
      text: 'The customer journey mapping transformed our entire user experience. Conversion rates increased by 45% within three months.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Product Director',
      company: 'FinanceApp',
      text: 'Their UX consulting helped us identify blind spots we never knew existed. The product design work was exceptional.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Head',
      company: 'HealthCare Plus',
      text: 'Outstanding work on our CRM marketing strategy. The design team truly understands modern user behavior.',
      rating: 5
    }
  ];

  const codeTestimonials = [
    {
      name: 'Michael Anderson',
      role: 'CTO, Manufacturing Co',
      company: 'Industrial Sector',
      text: 'The ERP system they built revolutionized our operations. Seamless integration across all departments.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'VP Technology',
      company: 'B2B Solutions',
      text: 'Exceptional B2B platform development. The team delivered a scalable solution that handles our growing demands perfectly.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'SaaS Startup',
      text: 'From concept to deployment, they built our entire SaaS platform. The code quality and architecture are top-notch.',
      rating: 5
    }
  ];

  const testimonials = mode === 'design' ? designTestimonials : codeTestimonials;

  return (
    <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden ${
      mode === 'design'
        ? 'bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900'
        : 'bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 ${
            mode === 'design'
              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
          }`}>
            Client Success
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
          }`}>
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {mode === 'design' 
              ? 'Trusted by leading brands to deliver exceptional design experiences.'
              : 'Powering businesses with enterprise-grade software solutions.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                mode === 'design'
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40'
                  : 'bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40'
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 fill-current ${
                      mode === 'design' ? 'text-purple-400' : 'text-blue-400'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br flex-shrink-0 ${
                  mode === 'design'
                    ? 'from-purple-400 to-fuchsia-500'
                    : 'from-blue-400 to-cyan-500'
                }`}></div>
                <div>
                  <p className={`text-sm sm:text-base ${
                    mode === 'design' ? 'text-purple-200' : 'text-blue-200'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
