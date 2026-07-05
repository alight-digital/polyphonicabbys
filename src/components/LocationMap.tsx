import React from "react";

const LocationMap = () => {
  return (
    <div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4816603992504!2d17.097064211311217!3d48.13951865090704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89a8c1a8ed09%3A0x305a0ac5639dbd88!2sPINK%20WHALE!5e0!3m2!1sen!2sus!4v1742381111758!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

export default LocationMap;
