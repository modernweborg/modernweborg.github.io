import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  question:  null,
  answer:    null,
  game_id: null
});
