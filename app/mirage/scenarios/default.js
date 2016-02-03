export default function(server) {

  // ------------  GROUPS  -------------

  let ember = server.create('game', {
    id:          'ember',
    name:        'Global Ember Meetup',
    description: 'this is a description for global ember meetup'
  });

  let angular = server.create('game', {
    id:          'angular',
    name:        'Angular2 Trivia',
    description: 'this is a description for angular'
  });

  let rxjs = server.create('game', {
    id:          'rxjs',
    name:        'RxJS',
    description: 'this is a description for RxJS'
  });

  // -----------  MEETUPS  -------------

  // Global Ember Meetup Questions

  server.create('question', {
    question:  'Why is the sky blue?',
    answer:    'Just because..',
    game_id: ember.id
  });

  // RxJS Ember Meetup Questions

  server.create('question', {
    question:  'Why is the sky blue?',
    answer:    'Just because..',
    game_id: ember.id
  });

  // Angular Questions

  server.create('question', {
    question:  'What is your favorite color',
    answer:    'green',
    game_id: angular.id
  });

  // RxJS Questions

  server.create('question', {
    question:  'What is your favorite color',
    answer:    'green',
    game_id: rxjs.id
  });
}
