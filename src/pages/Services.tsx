import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Bone, Heart, Activity, Monitor, Wind, Snowflake, Dumbbell, Pill, Tablet, TestTube, Home, Scissors, Shield, Baby, Ambulance } from "lucide-react";

const services = [
  {
    id: "trauma-orthopedics",
    icon: Bone,
    title: "Trauma, Nailing, Arthroplasty And Biomaterials",
    desc: "Comprehensive orthopedic solutions for trauma care and joint replacement procedures.",
    features: ["Trauma Fixation", "Intramedullary Nailing", "Joint Arthroplasty", "Biomaterials"]
  },
  {
    id: "dental-rehab",
    icon: Pill,
    title: "Dental, Physiotherapy/Rehabilitation",
    desc: "Advanced dental equipment and rehabilitation solutions for patient recovery.",
    features: ["Dental Chairs", "Physiotherapy Devices", "Rehabilitation Equipment", "Diagnostic Tools"]
  },
  {
    id: "homecare-specialty",
    icon: Home,
    title: "Homecare, Ophthalmology And ENT",
    desc: "Specialized equipment for home healthcare and eye/ear/nose/throat treatments.",
    features: ["Homecare Devices", "Ophthalmic Instruments", "ENT Equipment", "Patient Monitors"]
  },
  {
    id: "patient-monitoring",
    icon: Monitor,
    title: "Patient Monitors, Defibrillators, ECG's, Ultrasounds",
    desc: "Critical monitoring and diagnostic equipment for patient care.",
    features: ["Patient Monitoring Systems", "Defibrillators", "ECG Machines", "Ultrasound Devices"]
  },
  {
    id: "respiratory-care",
    icon: Wind,
    title: "Anesthesia Machines, Ventilators, Ultrasonic Nebulizers, CPAP, BI-Level",
    desc: "Complete respiratory care solutions for anesthesia and ventilation support.",
    features: ["Anesthesia Machines", "Ventilators", "Nebulizers", "CPAP/BIPAP Systems"]
  },
  {
    id: "cryo-systems",
    icon: Snowflake,
    title: "Cryo Systems",
    desc: "Advanced cryotherapy and cryosurgery systems for medical treatments.",
    features: ["Cryotherapy Units", "Cryosurgery Equipment", "Temperature Control", "Safety Systems"]
  },
  {
    id: "physiotherapy-equip",
    icon: Dumbbell,
    title: "Physiotherapy Equipment",
    desc: "Specialized equipment for physical therapy and rehabilitation programs.",
    features: ["Exercise Equipment", "Therapy Devices", "Rehab Tools", "Assessment Systems"]
  },
  {
    id: "dental-consumables",
    icon: Pill,
    title: "Dental Equipment And Consumables",
    desc: "Complete dental solutions including equipment and disposable supplies.",
    features: ["Dental Units", "Consumables", "Infection Control", "Diagnostic Tools"]
  },
  {
    id: "mobile-computing",
    icon: Tablet,
    title: "Access Point Mobile Computing",
    desc: "Mobile computing solutions for healthcare data management and access.",
    features: ["Mobile Carts", "Tablets", "Access Points", "Data Security"]
  },
  {
    id: "laboratory-equip",
    icon: TestTube,
    title: "Laboratory Equipment",
    desc: "Comprehensive laboratory equipment for diagnostic and research purposes.",
    features: ["Analyzers", "Centrifuges", "Microscopes", "Lab Automation"]
  },
  {
    id: "homecare-equip",
    icon: Home,
    title: "Homecare Equipment",
    desc: "Equipment designed for home healthcare and patient monitoring.",
    features: ["Home Beds", "Mobility Aids", "Monitoring Devices", "Safety Equipment"]
  },
  {
    id: "surgical-solutions",
    icon: Scissors,
    title: "Surgical Equipment, Instruments, Endoscopy, Total O.R. Solutions, Hybrid O.R. Solutions",
    desc: "Complete operating room solutions including surgical instruments and endoscopy.",
    features: ["Surgical Instruments", "Endoscopy Systems", "OR Integration", "Hybrid OR Solutions"]
  },
  {
    id: "cssd-equipment",
    icon: Shield,
    title: "CSSD Equipment",
    desc: "Central Sterile Services Department equipment for infection control.",
    features: ["Sterilizers", "Washers", "Tracking Systems", "Quality Control"]
  },
  {
    id: "icu-equipment",
    icon: Heart,
    title: "ICU, CCU, PICU, NICU Equipment",
    desc: "Specialized critical care equipment for intensive care units.",
    features: ["ICU Beds", "Ventilators", "Monitoring Systems", "Life Support"]
  },
  {
    id: "ambulance-emergency",
    icon: Ambulance,
    title: "Ambulance And Emergency Equipment And Tools",
    desc: "Complete emergency medical equipment for ambulance and emergency services.",
    features: ["Emergency Kits", "Transport Ventilators", "Defibrillators", "Trauma Equipment"]
  }
];

export default function Services() {
  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to meet the evolving needs of the medical sector.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-secondary/20"
            >
              <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 font-display leading-tight">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.desc}
              </p>

              <ul className="space-y-2 mb-8 border-t border-gray-100 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all text-sm">
                  Inquire Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/25">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-3xl font-display font-bold mb-6 relative z-10">Need a Customized Solution?</h2>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Our team of experts can help design and implement bespoke medical solutions for your facility.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-secondary hover:bg-blue-50 font-bold px-10 py-6 rounded-xl shadow-lg relative z-10">
              Contact our Experts <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
