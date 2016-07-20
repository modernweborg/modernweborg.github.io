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
export default function ensureImage (project) {
  return (podcast) => project(Object.assign({}, podcast, {
    imageURL: podcast.imageURL || `http://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`
  }));
}
