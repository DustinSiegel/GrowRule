import React, { Component } from 'react';
import { render } from 'react-dom';
import { Document, Page } from 'react-pdf/build/entry.webpack';

var React = require("react");

var Menu = React.createClass({

  // getInitialState: function() {
  //   return {
  //     topic: "",
  //     startYear: "",
  //     endYear: ""
  //   };
  // },
  //
  // _handleSubmit: function(event) {
  //
  //   event.preventDefault();
  //
  //   this.props._setSearchFeilds(this.state.topic, this.state.startYear, this.state.endYear);
  // },
  //
  // _handleTopicChange: function(e) {
  //   this.setState({topic: e.target.value});
  // },
  //
  // _handleStartYearChange: function(e) {
  //   this.setState({startYear: e.target.value});
  // },
  //
  // _handleEndYearChange: function(e) {
  //   this.setState({endYear: e.target.value});
  // },

  render: function() {
    return (

      <div>
        <img src={require('../../../public/images/growrule01.pdf')} />
        Some Words in It
      </div>

    );
  }
});

module.exports = Menu;
