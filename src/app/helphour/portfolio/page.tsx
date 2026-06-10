import type { Metadata } from "next";
import PortfolioExperience from "./PortfolioExperience";

export const metadata: Metadata = {
  title: "Portfólio | HelpHour",
  description:
    "Conheça trabalhos reais da HelpHour em social media, cobertura de eventos, sites e tráfego pago.",
  openGraph: {
    title: "Portfólio | HelpHour",
    description: "Cases e trabalhos reais de marketing digital da HelpHour.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioExperience />;
}
