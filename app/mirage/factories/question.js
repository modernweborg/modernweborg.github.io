import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  question:  null,
  answer:    null,
  meetup_id: null
});
