import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-muted/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or need assistance? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Our Location</h3>
                <p className="text-sm text-muted-foreground">
                  Salmiya, Block 9, Salem Al Mubarak Street<br />
                  Old Souk P.O.Box 547 Safat 13006<br />
                  Kuwait
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Phone Number</h3>
                <p className="text-sm text-muted-foreground mb-1">+965 25710736</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Email Address</h3>
                <p className="text-sm text-muted-foreground">info@boushahrigm.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Sun - Thu: 8:00 AM - 4:00 PM</p>
                <p className="text-sm text-muted-foreground">Fri - Sat: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-2 rounded-2xl shadow-sm border border-border h-96">
          <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-muted-foreground">
            {/* Embed Google Map here */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.992209669534!2d47.9774!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf849023456789%3A0xabcdef0123456789!2sSalmiya%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1620000000000!5m2!1sen!2skw" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
