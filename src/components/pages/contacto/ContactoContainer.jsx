import { useRef } from "react";
import { Contacto } from "./Contacto"
import "./Contacto.css"
import emailjs from "@emailjs/browser";

export const ContactoContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prdid6s",
        "template_tixappe",
        form.current,
        "kHIj_9PsmqbGchRXG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Contacto sendEmail={sendEmail} form={form} />
    </div>
  )
}
