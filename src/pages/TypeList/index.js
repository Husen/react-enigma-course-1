import React from "react";

import withList from "../../hoc/withList";

import {StyledListGroup} from "./styles";
import TypeItem from "./components/TypeItem";
import {connect} from "react-redux";

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem data={item} key={item.courseTypeId} />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    dataList: state.courseTypes.typeList,
    pagination: state.courseTypes.pagination
})

export default connect(mapStateToProps)(withList(List));
