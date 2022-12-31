import React from "react";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import {useNavigate} from "react-router-dom";
import {deleteCourseById, downloadCourseFile, getCourses} from "../../services/courseApi";
import useFetchMutation from "../../hook/useFetchMutation";

const List = ({data, refetch}) => {
    const navigate = useNavigate();
    const {fetchMutation} = useFetchMutation(deleteCourseById, refetch);
    const onNavigateToEdit = (id) => () => {
        navigate(`${constants.ROUTES.EDIT_COURSE}/${id}`);
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Anda yakin ingin menghapus course ini?");
        if (isOk) {
            fetchMutation(id);
        }
    }

    const onDownload = (fileLink) => (e) => {
        e.preventDefault();
        const path = fileLink?.split("\\");
        const filename = path[path.length - 1];

        downloadCourseFile(filename);
    }

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem
                    data={item}
                    key={item.courseId}
                    onNavigateToEdit={onNavigateToEdit(item.courseId)}
                    onDelete={onDelete(item.courseId)}
                    onDownload={onDownload(item.link)}
                />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(List, {
    label: "Course",
    routeToAdd: constants.ROUTES.ADD_COURSE,
    query: getCourses
});
