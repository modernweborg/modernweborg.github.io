import Author from 'ember-writer/models/author';
import attr from 'ember-data/attr';

export default Author.extend({
  twitter: attr('string'),
  image: attr('string'),
  isPodcast: attr('boolean'),
  isEvent: attr('boolean'),
  current: attr('boolean')
});
