import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseMedical, Building2, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export default function Divisions() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-primary pt-32 pb-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Divisions</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
          Structured specialized units focusing on key areas of the healthcare industry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <Tabs defaultValue="medical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-white rounded-xl shadow-lg mb-12">
            <TabsTrigger value="medical" className="py-4 text-base data-[state=active]:bg-secondary data-[state=active]:text-white rounded-lg transition-all">
              <BriefcaseMedical className="w-5 h-5 mr-2" /> Medical
            </TabsTrigger>
            <TabsTrigger value="pharmacy" className="py-4 text-base data-[state=active]:bg-secondary data-[state=active]:text-white rounded-lg transition-all">
              <FlaskConical className="w-5 h-5 mr-2" /> Pharmacy
            </TabsTrigger>
            <TabsTrigger value="corporate" className="py-4 text-base data-[state=active]:bg-secondary data-[state=active]:text-white rounded-lg transition-all">
              <Link to="/services" className="flex items-center w-full h-full justify-center">
                <Building2 className="w-5 h-5 mr-2" /> Services
              </Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medical">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-primary">Medical Projects Division</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This division specializes in turnkey hospital projects, equipping clinics, and supplying major medical machinery. We work closely with architects and hospital planners to ensure seamless integration of technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Operating Theatres', 'ICU Setup', 'Sterilization Units', 'Radiology Centers'].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 font-medium text-primary flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                 <img 
                   src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                   alt="Medical Projects" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="pharmacy">
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
               <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                 <img 
                   src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop" 
                   alt="Pharmacy" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl font-display font-bold text-primary">Pharmacy Division</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our network of pharmacies and distribution channels ensures that vital medications are accessible across Kuwait. We represent major international pharmaceutical companies.
                </p>
                 <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Retail Pharmacies</CardTitle>
                      <CardDescription>Direct access to consumers with professional consultation.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Wholesale Distribution</CardTitle>
                      <CardDescription>Supplying hospitals, clinics, and other pharmacies.</CardDescription>
                    </CardHeader>
                  </Card>
                 </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="corporate">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-3xl mx-auto"
            >
              <Building2 className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Corporate Services</h2>
              <p className="text-muted-foreground mb-8">
                Supporting our medical operations with robust HR, IT, Finance, and Logistics departments to ensure smooth service delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Logistics</h3>
                  <p className="text-sm text-gray-500">Advanced warehousing and fleet management for safe product delivery.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">IT Support</h3>
                  <p className="text-sm text-gray-500">Ensuring digital infrastructure uptime and security.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Customer Care</h3>
                  <p className="text-sm text-gray-500">Dedicated team for handling client inquiries and support.</p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
