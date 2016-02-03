import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  questions: DS.hasMany('question', { async: false })
});
