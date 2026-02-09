import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Activity, Users, Handshake, 
  Stethoscope, Pill, Camera, CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { brands } from "@/data/brands";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* unsplash: modern medical facility clean architecture blue tones */}
          <img 
            src="/01.jpg" 
            alt="Medical Facility Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
              Established 1978
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 text-shadow-lg">
              Welcome to <br />
              <span className="text-secondary">Boushahri Group</span> Medical
            </h1>
            <p className="text-lg text-blue-100 mb-10 max-w-xl">
              Your trusted partner in Kuwait's growing medical sector. We combine decades of experience with modern innovation to deliver exceptional healthcare solutions.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-7 rounded-xl shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8 py-7 rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div> */}
          </motion.div>
        </div>

        {/* Floating Stats or Highlights */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-32 z-10" />
      </section>

      {/* Key Strengths Section */}
      <section className="py-24 bg-background relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              We combine decades of experience with modern innovation to serve Kuwait's healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Market Intelligence",
                desc: "Deep understanding of the local healthcare landscape and emerging trends.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Users,
                title: "Qualified Team",
                desc: "Expert professionals dedicated to delivering excellence in every project.",
                color: "bg-cyan-50 text-cyan-600"
              },
              {
                icon: Handshake,
                title: "Strong Relationships",
                desc: "Building lasting partnerships based on trust, integrity, and mutual growth.",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: Stethoscope,
                title: "Medical Equipment And Products",
                desc: "We provide comprehensive medical equipment solutions and products to meet the highest healthcare standards in Kuwait.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Pill,
                title: "Pharmaceuticals And Pharmacies",
                desc: "We supply pharmaceutical products and support pharmacies with high-quality medicines and healthcare supplies across Kuwait.",
                color: "bg-pink-50 text-pink-600"
              },
              {
                icon: Camera,
                title: "Photography And Digital Services",
                desc: "We offer professional photography and digital services including medical imaging, website development, and digital marketing solutions.",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                className="group p-8 rounded-2xl bg-white border border-border shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-display">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Core Divisions</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
            </div>
            {/* <Link href="/services">
              <Button variant="ghost" className="text-secondary hover:text-secondary/80 hover:bg-secondary/5 mt-4 md:mt-0 font-medium text-lg">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Medical",
                image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop"
              },
              {
                icon: Pill,
                title: "Pharmaceuticals",
                image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop"
              },
              {
                icon: Camera,
                title: "Services",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
              }
            ].map((item, i) => (
              item.title === "Services" ? (
                <Link to="/services" key={i}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/30">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{item.title}</h3>
                </div>
              </motion.div>
              </Link>
              ) : (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/30">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{item.title}</h3>
                </div>
              </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-medium uppercase tracking-widest mb-12" style={{ color: '#154679', fontWeight: 1000 }}>Trusted Partners & Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 transition-all duration-500">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-32 h-24 border"
                style={{ borderColor: '#2598E4' }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(37, 152, 228, 0.15)' }}
              >
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="max-h-16 max-w-28 object-contain transition-all duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image: ${brand.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's start a conversation</h2>
              <p className="text-lg text-blue-100 mb-10 max-w-md">
                Whether you're looking for medical equipment, pharmaceutical partnerships, or digital services, our team is ready to assist.
              </p>
              
              <div className="space-y-6">
                {[
                  "Leading Medical Supplier in Kuwait",
                  "24/7 Support for Critical Equipment",
                  "Certified ISO 9001:2015 Quality"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
