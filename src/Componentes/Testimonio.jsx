import React from "react";
function Testimonio (){
    return(
        <div className="contenido-testimonio">
            <img
                className="imagenes-testimonio"
                src={require('../imagenes/Emma.png')}
                alt="Foto de Emma"/>
        
            <div className="contenedor-texto-textimonio">
                <p className="nombre-testimonio">"Emma Bostian en Suecia"</p>
                <p className="cargo-testimonio">"Ingeniera de software en Spotify"</p>
                <p className="texto-testimonio">"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."</p>
            </div>
        
        
        </div>
        
    )

}

export default Testimonio;