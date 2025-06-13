import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Rich Content',
      description: 'Comprehensive mathematical articles, tutorials, and research papers covering all major areas of mathematics.'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with mathematicians, researchers, and educators from around the world.'
    },
    {
      icon: Award,
      title: 'Quality Research',
      description: 'Peer-reviewed content and cutting-edge mathematical research published regularly.'
    },
    {
      icon: TrendingUp,
      title: 'Interactive Learning',
      description: 'Engaging problem sets, visualizations, and interactive mathematical explorations.'
    }
  ];

  const recentArticles = [
    {
      title: 'The Beauty of Prime Numbers',
      excerpt: 'Exploring the fascinating patterns and mysteries hidden within prime numbers...',
      category: 'Number Theory',
      readTime: '8 min read'
    },
    {
      title: 'Calculus in Real World Applications',
      excerpt: 'How differential and integral calculus shapes our understanding of physics and engineering...',
      category: 'Calculus',
      readTime: '12 min read'
    },
    {
      title: 'Geometric Proofs and Visual Mathematics',
      excerpt: 'The elegance of geometric proofs and how visualization enhances mathematical understanding...',
      category: 'Geometry',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to the
              <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Mathematical Universe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the infinite beauty of mathematics through our comprehensive platform featuring research, education, and exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Mathematical symbols decoration */}
        <div className="absolute top-10 left-10 text-6xl text-white/10 font-serif">∫</div>
        <div className="absolute top-32 right-20 text-4xl text-white/10 font-serif">∑</div>
        <div className="absolute bottom-20 left-32 text-5xl text-white/10 font-serif">π</div>
        <div className="absolute bottom-32 right-10 text-3xl text-white/10 font-serif">∞</div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose MathVerse?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive mathematical resources designed for students, researchers, and mathematics enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-fit mb-6 shadow-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Mathematical Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with our latest articles, research findings, and educational content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-100"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{article.excerpt}</p>
                  <Link
                    to="/content"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/content"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Content
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Mathematics?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join our community of mathematics enthusiasts and discover the beauty of mathematical thinking.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;