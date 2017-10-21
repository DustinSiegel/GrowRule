
var React = require("react");

var Clone = React.createClass({


    getInitialState: function() {
      return { licNumber: "", roomName: "", text: "", numbCuttings: 0 };
    },

    handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },

    render: function() {
      return (

  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Select The Licence These Clones Belong To:</h3>
              <select
                type="number"
                value={this.state.text}
                className="form-control"
                id="licNumber"
                onChange={this.handleChange}
                required >
              <option>Hypothetical licence 1</option>
              <option>Hypothetical licence 2</option>
              <option>Hypothetical licence 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Select Where These Clones Go:</h3>
            <select
              type="number"
              value={this.state.text}
              className="form-control"
              id="roomName"
              onChange={this.handleChange}
              required >
              <option>Clone 1</option>
              <option>Clone 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Enter Number of Cuttings</h3>
          </div>
          <div className="panel-body text-center">
            <form>
              <div className="form-group">

                <h4>
                  <strong>Number of Cuttings:</strong>
                </h4>
                <input
                  type="number"
                  value={this.state.text}
                  className="form-control"
                  id="numbCuttings"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Enter Plant Mother PO#</h3>
          </div>
          <div className="panel-body text-center">
            <form>
              <div className="form-group">

                <h4>
                  <strong>Enter PO# Here:</strong>
                </h4>
                <input
                  type="text"
                  value={this.state.text}
                  className="form-control"
                  id="text"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <button type="submit" className="btn btn-info btn- col-md-offset-4 col-md-4" id="submitCull">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">New Clones:</h3>
          </div>
          <div className="panel-body text-center">
            <form>
              <div className="form-group">
                <h5>
                  Lic#: {this.state.licNumber} / Rm: {this.state.roomName} / {this.state.numbCuttings} Clones from Mother#: {this.state.text.split("").join("")}
                </h5>
              </div>
              <br />

              <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="updateDatabaseBtn">Update Database</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
});


module.exports = Clone;
