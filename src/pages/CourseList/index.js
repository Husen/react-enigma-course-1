import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

import {StyledContainer} from "../../components";
import {connect} from "react-redux";
import constants from "../../constants";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, onNavigate, params}) => {
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem data={item} key={item.courseId} onNavigate={onNavigate} params={params} />
            ))}
        </StyledListGroup>
    )
}

const CourseList = ({courses, onNavigate, params}) => {
    const [data, setData] = React.useState(courses);
    return (
        <StyledContainer>
            <Button variant="success" onClick={() => onNavigate(constants.ROUTES.ADD_COURSE)}>Add Course</Button>
            {data?.length > 0 ? <List data={data} onNavigate={onNavigate} params={params} /> : <Empty />}
        </StyledContainer>
    )
}

const mapStateToProps = state => ({
    courses: state.courses.courseList
})

export default connect(mapStateToProps)(CourseList);
