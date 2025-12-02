import { ArrowRight } from 'lucide-react';

interface CTAProps {
  mode: 'tasarla' | 'code';
}

export function CTA({ mode }: CTAProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-slate-900 relative overflow-hidden">
      <div className={`absolute inset-0 ${
        mode === 'design'
          ? 'bg-gradient-to-br from-purple-900/20 via-fuchsia-900/20 to-slate-900'
          : 'bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-slate-900'
      }`}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
          mode === 'design'
            ? 'bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border-purple-500/30'
            : 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30'
        }`}>
          <div className="text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
              mode === 'design'
                ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
            }`}>
              {mode === 'design' 
                ? 'Ready to Transform Your User Experience?' 
                : 'Ready to Build Your Next Solution?'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              {mode === 'design' 
                ? 'Let\'s collaborate to create exceptional designs that drive engagement and business growth.'
                : 'Partner with us to develop enterprise-grade software that scales with your business.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto ${
                mode === 'design'
                  ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              }`}>
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 w-full sm:w-auto">
                Schedule a Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
              <div>
                <p className={`text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 ${
                  mode === 'design' ? 'text-purple-300' : 'text-blue-300'
                }`}>
                  500+
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {mode === 'design' ? 'Projects Designed' : 'Systems Deployed'}
                </p>
              </div>
              <div>
                <p className={`text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 ${
                  mode === 'design' ? 'text-purple-300' : 'text-blue-300'
                }`}>
                  98%
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <p className={`text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 ${
                  mode === 'design' ? 'text-purple-300' : 'text-blue-300'
                }`}>
                  50+
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {mode === 'design' ? 'Design Awards' : 'Industries Served'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
        mode === 'design' ? 'bg-purple-500/10' : 'bg-blue-500/10'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
        mode === 'design' ? 'bg-fuchsia-500/10' : 'bg-cyan-500/10'
      }`}></div>
    </section>
  );
}
