console.log("lala2sds333");

var React = require('react');
var ReactDOM = require('react-dom')
var _ = require('lodash');
var Container = require ('./component-container');


var Layout = React.createClass({
  render : function () {
    return (
      <div>
        Component 1
        <Container />
      </div>
    );
  }

});

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
document.write("It works.");
