var React = require("react");

var Menu = require("./Menu.jsx");
var Clone = require("./Clone.jsx");
var Cull = require("./Cull.jsx");
var Harvest = require("./Harvest.jsx");
var Mom = require("./Mom.jsx");
var Transfer = require("./Transfer.jsx");
var Audit = require("./Audit.jsx");

var helpers = require("../utils/helpers.js");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: [],
      mongoResults: [],
      searchTerms: ["","",""],
      currentView: 'Clone'
    };

    this.handleNavClick = this.handleNavClick.bind(this);
    this._setSearchFeilds = this._setSearchFeilds.bind(this);
    this._resetMongoResults = this._resetMongoResults.bind(this);
  }

  handleNavClick(navItem){
    this.setState({ currentView: navItem });
  }

  _setSearchFeilds(topic, start, end) {
    this.setState({ searchTerms: [topic, start, end] });
  }

  _resetMongoResults(newData){
    this.setState({ mongoResults: newData} );
  }

  componentDidMount() {

    helpers.apiGet().then((query) => {
      this.setState({mongoResults: query.data});
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if(this.state.searchTerms != prevState.searchTerms){

      helpers.articleQuery(this.state.searchTerms[0], this.state.searchTerms[1], this.state.searchTerms[2]).then(data => {

        this.setState({ apiResults: data });
      });
    }
  }

  render() {
    const currentView = () => {
      if(this.state.currentView === 'Clone')
      {
        return <Clone _setSearchFeilds={this._setSearchFeilds}/>
      }
      else if(this.state.currentView === 'Cull')
      {
        return <Cull _setSearchFeilds={this._setSearchFeilds}/>
      }
      else if(this.state.currentView === 'Harvest')
      {
        return <Harvest _setSearchFeilds={this._setSearchFeilds}/>
      }
      else if(this.state.currentView === 'Mom')
      {
        return <Mom _setSearchFeilds={this._setSearchFeilds}/>
      }
      else if(this.state.currentView === 'Transfer')
      {
        return <Transfer _setSearchFeilds={this._setSearchFeilds}/>
      }
      else if(this.state.currentView === 'Audit')
      {
        return <Audit _setSearchFeilds={this._setSearchFeilds}/>
      }
      else
      {
        return <Clone _setSearchFeilds={this._setSearchFeilds}/>
      }
    }

    return (
      <div>
        <div className="container-fluid row componentStyle">
          <div className="col-xs-12">
            <Menu _setSearchFeilds={this._setSearchFeilds} handleNavClick={this.handleNavClick}/>
          </div>
        </div>
        <div className="container-fluid row componentStyle">
          <div className="col-xs-12">
            {currentView()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;
