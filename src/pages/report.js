import React from 'react';

import { Table } from 'reactstrap';

class Report extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };
    }

    // Olol
    report() {
        var request = new Request('http://localhost:8080/report/timetracking', {
            headers: new Headers({
                'Accept': 'application/json'
            })
        });

        fetch(request)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({ reports: json })
            }).catch((error) => {
                console.error(error);
            });
    }

    // This method is always called, on the client, when the component has been
    // rendered onto the DOM.
    componentDidMount() {
        this.report();
    }

    render() {
        return (
            <div>
                <h1>Report</h1>
                <Table striped responsive hover size="sm">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Task</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Duration (Hours)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.reports.map((report, index) => (
                        <tr key={index}>
                          <td><a href={report.ticket_url}>{report.ticket}</a></td>
                          <td>{report.user}</td>
                          <td>{report.date}</td>
                          <td><a href={report.worklog_url}>{report.duration}</a></td>
                        </tr>
                    ))}
                  </tbody>
                </Table>
            </div>
        );
    }
}

export default Report;
