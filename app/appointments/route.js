import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('appointment');
  },
  actions: {
    edit () {
      // localSlots = this.get('store').peekAll('slot');
      return this.get('store').peekAll('slot');
    },
    delete (appointment) {
      appointment.destroyRecord();
    },
  },
  // actions:{
  //   updateValue: function(value) {
  //     this.set('value', value);
  //   },
  // },
});
