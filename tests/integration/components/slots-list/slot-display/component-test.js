import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slots-list/slot-display', 'Integration | Component | slots list/slot display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slots-list/slot-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slots-list/slot-display}}
      template block text
    {{/slots-list/slot-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
