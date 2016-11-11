import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  newAppointment: {
    text: null,
    done: false,
  },
  classNameBindings: ['slotUnavailable'],
  slotUnavailable: Ember.computed.alias('slot.done'),
  actions: {
    toggleAvailable () {
      return this.sendAction('toggleSlotAvailable', this.get('slot'));
    },

    book () {
      let newAppointment = { user: this.get('user'), slot: this.get('slot')};
      this.sendAction('createAppointment', newAppointment);
    },

    // delete () {
    //   return this.sendAction('delete', this.get('item'));
    // },
  },
});
