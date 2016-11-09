import ENV from 'acorn-st-ember-client/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

import Ember from 'ember';

export default ActiveModelAdapter.extend({
  host: 'https://acorn-st-api.herokuapp.com',

  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
