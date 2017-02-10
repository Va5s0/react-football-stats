import React, { Component } from 'react';
import $ from 'jquery';
import CompetitionsTable from './CompetitionsTable';
import secrets from '../secrets';

class Competitions extends Component {
  constructor(props){
    super(props);
    this.state = {
      compData: [],
    }
  }

  getCompetitionsData(){
    $.ajax({
      headers: { 'X-Auth-Token': secrets.token },
      url:"http://api.football-data.org/v1/competitions/?season=2016",
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({compData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentDidMount(){
    this.getCompetitionsData();
  }

  render() {
    return (
      <div>
        <CompetitionsTable data={this.state.compData} />
      </div>
    );
  }
};

export default Competitions;
