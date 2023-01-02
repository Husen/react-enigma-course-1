import React from "react";
import {FormFile, FormText, FormSelect} from "../index";

const FormInput = (props) => {
    let Component;
    switch (props.type){
        case "file":
            Component = FormFile;
            break;
        case "select":
            Component = FormSelect;
            break;
        default:
            Component = FormText;
        break;
    }

    return <Component {...props} />
}

export default FormInput;
