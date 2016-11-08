import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['slots-list'],
  // newItem: {
  //   text: null,
  //   done: false,
  // },
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
    // createItem () {
    //   let newItem = this.get('form');
    //   newItem.list = this.get('list');
    //   this.sendAction('createItem', newItem);
    //   // this clears the form input
    //   this.set('form.text', null);
    //   // return this.sendAction('createItem', this.get('form'));
    // },
    //
    // edit () {
    //   this.sendAction('edit');
    // },
  },
});
