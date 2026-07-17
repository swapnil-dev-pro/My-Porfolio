import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_abc123", // Your real Service ID
        "template_9d5sp6d", // Your Template ID
        e.target,
        "jzFlrDNfZYYvteZdK", // Your Public Key
      )
      .then(() => {
        toast({
          title: t("contact.toastSuccessTitle"),
          description: t("contact.toastSuccessDesc"),
        });
        e.target.reset();
      })
      .catch((error) => {
        toast({
          title: t("contact.toastErrorTitle"),
          description: t("contact.toastErrorDesc"),
        });
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("contact.heading")}
            <span className="text-gradient">{t("contact.headingHighlight")}</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-xl font-normal">
            {t("contact.subheading")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal direction="left" className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.contactInfo")}{" "}
            </h3>

            <div className="space-y-6 justify-center md:ml-[50px] lg:ml-[100px]">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mr-[80px]"> {t("contact.email")}</h4>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.phone")}</h4>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mr-[110px]"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {profile.location}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.connect")}</h4>
              <div className="flex space-x-4 justify-center ">
                <a
                  className="hover:text-primary hover:scale-125 transition-all duration-300"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  className="hover:text-primary hover:scale-125 transition-all duration-300"
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  className="hover:text-primary hover:scale-125 transition-all duration-300"
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  className="hover:text-primary hover:scale-125 transition-all duration-300"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="glass-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> {t("contact.sendMessage")}</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="kau" className="block text-sm font-medium mb-2">
                  {t("contact.yourName")}
                </label>
                <input
                  type="text"
                  id="kau"
                  name="kau"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="kauEmail"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.yourEmail")}
                </label>
                <input
                  type="email"
                  id="kauEmail"
                  name="kauEmail"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="albinswapnil@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="kauMessage"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.yourMessage")}
                </label>
                <textarea
                  id="kauMessage"
                  name="kauMessage"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? t("contact.sending") : t("contact.send")}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
