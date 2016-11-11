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
      // return this.sendAction('createAppointment', this.get('slot'));
      let newAppointment = {};
      newAppointment.slot_id = this.get('slot.id');
      console.log("slot id is" + this.get('slot.id'));
      this.sendAction('createAppointment', newAppointment);
      // this clears the form input
      // this.set('form.text', null);
      // return this.sendAction('createItem', this.get('form'));
    },
    // delete () {
    //   return this.sendAction('delete', this.get('item'));
    // },
  },
});
