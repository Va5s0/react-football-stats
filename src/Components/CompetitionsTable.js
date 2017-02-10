import React, { Component } from 'react';
import { Link } from "react-router";


class CompetitionsTable extends Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  render() {
    let list = this.props.data.map(function (comp, i) {
      return (
        <tr key={i+1}>
          <th scope="row">{i+1}</th>
          <td className={comp.id}> <Link to={{ pathname: `/competitions/${comp.id}`, query: { league: comp.league } }}> {comp.caption} </Link> </td>
          <td>{comp.league}</td>
          <td>{comp.numberOfTeams}</td>
        </tr>
      );
    }, this);

    return (
          <div className="row">
            <div className="col-lg-12" >
              <h1>Football Statistics</h1>
              <table  className="table table-hover">
                <caption style={{fontSize:24}} >European Competitions</caption>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Competition</th>
                    <th>League</th>
                    <th>Number of teams</th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
    );
  }
};

export default CompetitionsTable;
