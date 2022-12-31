import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import {StyledListGroup} from "./styles";
import TypeItem from "./components/TypeItem";
import constants from "../../constants";

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem data={item} key={item.courseTypeId} />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(List, {
    label: "Course Type",
    routeToAdd: constants.ROUTES.ADD_COURSE_TYPE,
    query: () => {}
});
