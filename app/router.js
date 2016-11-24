import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('modern-web-ui');
  this.route('modern-web-podcast', function() {
    this.route('podcast', {path:'podcast/:vanity'});
  });
  this.route('welcome');
  this.route('friends');
  this.route('signup-page');
  this.route('sign-up', function() {
    this.route('new');
  });
  this.route('about');
  this.route('signup');
  this.route('trainings');
  this.route('events');
  this.route('terms-of-service');
  this.route('snapchat');
  this.route('speakers');
});

export default Router;
