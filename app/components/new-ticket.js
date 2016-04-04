import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        pairname: this.get('pairname'),
        location: this.get('location'),
        comments: this.get('comments')
      };
      this.sendAction('save', params);
    }
  }
});
