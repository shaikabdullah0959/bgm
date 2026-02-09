import { motion } from "framer-motion";
import { Briefcase, Users, Target, Award, MapPin, Clock, DollarSign, Mail } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      id: 1,
      title: "Medical Equipment Sales Specialist",
      department: "Sales & Marketing",
      location: "Kuwait City",
      type: "Full-time",
      experience: "3-5 years",
      description: "We are looking for a dynamic Medical Equipment Sales Specialist to join our growing team. The ideal candidate will have experience in medical device sales and strong relationships with healthcare facilities.",
      responsibilities: [
        "Develop and maintain relationships with hospitals and clinics",
        "Achieve sales targets for medical equipment portfolio",
        "Provide product demonstrations and technical support",
        "Prepare sales reports and market analysis"
      ],
      requirements: [
        "Bachelor's degree in Business or Medical field",
        "3+ years of medical equipment sales experience",
        "Strong communication and negotiation skills",
        "Valid Kuwait driving license"
      ]
    },
    {
      id: 2,
      title: "Biomedical Equipment Technician",
      department: "Technical Services",
      location: "Salmiya",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our technical team as a Biomedical Equipment Technician. You will be responsible for installation, maintenance, and repair of medical equipment across Kuwait.",
      responsibilities: [
        "Install and configure medical equipment at client sites",
        "Perform preventive maintenance and calibration",
        "Diagnose and repair equipment malfunctions",
        "Provide training to healthcare staff on equipment usage"
      ],
      requirements: [
        "Diploma or Bachelor's in Biomedical Engineering",
        "2+ years of biomedical equipment experience",
        "Knowledge of medical equipment standards and regulations",
        "Willingness to travel within Kuwait"
      ]
    },
    {
      id: 3,
      title: "Pharmaceutical Sales Representative",
      department: "Pharmaceutical Division",
      location: "Kuwait City",
      type: "Full-time",
      experience: "2-3 years",
      description: "We are seeking a motivated Pharmaceutical Sales Representative to promote our portfolio of pharmaceutical products to healthcare professionals and institutions.",
      responsibilities: [
        "Promote pharmaceutical products to doctors and hospitals",
        "Achieve monthly and quarterly sales targets",
        "Organize medical conferences and product presentations",
        "Maintain accurate customer records and reports"
      ],
      requirements: [
        "Bachelor's degree in Pharmacy or Life Sciences",
        "2+ years of pharmaceutical sales experience",
        "Valid Kuwait Ministry of Health registration",
        "Excellent knowledge of Kuwait healthcare market"
      ]
    }
  ];

  const benefits = [
    "Competitive salary",
    "Comprehensive health insurance coverage",
    "Annual performance bonuses",
    "Professional development opportunities",
    "30 days annual leave"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary/10 to-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Build a rewarding career with Boushahri Group Medical and contribute to Kuwait's healthcare sector
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display text-center font-semibold text-gray-900 mb-6">
              Why Work With BGM?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Join a leading medical distribution company with over 45 years of excellence in Kuwait's healthcare sector
            </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Growth Opportunities", desc: "Advance your career in a growing industry" },
              { icon: Users, title: "Professional Team", desc: "Work with experienced healthcare professionals" },
              { icon: Award, title: "Industry Recognition", desc: "Be part of an award-winning organization" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Explore our current career opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="mailto:hr@boushahrigm.com?subject=Job Application - Boushahri Group Medical"
                  className="block w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* HR Contact */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about career opportunities at Boushahri Group Medical?
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-gray-100">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <a 
                    href="mailto:hr@boushahrigm.com"
                    className="text-secondary text-lg font-medium transition-colors"
                  >
                    hr@boushahrigm.com
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Send us your resume or inquire about current openings. We're always looking for talented professionals to join our team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-semibold text-white mb-6">
              Benefits & Perks
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We offer competitive compensation and comprehensive benefits package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <DollarSign className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-white font-medium">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
