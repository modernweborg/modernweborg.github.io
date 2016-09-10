define('modernweb/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function () {
    ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('modernweb/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function () {
    ok(true, 'app.js should pass jshint.');
  });
});
define('modernweb/tests/components/featured-video.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/featured-video.js should pass jshint', function () {
    ok(true, 'components/featured-video.js should pass jshint.');
  });
});
define('modernweb/tests/components/footer-bar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/footer-bar.js should pass jshint', function () {
    ok(true, 'components/footer-bar.js should pass jshint.');
  });
});
define('modernweb/tests/components/iframe-card.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/iframe-card.js should pass jshint', function () {
    ok(true, 'components/iframe-card.js should pass jshint.');
  });
});
define('modernweb/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/nav-bar.js should pass jshint', function () {
    ok(true, 'components/nav-bar.js should pass jshint.');
  });
});
define('modernweb/tests/components/nav-item.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/nav-item.js should pass jshint', function () {
    ok(true, 'components/nav-item.js should pass jshint.');
  });
});
define('modernweb/tests/components/register-button.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/register-button.js should pass jshint', function () {
    ok(true, 'components/register-button.js should pass jshint.');
  });
});
define('modernweb/tests/components/site-banner.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/site-banner.js should pass jshint', function () {
    ok(true, 'components/site-banner.js should pass jshint.');
  });
});
define('modernweb/tests/components/speaker-profile-card.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/speaker-profile-card.js should pass jshint', function () {
    ok(true, 'components/speaker-profile-card.js should pass jshint.');
  });
});
define('modernweb/tests/controllers/dino-game.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/dino-game.js should pass jshint', function () {
    ok(true, 'controllers/dino-game.js should pass jshint.');
  });
});
define('modernweb/tests/controllers/sign-up/new.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers/sign-up');
  test('controllers/sign-up/new.js should pass jshint', function () {
    ok(true, 'controllers/sign-up/new.js should pass jshint.');
  });
});
define('modernweb/tests/controllers/trainings.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/trainings.js should pass jshint', function () {
    ok(true, 'controllers/trainings.js should pass jshint.');
  });
});
define('modernweb/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('modernweb/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/destroy-app.js should pass jshint', function () {
    ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('modernweb/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'modernweb/tests/helpers/start-app', 'modernweb/tests/helpers/destroy-app'], function (exports, _qunit, _modernwebTestsHelpersStartApp, _modernwebTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _modernwebTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _modernwebTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('modernweb/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/module-for-acceptance.js should pass jshint', function () {
    ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('modernweb/tests/helpers/resolver', ['exports', 'ember/resolver', 'modernweb/config/environment'], function (exports, _emberResolver, _modernwebConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _modernwebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _modernwebConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('modernweb/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function () {
    ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('modernweb/tests/helpers/start-app', ['exports', 'ember', 'modernweb/app', 'modernweb/config/environment'], function (exports, _ember, _modernwebApp, _modernwebConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _modernwebConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _modernwebApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('modernweb/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function () {
    ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('modernweb/tests/models/sign-up.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/sign-up.js should pass jshint', function () {
    ok(true, 'models/sign-up.js should pass jshint.');
  });
});
define('modernweb/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function () {
    ok(true, 'router.js should pass jshint.');
  });
});
define('modernweb/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/about.js should pass jshint', function () {
    ok(true, 'routes/about.js should pass jshint.');
  });
});
define('modernweb/tests/routes/dino-game.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/dino-game.js should pass jshint', function () {
    ok(true, 'routes/dino-game.js should pass jshint.');
  });
});
define('modernweb/tests/routes/events.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/events.js should pass jshint', function () {
    ok(true, 'routes/events.js should pass jshint.');
  });
});
define('modernweb/tests/routes/friends.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/friends.js should pass jshint', function () {
    ok(true, 'routes/friends.js should pass jshint.');
  });
});
define('modernweb/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function () {
    ok(true, 'routes/index.js should pass jshint.');
  });
});
define('modernweb/tests/routes/modern-web-podcast/index.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes/modern-web-podcast');
  test('routes/modern-web-podcast/index.js should pass jshint', function () {
    ok(true, 'routes/modern-web-podcast/index.js should pass jshint.');
  });
});
define('modernweb/tests/routes/modern-web-podcast/podcast.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes/modern-web-podcast');
  test('routes/modern-web-podcast/podcast.js should pass jshint', function () {
    ok(true, 'routes/modern-web-podcast/podcast.js should pass jshint.');
  });
});
define('modernweb/tests/routes/modern-web-podcast.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/modern-web-podcast.js should pass jshint', function () {
    ok(true, 'routes/modern-web-podcast.js should pass jshint.');
  });
});
define('modernweb/tests/routes/modern-web-ui.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/modern-web-ui.js should pass jshint', function () {
    ok(true, 'routes/modern-web-ui.js should pass jshint.');
  });
});
define('modernweb/tests/routes/sign-up/new.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes/sign-up');
  test('routes/sign-up/new.js should pass jshint', function () {
    ok(true, 'routes/sign-up/new.js should pass jshint.');
  });
});
define('modernweb/tests/routes/sign-up.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/sign-up.js should pass jshint', function () {
    ok(true, 'routes/sign-up.js should pass jshint.');
  });
});
define('modernweb/tests/routes/signup-page.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/signup-page.js should pass jshint', function () {
    ok(true, 'routes/signup-page.js should pass jshint.');
  });
});
define('modernweb/tests/routes/signup.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/signup.js should pass jshint', function () {
    ok(true, 'routes/signup.js should pass jshint.');
  });
});
define('modernweb/tests/routes/snapchat.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/snapchat.js should pass jshint', function () {
    ok(true, 'routes/snapchat.js should pass jshint.');
  });
});
define('modernweb/tests/routes/terms-of-service.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/terms-of-service.js should pass jshint', function () {
    ok(true, 'routes/terms-of-service.js should pass jshint.');
  });
});
define('modernweb/tests/routes/trainings.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/trainings.js should pass jshint', function () {
    ok(true, 'routes/trainings.js should pass jshint.');
  });
});
define('modernweb/tests/routes/welcome.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/welcome.js should pass jshint', function () {
    ok(true, 'routes/welcome.js should pass jshint.');
  });
});
define('modernweb/tests/test-helper', ['exports', 'modernweb/tests/helpers/resolver', 'ember-qunit'], function (exports, _modernwebTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_modernwebTestsHelpersResolver['default']);
});
define('modernweb/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function () {
    ok(true, 'test-helper.js should pass jshint.');
  });
});
define('modernweb/tests/unit/controllers/dino-game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:dino-game', 'Unit | Controller | dino game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('modernweb/tests/unit/controllers/dino-game-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/dino-game-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/dino-game-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/controllers/sign-up/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:sign-up/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('modernweb/tests/unit/controllers/sign-up/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers/sign-up');
  test('unit/controllers/sign-up/new-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/sign-up/new-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/about-test.js should pass jshint', function () {
    ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/dino-game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dino-game', 'Unit | Route | dino game', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/dino-game-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/dino-game-test.js should pass jshint', function () {
    ok(true, 'unit/routes/dino-game-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/events-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:events', 'Unit | Route | events', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/events-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/events-test.js should pass jshint', function () {
    ok(true, 'unit/routes/events-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/friends-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:friends', 'Unit | Route | friends', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/friends-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/friends-test.js should pass jshint', function () {
    ok(true, 'unit/routes/friends-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function () {
    ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/modern-web-podcast/podcast-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:modern-web-podcast/podcast', 'Unit | Route | modern web podcast/podcast', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/modern-web-podcast/podcast-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes/modern-web-podcast');
  test('unit/routes/modern-web-podcast/podcast-test.js should pass jshint', function () {
    ok(true, 'unit/routes/modern-web-podcast/podcast-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/modern-web-podcast-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:modern-web-podcast', 'Unit | Route | modern web podcast', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/modern-web-podcast-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/modern-web-podcast-test.js should pass jshint', function () {
    ok(true, 'unit/routes/modern-web-podcast-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/modern-web-ui-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:modern-web-ui', 'Unit | Route | modern web ui', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/modern-web-ui-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/modern-web-ui-test.js should pass jshint', function () {
    ok(true, 'unit/routes/modern-web-ui-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/sign-up/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-up/new', 'Unit | Route | sign up/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/sign-up/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes/sign-up');
  test('unit/routes/sign-up/new-test.js should pass jshint', function () {
    ok(true, 'unit/routes/sign-up/new-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/sign-up-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-up', 'Unit | Route | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/sign-up-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/sign-up-test.js should pass jshint', function () {
    ok(true, 'unit/routes/sign-up-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/signup-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup-page', 'Unit | Route | signup page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/signup-page-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/signup-page-test.js should pass jshint', function () {
    ok(true, 'unit/routes/signup-page-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/signup-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/signup-test.js should pass jshint', function () {
    ok(true, 'unit/routes/signup-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/snapchat-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:snapchat', 'Unit | Route | snapchat', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/snapchat-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/snapchat-test.js should pass jshint', function () {
    ok(true, 'unit/routes/snapchat-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/terms-of-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:terms-of-service', 'Unit | Route | terms of service', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/terms-of-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/terms-of-service-test.js should pass jshint', function () {
    ok(true, 'unit/routes/terms-of-service-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/trainings-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:trainings', 'Unit | Route | trainings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/trainings-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/trainings-test.js should pass jshint', function () {
    ok(true, 'unit/routes/trainings-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/routes/welcome-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome', 'Unit | Route | welcome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('modernweb/tests/unit/routes/welcome-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/welcome-test.js should pass jshint', function () {
    ok(true, 'unit/routes/welcome-test.js should pass jshint.');
  });
});
define('modernweb/tests/unit/views/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('view:application', 'Unit | View | application');

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var view = this.subject();
    assert.ok(view);
  });
});
define('modernweb/tests/unit/views/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/views');
  test('unit/views/application-test.js should pass jshint', function () {
    ok(true, 'unit/views/application-test.js should pass jshint.');
  });
});
define('modernweb/tests/utils/ensureImage.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - utils');
  test('utils/ensureImage.js should pass jshint', function () {
    ok(true, 'utils/ensureImage.js should pass jshint.');
  });
});
define('modernweb/tests/utils/featuredvideo.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - utils');
  test('utils/featuredvideo.js should pass jshint', function () {
    ok(true, 'utils/featuredvideo.js should pass jshint.');
  });
});
define('modernweb/tests/utils/groupsOfThree.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - utils');
  test('utils/groupsOfThree.js should pass jshint', function () {
    ok(true, 'utils/groupsOfThree.js should pass jshint.');
  });
});
define('modernweb/tests/utils/speakers.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - utils');
  test('utils/speakers.js should pass jshint', function () {
    ok(true, 'utils/speakers.js should pass jshint.');
  });
});
define('modernweb/tests/views/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - views');
  test('views/application.js should pass jshint', function () {
    ok(true, 'views/application.js should pass jshint.');
  });
});
define('modernweb/tests/views/trainings.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - views');
  test('views/trainings.js should pass jshint', function () {
    ok(true, 'views/trainings.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('modernweb/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map