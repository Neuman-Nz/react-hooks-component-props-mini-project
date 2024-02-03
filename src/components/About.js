import React from "react";

function About(props){
    return(
        <aside>
            <img src={props.image} alt={"blog logo"}></img>
            <p>{props.about}</p>
        </aside>
    )

}
About.defaultProps ={
    image : "https://via.placeholder.com/215"
  }

export default About