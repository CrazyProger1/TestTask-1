import {Link} from "react-router-dom";

import {Nav} from "react-bootstrap";
import uiStore from "../../store/UIStore";

const Header = () => {
    return (
        <Nav
            variant="tabs"
            activeKey={uiStore.currentPage}
            onSelect={eventKey => uiStore.setPage(eventKey)}>

            <Nav.Item>
                <Nav.Link
                    as={Link}
                    eventKey="link-1"
                    to="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    eventKey="link-2"
                    to="/users">
                    Users
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    eventKey="link-3"
                    to="/groups">
                    Groups
                </Nav.Link>

            </Nav.Item>
        </Nav>
    );
};

export default Header;