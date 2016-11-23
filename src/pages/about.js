import React from 'react';
import { PageHeader } from 'react-bootstrap';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

class About extends React.Component {

  render() {
    return (
        <div>
            <PageHeader>About Book Keeper</PageHeader>
            <p>Contact <a href="mailto:gilles.albin@gmail.com" target="_top">Albin Gilles</a> for any questions or have a look on <a href="https://github.com/AlbinOS/book-keeper"><GoMarkGithub /> GitHub</a>.</p>
        </div>
    );
  }
}

export default About;
