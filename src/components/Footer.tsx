import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Content', href: '/content' },
      ]
    },
    {
      title: 'Mathematics',
      links: [
        { name: 'Algebra', href: '/content?category=algebra' },
        { name: 'Calculus', href: '/content?category=calculus' },
        { name: 'Geometry', href: '/content?category=geometry' },
        { name: 'Statistics', href: '/content?category=statistics' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Research Papers', href: '/content?type=research' },
        { name: 'Educational Content', href: '/content?type=education' },
        { name: 'Problem Sets', href: '/content?type=problems' },
        { name: 'Tutorials', href: '/content?type=tutorials' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@mathverse.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/mathverse', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/mathverse', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/mathverse', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-xl shadow-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MathVerse</h3>
                <p className="text-sm text-slate-300">Mathematical Universe</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Exploring the infinite beauty of mathematics through research, education, and discovery.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © {currentYear} MathVerse. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <Link to="/error-500" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;