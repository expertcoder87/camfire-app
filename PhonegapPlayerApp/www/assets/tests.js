define('frontend-upgrade/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('frontend-upgrade/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'frontend-upgrade/tests/helpers/start-app', 'frontend-upgrade/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _frontendUpgradeTestsHelpersStartApp, _frontendUpgradeTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _frontendUpgradeTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _frontendUpgradeTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('frontend-upgrade/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/helpers/resolver', ['exports', 'frontend-upgrade/resolver', 'frontend-upgrade/config/environment'], function (exports, _frontendUpgradeResolver, _frontendUpgradeConfigEnvironment) {

  var resolver = _frontendUpgradeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _frontendUpgradeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendUpgradeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('frontend-upgrade/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/helpers/start-app', ['exports', 'ember', 'frontend-upgrade/app', 'frontend-upgrade/config/environment'], function (exports, _ember, _frontendUpgradeApp, _frontendUpgradeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _frontendUpgradeConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _frontendUpgradeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('frontend-upgrade/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/test-helper', ['exports', 'frontend-upgrade/tests/helpers/resolver', 'ember-qunit'], function (exports, _frontendUpgradeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_frontendUpgradeTestsHelpersResolver['default']);
});
define('frontend-upgrade/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('frontend-upgrade/tests/unit/controllers/character-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleFor)('controller:character', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });
});
define('frontend-upgrade/tests/unit/controllers/character/details-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleFor)('controller:character/details', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });
});
define('frontend-upgrade/tests/unit/controllers/character/editstats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleFor)('controller:character/editstats', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });
});
define('frontend-upgrade/tests/unit/controllers/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleFor)('controller:signup', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });
});
/* jshint ignore:start */

require('frontend-upgrade/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map