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

  @param {Array} size the array to create the results from
  @returns {function} a function that takes an array and creates an array of grouped arrays.
*/
export default function groupsOf(size) {
  return (arr) =>
    (arr.reduce(({ group, groups }, item, i) => {
      if (!group || i % size === 0) {
        group = [];
        groups.push(group);
      }
      group.push(item);
      return { groups, group };
    }, { group: null, groups: [] })).groups;
}
