"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface/50 border border-success/30 rounded-[2rem] p-12 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-syne font-bold mb-4">Message Sent!</h3>
        <p className="text-text-secondary mb-8">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <div className="bg-surface/50 border border-border/50 rounded-[2rem] p-8 md:p-12">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-1">Full Name</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className={cn(
                "bg-background border border-border/50 rounded-xl px-5 py-3 outline-none focus:border-accent-primary transition-colors text-text-primary",
                errors.name && "border-red-500/50"
              )}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
            <input
              {...register("email")}
              placeholder="john@company.com"
              className={cn(
                "bg-background border border-border/50 rounded-xl px-5 py-3 outline-none focus:border-accent-primary transition-colors text-text-primary",
                errors.email && "border-red-500/50"
              )}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-1">Company (Optional)</label>
            <input
              {...register("company")}
              placeholder="Your Business"
              className="bg-background border border-border/50 rounded-xl px-5 py-3 outline-none focus:border-accent-primary transition-colors text-text-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-1">Service Interest</label>
            <select
              {...register("service")}
              className={cn(
                "bg-background border border-border/50 rounded-xl px-5 py-3 outline-none focus:border-accent-primary transition-colors text-text-primary appearance-none",
                errors.service && "border-red-500/50"
              )}
            >
              <option value="">Select a service</option>
              <option value="conversational-ai">Conversational AI</option>
              <option value="generative-ai">Generative AI</option>
              <option value="computer-vision">Computer Vision</option>
              <option value="intelligent-agents">Intelligent Agents</option>
              <option value="product-demo">Product Demo</option>
            </select>
            {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-1">Your Message</label>
          <textarea
            {...register("message")}
            placeholder="Tell us about your project or inquiry..."
            rows={5}
            className={cn(
              "bg-background border border-border/50 rounded-xl px-5 py-3 outline-none focus:border-accent-primary transition-colors text-text-primary resize-none",
              errors.message && "border-red-500/50"
            )}
          />
          {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <AlertCircle size={18} />
            Failed to send message. Please try again or email us directly.
          </div>
        )}

        <Button 
          onClick={handleSubmit(onSubmit)} 
          size="lg" 
          className="w-full"
          isLoading={status === "loading"}
        >
          Send Message <Send size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
