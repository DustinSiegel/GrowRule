
var React = require("react");

var Mom = React.createClass({

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
  //   this.props._setSearchFeilds(this.state.mom, //this.state.poNum, this.state.date, this.state.strainName);
  // },
  //
  // _handlemomChange: function(e) {
  //   this.setState({mom: e.target.value});
  // },
  //
  // _handlepoNumChange: function(e) {
  //   this.setState({poNum: e.target.value});
  // },
  //
  // _handledateChange: function(e) {
  //   this.setState({date: e.target.value});
  // },
  //
  //_handlestrainNameChange: function(e) {
  //   this.setState({strainName: e.target.value});
  // },

  render: function() {
    return (

      // <div>Mom file connected!</div>
      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Make A Mom</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="Mom" className="text-center">Enter or Scan PO#(s) to be Made into a Mother Plant</label>
              <input type="text" className="form-control text-center" id="mom" onChange={this._handlemomChange} />
              <br />
              <button type="submit" className="btn btn-info btn- col-md-offset-4 col-md-4" id="addField">Add to Change List</button>
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="poNum">Plants Ready to be Made into a Mom:</label>
              <textarea type="text" className="form-control text-center" id="poNum" rows="5" onChange={this._handlepoNumChange} />
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Update Database</button>

          </form>
        </div>

      </div>

    );
  }
});

module.exports = Mom;
