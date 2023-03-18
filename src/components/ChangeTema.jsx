import React from "react";

function ChangeTema({ tema }){
  return(
    <>
      { tema ? "dark" : "light" }
    </>
  );
}

export default ChangeTema;