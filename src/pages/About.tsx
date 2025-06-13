import React from 'react';
import { Users, Target, Award, BookOpen, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ing. Portilla Salazar',
      role: 'Founder & Lead Software Engineer',
      description: 'Experienced software engineer with a passion for building innovative mathematical applications.',
      expertise: ['Software Development', 'Mathematical Applications', 'Innovation']
    },
    {
      name: 'Prof. Jorge Ramirez',
      role: 'Education Director',
      description: 'Professor of Mathematics Education with 15+ years of experience in curriculum development.',
      expertise: ['Education', 'Curriculum', 'Pedagogy']
    },
    {
      name: 'Dra. Alessandra Jacqueline',
      role: 'Research Coordinator',
      description: 'Computational mathematician focused on applied mathematics and mathematical modeling.',
      expertise: ['Applied Math', 'Modeling', 'Computing']
    },
    {
      name: 'Jhon Doe',
      role: 'Content Manager',
      description: 'Mathematics communicator passionate about making complex concepts accessible to everyone.',
      expertise: ['Communication', 'Writing', 'Outreach']
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      description: 'We believe in making high-quality mathematical education accessible to learners at all levels.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building a worldwide network of mathematics enthusiasts, researchers, and educators.'
    },
    {
      icon: Heart,
      title: 'Passion for Discovery',
      description: 'Fostering curiosity and wonder about the infinite beauty found in mathematical concepts.'
    },
    {
      icon: Award,
      title: 'Research Innovation',
      description: 'Supporting cutting-edge mathematical research and breakthrough discoveries.'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Active Users' },
    { number: '1,200+', label: 'Research Articles' },
    { number: '85+', label: 'Contributing Mathematicians' },
    { number: '15+', label: 'Countries Reached' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                MathVerse
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We are a passionate community dedicated to exploring, understanding, and sharing the infinite beauty of mathematics with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                MathVerse was founded with a simple yet ambitious goal: to make the beauty and power of mathematics accessible to everyone, regardless of their background or level of expertise.
              </p>
              <p>
                We believe that mathematics is not just a collection of formulas and theorems, but a language that describes the fundamental patterns of our universe. Through our platform, we aim to inspire curiosity, foster understanding, and support the next generation of mathematical thinkers.
              </p>
              <p>
                Our comprehensive approach combines rigorous research, educational content, and community engagement to create a vibrant ecosystem where mathematical knowledge flourishes.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-6 shadow-lg">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Our Team</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate mathematicians, educators, and researchers working together to advance mathematical knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.description}</p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mathematical Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're a student, researcher, or simply curious about mathematics, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@mathverse.com"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a
              href="mailto:research@mathverse.com"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Collaborate with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;