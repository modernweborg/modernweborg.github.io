import Ember from 'ember';


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
  higher-order function to ensure there's an image on each podcast in a list. It's a "higher-order"
  function because it's a function that returns a function.

  This looks funny, because it's a function written so you can chain it with other functions.
  That way we can loop through the podcasts _only once_ with a map (below), and fix them
  all in one go.

  @param {function} project - This is a projection function, a projection function is any function that
    can be used with an Array `map`. It projects a value from the array into a new value.

  @returns {function} a projection function! When you call `ensureImage` it's going to take a function
    you can use in an Array `map`, and return a function you can use in an Array `map`. It chains two
    transformations together, so you you only have to `map` once.
*/
const ensureImage = (project) => (podcast) => project(Object.assign({}, podcast, {
  imageURL: podcast.imageURL || `http://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`
}));

/**
  An ordinary projection function that copies a podcast object onto a new one, but adds the list of
  descriptionParagraphs
  @param {object} podcast the podcast you want to add the descriptionParagraphs to
  @returns {object} a new podcast object with the descriptionParagraphs property added.
*/
const splitDescriptionParagraphs = (podcast) => Object.assign({}, podcast, {
  descriptionParagraphs: podcast.description.split('\n')
});

/**
  Takes an array and groups it into a new array of arrays of 3 (or less) items.
  So: `[a, b, c, d, e, f, g, h]` becomes `[[a, b, c], [d, e, f], [g, h]]`

  NOTE: The cool thing too look up and learn about here is `Array.prototype.reduce`.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  It's a way to iterate over the items in an array and track some sort of state while you're doing so,
  ultimately returning the state. In the example below, I'm iterating through all items in `arr`,
  and I'm tracking two pieces of state: 1. The current `group` of three I'm building,
  and 2. The `groups` list I'm adding groups too. At the end, the `reduce` call returns the entire state,
  and I get just the `.groups` property off of it and return.

  @param {Array} arr the array to create the results from
  @returns {Array} an array of arrays grouped into threes
*/
const groupsOfThree = (arr) =>
  (arr.reduce(({ group, groups }, item, i) => {
    if (!group || i % 3 === 0) {
      group = [];
      groups.push(group);
    }
    group.push(item);
    return { groups, group };
  }, { group: null, groups: [] })).groups;

export default Ember.Route.extend({
  model() {
    const model = this.modelFor('modern-web-podcast');
    const podcasts = model.podcasts.map(ensureImage(splitDescriptionParagraphs));
    const groupedPodcasts = groupsOfThree(podcasts);
    return Object.assign({}, model, { podcasts, groupedPodcasts });
  }
});
