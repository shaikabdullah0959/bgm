import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* unsplash: medical team meeting boardroom professional */}
        <img 
          src="/aboutus.jpg" 
          alt="Medical Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            style={{ color: '#154679', fontSize: '3.25rem' }}
          >
            History Of Boushahri Group
          </motion.h1>
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
          <p className="text-xl" style={{ color: '#2598E4' }}>Pioneering Excellence in Healthcare Since 1978</p>
          </motion.p>
        </div>
      </section>

      {/* History & Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-3 mb-6">A Legacy of Trust & Innovation</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Established in 1978, Boushahri Group Medical has grown to become a cornerstone of Kuwait's healthcare infrastructure. What began as a vision to supply quality medical products has evolved into a comprehensive solution provider for the medical sector.
                </p>
                <p>
                  Our journey is marked by continuous adaptation to the changing landscape of medical technology, ensuring that healthcare providers in Kuwait have access to world-class equipment and pharmaceuticals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1000&auto=format&fit=crop" 
                alt="Our History" 
                className="relative rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-display">01</div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the undisputed leader in providing comprehensive healthcare solutions in Kuwait, recognized for our commitment to quality and innovation.
              </p>
            </div>
            
            <div className="bg-primary text-white p-10 rounded-2xl shadow-xl transform md:-translate-y-4">
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-display">02</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To enhance the quality of life in our community by delivering superior medical products and services through strategic partnerships and expert knowledge.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-display">03</div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Integrity in all dealings', 'Customer-centric approach', 'Excellence in service', 'Innovation & Growth'].map((val, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Quality Assurance</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-3 mb-6">Commitment to Excellence</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  At Boushahri Group Medical, quality is not just a promise—it's the foundation of everything we do. Our comprehensive Quality Management System ensures that every product, service, and interaction meets the highest international standards.
                </p>
                <p>
                  We maintain rigorous quality control processes, continuous improvement initiatives, and regular audits to guarantee that our clients receive nothing but the best in healthcare solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3" />
              <img 
                src="/02.jpg" 
                alt="Quality Assurance" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden border-4 border-secondary/20">
             {/* Placeholder for Chairman Photo */}
             <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">PHOTO</div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-display font-medium text-primary leading-relaxed mb-8">
            "As Managing Director of Boushahri Group Medical Co., I take full responsibility for upholding a strong Quality Management System. Through a process-driven and risk-based approach, our leadership team ensures quality is embedded into every aspect of our business. We continuously invest in our people, resources, and training, creating an environment that enables our teams to meet customer needs and drive sustainable growth aligned with our organization's strategic direction."
          </blockquote>
          <cite className="not-italic">
            <div className="font-bold text-lg text-primary">Mohammed Boushahri</div>
            <div className="text-secondary font-medium">Chairman, Boushahri Group</div>
          </cite>
        </div>
      </section>
    </div>
  );
}
