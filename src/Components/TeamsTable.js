import React, { Component } from 'react';

class TeamsTable extends Component{

  static propTypes = {
    teamData: React.PropTypes.array.isRequired
  }

  render() {
    let list = this.props.teamData.map(function (team, i) {
      return (
        <tr key={i+1}>
          <th scope="row">{i+1}</th>
          <td className={team.name}>{team.name}</td>
          <td>{team.squadMarketValue}</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <div className="col-lg-12">
          <table  className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>Team value</th>
              </tr>
            </thead>
            <tbody>{list}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};

export default TeamsTable;
