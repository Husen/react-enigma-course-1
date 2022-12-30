import React from "react";
import {ButtonGroup, Form, Button} from "react-bootstrap";

import {
    FormInput,
    StyledContainer
} from "../../components";
import constants from "../../constants";
import {getCourseById} from "../../services/courseApi";
import {editCourse} from "../../store/actions/courseAction";
import {connect} from "react-redux";
import {onChangeTexts} from "../../utils/eventHandlers";
import {useNavigate, useParams} from "react-router-dom";

const initialData = {
    title: "",
    description: "",
    courseTypeId: "",
    courseFile: "null",
    duration: "",
    level: ""
}

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseTypeId", label: "Type Id", type: "text", placeholder: "Enter course type id", disabled: true },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material", disabled: true },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const EditCourse = ({editCourse}) => {
    const [data, setData] = React.useState(initialData);
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        let course = getCourseById(params.courseId);
        course = {
            courseId: course?.courseId,
            title: course?.title,
            description: course?.description,
            courseFile: course?.link,
            courseTypeId: course?.courseType?.courseTypeId,
            level: course?.courseInfo?.level,
            duration: course?.courseInfo?.duration
        }

        setData(course);
    }, [params.id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: params.courseId,
            ...data
        };
        delete payload.courseFile;
        delete payload.courseTypeId;

        editCourse(payload)
        navigate(constants.ROUTES.COURSE);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(constants.ROUTES.COURSE);
    }

    return (
        <StyledContainer>
            <Form>
                {FORM_LIST.map((item, index) => {
                    return (
                        <FormInput
                            key={index}
                            {...item}
                            value={data[item.id]}
                            onChange={!item.disabled ? onChangeTexts(item.id, setData) : () => {}}
                        />
                    )
                })}
                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCourse: (data) => dispatch(editCourse(data)),
    }
}

export default connect(null, mapDispatchToProps)(EditCourse);
