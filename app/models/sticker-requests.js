import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string')
});
