import Ember from 'ember';

const ensureImage = (project) => (podcast) => project({
  ...podcast,
  imageURL: podcast.imageURL || `http://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`
});

const splitDescriptionParagraphs = (project) => (podcast) => project({
  ...podcast,
  descriptionParagraphs: podcast.description.split('\n')
});

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
    const podcasts = model.podcasts.map(ensureImage(splitDescriptionParagraphs(x => x)))
    const groupedPodcasts = groupsOfThree(podcasts);
    return { ...model, podcasts, groupedPodcasts };
  }
});
