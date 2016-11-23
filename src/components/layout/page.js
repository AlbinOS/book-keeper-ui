import React from 'react';
import { Grid, Navbar, Jumbotron, Nav, NavItem } from 'react-bootstrap';

class Page extends React.Component {

  render() {

    const {pageContent} = this.props;

    return (
        <div id>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Book Keeper</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/report">Report</NavItem>
              </Nav>
            </Grid>
          </Navbar>
          <Jumbotron>
            <Grid>
                {pageContent}
            </Grid>
          </Jumbotron>
        </div>
    );
  }
}

export default Page;
