import React from "react";
import {ButtonGroup, Form, Button} from "react-bootstrap";

import {
    FormInput,
    StyledContainer
} from "../../components";
import constants from "../../constants";
import {onChangeTexts} from "../../utils/eventHandlers";
import {useNavigate, useParams} from "react-router-dom";
import {getCourseById, updateCourseById} from "../../services/courseApi";
import useFetchQuery from "../../hook/useFetchQuery";
import useFetchMutation from "../../hook/useFetchMutation";

const initialData = {
    title: "",
    description: "",
    courseTypeId: "",
    courseFile: null,
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

const transformCourseData = (data) => ({
    courseId: data?.courseId,
    title: data?.title,
    description: data?.description,
    courseTypeId: data?.courseType?.courseTypeId,
    courseType: data?.courseType,
    courseFile: data?.link,
    duration: data?.courseInfo?.duration,
    level: data?.courseInfo?.level
})

const EditCourse = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {data, loading} = useFetchQuery(getCourseById, params.courseId);
    const {fetchMutation} = useFetchMutation(
        updateCourseById,
        () => navigate(constants.ROUTES.COURSE)
    )
    const [course, setCourse] = React.useState(initialData);

    React.useEffect(() => {
        const result = data?.data;
        const courseData = transformCourseData(result);
        setCourse(courseData)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {...course};
        delete newCourse.courseFile;
        fetchMutation(newCourse);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(constants.ROUTES.COURSE);
    }

    if (loading) {
        return (
            <StyledContainer>
                <p className="lead">Loading...</p>
            </StyledContainer>
        )
    }

    return (
        <StyledContainer>
            <Form>
                {FORM_LIST.map((item, index) => {
                    return (
                        <FormInput
                            key={index}
                            {...item}
                            value={course[item.id]}
                            onChange={!item.disabled ? onChangeTexts(item.id, setCourse) : () => {}}
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

export default EditCourse;
