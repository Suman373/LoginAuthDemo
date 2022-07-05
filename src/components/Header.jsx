import React from "react";

 export const Header=()=>{
    return(
        <div className="header-container" style={headerContainerStyle}>
            <h1 style={titleStyle}>Sign in</h1>
        </div>
    )
}
// container for header
const headerContainerStyle={
    textAlign:'center',
    marginBottom:'2rem'
}
// the title
const titleStyle={
    fontSize:'3rem',
    color:'#d63636',
}
