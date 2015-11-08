import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('modern-web-ui');
  this.route('modern-web-podcast');
  this.route('beginners');
  this.route('welcome');
  this.route('friends');
});

export default Router;
