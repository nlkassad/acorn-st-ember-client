import DS from 'ember-data';

export default DS.Model.extend({
  time_block: DS.attr('string'),
  // done: DS.attr('boolean'),
  // list: DS.belongsTo('list'),
});
