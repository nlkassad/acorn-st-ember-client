import DS from 'ember-data';

export default DS.Model.extend({
  time_block: DS.attr('date'),
  available: DS.attr('boolean'),
  // done: DS.attr('boolean'),
  // list: DS.belongsTo('list'),
});
