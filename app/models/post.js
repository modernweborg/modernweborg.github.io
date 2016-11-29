import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  date: attr('date'),
  slug: attr('string'),
  mediaId: attr('string'),
  kind: attr('string'),
  section: attr('string'),
  imageUrl: attr('string'),
  body: attr('string')
});
