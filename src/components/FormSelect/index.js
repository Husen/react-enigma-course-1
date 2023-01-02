import {Form, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";

const FormText = ({
      label, placeholder, values, onChange, disabled, value
  }) => {
    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <Form.Select
                defaultValue={value}
                disabled={disabled}
                onChange={onChange}
                isValid={!!value}
            >
                <option disabled selected>{placeholder}</option>
                {values?.map((item) => (
                    <option
                        value={item.value}
                        selected={item.value === value}
                    >
                        {item.label}
                    </option>
                ))}
            </Form.Select>
        </FormGroup>
    )
}

export default FormText;
