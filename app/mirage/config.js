export default function() {
  this.namespace = 'api';

  // GET    /api/game     - get a list of games
  // GET    /api/game/:id - get a single game
  // POST   /api/game     - create a new game
  // PUT    /api/game/:id - update a game
  // DELETE /api/game/:id - remove a game

  this.get('/games');
  this.get('/games/:id', ['game', 'questions']);

  this.get('/questions');
  this.get('/questions/:id');
};
