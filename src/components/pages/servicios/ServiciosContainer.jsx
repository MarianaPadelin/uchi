import { Servicios } from "./Servicios"

export const ServiciosContainer = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  return (
    <div><Servicios scrollToTop={scrollToTop} /></div>
  )
}
