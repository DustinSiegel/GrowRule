var React = require("react");

var Menu = require("./Menu.jsx");
var Clone = require("./Clone.jsx");
var Cull = require("./Cull.jsx");
var Harvest = require("./Harvest.jsx");
var Mom = require("./Mom.jsx");
var Transfer = require("./Transfer.jsx");

var helpers = require("../utils/helpers.js");

var Main = React.createClass({

  getInitialState: function() {
    return {
      apiResults: [],
      mongoResults: [],
      searchTerms: ["","",""]
    };
  },

  _setSearchFeilds: function(topic, start, end) {
    this.setState({ searchTerms: [topic, start, end] });
  },

  _resetMongoResults: function(newData){
    this.setState({ mongoResults: newData} );
  },

  componentDidMount: function() {

    helpers.apiGet().then(function(query){
      this.setState({mongoResults: query.data});
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {

    if(this.state.searchTerms != prevState.searchTerms){

      helpers.articleQuery(this.state.searchTerms[0], this.state.searchTerms[1], this.state.searchTerms[2]).then(function(data) {

        this.setState({ apiResults: data });
      }.bind(this));
    }

  },

  render: function() {
    return (

      <div className="container" style={ {backgroundColor: "white", borderStyle: "solid", borderWidth: "1px"} }>

        <div className="page-header">
          <h4 className="text-center">Tap Anywhere To Start</h4>
        </div>
        <Menu _setSearchFeilds={this._setSearchFeilds} />
        <Clone _setSearchFeilds={this._setSearchFeilds} />
        <Cull _setSearchFeilds={this._setSearchFeilds} />
        <Harvest _setSearchFeilds={this._setSearchFeilds} />
        <Mom _setSearchFeilds={this._setSearchFeilds} />
        <Transfer _setSearchFeilds={this._setSearchFeilds} />
      </div>

    );
  }
});

module.exports = Main;
