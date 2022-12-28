import React from "react";
import {connect} from "react-redux";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";

const List = ({data, onNavigate}) => {
    const onNavigateToEdit = (id) => () => {
        onNavigate(constants.ROUTES.EDIT_COURSE, { id });
    }
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem
                    data={item}
                    key={item.courseId}
                    onNavigateToEdit={onNavigateToEdit(item.courseId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.courses.courseList,
    pagination: state.courses.pagination
})

export default connect(mapStateToProps)(withPaginationList(List, {
    label: "Course", navAdd: constants.ROUTES.ADD_COURSE
}));
