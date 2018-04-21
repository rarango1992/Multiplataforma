
import React from 'react';
import {Col} from'reactstrap';

function MainContent(props)
{

    return (
        <Col xs={12} md={9}> 
            {props.children}
        </Col>
    );
}

export default MainContent;
