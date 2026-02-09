import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Dr. Ahmed Al-Sabah",
      role: "Managing Director",
      bio: "Leading the group with over 25 years of experience in healthcare management.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Pharmaceuticals",
      bio: "Expert in pharmaceutical regulations and distribution networks.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Medical Equipment Director",
      bio: "Biomedical engineer specializing in diagnostic imaging systems.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Layla Hassan",
      role: "Operations Manager",
      bio: "Ensuring operational excellence and supply chain efficiency.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary pt-32 pb-20 px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4"
        >
          Leadership Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-blue-100 max-w-2xl mx-auto"
        >
          Meet the experts driving innovation and quality at Boushahri Group Medical.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-primary flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-primary flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary font-display">{member.name}</h3>
              <p className="text-secondary font-medium mb-2 text-sm uppercase tracking-wide">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
