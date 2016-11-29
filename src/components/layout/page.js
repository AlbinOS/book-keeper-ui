import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Page extends React.Component {

  render() {

    const {pageContent} = this.props;

    return (
        <div id>
            <Navbar className="navbar-fixed-top navbar-dark bg-inverse">
              <NavbarBrand href="/">Book Keeper</NavbarBrand>
              <Nav navbar>
                  <NavItem className={(this.props.location.pathname === "/" ? 'active' : '')}>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem className={(this.props.location.pathname === "/report" ? 'active' : '')}>
                    <NavLink href="/report">Report</NavLink>
                  </NavItem>
              </Nav>
              <Nav className="float-xs-right" navbar>
                <NavItem className={(this.props.location.pathname === "/about" ? 'active' : '')}>
                  <NavLink href="/about">About</NavLink>
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
