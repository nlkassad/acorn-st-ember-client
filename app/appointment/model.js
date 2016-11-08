import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('string'),
  slot_id: DS.attr('string'),
  // item: DS.hasMany('item'),
});
