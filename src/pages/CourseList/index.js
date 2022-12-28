import React from "react";
import {connect, useDispatch} from "react-redux";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import {deleteCourse} from "../../store/actions/courseAction";

const List = ({data, onNavigate}) => {
    const dispatch = useDispatch();
    const onNavigateToEdit = (id) => () => {
        onNavigate(constants.ROUTES.EDIT_COURSE, { id });
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Anda yakin ingin menghapus course ini?");
        if (isOk) {
            dispatch(deleteCourse(id));
        }
    }

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem
                    data={item}
                    key={item.courseId}
                    onNavigateToEdit={onNavigateToEdit(item.courseId)}
                    onDelete={onDelete(item.courseId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.courses.courseList,
    pagination: state.courses.pagination
})

export default connect(mapStateToProps)(withPaginationList(List, { label: "Course", navAdd: "/add-course" }));
