import React from "react";
import {connect} from "react-redux";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem data={item} key={item.courseId} />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.courses.courseList,
    pagination: state.courses.pagination
})

export default connect(mapStateToProps)(withPaginationList(List, { label: "Course", navAdd: "/add-course" }));
