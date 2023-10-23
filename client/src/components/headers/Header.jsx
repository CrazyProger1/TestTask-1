import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import uiStore from '../../store/UIStore';

const Header = () =>
    <Nav
        variant='tabs'
        activeKey={uiStore.currentPage}
        onSelect={eventKey => uiStore.setPage(eventKey)}>

        <Nav.Item>
            <Nav.Link
                as={Link}
                eventKey='/'
                to='/'>
                Home
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                as={Link}
                eventKey='/users'
                to='/users'>
                Users
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                as={Link}
                eventKey='/groups'
                to='/groups'>
                Groups
            </Nav.Link>
        </Nav.Item>
    </Nav>

export default Header;