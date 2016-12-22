import React from 'react';
import {Table} from 'reactstrap';
import LoadingGif from './../images/loading.gif';

class Loader extends React.Component {
    render() {
        return (
            <div>
                <img className="img-fluid mx-auto d-block" alt="Loading ..." src={LoadingGif}/>
            </div>
        );
    }
}

class TimetrackingRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <a href={this.props.report.ticket_url}>{this.props.report.ticket}</a>
                </td>
                <td>{this.props.report.user}</td>
                <td>{this.props.report.date}</td>
                <td>
                    <a href={this.props.report.worklog_url}>{this.props.report.duration}</a>
                </td>
            </tr>
        );
    }
}

class TimetrackingTable extends React.Component {

    render() {
        var rows = []

        var filterText = this.props.filterText.split(":");
        var filterTag = ""
        var filterValueUpper = ""

        if (filterText.length > 1) {
            filterTag = filterText[0]
            filterValueUpper = filterText[1].toUpperCase()
        } else {
            filterTag = "ticket"
            filterValueUpper = this.props.filterText.toUpperCase()
        }

        this.props.reports.forEach((report) => {
            if (report[filterTag].toUpperCase().indexOf(filterValueUpper) === -1) {
                return;
            }
            rows.push(<TimetrackingRow report={report} key={report.worklog_id}/>);
        });

        return (
            <Table striped responsive hover size="sm">
                <thead className="thead-inverse">
                    <tr>
                        <th>Task</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Duration (Hours)</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(this.filterTextInput.value);
    }

    render() {
        return (
            <form>
                <input className="form-control" type="search" placeholder="Search ..." value={this.props.filterText} ref={(input) => this.filterTextInput = input} onChange={this.handleChange}/>
            </form>
        );
    }
}

class FilterableTimetrackingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            reports: []
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    }

    fetchTimetrackings() {
        var request = new Request('/api/timetracking', {
            headers: new Headers({'Accept': 'application/json'})
        });

        fetch(request).then((response) => {
            return response.json()
        }).then((json) => {
            this.setState({reports: json})
        }).catch((error) => {
            console.error(error);
        });
    }

    // This method is always called, on the client, when the component has been
    // rendered onto the DOM.
    componentDidMount() {
        this.fetchTimetrackings();
    }

    render() {

        if (this.state.reports.length === 0) {
            return (
                <div>
                    <h1>
                        Report <small className="text-muted"> loading ...</small>
                    </h1>
                    <Loader/>
                </div>
            );
        }

        return (
            <div>
                <h1>
                    Report
                </h1>
                <br/>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                <br/>
                <TimetrackingTable className="text-center" reports={this.state.reports} filterText={this.state.filterText}/>
            </div>
        );
    }
}

export default FilterableTimetrackingTable;
