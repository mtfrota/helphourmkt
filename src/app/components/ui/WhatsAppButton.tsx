import { WHATSAPP_URL } from "@/app/content/home";
import { ReactNode } from "react";

type WhatsAppButtonProps = {
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
};

export default function WhatsAppButton({ children, className, openInNewTab = true }: WhatsAppButtonProps) {
  const target = openInNewTab ? "_blank" : undefined;
  const rel = openInNewTab ? "noreferrer" : undefined;

  return (
    <a href={WHATSAPP_URL} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
}
