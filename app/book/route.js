import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      slots: this.get('store').findAll('slot'),
      user: this.get('store').findRecord('user', this.get('auth.credentials.id'))
    });
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
      newAppointment.slot.toggleProperty('available');
      newAppointment.slot.save()
      .then(() => {
        let appointment = this.get('store').createRecord('appointment', newAppointment);
        appointment.save();
      });
    },
    //
    // edit () {
    //
    // }
  },
});
