import React from "react";
import {FormFile, FormText} from "../index";

const FormInput = (props) => {
    let Component;
    switch (props.type){
        case "file":
            Component = FormFile;
            break;
        default:
            Component = FormText;
        break;
    }

    return <Component {...props} />
}

export default FormInput;
