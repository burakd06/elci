import React from 'react';

export function MyGoogleMap() {
  return (
    <div  // harita css i buradan
      className="google-map-container"
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '50vh',          
        width: '100%',            
        overflow: 'hidden'        
      }}
    >
      <iframe // border css i buradan
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.394590405244!2d32.806322712156096!3d39.91018497140684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348b2a8a8bb1b%3A0x6fc94f4a1deecb8a!2sYDA%20Center!5e0!3m2!1str!2str!4v1732542175765!5m2!1str!2str"
        width="100%"   
        height="100%"  
        style={{
          border: '0',
          height: '100%', 
          width: '100%'   
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
