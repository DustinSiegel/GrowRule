
var React = require("react");

var Clone = React.createClass({

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

      // <div>Clone file connected!</div>
      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Clone</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Select The Licence These Clones Belong To:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Hypothetical licence 1 #111111111</option>
                <option>Hypothetical licence 2 #222222222</option>
                <option>Hypothetical licence 3 #333333333</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Select Where These Clones Go:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Clone 1</option>
                <option>Clone 2</option>
              </select>
            </div>

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="topic" className="text-center">Enter or Scan PO#(s) to be Moved</label>
              <input type="text" className="form-control text-center" id="topic" onChange={this._handleTopicChange} />
              <br />
              <button type="submit" className="btn btn-info btn- col-md-offset-4 col-md-4" id="addField">Add to Change List</button>
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="startYear">Plants Ready to be Moved:</label>
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

module.exports = Clone;
