import ApplicationSerializer from 'acorn-st-ember-client/application/serializer';

export default ApplicationSerializer.extend({
  serialize () {
    let serialized = this._super(...arguments);

    delete serialized.editable;

    return serialized;
  },
});
