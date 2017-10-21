
var React = require("react");

var Cull = React.createClass({

  getInitialState: function() {
    return { text: "", items: [] };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmitOne: function(event) {

   event.preventDefault();
  //  alert('WishList: Plant Ready To Cull!');
   var newItems = this.state.items;
   newItems.push(this.state.text.split("").join(""));
   this.setState({items: newItems});

 },

 handleSubmitTwo: function(event) {

  event.preventDefault();
  alert('WishList: Database Updated!');

},

  render: function() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Enter PO#(s) To Be Culled</h3>
              </div>
              <div className="panel-body text-center">
                <form role="form" onSubmit={this.handleSubmitOne}>
                  <div className="form-group">

                    <h4>
                      <strong>Enter PO#(s) Here:</strong>
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
                  <h3 className="panel-title text-center">Plants Ready to Cull:</h3>
                </div>
                <div className="panel-body text-center">
                  <form role="form" onSubmit={this.handleSubmitTwo}>
                    <div className="form-group">
                      <h5>
                        Culled Plant#: {this.state.text.split("").join("")}
                      </h5>
                    </div>

                    {this.state.items.map(function (item) {
                      return (
                        <div className="form-group">
                          <h5>
                            Culled Plant#: {item}
                          </h5>
                        </div>
                      )
                    })}

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
module.exports = Cull;
