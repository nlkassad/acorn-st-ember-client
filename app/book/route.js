import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('slot');
  },

  actions: {
    toggleSlotAvailable (slot) {
      slot.toggleProperty('available');
      slot.save();
    },

    // deleteItem (item) {
    //   item.destroy();
    //   //item.destroyRecord();
    //   item.save();
    // },
    //
    createAppointment (newAppointment) {
      let appointment = this.get('store').createRecord('appointment', newAppointment);
      return appointment.save();
    },
    //
    // edit () {
    //
    // }
  },
});
