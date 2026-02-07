import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function useSubmitContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = encodeURIComponent(`Contact Form Submission from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone || 'Not provided'}\n\n` +
        `Message:\n${data.message}\n\n` +
        `---\n` +
        `Sent from Boushahri Group Medical Website\n` +
        `Date: ${new Date().toLocaleString('en-US')}`
      );

      // Open device mail client
      const mailtoLink = `mailto:shaikabdullah0959@gmail.com?subject=${subject}&body=${body}`;
      
      // Try multiple methods to open mail client
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Opening Mail Client",
        description: "If mail client doesn't open, please check your device settings.",
      });
      
      return { success: true };
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open mail client. Please try again.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContact, isSubmitting };
}
