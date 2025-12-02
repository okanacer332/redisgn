import { Switch } from './Switch';

interface HeaderProps {
  mode: 'design' | 'code';
  onToggle: (mode: 'design' | 'code') => void;
  isScrolled: boolean;
}

export function Header({ mode, onToggle, isScrolled }: HeaderProps) {
  const menuItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl py-3 sm:py-4'
          : 'bg-transparent py-4 sm:py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br transition-all duration-700 ${
              mode === 'design'
                ? 'from-purple-500 to-fuchsia-500'
                : 'from-blue-500 to-cyan-500'
            }`}></div>
            <span className="text-white text-base sm:text-lg md:text-xl tracking-tight">
              {mode === 'design' ? 'Design Studio' : 'Code Lab'}
            </span>
          </div>

          {/* Menu Items - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-white/80 hover:text-white transition-colors relative group ${
                  isScrolled ? 'text-sm' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  mode === 'design'
                    ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Switch and CTA */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className={`transition-transform duration-300 hidden sm:block ${
              isScrolled ? 'scale-75 md:scale-75' : 'scale-90 md:scale-100'
            }`}>
              <Switch mode={mode} onToggle={onToggle} />
            </div>
            
            {/* Contact CTA Button */}
            <button
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm ${
                isScrolled ? 'sm:px-4 sm:py-2 md:px-5 md:py-2' : ''
              } ${
                mode === 'design'
                  ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              }`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu - Shown on small screens */}
        <nav className={`lg:hidden flex items-center gap-4 sm:gap-6 justify-center ${
          isScrolled ? 'mt-3' : 'mt-4'
        }`}>
          {menuItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
