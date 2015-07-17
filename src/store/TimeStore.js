var Reflux =require('reflux');
var TimeActions =require('../actions/TimeActions');

var TimeStore = Reflux.createStore({
  listenables: [TimeActions],

  onTick: function(tick) {
    this.trigger(tick -1);
  }
});

module.exports = TimeStore;
