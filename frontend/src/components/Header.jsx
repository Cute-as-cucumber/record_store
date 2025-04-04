import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from "../assets/logo.png";

const Header = () => {
return (
    <header>
            {/* Nav bar expands when screen is large and collapse to hamburger button when an item is selected */}
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                        <img src = {logo} alt= "Proshop"></img>
                        ProShop
                        </Navbar.Brand>
                    </LinkContainer>
                    {/* Hamburger button for collapsing navbar content on small screens */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id = "basic-navbar-nav">
                        {/* ms-auto pushes nav items to the right side of navbar */}
                        <Nav className = 'ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><FaUser />Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
)
}

export default Header