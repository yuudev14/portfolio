"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PromptLabel } from "@/components/terminal/prompt-label";
import { Reveal } from "@/components/terminal/reveal";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { profile } from "@/data/profile";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_SECRET_EMAIL;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_EMAIL;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_EMAIL;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      toast.error("error when sending email");
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast.success("Email sent. Thank you very much");
      formRef.current.reset();
    } catch {
      toast.error("error when sending email");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-14 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <Reveal>
        <PromptLabel path="~/contact">Contact</PromptLabel>

        <div className="mt-8">
          <TerminalWindow title="yu@portfolio: ~/contact">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> mail -s &quot;hello&quot;{" "}
              {profile.email}
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="from_name" className="font-mono text-xs text-primary">
                  &gt; name:
                </Label>
                <Input id="from_name" name="from_name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from_email" className="font-mono text-xs text-primary">
                  &gt; email:
                </Label>
                <Input id="from_email" name="from_email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs text-primary">
                  &gt; message:
                </Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" disabled={sending}>
                {sending ? "sending..." : "> send_message"}
              </Button>
            </form>
          </TerminalWindow>
        </div>
      </Reveal>
    </section>
  );
}
