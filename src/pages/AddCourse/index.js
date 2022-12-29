import React from 'react';
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {connect} from "react-redux";
import {Prompt, useHistory} from "react-router-dom";

import {FormInput, StyledContainer} from "../../components";
import {addCourse} from "../../store/actions/courseAction";
import constants from "../../constants";

import {StyledTitle} from "./styles";
import useAddCourse from "./useAddCourse";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseTypeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = ({
    addCourse
}) => {
    const { getter, setter } = useAddCourse();
    const history = useHistory();

    const submitHandler = () => {
        addCourse(getter)
        history.push(constants.ROUTES.COURSE_LIST)
    }

    return (
        <StyledContainer>
            <Prompt
                message={() => "Apa kamu yakin ingin meninggalkan halaman ini?"}
                when={!getter.isDisable}
            />
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                { FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                )) }
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => history.push(constants.ROUTES.COURSE_LIST)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCourse: course => dispatch(addCourse(course))
})

export default connect(null, mapDispatchToProps)(AddCourse);
