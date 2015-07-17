var React = require( 'react')
var Reflux =require('reflux')
var TimeStore =require('../store/TimeStore');
var TimeActions =require('../actions/TimeActions');


var App = React.createClass({
  mixins: [Reflux.connect(TimeStore, 'tick')],

  getInitialState: function initialState() {
    return {tick:this.props.ticks};
  },

  handleClick: function() {
    TimeActions.tick(this.state.tick);
  },

  render: function render() {
    return <h1 onClick={this.handleClick}>{this.state.tick}</h1>;
  }
});


module.exports = App;
