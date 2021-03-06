var React = require("react");

var Audit = React.createClass({

  handleSubmitOne: function(event) {

   event.preventDefault();
   alert('WishList: Data Ready To View!');

  },

  render: function() {
    return (

      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Audit</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this.handleSubmitOne}>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select Batch to Audit:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>All Plants</option>
                <option>Hypothetical license 1 #111111111</option>
                <option>Hypothetical license 2 #222222222</option>
                <option>Hypothetical license 3 #333333333</option>
                <option>Clone 1</option>
                <option>Clone 2</option>
                <option>Early Veg</option>
                <option>Late Veg</option>
                <option>Bloom 1</option>
                <option>Bloom 2</option>
                <option>Bloom 3</option>
              </select>
            </div>

            <div className="form-group col-xs-12">
              <label htmlFor="startYear">Batch(es):</label>
              <textarea type="text" className="form-control text-center" id="startYear" rows="5" onChange={this._handleStartYearChange} />
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Display Batch(es)</button>

          </form>
        </div>

      </div>



    );
  }
});

module.exports = Audit;
