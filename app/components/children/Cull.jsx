
var React = require("react");

var Cull = React.createClass({

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
  //   this.props._setSearchFeilds(this.state.cull, this.state.poNum, this.state.date);
  // this.state.strainName);
  // },
  //
  // _handleTopicChange: function(e) {
  //   this.setState({cull: e.target.value});
  // },
  //
  // _handleStartYearChange: function(e) {
  //   this.setState({poNum: e.target.value});
  // },
  //
  // _handleEndYearChange: function(e) {
  //   this.setState({date: e.target.value});
  // },

  // _handleEndYearChange: function(e) {
  //   this.setState({strainName: e.target.value});
  // },

  // }

  render: function() {
    return (

      // <div>Cull file connected!</div>
      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Cull</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="Cull" className="text-center">Enter or Scan PO#(s) to be Culled</label>
              <input type="text" className="form-control text-center" id="cull" onChange={this._handlecullChange} />
              <br />
              <button type="submit" className="btn btn-info btn- col-md-offset-4 col-md-4" id="addField">Add to Change List</button>
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="startYear">Plants Ready to be Culled:</label>
              <textarea type="text" className="form-control text-center" id="startYear" rows="5" onChange={this._handleStartYearChange} />
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Update Database</button>

          </form>
        </div>

      </div>

    );
  }
});

module.exports = Cull;
