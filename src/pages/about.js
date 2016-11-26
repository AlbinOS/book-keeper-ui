import React from 'react';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

class About extends React.Component {
  render() {
    return (
        <div>
            <h1>About Book Keeper</h1>
            <p>Contact <a href="mailto:gilles.albin@gmail.com" target="_top">Albin Gilles</a> for any questions or have a look on <a href="https://github.com/AlbinOS/book-keeper"><GoMarkGithub /> GitHub</a>.</p>
        </div>
    );
  }
}

export default About;
