import Ember from 'ember';
import groupsOf from 'modernweb/utils/groupsOf';
import ensureImage from 'modernweb/utils/ensureImage';

/*
NOTES FOR TRACY
=========================

1. What is Object.assign? It's a way to copy an properties from a list of objects onto another object.
   So if you do `Object.assign(a, b, c)` it's going to take all of the properties from b and c and copy them
   onto `a`, then return `a`. If you want to duplicate an object, so you don't alter the original object, you'd
   do: `const copy = Object.assign({}, original);`
2. This uses "functional programming" an higher-order functions in a fairly basic way. However, these techniques
   can be confusing even for advanced developers. So if it looks weird to you, take heart, it looks weird to 90%
   of developers too, for the most part.
*/

/**
  An ordinary projection function that copies a podcast object onto a new one, but adds the list of
  descriptionParagraphs
  @param {object} podcast the podcast you want to add the descriptionParagraphs to
  @returns {object} a new podcast object with the descriptionParagraphs property added.
*/
const splitDescriptionParagraphs = (podcast) => Object.assign({}, podcast, {
  descriptionParagraphs: podcast.description.split('\n')
});

export default Ember.Route.extend({
  model() {
    const model = this.modelFor('modern-web-podcast');
    const podcasts = model.podcasts.map(ensureImage(splitDescriptionParagraphs));
    const groupedPodcasts = groupsOf(4)(podcasts);
    return Object.assign({}, model, { podcasts, groupedPodcasts });
  }
});
