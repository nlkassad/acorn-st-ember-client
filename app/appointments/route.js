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
      console.log(appointment.id);
      // let aptId = appointment.id;
      console.log(appointment.user_id);
      appointment.destroyRecord();
      appointment.save();
      // return this.sendAction('delete', this.get('appointment'));
      // return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
      // .finally(() => this.get('credentials').reset());
    },
  },
  // actions:{
  //   updateValue: function(value) {
  //     this.set('value', value);
  //   },
  // },
});
