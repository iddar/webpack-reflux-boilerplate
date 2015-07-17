var React = require( 'react')
var Reflux =require('reflux')
var App =require('./components/app');


React.render(<App ticks="10" />, document.getElementById('app'));
