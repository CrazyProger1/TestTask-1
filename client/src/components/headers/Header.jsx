import React from 'react';
import {Link} from "react-router-dom";

import {Nav} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;