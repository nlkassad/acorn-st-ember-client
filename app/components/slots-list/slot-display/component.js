import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['slotUnavailable'],
  slotUnavailable: Ember.computed.alias('slot.done'),
  actions: {
    toggleAvailable () {
      return this.sendAction('toggleSlotAvailable', this.get('slot'));
    },
    // delete () {
    //   return this.sendAction('delete', this.get('item'));
    // },
  },
});
