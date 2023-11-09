import React from "react";

class Input extends React.Component {

    render(){
        const {id, inputRef, type, placeholder, ...other} = this.props;
        return <>
          <input className="input-login" ref={inputRef} id={id} type={type} placeholder={placeholder} />
        </>
    }
} 

export default Input;