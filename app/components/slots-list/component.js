import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['slots-list'],

  classNameBindings: ['slotAvailableHidden'],
  slotAvailableHidden: false,
  // form: {
  //   text: null,
  //   done: false,
  // },
  actions: {
    // toggleListDetail () {
    //   return this.toggleProperty('listDetailHidden');
    // },

    toggleSlotAvailable (slot) {
      return this.sendAction('toggleSlotAvailable', slot);
    },

    // deleteItem (item) {
    //   return this.sendAction('deleteItem', item);
    // },
    //
    createAppointment (newAppointment) {
      return this.sendAction('createAppointment', newAppointment);
    },
      // return this.sendAction('createItem', this.get('form'));
    // },
    //
    // edit () {
    //   this.sendAction('edit');
    // },
  },
});
