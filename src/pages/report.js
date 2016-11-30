import React from 'react';

import { Table } from 'reactstrap';

class TimetrackingRow extends React.Component {
  render() {
    return (
        <tr>
          <td><a href={this.props.report.ticket_url}>{this.props.report.ticket}</a></td>
          <td>{this.props.report.user}</td>
          <td>{this.props.report.date}</td>
          <td><a href={this.props.report.worklog_url}>{this.props.report.duration}</a></td>
        </tr>
    );
  }
}

class TimetrackingTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };
    }

    fetchTimetrackings() {
        var request = ""
        if (typeof this.props.sprint !== 'undefined') {
             request = new Request('/api/timetracking/sprints/' + this.props.sprint, {
                headers: new Headers({
                    'Accept': 'application/json'
                })
            });
        } else {
            request = new Request('/api/timetracking', {
               headers: new Headers({
                   'Accept': 'application/json'
               })
            });
        }

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
        this.fetchTimetrackings();
    }

  render() {
    var rows = [];

    var filterText = this.props.filterText.split(":");
    var filterTag = ""
    var filterValueUpper = ""

    if (filterText.length > 1 ) {
        filterTag = filterText[0]
        filterValueUpper = filterText[1].toUpperCase()
    } else {
        filterTag = "ticket"
        filterValueUpper = this.props.filterText.toUpperCase()
   }

    this.state.reports.forEach((report) => {
      if (report[filterTag].toUpperCase().indexOf(filterValueUpper) === -1) {
        return;
      }
      rows.push(<TimetrackingRow report={report} key={report.worklog_id} />);
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
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search ..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

class FilterableTimetrackingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
      var title = this.props.params.sprint !== 'undefined' ?
        <small className="text-muted">{this.props.params.sprint}</small> :
        '';
    return (
      <div>
        <h1>
            Report {title}
        </h1>
        <br />
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <br />
        <TimetrackingTable
          sprint={this.props.params.sprint}
          products={this.props.products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableTimetrackingTable;
