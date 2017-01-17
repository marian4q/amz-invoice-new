console.log("lala2sds3");

var React = require('react');
var ReactDOM = require('react-dom')
var _ = require('lodash');


var Layout = React.createClass({
  render : function () {
    return (
      <div>
        Component 1
      </div>
    );
  }

});

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
document.write("It works.");
