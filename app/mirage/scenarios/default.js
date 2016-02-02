export default function(server) {

  // ------------  GROUPS  -------------

  let ember = server.create('group', {
    id:          'ember',
    name:        'Global Ember Meetup',
    description: ''
  });

  let angular = server.create('group', {
    id:          'angular',
    name:        'Angular.js Meetup',
    description: ''
  });

  // -----------  MEETUPS  -------------

  // Global Ember Meetup Questions

  server.create('question', {
    question:  'Why is the sky blue?',
    answer:    'Just because..',
    meetup_id: ember.id
  });

  // Angular Questions

  server.create('question', {
    question:  'What is your favorite color',
    answer:    'green',
    meetup_id: angular.id
  });
}
