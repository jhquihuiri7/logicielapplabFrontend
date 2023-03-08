import Lottie from "lottie-react";
import whatsapp from "../assets/whatsapp.json";
import "../styles/buttons.css";

import React from "react";

export function WhatsappComponent(){
    var url = 'https://api.whatsapp.com/send?phone=593982291894&text=Hola%20Logiciel%20Applab%2C%20quiero%20informaci%C3%B3n%20acerca%20de%3A';
    return(
        <a href={`${url}`} target="_blank" rel="noreferrer">
            <Lottie animationData={whatsapp} style={{height: 90}} id="whatsapp"/>
        </a>
    );
}