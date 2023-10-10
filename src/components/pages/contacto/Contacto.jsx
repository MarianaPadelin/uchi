
import { ContactoDesktop } from "./ContactoDesktop";
import { ContactoCelu } from "./ContactoCelu";

export const Contacto = () => {
  return (
    <div>
      {window.innerWidth > 700 ? <ContactoDesktop /> : <ContactoCelu />}
     
    </div>
  );
};
