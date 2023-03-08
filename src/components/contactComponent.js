import { FormComponent } from "./formComponent";
import Lottie from "lottie-react";
import contactanimation from "../assets/contactanimation.json";
export function ContactComponent() {
  return (
    <div className="py-10 flex flex-col md:flex-row items-center">
      <FormComponent />
      <Lottie
        animationData={contactanimation}
        style={{ height: 400 }}
        className="z-10 left-2/4 flex-1"
      />
    </div>
  );
}
