import {FormControl, FormGroup, FormLabel} from "react-bootstrap";


const FormInput = ({
    label, type, placeholder, value, onChange, disabled
}) => {
    let props;
    switch (type){
        case "textarea":
            props = { as: type, value }
            break;
        default:
            props = { type, value }
            break;
    }

    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...props}
                placeholder={placeholder}
                onChange={onChange}
                isValid={!!value}
                disabled={disabled}
            />
        </FormGroup>
    )
}

export default FormInput;
