var React = require("react");

var Menu = React.createClass({



  render: function() {

    return (
    	<div>
	      <div>
		    <div className="buttonContainer"><img src="images/texturedbg2.png" className ="center-block" id="buttonDiv" />
		      <div className="row1">
		        <div className="col col-md-4">
		        </div>
		        <div className="col col-md-2 createCloneButton" >
		          <img src="/images/asset 1@3x.png" height="265px" width="273px" id="createCloneButton" onClick={() => this.props.handleNavClick('Clone')}/>
		        </div>
		        <div className="col col-md-2">
		        </div>
		        <div className="col col-md-2 movePlantButton">
		          <img src="/images/asset 2@3x.png" height="269px" width="274px" id="movePlantButton" onClick={() => this.props.handleNavClick('Transfer')}/>
		        </div>
		        <div className="col col-md-4">
		        </div>
		      </div>
		      <div className="row2">
		        <div className="col col-md-2">
		        </div>
		        <div className="col col-md-2 harvestPlantButton">
		          <img src="/images/asset 3@3x.png" height="266px" width="270px" id="harvestPlantButton" onClick={() => this.props.handleNavClick('Harvest')}/>
		        </div>
		        <div className="col col-md-3">
		        </div>
		        <div className="col col-md-2 cullPlantButton">
		          <img src="/images/asset 4@3x.png" height="269px" width="325px" id="cullPlantButton" onClick={() => this.props.handleNavClick('Cull')}/>
		        </div>
		        <div className="col col-md-3">
		        </div>
		      </div>
		      <div className="row3">
		        <div className="col col-md-3">
		        </div>
		        <div className="col col-md-2 makeMomButton">
		          <img src="/images/asset 5@3x.png" height="270px" width="305px" id="makeMomButton" onClick={() => this.props.handleNavClick('Mom')}/>
		        </div>
		        <div className="col col-md-1">
		        </div>
		        <div className="col col-md-2 viewDataButton">
		          <img src="/images/asset 7@3x.png" height="280px" width="305px" id="viewDataButton" onClick={() => this.props.handleNavClick('Audit')}/>
		        </div>
		        <div className="col col-md-3">
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
});

class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonVisible: false
    }
  }

  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
          Parent - click me to show/hide my child
        </div>
        {
          this.state.buttonVisible
            ? <Child />
            : null
        }
      </div>
    )
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};

module.exports = Menu;