import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend(DS.BuildURLMixin, {
  namespace: 'api/blog/',

  urlForFindAll() {
    return `${this._super(...arguments)}.json`;
  }
});
