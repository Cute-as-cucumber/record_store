import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Header = () => {
return (
    <header>
            {/* Nav bar expands when screen is large and collapse to hamburger button when an item is selected */}
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                    <img src = {logo} alt= "Proshop"></img>
                    ProShop
                    </Navbar.Brand>
                    {/* Hamburger button for collapsing navbar content on small screens */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id = "basic-navbar-nav">
                        {/* ms-auto pushes nav items to the right side of navbar */}
                        <Nav className = 'ms-auto'>
                            <Nav.Link href = "/cart"><FaShoppingCart /> Cart</Nav.Link>
                            <Nav.Link hred = "/login"><FaUser />Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
)
}

export default Header