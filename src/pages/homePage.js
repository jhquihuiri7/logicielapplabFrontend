import { HeaderComponent } from "../components/headerComponent";
import { BodyComponent } from "../components/bodyComponent";
import { WhatsappComponent } from "../components/whatsappComponent";
import { FooterComponent } from "../components/footerComponent";

export function HomePage() {
  return (
    <div className="relative">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
      <WhatsappComponent />
    </div>
  );
}
