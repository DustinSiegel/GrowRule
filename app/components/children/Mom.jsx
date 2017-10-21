
var React = require("react");

var Mom = React.createClass({

  getInitialState: function() {
    return { text: "" };
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
                <h3 className="panel-title text-center">Enter PO# Of Plant To Be Made Into A Mom</h3>
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
                    <button type="submit" className="btn btn-info btn- col-md-offset-4 col-md-4" id="submitCull">PO Ready</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Plants Ready to Be Moms:</h3>
                </div>
                <div className="panel-body text-center">
                  <form>
                    <div className="form-group">
                      <h5>
                        New Mom#: {this.state.text.split("").join("")}
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
      </div>
    );
  }
});

module.exports = Mom;
