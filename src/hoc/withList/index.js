import React from "react";
import {Button} from "react-bootstrap";

import {Pagination, StyledContainer} from "../../components";

import {StyledText} from "./styles";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

export default (ListComponent) => {
    return (props) => {
        const [dataList, setDataList] = React.useState(props.dataList);
        const [page, setPage] = React.useState(1);

        return (
            <>
                <StyledContainer>
                    <Button variant="success">Add Data</Button>
                    {dataList?.length > 0 ? <ListComponent data={dataList} /> : <Empty />}
                </StyledContainer>
                <Pagination
                    totalPage={props?.pagination?.totalPage}
                    onChangePage={setPage}
                    page={page}
                />
            </>
        )
    }
}
