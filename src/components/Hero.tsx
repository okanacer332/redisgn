interface HeroProps {
  mode: 'design' | 'code';
}

export function Hero({ mode }: HeroProps) {
  return (
    <section className={`relative min-h-screen flex flex-col transition-colors duration-700 ${
      mode === 'design' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
    }`}>
      {/* Spacer for sticky header */}
      <div className="h-24"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl w-full">
          {mode === 'design' ? (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full text-white/90 text-xs sm:text-sm">
                  ✨ UX-UI Design Agency
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Modern
                  <br />
                  Design
                  <br />
                  Solutions
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-purple-200 max-w-2xl">
                We craft exceptional user experiences through customer journey mapping, product UI design, and strategic UX consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full hover:from-purple-600 hover:to-fuchsia-600 transition-all shadow-lg w-full sm:w-auto">
                  Start Your Project
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-purple-300/30 w-full sm:w-auto">
                  View Our Work
                </button>
              </div>
              
              {/* Design Visual Elements */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 sm:pt-12 max-w-4xl">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform"></div>
                <div className="aspect-square bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform"></div>
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform hidden sm:block"></div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white/90 text-sm">
                  💻 Software Development Agency
                </div>
                <h1 className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Tech
                  <br />
                  Innovation
                  <br />
                  Code
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-200 max-w-2xl">
                We build enterprise-grade ERP, B2B, and SaaS platforms with specialized software solutions for every industry sector.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
                  Start Development
                </button>
                <button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-blue-300/30">
                  View Solutions
                </button>
              </div>
              
              {/* Code Visual Elements */}
              <div className="pt-12 max-w-4xl">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-blue-300 text-lg">
                    <code>
{`const buildEnterpriseSolution = () => {
  return {
    type: "ERP | B2B | SaaS",
    technology: "Enterprise-grade",
    deployment: "Production Ready"
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-colors duration-700 ${
          mode === 'design' ? 'bg-purple-500/20' : 'bg-blue-500/20'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-colors duration-700 ${
          mode === 'design' ? 'bg-fuchsia-500/20' : 'bg-cyan-500/20'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
