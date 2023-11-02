
import { ContactoDesktop } from "./ContactoDesktop";
import { ContactoCelu } from "./ContactoCelu";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contacto = () => {
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
         () => {
           const Toast = Swal.mixin({
             toast: true,
             position: "center",
             showConfirmButton: false,
             timer: 3000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.addEventListener("mouseenter", Swal.stopTimer);
               toast.addEventListener("mouseleave", Swal.resumeTimer);
             },
           });

           Toast.fire({
             icon: "success",
             title: "Email enviado",
           });
         },
         (error) => {
           const Toast = Swal.mixin({
             toast: true,
             position: "center",
             showConfirmButton: false,
             timer: 3000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.addEventListener("mouseenter", Swal.stopTimer);
               toast.addEventListener("mouseleave", Swal.resumeTimer);
             },
           });

           Toast.fire({
             icon: "error",
             title: "No se pudo enviar, intente de nuevo más tarde",
           });
           console.error("no se envio", error);
         }
       );
   };
  return (
    <div>
      {window.innerWidth > 700 ? (
        <ContactoDesktop sendEmail={sendEmail} form={form} />
      ) : (
        <ContactoCelu sendEmail={sendEmail} form={form} />
      )}
    </div>
  );
};
