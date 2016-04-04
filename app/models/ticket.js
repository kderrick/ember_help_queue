import DS from 'ember-data';

export default DS.Model.extend({
  pairname: DS.attr(),
  location: DS.attr(),
  comments: DS.attr(),
  timestamp: DS.attr()
});
