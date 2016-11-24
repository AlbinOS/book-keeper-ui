import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Page extends React.Component {

  render() {

    const {pageContent} = this.props;

    return (
        <div id>
            <Navbar className="navbar-fixed-top navbar-dark bg-inverse">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav className="float-xs-right" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
              </Nav>
            </Navbar>

            <Container>
                {pageContent}
            </Container>

            <Container>
                <hr />
                <footer>
                    <p>&copy; Albin Gilles 2016</p>
                </footer>
            </Container>
        </div>
    );
  }
}

export default Page;
