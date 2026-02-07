import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact, type ContactFormData } from "../hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Loader2, Send } from "lucide-react";

// Local schema for frontend validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().max(50, "Phone number too long").optional(),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { submitContact, isSubmitting } = useSubmitContact();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const result = await submitContact(values);
    if (result.success) {
      form.reset();
    }
  }

  return (
    <Card className="p-8 shadow-2xl shadow-primary/5 border-border/60 bg-white/80 backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-semibold text-primary mb-2">Send us a Message</h3>
        <p className="text-muted-foreground text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-muted/50 focus:bg-white transition-colors" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" className="bg-muted/50 focus:bg-white transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+965 ..." type="tel" className="bg-muted/50 focus:bg-white transition-colors" {...field} value={field.value || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Your Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-muted/50 focus:bg-white transition-colors resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
