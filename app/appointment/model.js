import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  slot: DS.belongsTo('slot'),
  editable: DS.attr('boolean'),
});
