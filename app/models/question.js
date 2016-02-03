import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  answer: DS.attr(),
  game: DS.belongsTo('game')
});
