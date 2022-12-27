import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import constants from "../../../../constants";

const CourseItem = ({data, onNavigate}) => {
    const navigateToEdit = () => {
        onNavigate(constants.ROUTES.EDIT_COURSE, {
            id: data.courseId
        })
    }

    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.title}</h3>
                <p>{data?.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={navigateToEdit}>Edit</Button>
                <Button variant="danger" onClick={() => {}}>Delete</Button>
                <Button variant="secondary" onClick={() => {}}>Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem);
