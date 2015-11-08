import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('speaker-profile-card', 'Integration | Component | speaker profile card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{speaker-profile-card}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#speaker-profile-card}}
      template block text
    {{/speaker-profile-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
