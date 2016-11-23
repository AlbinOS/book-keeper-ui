import React from 'react';
import { PageHeader } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
        <div>
            <PageHeader>Welcome to Book Keeper !</PageHeader>
            <p>Serving live timetracking report of your JIRA project with love.</p>
        </div>
    );
  }
}

export default Home;
