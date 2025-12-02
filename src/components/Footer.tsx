import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

interface FooterProps {
  mode: 'design' | 'code';
}

export function Footer({ mode }: FooterProps) {
  const designLinks = {
    services: [
      'UX Consultant',
      'Product Design',
      'Business Development',
      'Journey Mapping',
      'CRM Marketing'
    ],
    company: [
      'About Us',
      'Design Process',
      'Case Studies',
      'Careers',
      'Blog'
    ]
  };

  const codeLinks = {
    services: [
      'ERP Systems',
      'B2B Platforms',
      'SaaS Development',
      'Custom Software',
      'API Integration'
    ],
    company: [
      'About Us',
      'Tech Stack',
      'Solutions',
      'Careers',
      'Documentation'
    ]
  };

  const links = mode === 'design' ? designLinks : codeLinks;

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${
                mode === 'design'
                  ? 'from-purple-500 to-fuchsia-500'
                  : 'from-blue-500 to-cyan-500'
              }`}></div>
              <span className="text-white text-lg sm:text-xl">
                {mode === 'design' ? 'Design Studio' : 'Code Lab'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              {mode === 'design' 
                ? 'Creating exceptional user experiences through innovative design.'
                : 'Building enterprise-grade software solutions for modern businesses.'}
            </p>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                mode === 'design'
                  ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              }`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                mode === 'design'
                  ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              }`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                mode === 'design'
                  ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              }`}>
                {mode === 'design' ? <Instagram className="w-5 h-5" /> : <Github className="w-5 h-5" />}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm sm:text-base mb-4 sm:mb-6 ${
              mode === 'design' ? 'text-purple-300' : 'text-blue-300'
            }`}>
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`text-sm sm:text-base mb-4 sm:mb-6 ${
              mode === 'design' ? 'text-purple-300' : 'text-blue-300'
            }`}>
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm sm:text-base mb-4 sm:mb-6 ${
              mode === 'design' ? 'text-purple-300' : 'text-blue-300'
            }`}>
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>hello@agency.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>123 Business St, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2024 {mode === 'design' ? 'Design Studio' : 'Code Lab'}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
