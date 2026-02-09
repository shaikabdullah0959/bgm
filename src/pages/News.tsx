import { motion } from "framer-motion";
import { Calendar, Users, Award, TrendingUp } from "lucide-react";

export default function News() {
  const newsEvents = [
    {
      id: 1,
      type: "news",
      title: "Boushahri Group Medical Expands Portfolio with New Medical Equipment Partnerships",
      date: "December 15, 2024",
      excerpt: "BGM announces strategic partnerships with leading medical equipment manufacturers to enhance healthcare delivery across Kuwait.",
      image: "/01.jpg",
      category: "Business Development"
    },
    {
      id: 2,
      type: "event",
      title: "Kuwait Medical Exhibition 2024 - BGM Showcase",
      date: "November 28-30, 2024",
      excerpt: "Visit our booth at Kuwait International Medical Exhibition to explore the latest medical technologies and solutions.",
      image: "/02.jpg",
      category: "Exhibition"
    },
    {
      id: 3,
      type: "news",
      title: "BGM Receives Excellence in Healthcare Distribution Award",
      date: "October 10, 2024",
      excerpt: "Recognized for outstanding contribution to Kuwait's healthcare sector through innovative distribution solutions.",
      image: "/aboutus.jpg",
      category: "Achievement"
    },
    {
      id: 4,
      type: "event",
      title: "Medical Equipment Training Workshop - December 2024",
      date: "December 5-6, 2024",
      excerpt: "Hands-on training session for healthcare professionals on latest medical equipment operation and maintenance.",
      image: "/01.jpg",
      category: "Training"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary/10 to-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4"
          >
            News & Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Stay updated with the latest news, events, and developments from Boushahri Group Medical
          </motion.p>
        </div>
      </section>

      {/* News & Events Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {newsEvents.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                      {item.type === 'news' ? 'News' : 'Event'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  
                  <button className="text-secondary font-medium hover:text-primary transition-colors flex items-center gap-2 group">
                    Read More
                    <Award className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
