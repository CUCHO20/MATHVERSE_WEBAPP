import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Content: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'algebra', name: 'Algebra' },
    { id: 'calculus', name: 'Calculus' },
    { id: 'geometry', name: 'Geometry' },
    { id: 'statistics', name: 'Statistics' },
    { id: 'number-theory', name: 'Number Theory' },
    { id: 'topology', name: 'Topology' }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'research', name: 'Research Papers' },
    { id: 'education', name: 'Educational' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'news', name: 'News' },
    { id: 'problems', name: 'Problem Sets' }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Riemann Hypothesis: A Century-Old Mystery',
      excerpt: 'Exploring one of mathematics\' most famous unsolved problems and its implications for number theory...',
      author: 'Dr. Sarah Chen',
      category: 'number-theory',
      type: 'research',
      readTime: '15 min read',
      publishDate: '2024-01-15',
      tags: ['Prime Numbers', 'Complex Analysis', 'Zeta Function'],
      featured: true
    },
    {
      id: 2,
      title: 'Introduction to Multivariable Calculus',
      excerpt: 'A comprehensive guide to understanding functions of multiple variables and their applications...',
      author: 'Prof. Michael Rodriguez',
      category: 'calculus',
      type: 'education',
      readTime: '22 min read',
      publishDate: '2024-01-12',
      tags: ['Partial Derivatives', 'Integration', 'Vector Fields']
    },
    {
      id: 3,
      title: 'Geometric Transformations in Computer Graphics',
      excerpt: 'How linear algebra and geometric principles power modern computer graphics and 3D modeling...',
      author: 'Dr. Emily Watson',
      category: 'geometry',
      type: 'tutorials',
      readTime: '18 min read',
      publishDate: '2024-01-10',
      tags: ['Linear Algebra', 'Matrices', '3D Graphics']
    },
    {
      id: 4,
      title: 'Statistical Analysis of Climate Data',
      excerpt: 'Applying statistical methods to understand climate patterns and make data-driven predictions...',
      author: 'James Liu',
      category: 'statistics',
      type: 'research',
      readTime: '12 min read',
      publishDate: '2024-01-08',
      tags: ['Data Science', 'Regression', 'Modeling']
    },
    {
      id: 5,
      title: 'Solving Quadratic Equations: Methods and Applications',
      excerpt: 'A complete guide to quadratic equations, from basic solving techniques to real-world applications...',
      author: 'Prof. Michael Rodriguez',
      category: 'algebra',
      type: 'education',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      tags: ['Quadratics', 'Factoring', 'Applications']
    },
    {
      id: 6,
      title: 'Breaking: New Prime Number Discovery',
      excerpt: 'Mathematicians have discovered a new class of prime numbers with unique properties...',
      author: 'MathVerse News Team',
      category: 'number-theory',
      type: 'news',
      readTime: '5 min read',
      publishDate: '2024-01-20',
      tags: ['Prime Numbers', 'Discovery', 'Research']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesType = selectedType === 'all' || article.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const getTypeColor = (type: string) => {
    const colors = {
      research: 'bg-purple-100 text-purple-800',
      education: 'bg-green-100 text-green-800',
      tutorials: 'bg-blue-100 text-blue-800',
      news: 'bg-red-100 text-red-800',
      problems: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mathematical Content Library
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover research papers, educational resources, tutorials, and the latest news in mathematics.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                className="pl-12 pr-8 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                className="pl-12 pr-8 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {contentTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              Featured Content
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map(article => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(article.type)}`}>
                        {contentTypes.find(t => t.id === article.type)?.name}
                      </span>
                      <span className="text-slate-500 text-sm flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-600">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm">{article.author}</span>
                      </div>
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            All Content ({filteredArticles.length} articles)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map(article => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(article.type)}`}>
                      {contentTypes.find(t => t.id === article.type)?.name}
                    </span>
                    <span className="text-slate-500 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-600">
                      <User className="h-3 w-3 mr-1" />
                      <span className="text-xs">{article.author}</span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 text-sm">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No articles found</h3>
              <p className="text-slate-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Content;