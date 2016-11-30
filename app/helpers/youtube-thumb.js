import Ember from 'ember';
const { String: { htmlSafe } } = Ember;

export function youtubeThumb([mediaId]) {
  return htmlSafe(`background-image:url("http://img.youtube.com/vi/${mediaId}/hqdefault.jpg")`);
}

export default Ember.Helper.helper(youtubeThumb);
