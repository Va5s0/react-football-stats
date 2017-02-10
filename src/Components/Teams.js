import React, { Component } from 'react';
import $ from 'jquery';
import TeamsTable from './TeamsTable';
import secrets from '../secrets';

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamData: [],
      source: "",
    }
  }

  componentWillMount(){
    this.dataSource();
  }

  dataSource(props) {
    var url = 'http://api.football-data.org/v1/competitions/x/teams';
    this.setState({source: url.replace(url.split('/')[5], this.props.params.id)});
  }

  getTeamsData(){
    $.ajax({
      headers: { 'X-Auth-Token': secrets.token },
      url:this.state.source,
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({teamData: data.teams});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentDidMount(){
    this.getTeamsData();
  }

  render() {
    return (
      <div>
        <TeamsTable teamData={this.state.teamData}/>
      </div>
    );
  }
};

export default Teams;
