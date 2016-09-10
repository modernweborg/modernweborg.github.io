"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('modernweb/adapters/application', ['exports', 'modernweb/config/environment', 'firebase', 'emberfire/adapters/firebase'], function (exports, _modernwebConfigEnvironment, _firebase, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: new _firebase['default'](_modernwebConfigEnvironment['default'].firebase)
  });
});
// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';

// const { inject } = Ember;

// export default FirebaseAdapter.extend({
//   firebase: inject.service(),
// });
define('modernweb/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'modernweb/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _modernwebConfigEnvironment) {

  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _modernwebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _modernwebConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _modernwebConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('modernweb/components/ember-anchor', ['exports', 'ember-anchor/components/ember-anchor'], function (exports, _emberAnchorComponentsEmberAnchor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAnchorComponentsEmberAnchor['default'];
    }
  });
});
define('modernweb/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('modernweb/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('modernweb/components/featured-video', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    imageShowing: _ember['default'].computed(function () {
      return true;
    }),

    actions: {
      showVideo: function showVideo() {
        this.set('imageShowing', false);
      }
    }
  });
});
define('modernweb/components/footer-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'footer',
    classNames: ['page-footer', 'cyan']
  });
});
define('modernweb/components/iframe-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    hasClicked: false,

    descriptionParagraphs: _ember['default'].computed('model.description', function () {
      var description = this.get('model.description');
      if (description && description.length) {
        return description.split('\n');
      } else {
        return [];
      }
    }),

    iframeURL: _ember['default'].computed('model.id', 'model.type', function () {
      switch (this.get('model.type')) {
        case 'youtube':
          return 'https://www.youtube.com/embed/' + this.get('model.id') + '?rel=0&autoplay=1';

        case 'podbean':
          return 'https://www.podbean.com/media/player/' + this.get('model.id') + '?skin=109&auto=1';

        default:
          throw new Error('Unknown model type: ' + this.get('model.type'));
      }
    }),

    imageURL: _ember['default'].computed('model.imageURL', 'model.id', function () {
      var imageURL = this.get('model.imageURL');

      if (!imageURL) {
        imageURL = 'http://img.youtube.com/vi/' + this.get('model.id') + '/hqdefault.jpg';
      }

      return imageURL;
    })
  });
});
define('modernweb/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('modernweb/components/materialize-badge', ['exports', 'ember', 'modernweb/components/md-badge'], function (exports, _ember, _modernwebComponentsMdBadge) {
  exports['default'] = _modernwebComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-button-submit', ['exports', 'ember', 'modernweb/components/md-btn-submit'], function (exports, _ember, _modernwebComponentsMdBtnSubmit) {
  exports['default'] = _modernwebComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-button', ['exports', 'ember', 'modernweb/components/md-btn'], function (exports, _ember, _modernwebComponentsMdBtn) {
  exports['default'] = _modernwebComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-card-action', ['exports', 'ember', 'modernweb/components/md-card-action'], function (exports, _ember, _modernwebComponentsMdCardAction) {
  exports['default'] = _modernwebComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-card-content', ['exports', 'ember', 'modernweb/components/md-card-content'], function (exports, _ember, _modernwebComponentsMdCardContent) {
  exports['default'] = _modernwebComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-card-panel', ['exports', 'ember', 'modernweb/components/md-card-panel'], function (exports, _ember, _modernwebComponentsMdCardPanel) {
  exports['default'] = _modernwebComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-card-reveal', ['exports', 'ember', 'modernweb/components/md-card-reveal'], function (exports, _ember, _modernwebComponentsMdCardReveal) {
  exports['default'] = _modernwebComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-card', ['exports', 'ember', 'modernweb/components/md-card'], function (exports, _ember, _modernwebComponentsMdCard) {
  exports['default'] = _modernwebComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-checkbox', ['exports', 'ember', 'modernweb/components/md-check'], function (exports, _ember, _modernwebComponentsMdCheck) {
  exports['default'] = _modernwebComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-checkboxes', ['exports', 'ember', 'modernweb/components/md-checks'], function (exports, _ember, _modernwebComponentsMdChecks) {
  exports['default'] = _modernwebComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-collapsible-card', ['exports', 'ember', 'modernweb/components/md-card-collapsible'], function (exports, _ember, _modernwebComponentsMdCardCollapsible) {
  exports['default'] = _modernwebComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-collapsible', ['exports', 'ember', 'modernweb/components/md-collapsible'], function (exports, _ember, _modernwebComponentsMdCollapsible) {
  exports['default'] = _modernwebComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-copyright', ['exports', 'ember', 'modernweb/components/md-copyright'], function (exports, _ember, _modernwebComponentsMdCopyright) {
  exports['default'] = _modernwebComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-date-input', ['exports', 'ember', 'modernweb/components/md-input-date'], function (exports, _ember, _modernwebComponentsMdInputDate) {
  exports['default'] = _modernwebComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-input-field', ['exports', 'ember', 'modernweb/components/md-input-field'], function (exports, _ember, _modernwebComponentsMdInputField) {
  exports['default'] = _modernwebComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-input', ['exports', 'ember', 'modernweb/components/md-input'], function (exports, _ember, _modernwebComponentsMdInput) {
  exports['default'] = _modernwebComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-loader', ['exports', 'ember', 'modernweb/components/md-loader'], function (exports, _ember, _modernwebComponentsMdLoader) {
  exports['default'] = _modernwebComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-modal', ['exports', 'ember', 'modernweb/components/md-modal'], function (exports, _ember, _modernwebComponentsMdModal) {
  exports['default'] = _modernwebComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-navbar', ['exports', 'ember', 'modernweb/components/md-navbar'], function (exports, _ember, _modernwebComponentsMdNavbar) {
  exports['default'] = _modernwebComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-pagination', ['exports', 'ember', 'modernweb/components/md-pagination'], function (exports, _ember, _modernwebComponentsMdPagination) {
  exports['default'] = _modernwebComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-parallax', ['exports', 'ember', 'modernweb/components/md-parallax'], function (exports, _ember, _modernwebComponentsMdParallax) {
  exports['default'] = _modernwebComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-radio', ['exports', 'ember', 'modernweb/components/md-radio'], function (exports, _ember, _modernwebComponentsMdRadio) {
  exports['default'] = _modernwebComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-radios', ['exports', 'ember', 'modernweb/components/md-radios'], function (exports, _ember, _modernwebComponentsMdRadios) {
  exports['default'] = _modernwebComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-range', ['exports', 'ember', 'modernweb/components/md-range'], function (exports, _ember, _modernwebComponentsMdRange) {
  exports['default'] = _modernwebComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-select', ['exports', 'ember', 'modernweb/components/md-select'], function (exports, _ember, _modernwebComponentsMdSelect) {
  exports['default'] = _modernwebComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-switch', ['exports', 'ember', 'modernweb/components/md-switch'], function (exports, _ember, _modernwebComponentsMdSwitch) {
  exports['default'] = _modernwebComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-switches', ['exports', 'ember', 'modernweb/components/md-switches'], function (exports, _ember, _modernwebComponentsMdSwitches) {
  exports['default'] = _modernwebComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-tabs-tab', ['exports', 'ember', 'modernweb/components/md-tab'], function (exports, _ember, _modernwebComponentsMdTab) {
  exports['default'] = _modernwebComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-tabs', ['exports', 'ember', 'modernweb/components/md-tabs'], function (exports, _ember, _modernwebComponentsMdTabs) {
  exports['default'] = _modernwebComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/materialize-textarea', ['exports', 'ember', 'modernweb/components/md-textarea'], function (exports, _ember, _modernwebComponentsMdTextarea) {
  exports['default'] = _modernwebComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('modernweb/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('modernweb/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('modernweb/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('modernweb/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('modernweb/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('modernweb/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('modernweb/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('modernweb/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('modernweb/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('modernweb/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('modernweb/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('modernweb/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('modernweb/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('modernweb/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('modernweb/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('modernweb/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('modernweb/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('modernweb/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('modernweb/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('modernweb/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('modernweb/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('modernweb/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('modernweb/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('modernweb/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('modernweb/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('modernweb/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('modernweb/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('modernweb/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('modernweb/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('modernweb/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('modernweb/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('modernweb/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('modernweb/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('modernweb/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('modernweb/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('modernweb/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('modernweb/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('modernweb/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('modernweb/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('modernweb/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('modernweb/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('modernweb/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('modernweb/components/nav-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'nav',
    classNames: ['cyan', 'darken-1']
  });
});
define('modernweb/components/nav-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: ''
  });
});
define('modernweb/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('modernweb/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('modernweb/components/rainbow-tail-square', ['exports', 'rainbow-tail/components/rainbow-tail-square'], function (exports, _rainbowTailComponentsRainbowTailSquare) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _rainbowTailComponentsRainbowTailSquare['default'];
    }
  });
});
define('modernweb/components/rainbow-tail', ['exports', 'rainbow-tail/components/rainbow-tail'], function (exports, _rainbowTailComponentsRainbowTail) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _rainbowTailComponentsRainbowTail['default'];
    }
  });
});
define('modernweb/components/read-more', ['exports', 'ember-read-more/components/read-more'], function (exports, _emberReadMoreComponentsReadMore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberReadMoreComponentsReadMore['default'];
    }
  });
});
define('modernweb/components/register-button', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('modernweb/components/site-banner', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('modernweb/components/speaker-profile-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['speaker-card']
  });
});
define('modernweb/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('modernweb/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('modernweb/controllers/dino-game', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    dragged: [],
    actions: {
      add: function add(dragging) {
        this.get('dragged').pushObject(dragging);
      }
    }
  });
});
define('modernweb/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('modernweb/controllers/sign-up/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			addSignup: function addSignup() {
				var newSignup = this.store.createRecord('sign-up', {
					firstName: this.get('firstName'),
					lastName: this.get('lastName'),
					email: this.get('email')
				});
				newSignup.save();
				this.setProperties({
					firstName: '',
					lastName: '',
					email: ''
				});
			}
		}
	});
});
define('modernweb/controllers/trainings', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _ember['default'].Controller.extend(_emberAnchorMixinsControllerSupport['default'], {});
});
define('modernweb/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('modernweb/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _emberComposableHelpersHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray['default'];
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray.array;
    }
  });
});
define('modernweb/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('modernweb/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('modernweb/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('modernweb/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('modernweb/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('modernweb/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('modernweb/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('modernweb/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('modernweb/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('modernweb/helpers/drag-get', ['exports', 'ember-dnd-helpers/helpers/drag-get'], function (exports, _emberDndHelpersHelpersDragGet) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDragGet['default'];
    }
  });
  Object.defineProperty(exports, 'dragGet', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDragGet.dragGet;
    }
  });
});
define('modernweb/helpers/drag-set', ['exports', 'ember-dnd-helpers/helpers/drag-set'], function (exports, _emberDndHelpersHelpersDragSet) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDragSet['default'];
    }
  });
  Object.defineProperty(exports, 'dragSet', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDragSet.dragSet;
    }
  });
});
define('modernweb/helpers/drop-effect', ['exports', 'ember-dnd-helpers/helpers/drop-effect'], function (exports, _emberDndHelpersHelpersDropEffect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDropEffect['default'];
    }
  });
  Object.defineProperty(exports, 'dropEffect', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersDropEffect.dropEffect;
    }
  });
});
define('modernweb/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('modernweb/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('modernweb/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('modernweb/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('modernweb/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('modernweb/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('modernweb/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('modernweb/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('modernweb/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('modernweb/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('modernweb/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('modernweb/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('modernweb/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('modernweb/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('modernweb/helpers/prevent-default', ['exports', 'ember-dnd-helpers/helpers/prevent-default'], function (exports, _emberDndHelpersHelpersPreventDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersPreventDefault['default'];
    }
  });
  Object.defineProperty(exports, 'preventDefault', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersPreventDefault.preventDefault;
    }
  });
});
define('modernweb/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('modernweb/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('modernweb/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('modernweb/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('modernweb/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('modernweb/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('modernweb/helpers/stop-propagation', ['exports', 'ember-dnd-helpers/helpers/stop-propagation'], function (exports, _emberDndHelpersHelpersStopPropagation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersStopPropagation['default'];
    }
  });
  Object.defineProperty(exports, 'stopPropagation', {
    enumerable: true,
    get: function get() {
      return _emberDndHelpersHelpersStopPropagation.stopPropagation;
    }
  });
});
define('modernweb/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('modernweb/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('modernweb/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('modernweb/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('modernweb/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('modernweb/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('modernweb/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('modernweb/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('modernweb/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('modernweb/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('modernweb/initializers/ember-anchor', ['exports', 'modernweb/config/environment'], function (exports, _modernwebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var emberAnchor = _modernwebConfigEnvironment['default'].emberAnchor;

    application.register('config:ember-anchor', emberAnchor, { instantiate: false });
  }

  exports['default'] = {
    name: 'ember-anchor',
    initialize: initialize
  };
});
define('modernweb/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('modernweb/initializers/export-application-global', ['exports', 'ember', 'modernweb/config/environment'], function (exports, _ember, _modernwebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_modernwebConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _modernwebConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_modernwebConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('modernweb/initializers/fastboot/ajax', ['exports'], function (exports) {
  /* globals najax */

  var nodeAjax = function nodeAjax(options) {
    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
    }
  };
});
define("modernweb/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define('modernweb/initializers/key-responder', ['exports', 'ember', 'modernweb/instance-initializers/key-responder'], function (exports, _ember, _modernwebInstanceInitializersKeyResponder) {

  var EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

  /**
   * VERSION_INFO[i] is as follows:
   *
   * 0  complete version string
   * 1  major version
   * 2  minor version
   * 3  trivial version
   * 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
   * 5  pre-release version (optional)
   * 6  pre-release sub-version (optional)
   * 7  canary (optional: "canary", or undefined for stable releases)
   * 8  SHA (optional)
   */
  var VERSION_INFO = EMBER_VERSION_REGEX.exec(_ember['default'].VERSION);

  exports['default'] = {
    name: 'ember-key-responder',

    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      var registry = !!arguments[1] ? arguments[0] : application.registry;
      var isPre1dot12 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 12;
      var container = application.__container__;

      application.inject('view', 'keyResponder', 'key-responder:main');
      application.inject('component', 'keyResponder', 'key-responder:main');

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      _ember['default'].$(document).on('keyup.outside_ember_event_delegation', null, function (event) {

        if (_ember['default'].$(event.target).closest('.ember-view').length === 0) {
          var keyResponder = container.lookup('key-responder:main');
          var currentKeyResponder = keyResponder.get('current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      if (isPre1dot12) {
        // For versions before 1.12.0, we have to call the instanceInitializer
        _modernwebInstanceInitializersKeyResponder['default'].initialize(registry, application);
      }
    }
  };
});
define('modernweb/initializers/md-settings', ['exports', 'modernweb/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _modernwebConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize(container, application) {
    var materializeDefaults = _modernwebConfigEnvironment['default'].materializeDefaults;

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('modernweb/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('modernweb/instance-initializers/app-version', ['exports', 'modernweb/config/environment', 'ember'], function (exports, _modernwebConfigEnvironment, _ember) {

  var classify = _ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        _ember['default'].libraries.register(appName, _modernwebConfigEnvironment['default'].APP.version);
        registered = true;
      }
    }
  };
});
define('modernweb/instance-initializers/key-responder', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;

  var ApplicationViewMixin = Mixin.create({
    delegateToKeyResponder: on('keyUp', function (event) {
      var currentKeyResponder = this.get('keyResponder.current');
      if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
        // check to see if the event target is the keyResponder or the
        // keyResponders parents.  if so, no need to dispatch as it has
        // already had a chance to handle this event.
        var id = '#' + currentKeyResponder.get('elementId');
        if (_ember['default'].$(event.target).closest(id).length === 1) {
          return true;
        }
        return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
      }
      return true;
    })
  });

  exports['default'] = {
    name: 'ember-key-responder-instance',

    initialize: function initialize() {
      // Handle 1.12.x case, where signature is
      //  initialize(instance) {...}
      var instance = arguments[1] || arguments[0];
      var container = !!arguments[1] ? arguments[0] : instance.container;

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      var ApplicationView = container.lookupFactory ? container.lookupFactory('view:application') : instance.resolveRegistration('view:application');

      ApplicationView = ApplicationView.extend(ApplicationViewMixin);

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      _ember['default'].TextSupport.reopen({
        keyResponder: _ember['default'].computed(function () {
          return container.lookup('key-responder:main');
        }).readOnly()
      });
    }
  };
});
define('modernweb/key-responder', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;
  var computed = _ember['default'].computed;
  var isNone = _ember['default'].isNone;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop
  
    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = _ember['default'].Object.extend({
    init: function init() {
      this.set('isActive', true);
      this.set('stack', _ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: computed.readOnly('stack.lastObject'),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!isNone(view)) {
        view.trigger('willBecomeKeyResponder', wasTriggeredByFocus);
        var stack = get(this, 'stack');
        stack.pushObject(view);
        view.trigger('didBecomeKeyResponder', wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set('isActive', true);
    },

    pause: function pause() {
      this.set('isActive', false);
    },

    popView: function popView(wasTriggeredByFocus) {
      var stack = get(this, 'stack');
      if (get(this, 'stack.length') > 0) {
        var view = get(this, 'current');
        if (view) {
          view.trigger('willLoseKeyResponder', wasTriggeredByFocus);
        }
        view = stack.popObject();
        if (view) {
          view.trigger('didLoseKeyResponder', wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, 'current') !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;
  var KEY_EVENTS = {
    8: 'deleteBackward',
    9: 'insertTab',
    13: 'insertNewline',
    27: 'cancel',
    32: 'insertSpace',
    37: 'moveLeft',
    38: 'moveUp',
    39: 'moveRight',
    40: 'moveDown',
    46: 'deleteForward'
  };

  exports.KEY_EVENTS = KEY_EVENTS;
  var MODIFIED_KEY_EVENTS = {
    8: 'deleteForward',
    9: 'insertBacktab',
    37: 'moveLeftAndModifySelection',
    38: 'moveUpAndModifySelection',
    39: 'moveRightAndModifySelection',
    40: 'moveDownAndModifySelection'
  };

  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  var KeyResponderSupportViewMixin = _ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: computed('acceptsKeyResponder', 'disabled', 'isVisible', function () {
      return get(this, 'acceptsKeyResponder') && !get(this, 'disabled') && get(this, 'isVisible');
    }).readOnly(),

    becomeKeyResponderViaMouseDown: _ember['default'].on('mouseDown', function (evt) {
      var responder = this.get('keyResponder');
      if (responder === undefined) {
        return;
      }

      _ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, 'current') === this) {
        return;
      }

      if (get(this, 'canBecomeKeyResponder')) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, 'parentView');

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      _ember['default'].run(this, function () {
        if (get(this, 'keyResponder.isActive')) {
          if (get(this, 'keyResponder.current.canBecomeKeyResponder')) {
            get(this, 'keyResponder.current').interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  _ember['default'].View.reopen(KeyResponderSupportViewMixin);
  _ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = _ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on('focusIn', this, this.becomeKeyResponderViaFocus);
      this.on('focusOut', this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().blur();
      }
    }
  });

  exports.KeyResponderInputSupport = KeyResponderInputSupport;
  _ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  _ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  _ember['default'].Select.reopen(KeyResponderInputSupport);
});
define('modernweb/mixins/controller-support', ['exports', 'ember-anchor/mixins/controller-support'], function (exports, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _emberAnchorMixinsControllerSupport['default'];
});
define('modernweb/mixins/view-support', ['exports', 'ember-anchor/mixins/view-support'], function (exports, _emberAnchorMixinsViewSupport) {
  exports['default'] = _emberAnchorMixinsViewSupport['default'];
});
define('modernweb/models/sign-up', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string')
  });
});
define('modernweb/router', ['exports', 'ember', 'modernweb/config/environment'], function (exports, _ember, _modernwebConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _modernwebConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('modern-web-ui');
    this.route('modern-web-podcast', function () {
      this.route('podcast', { path: 'podcast/:vanity' });
    });
    this.route('welcome');
    this.route('friends');
    this.route('signup-page');
    this.route('sign-up', function () {
      this.route('new');
    });
    this.route('about');
    this.route('signup');
    this.route('trainings');
    this.route('events');
    this.route('terms-of-service');
    this.route('snapchat');
    this.route('dino-game');
  });

  exports['default'] = Router;
});
define('modernweb/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/dino-game', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/events', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/friends', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this.transitionTo('modern-web-podcast');
		}
	});
});
define('modernweb/routes/modern-web-podcast/index', ['exports', 'ember', 'modernweb/utils/groupsOfThree', 'modernweb/utils/ensureImage'], function (exports, _ember, _modernwebUtilsGroupsOfThree, _modernwebUtilsEnsureImage) {

  /*
  NOTES FOR TRACY
  =========================
  
  1. What is Object.assign? It's a way to copy an properties from a list of objects onto another object.
     So if you do `Object.assign(a, b, c)` it's going to take all of the properties from b and c and copy them
     onto `a`, then return `a`. If you want to duplicate an object, so you don't alter the original object, you'd
     do: `const copy = Object.assign({}, original);`
  2. This uses "functional programming" an higher-order functions in a fairly basic way. However, these techniques
     can be confusing even for advanced developers. So if it looks weird to you, take heart, it looks weird to 90%
     of developers too, for the most part.
  */

  /**
    An ordinary projection function that copies a podcast object onto a new one, but adds the list of
    descriptionParagraphs
    @param {object} podcast the podcast you want to add the descriptionParagraphs to
    @returns {object} a new podcast object with the descriptionParagraphs property added.
  */
  var splitDescriptionParagraphs = function splitDescriptionParagraphs(podcast) {
    return Object.assign({}, podcast, {
      descriptionParagraphs: podcast.description.split('\n')
    });
  };

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var model = this.modelFor('modern-web-podcast');
      var podcasts = model.podcasts.map((0, _modernwebUtilsEnsureImage['default'])(splitDescriptionParagraphs));
      var groupedPodcasts = (0, _modernwebUtilsGroupsOfThree['default'])(podcasts);
      return Object.assign({}, model, { podcasts: podcasts, groupedPodcasts: groupedPodcasts });
    }
  });
});
define('modernweb/routes/modern-web-podcast/podcast', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var DATA = this.modelFor('modern-web-podcast');
      var found = DATA.podcasts.filter(function (x) {
        return x.vanity === params.vanity;
      });
      return found && found.length > 0 ? found[0] : null;
    }
  });
});
define('modernweb/routes/modern-web-podcast', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return {
        podcasts: [{
          type: 'youtube',
          id: '65-WwVfAcl8',
          vanity: 's02e02-promise-cancellation',
          title: 'S02E02 - A Debate about Promise Cancellation with Sam Saccone and Ben Lesh',
          description: 'In this Modern Web episode, Ben Lesh and Sam Saccone engage in a friendly debate on the merits of cancellable promises. They explore pros and cons of promises and how they trap errors in Node.js.',
          presenters: [{
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }, {
            name: 'Sam Saccone',
            twitter: 'samccone'
          }]
        }, {
          type: 'youtube',
          id: 'ePG97JCC7dY',
          title: 'S02E01 - The Jeff Cross & Alex Eagle Dino Show on Modern Web with Ben Lesh',
          vanity: 's02e01-alex-eagle-jeff-cross-show',
          description: 'In this episode filmed at #ngconf, Jeff Cross and fight over Ben Lesh and his awesomeness while wearing dino hoodies. The show begins with an angularjs tattoo branding of The Ben Lesh, then moves on to conversations around last minute bundling decisions for the Angular 2 RC and when RxJS will be incorporated in.',
          presenters: [{
            name: 'Jeff Cross',
            twitter: 'jeffbcross'
          }, {
            name: 'Alex Eagle',
            twitter: 'jakeherringbone'
          }, {
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }]
        }, {
          type: 'podbean',
          id: 'nb2pd-5ef1c7',
          vanity: 's01e12-broccoli-pr',
          title: 'S01E12 - Munchies and a Pull Request - Broccoli and Angular-CLI',
          description: 'In this podcast episode, we speak to Mike Brocchi with Jeremy Rowe about angular-cli. Mike is one of the contributors on the angular-cli team. His nickname is Broccoli, which is the most important part of this podcast.',
          presenters: [{
            name: 'Mike Brocchi',
            twitter: 'brocco'
          }, {
            name: 'Jeremy Rowe',
            twitter: 'jeremy_w_rowe'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 't5c3d-5f1c25',
          vanity: 's01e11-toran-b-tdd',
          title: 'S01E11 - A Practical Approach to TDD, BDD, and Various Testing Buzzwords',
          description: 'In this podcast episode, we speak to Mike Brocchi about angular-cli. Mike is one of the contributors on the angular-cli team. His nickname is Broccoli, which is the most important part of this podcast.',
          presenters: [{
            name: 'Mike Brocchi',
            twitter: 'brocco'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'rq34k-5e4fdb',
          vanity: 's01e10-functional-programming',
          title: 'S01E10 - Ride the Functional Programming Wave with Cowboyd',
          description: 'In this podcast episode, Jeffrey Biles of Ember Screencasts interviews Charles Lowell ride the functional programming wave and dive into what this actually means.\nTopics covered range from how to think about MVC, moving logic out of controllers and components and into the template, functional programming in ember, the rise of helpers, addons such as ember-composabe-helpers and ember-curry-helpers, and the universal UI workflow.',
          presenters: [{
            name: 'Jeffrey Biles',
            twitter: 'jeffreybiles'
          }, {
            name: 'Charles Lowell',
            twitter: 'cowboyd'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'sstip-5e4fc4',
          vanity: 's01e09-rxjs5-podcastwysocki',
          title: 'S01E09 - Podcastwysocki - RxJS Banter with Matt Podwysocki and Ben Lesh',
          description: 'In S01E09, Matt Podwysocki speaks to Ben Lesh about Rx.',
          presenters: [{
            name: 'Matt Podwysocki',
            twitter: 'mattpodwysocki'
          }, {
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'youtube',
          vanity: 'fluentconf-javascript-good-days',
          id: 'rMbL1w-Bby4',
          title: 'FluentConf Special (Part 2 of 2) - JavaScript 2016 and "The Good \'Ol Days of the Internet"',
          description: 'An impromptu get together with Ben Lesh,Matt Podwysocki, Jay Phelps, Victor Savkin, PatrickJS, Ryan Burgess, Kent C. Dodds, Jon Kuperman.',
          presenters: [{
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }, {
            name: 'Matt Podwysocki',
            twitter: 'mattpodwysocki'
          }, {
            name: 'Jay Phelps',
            twitter: '_jayphelps'
          }, {
            name: 'Victor Savkin',
            twitter: 'victorsavkin'
          }, {
            name: 'PatrickJS',
            twitter: 'gdi2290'
          }, {
            name: 'Ryan Burgess',
            twitter: 'burgessdryan'
          }, {
            name: 'Kent C. Dodds',
            twitter: 'kentcdodds'
          }, {
            name: 'Jon Kuperman',
            twitter: 'jkup'
          }]
        }, {
          type: 'youtube',
          id: 'QRt9QBdpQQ0',
          vanity: 'fluentconf-conferences',
          title: 'FluentConf Special (Part 1 of 2) - O\'Reilly FluentConf 2016 - @getify Love, Best Talks, Conferences, Hats, and Pajamas',
          description: 'An impromptu get together with Ben Lesh,Matt Podwysocki, Jay Phelps, Victor Savkin, PatrickJS, Ryan Burgess, Kent C. Dodds, Jon Kuperman.\nWe tried to get everyone to wear pajamas. @mattpodwysocki, @kentcdodds and @victorsavkin obliged.',
          presenters: [{
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }, {
            name: 'Matt Podwysocki',
            twitter: 'mattpodwysocki'
          }, {
            name: 'Jay Phelps',
            twitter: '_jayphelps'
          }, {
            name: 'Victor Savkin',
            twitter: 'victorsavkin'
          }, {
            name: 'PatrickJS',
            twitter: 'gdi2290'
          }, {
            name: 'Ryan Burgess',
            twitter: 'burgessdryan'
          }, {
            name: 'Kent C. Dodds',
            twitter: 'kentcdodds'
          }, {
            name: 'Jon Kuperman',
            twitter: 'jkup'
          }]
        }, {
          type: 'youtube',
          id: '8-Hu_rUnZ5w',
          vanity: 's01e08-mentoring-developers',
          title: 'S01E08 - The Evolution of EmberJS and Mentoring Developers featuring EmberSherpa with EmberWeekend',
          description: "Taras, EmberSherpa, speaks to Chase and Jonathan of EmberWeekend on how the ember ecosystem is evolving with regards to application development, mentoring developers, what it's like to pair with 100+ people in just a few months, and more on this Modern Web podcast.",
          presenters: [{
            name: 'Taras Mankovski',
            twitter: 'embersherpa'
          }, {
            name: 'Chase McCarty',
            twitter: 'code0100fun'
          }, {
            name: 'Jonathan Jackson',
            twitter: 'rondale_sc'
          }, {
            name: 'EmberWeekend',
            twitter: 'emberweekend'
          }]
        }, {
          type: 'podbean',
          id: 'k5i5a-5d52d5',
          vanity: 's01e07-polymer-2016',
          title: 'S01E07 - The Polymer 2016 Roadmap featuring Rob Dodson with Justin Ribeiro',
          description: "In S01E07, Rob Dodson, Google Developer Advocate shares the future of web components and Polymer with us. Justin Ribeiro, Google Developer Expert interviews. \` Rob gives us an update on the browser web components battle and where everyone is with relation to feature shipments. Shadow DOM and custom elements should be hitting more browsers this year, and where the future of HTML imports will be. \`If you're looking to get started using web components, Rob covers what you as a developer can do right now and Polymer's vision for how they play in the web component ecosystem. \`Rob discusses his opinions as to why large corporations are quicker to adopt web components than the OSS community, shares juicy gossip on an up and coming Polymer CLI, and tells us about cool tools like polygit.org!",
          presenters: [{
            name: 'Rob Dodson',
            twitter: 'rob_dodson'
          }, {
            name: 'Justin Ribeiro',
            twitter: 'justinribeiro'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'bjgre-5d4a80',
          vanity: 's01e06-ember-luke-melia',
          title: 'S01E06 - The Beginning of Ember, Ember-CLI-Deploy, and OSS Teams with Luke Melia & Ember Weekend',
          description: "Chase and Jonathan from Ember Weekend interview Luke Melia from Yapp Labs. Luke shares the beginning of Ember and the adoption of Ember at Yapp Labs when it was just him and Kris Selden coding it up. He shares the behind how Ember NYC started, and how ember-cli-deploy became the default deployment story for Ember. Luke also discusses the success of the ember-cli-deploy plugin ecosystem, the natural evolution of the ember-cli-deploy team, collaboration for open source projects in the ember ecosystem, and his thoughts on how javascript and frameworks will evolve in the next year.",
          presenters: [{
            name: 'Luke Melia',
            twitter: 'lukemelia'
          }, {
            name: 'Chase McCarty',
            twitter: 'code0100fun'
          }, {
            name: 'Jonathan Jackson',
            twitter: 'rondale_sc'
          }, {
            name: 'EmberWeekend',
            twitter: 'emberweekend'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'youtube',
          id: '1NXhOChi54U',
          vanity: 's01e05-angular-2-trailer',
          title: 'S01E05 Trailer - "I really like Angular 2" - Jafar Husain',
          description: "60 second promo trailer for Season 1 Episode 5 of the Jeff Cross Show on Modern Web featuring Jafar Husain of Netflix.",
          presenters: [{
            name: 'Jafar Husain',
            twitter: 'jhusain'
          }, {
            name: 'Jeff Cross',
            twitter: 'jeffbcross'
          }]
        }, {
          type: 'youtube',
          id: 'XhVyrAFed58',
          vanity: 's01e05-observables-promises',
          title: 'S01E05 - It was an observation, I Promise',
          description: "Welcome to the Jeff Cross Show on Modern Web! \`Jafar Husain of Netflix tells us why Angular 2 is the greatest framework ever, then gets put through the ringer with code questions from Jeff Cross. He also speaks about the history of ReactiveX, gives his opinion on observers and promises, and jams on the state of functional programing exploding in the javascript community. He also speaks on FalcorJS and how the project came about at Netflix and its origination.",
          presenters: [{
            name: 'Jafar Husain',
            twitter: 'jhusain'
          }, {
            name: 'Jeff Cross',
            twitter: 'jeffbcross'
          }]
        }, {
          type: 'podbean',
          id: 'wmurn-5cae29',
          title: 'S01E04 - MobileDoc, Torii, and the future of EmberJS',
          vanity: 's01e04-mobiledoc',
          description: "Matt Beale, EmberJS core team member discusses with Chase McCarthy and Jonathan Jackson of Ember Weekend his hopes of MobileDoc playing an integral role in the ever-changing web ecosystem, Torii's past, present, and future, and how EmberJS is evolving as a framework and what he believes the future holds for teams such as ember-cli-deploy, ember-data, and more.",
          presenters: [{
            name: 'Matt Beale',
            twitter: 'mixonic'
          }, {
            name: 'Chase McCarthy',
            twitter: 'code0100fun'
          }, {
            name: 'Jonathan Jackson',
            twitter: 'rondale_sc'
          }, {
            name: 'EmberWeekend',
            twitter: 'emberweekend'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'gxcb6-5cae22',
          vanity: 's01e03-beard-jeff-cross-kent-dodds',
          title: 'S01E03 - ES6, Beard of Jeff Cross, Air Squats, and JavaScript Air',
          description: "In this podcast, Kent C. Dodds talks about JavaScript Air and the backlash he's experienced after leaving Angular Air, how he views learning frameworks, his favorite ES6 features, how air squats play a significant role in his speaker life, and how the beard of Jeff Cross brings super powers to the JavaScript community. Ben Lesh prods.",
          presenters: [{
            name: 'Kent C. Dodds',
            twitter: 'kentcdodds'
          }, {
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'j4me2-5ca7f8',
          vanity: 's01e02-promises-observables',
          title: 'S01E02 Part 2 - Promises Bad, Observables Good',
          description: "Why are promises bad and observables good? Ben Lesh, lead on RxJS 5 talks to Taras Mankovski about how observables are the way of the future and why you should use them.",
          presenters: [{
            name: 'Ben Lesh',
            twitter: 'benlesh'
          }, {
            name: 'Taras Mankovski',
            twitter: 'embersherpa'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: 'ezwbs-5ca7ec',
          vanity: 's01e02-angular-ember-react-netflix',
          title: 'S01E02 Part 1 - Angular vs Ember vs React at Netflix',
          description: "Ben Lesh reveals all to Taras Mankovski and talks about frameworks at Netflix. Hear what he has to say about Angular vs Ember vs React at Netflix.",
          presenters: [{
            name: 'Ben Lesh',
            twitter: 'blesh'
          }, {
            name: 'Taras Mankovski',
            twitter: 'embersherpa'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }, {
          type: 'podbean',
          id: '5yebs-5ca7d0',
          vanity: 's01e01-yehuda-katz-tc39',
          title: 'S01E01 - What the TC39?',
          description: "What is TC39? Yehuda Katz is interviewed by Jay Phelps and discusses details behind what TC39 does as an organization, ES2015, and more.",
          presenters: [{
            name: 'Yehuda Katz',
            twitter: 'wycats'
          }, {
            name: 'Jay Phelps',
            twitter: '_jayphelps'
          }],
          imageURL: '/img/podcasts/modern-web-play-button.jpg'
        }]
      };
    }
  });
});
define('modernweb/routes/modern-web-ui', ['exports', 'ember', 'modernweb/utils/speakers', 'modernweb/utils/featuredvideo', 'modernweb/utils/groupsOfThree', 'modernweb/utils/ensureImage'], function (exports, _ember, _modernwebUtilsSpeakers, _modernwebUtilsFeaturedvideo, _modernwebUtilsGroupsOfThree, _modernwebUtilsEnsureImage) {

	var ensureVideoURL = function ensureVideoURL(video) {
		if (video.videoURL) {
			return video;
		} else {
			return Object.assign({}, video, {
				videoURL: 'https://www.youtube.com/embed/' + video.id
			});
		}
	};

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return {
				speakers: _modernwebUtilsSpeakers['default'].filterBy('current', true),
				videos: _modernwebUtilsFeaturedvideo['default'],
				grouped: (0, _modernwebUtilsGroupsOfThree['default'])(_modernwebUtilsFeaturedvideo['default'].map((0, _modernwebUtilsEnsureImage['default'])(ensureVideoURL)))
			};
		}
	});
});
define('modernweb/routes/sign-up/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.find('sign-up');
		}
	});
});
define('modernweb/routes/signup-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/signup', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/snapchat', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/terms-of-service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/trainings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/routes/welcome', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('modernweb/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define('modernweb/services/firebase', ['exports', 'emberfire/services/firebase', 'modernweb/config/environment'], function (exports, _emberfireServicesFirebase, _modernwebConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _modernwebConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});
define('modernweb/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('modernweb/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("modernweb/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "nav-bar", ["loc", [null, [1, 0], [1, 11]]]], ["content", "outlet", ["loc", [null, [5, 4], [5, 14]]]], ["content", "footer-bar", ["loc", [null, [8, 0], [8, 14]]]], ["content", "md-modal-container", ["loc", [null, [12, 0], [12, 22]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/components/featured-video", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 10
            },
            "end": {
              "line": 10,
              "column": 10
            }
          },
          "moduleName": "modernweb/templates/components/featured-video.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("iframe");
          dom.setAttribute(el1, "class", "video");
          dom.setAttribute(el1, "frameborder", "0");
          dom.setAttribute(el1, "allowfullscreen", "");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "video.videoURL", ["loc", [null, [9, 41], [9, 55]]]], "&autoplay=1"]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/featured-video.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col s12 m12 l6 13");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "card-content black-text");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "card-title small");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "video-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "card-footer small");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1, 1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createAttrMorph(element3, 'src');
        morphs[2] = dom.createAttrMorph(element3, 'alt');
        morphs[3] = dom.createAttrMorph(element3, 'class');
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createAttrMorph(element4, 'class');
        morphs[6] = dom.createMorphAt(element4, 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        return morphs;
      },
      statements: [["content", "video.videoTitle", ["loc", [null, [4, 37], [4, 57]]]], ["attribute", "src", ["get", "video.imageURL", ["loc", [null, [6, 19], [6, 33]]]]], ["attribute", "alt", ["get", "video.videoTitle", ["loc", [null, [6, 98], [6, 114]]]]], ["attribute", "class", ["concat", ["video static ", ["subexpr", "unless", [["get", "imageShowing", ["loc", [null, [6, 146], [6, 158]]]], "background"], [], ["loc", [null, [6, 137], [6, 173]]]]]]], ["element", "action", [["subexpr", "action", [["subexpr", "mut", [["get", "imageShowing", ["loc", [null, [6, 58], [6, 70]]]]], [], ["loc", [null, [6, 53], [6, 71]]]], false], [], ["loc", [null, [6, 45], [6, 78]]]]], ["on", "click"], ["loc", [null, [6, 36], [6, 91]]]], ["attribute", "class", ["concat", ["video ", ["subexpr", "if", [["get", "imageShowing", ["loc", [null, [7, 31], [7, 43]]]], "background"], [], ["loc", [null, [7, 26], [7, 58]]]]]]], ["block", "unless", [["get", "imageShowing", ["loc", [null, [8, 20], [8, 32]]]]], [], 0, null, ["loc", [null, [8, 10], [10, 21]]]], ["content", "video.presenters", ["loc", [null, [14, 38], [14, 58]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/components/footer-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/footer-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12 m4 height-100");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row padding-top-45 white-text");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12");
        var el6 = dom.createTextNode("\n          Inquiries? Email us ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "white-text");
        dom.setAttribute(el6, "href", "mailto:hello@modern-web.org");
        var el7 = dom.createTextNode("hello@modern-web.org");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12 m8 height-100 text-right white-text");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row padding-top-45");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s11");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "footer-copyright");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    © 2015 Modern Web\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "link-to", ["Sign up for our Newsletter!", "signup"], ["class", "white-text"], ["loc", [null, [9, 10], [9, 79]]]], ["inline", "link-to", ["Terms of Service & Privacy Policy", "terms-of-service"], ["class", "white-text"], ["loc", [null, [16, 10], [16, 95]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/components/iframe-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 8
                },
                "end": {
                  "line": 9,
                  "column": 8
                }
              },
              "moduleName": "modernweb/templates/components/iframe-card.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("iframe");
              dom.setAttribute(el1, "width", "100%");
              dom.setAttribute(el1, "height", "100");
              dom.setAttribute(el1, "frameborder", "0");
              dom.setAttribute(el1, "allowfullscreen", "");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(1);
              morphs[0] = dom.createAttrMorph(element1, 'src');
              return morphs;
            },
            statements: [["attribute", "src", ["get", "iframeURL", ["loc", [null, [8, 50], [8, 59]]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 8
                },
                "end": {
                  "line": 11,
                  "column": 8
                }
              },
              "moduleName": "modernweb/templates/components/iframe-card.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "video static-podcast responsive-img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'style');
              morphs[1] = dom.createAttrMorph(element0, 'alt');
              return morphs;
            },
            statements: [["attribute", "style", ["concat", ["background-image:url(\"", ["get", "imageURL", ["loc", [null, [10, 90], [10, 98]]]], "\")"]]], ["attribute", "alt", ["get", "model.title", ["loc", [null, [10, 110], [10, 121]]]]]],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 6
                },
                "end": {
                  "line": 15,
                  "column": 6
                }
              },
              "moduleName": "modernweb/templates/components/iframe-card.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1, "class", "font-size-15em");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "description", ["loc", [null, [14, 34], [14, 49]]]]],
            locals: ["description"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 16,
                "column": 4
              }
            },
            "moduleName": "modernweb/templates/components/iframe-card.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [3]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createAttrMorph(element2, 'class');
            morphs[2] = dom.createElementMorph(element2);
            morphs[3] = dom.createMorphAt(element2, 1, 1);
            morphs[4] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "model.title", ["loc", [null, [5, 10], [5, 25]]]], ["attribute", "class", ["subexpr", "if", [["subexpr", "eq", [["get", "model.type", ["loc", [null, [6, 26], [6, 36]]]], "youtube"], [], ["loc", [null, [6, 22], [6, 47]]]], "video-container"], [], ["loc", [null, [6, 17], [6, 67]]]]], ["element", "action", [["subexpr", "action", [["subexpr", "mut", [["get", "hasClicked", ["loc", [null, [6, 90], [6, 100]]]]], [], ["loc", [null, [6, 85], [6, 101]]]], true], [], ["loc", [null, [6, 77], [6, 107]]]]], ["on", "click"], ["loc", [null, [6, 68], [6, 120]]]], ["block", "if", [["get", "hasClicked", ["loc", [null, [7, 14], [7, 24]]]]], [], 0, 1, ["loc", [null, [7, 8], [11, 15]]]], ["block", "each", [["get", "descriptionParagraphs", ["loc", [null, [13, 14], [13, 35]]]]], [], 2, null, ["loc", [null, [13, 6], [15, 15]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 2
            }
          },
          "moduleName": "modernweb/templates/components/iframe-card.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "md-card-panel", [], ["bodyClass", "black-text"], 0, null, ["loc", [null, [4, 4], [16, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/iframe-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "card-panel-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["modern-web-podcast.podcast", ["get", "model.vanity", ["loc", [null, [3, 42], [3, 54]]]]], [], 0, null, ["loc", [null, [3, 2], [17, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('modernweb/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("modernweb/templates/components/nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "modernweb/templates/components/nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "responsive-img");
          dom.setAttribute(el1, "src", "img/modern-web-white-logo.png");
          dom.setAttribute(el1, "alt", "Modern Web Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/nav-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "nav-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        dom.setAttribute(el3, "data-activates", "mobile-demo");
        dom.setAttribute(el3, "class", "button-collapse");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "mdi-navigation-menu");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "right hide-on-med-and-down");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "side-nav black-text");
        dom.setAttribute(el3, "id", "mobile-demo");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [5]);
        var element2 = dom.childAt(element0, [7]);
        var morphs = new Array(11);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 2, 2);
        morphs[2] = dom.createMorphAt(element1, 4, 4);
        morphs[3] = dom.createMorphAt(element1, 6, 6);
        morphs[4] = dom.createMorphAt(element1, 8, 8);
        morphs[5] = dom.createMorphAt(element1, 10, 10);
        morphs[6] = dom.createMorphAt(element2, 2, 2);
        morphs[7] = dom.createMorphAt(element2, 4, 4);
        morphs[8] = dom.createMorphAt(element2, 6, 6);
        morphs[9] = dom.createMorphAt(element2, 8, 8);
        morphs[10] = dom.createMorphAt(element2, 10, 10);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["class", "brand-logo"], 0, null, ["loc", [null, [3, 4], [5, 16]]]], ["inline", "nav-item", [], ["location", "modern-web-podcast", "displayName", "Podcast"], ["loc", [null, [10, 6], [10, 70]]]], ["inline", "nav-item", [], ["location", "modern-web-ui", "displayName", "Videos"], ["loc", [null, [11, 6], [11, 64]]]], ["inline", "nav-item", [], ["location", "events", "displayName", "Events"], ["loc", [null, [12, 6], [12, 57]]]], ["inline", "nav-item", [], ["location", "signup", "displayName", "Newsletter"], ["loc", [null, [13, 6], [13, 61]]]], ["inline", "nav-item", [], ["location", "dino-game", "displayName", "Dino Game"], ["loc", [null, [14, 6], [14, 63]]]], ["inline", "nav-item", [], ["location", "modern-web-podcast", "displayName", "Podcast"], ["loc", [null, [22, 6], [22, 70]]]], ["inline", "nav-item", [], ["location", "modern-web-ui", "displayName", "Videos"], ["loc", [null, [23, 6], [23, 64]]]], ["inline", "nav-item", [], ["location", "events", "displayName", "Events"], ["loc", [null, [24, 6], [24, 57]]]], ["inline", "nav-item", [], ["location", "signup", "displayName", "Newsletter"], ["loc", [null, [25, 6], [25, 61]]]], ["inline", "nav-item", [], ["location", "dino-game", "displayName", "Dino Game"], ["loc", [null, [26, 6], [26, 63]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/components/nav-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/components/nav-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "link-to", [["get", "displayName", ["loc", [null, [2, 12], [2, 23]]]], ["get", "location", ["loc", [null, [2, 24], [2, 32]]]]], [], ["loc", [null, [2, 2], [2, 34]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/nav-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", [["get", "location", ["loc", [null, [1, 11], [1, 19]]]]], ["tagName", "li", "class", "nav-item"], 0, null, ["loc", [null, [1, 0], [3, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("modernweb/templates/components/register-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/register-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", " https://www.eventbrite.com/e/emberjs-fast-track-expansion-track-modern-web-training-with-ember-weekend-tickets-21688386548");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["inline", "md-btn", [], ["text", "Register Now", "buttonType", "large", "class", "waves-effect waves-light btn-large red"], ["loc", [null, [1, 134], [1, 230]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/components/site-banner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "modernweb/templates/components/site-banner.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("\n					Training with EmberWeekend - The Ember Fast Track & Expansion Track.\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "font-size-15em");
          var el2 = dom.createTextNode("\n					Beginner and intermediate days available. May 23-24, Silicon Valley. Limited seating! Reserve ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "link-to", ["today", "trainings", ["subexpr", "query-params", [], ["anchor", "register"], ["loc", [null, [8, 129], [8, 161]]]]], [], ["loc", [null, [8, 99], [8, 164]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/site-banner.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card-panel", [], ["class", "deep-purple lighten-2", "bodyClass", "white-text"], 0, null, ["loc", [null, [3, 2], [10, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/components/speaker-profile-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 3
              },
              "end": {
                "line": 6,
                "column": 3
              }
            },
            "moduleName": "modernweb/templates/components/speaker-profile-card.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "title");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "content");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
            return morphs;
          },
          statements: [["content", "speaker.title", ["loc", [null, [4, 25], [4, 42]]]], ["content", "speaker.cardContent", ["loc", [null, [5, 27], [5, 50]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 7,
              "column": 1
            }
          },
          "moduleName": "modernweb/templates/components/speaker-profile-card.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [3, 3], [6, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/components/speaker-profile-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col s6 m3 l3");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "md-card", [], ["class", "z-depth-1", "title", ["subexpr", "@mut", [["get", "speaker.cardTitle", ["loc", [null, [2, 36], [2, 53]]]]], [], []], "image", ["subexpr", "@mut", [["get", "speaker.image", ["loc", [null, [2, 60], [2, 73]]]]], [], []]], 0, null, ["loc", [null, [2, 1], [7, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('modernweb/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("modernweb/templates/dino-game", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 10
              },
              "end": {
                "line": 23,
                "column": 10
              }
            },
            "moduleName": "modernweb/templates/dino-game.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "draggable", "true");
            dom.setAttribute(el1, "class", "responsive-img");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createAttrMorph(element1, 'alt');
            morphs[2] = dom.createAttrMorph(element1, 'ondragstart');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", ["img/dino-game/", ["get", "framework.img", ["loc", [null, [20, 76], [20, 89]]]]]]], ["attribute", "alt", ["concat", [["get", "framework.alt", ["loc", [null, [20, 100], [20, 113]]]]]]], ["attribute", "ondragstart", ["subexpr", "action", [["subexpr", "action", [["subexpr", "mut", [["get", "dragging", ["loc", [null, [21, 48], [21, 56]]]]], [], ["loc", [null, [21, 43], [21, 57]]]], ["get", "framework", ["loc", [null, [21, 58], [21, 67]]]]], [], ["loc", [null, [21, 35], [21, 68]]]]], [], ["loc", [null, [21, 26], [21, 70]]]]]],
          locals: ["framework"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 24,
              "column": 8
            }
          },
          "moduleName": "modernweb/templates/dino-game.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "frameworks", ["loc", [null, [19, 18], [19, 28]]]]], [], 0, null, ["loc", [null, [19, 10], [23, 19]]]]],
        locals: ["frameworks"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 8
            },
            "end": {
              "line": 34,
              "column": 8
            }
          },
          "moduleName": "modernweb/templates/dino-game.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "responsive-img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createAttrMorph(element0, 'alt');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", ["img/dino-game/", ["get", "framework.img", ["loc", [null, [33, 59], [33, 72]]]]]]], ["attribute", "alt", ["concat", [["get", "framework.alt", ["loc", [null, [33, 83], [33, 96]]]]]]]],
        locals: ["framework"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 40,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/dino-game.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "padding-top-30");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "title-color center-align");
        var el3 = dom.createTextNode("Welcome to the Dino Game");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        dom.setAttribute(el2, "class", "text-center padding-top-15");
        var el3 = dom.createTextNode("Feed the little dino JavaScript and see what happens. It's magic!!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "text-center padding-top-15");
        var el4 = dom.createTextNode("This game is easy. Simply drag the frameworks into Giga's cloud and something magical will happen. This illustrates how composable helpers can build a simple drag and drop easily in ember.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col l4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "card-panel");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col l8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/modern-web-giga-cloud-blank.png");
        dom.setAttribute(el5, "alt", "giga");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2, 1]);
        var element3 = dom.childAt(element2, [5, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [3, 1]), 1, 1);
        morphs[1] = dom.createAttrMorph(element3, 'ondrop');
        morphs[2] = dom.createAttrMorph(element3, 'ondragover');
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        return morphs;
      },
      statements: [["block", "with", [["subexpr", "array", [["subexpr", "hash", [], ["img", "angular2-logo.jpg", "alt", "Angular"], ["loc", [null, [12, 12], [12, 56]]]], ["subexpr", "hash", [], ["img", "babeljs-logo.jpg", "alt", "Babel"], ["loc", [null, [13, 12], [13, 53]]]], ["subexpr", "hash", [], ["img", "ember-logo.png", "alt", "Ember"], ["loc", [null, [14, 12], [14, 51]]]], ["subexpr", "hash", [], ["img", "polymer-logo.png", "alt", "Polymer"], ["loc", [null, [15, 12], [15, 55]]]], ["subexpr", "hash", [], ["img", "react-logo.png", "alt", "React"], ["loc", [null, [16, 12], [16, 51]]]], ["subexpr", "hash", [], ["img", "web-components-logo.png", "alt", "Web Components"], ["loc", [null, [17, 12], [17, 69]]]]], [], ["loc", [null, [11, 16], [18, 11]]]]], [], 0, null, ["loc", [null, [11, 8], [24, 17]]]], ["attribute", "ondrop", ["subexpr", "action", [["subexpr", "pipe", [["subexpr", "action", ["add", ["get", "dragging", ["loc", [null, [29, 46], [29, 54]]]]], [], ["loc", [null, [29, 32], [29, 55]]]]], [], ["loc", [null, [29, 26], [29, 56]]]]], [], ["loc", [null, [29, 17], [29, 58]]]]], ["attribute", "ondragover", ["subexpr", "action", [["subexpr", "pipe", [["subexpr", "prevent-default", [], [], ["loc", [null, [30, 36], [30, 53]]]], ["subexpr", "drop-effect", ["move"], [], ["loc", [null, [30, 54], [30, 74]]]]], [], ["loc", [null, [30, 30], [30, 75]]]]], [], ["loc", [null, [30, 21], [30, 77]]]]], ["block", "each", [["get", "dragged", ["loc", [null, [32, 16], [32, 23]]]]], [], 1, null, ["loc", [null, [32, 8], [34, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("modernweb/templates/events", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 175,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/events.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row padding-top-30 text-center");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "title-color");
        var el4 = dom.createTextNode("Events");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h5");
        dom.setAttribute(el3, "class", "margin-top-30");
        var el4 = dom.createTextNode("Our online conferences can be found on ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "https://www.bigmarker.com/communities/modernweb/");
        var el5 = dom.createTextNode("Big Marker");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(". Are you in the Bay Area? Join our ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "http://meetup.com/modernweb");
        var el5 = dom.createTextNode("meetup");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" for announcements.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align margin-top-30");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "img/sams-giga-web-size.png");
        dom.setAttribute(el3, "alt", "giga");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/friends", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/friends.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "title-color");
        var el3 = dom.createTextNode("Friends");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row col s4 m4 l4");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/200x200");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 5
          }
        },
        "moduleName": "modernweb/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nindex");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/modern-web-podcast/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 26,
                    "column": 9
                  },
                  "end": {
                    "line": 28,
                    "column": 9
                  }
                },
                "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("										");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("img");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [1]);
                var morphs = new Array(1);
                morphs[0] = dom.createAttrMorph(element1, 'src');
                return morphs;
              },
              statements: [["attribute", "src", ["concat", [["get", "podcast.imageURL", ["loc", [null, [27, 22], [27, 38]]]]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 28,
                    "column": 9
                  },
                  "end": {
                    "line": 30,
                    "column": 9
                  }
                },
                "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("										");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "video static-podcast responsive-img");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element0, 'style');
                morphs[1] = dom.createAttrMorph(element0, 'alt');
                return morphs;
              },
              statements: [["attribute", "style", ["concat", ["background-image:url(\"", ["get", "podcast.imageURL", ["loc", [null, [29, 90], [29, 106]]]], "\")"]]], ["attribute", "alt", ["get", "podcast.title", ["loc", [null, [29, 118], [29, 131]]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 8
                },
                "end": {
                  "line": 33,
                  "column": 8
                }
              },
              "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element2 = dom.childAt(fragment, [2]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createAttrMorph(element2, 'class');
              morphs[2] = dom.createMorphAt(element2, 0, 0);
              dom.insertBoundary(fragment, 0);
              return morphs;
            },
            statements: [["block", "if", [["subexpr", "eq", [["get", "podcast.type", ["loc", [null, [26, 19], [26, 31]]]], "podbean"], [], ["loc", [null, [26, 15], [26, 42]]]]], [], 0, 1, ["loc", [null, [26, 9], [30, 16]]]], ["attribute", "class", ["concat", ["card-title force-wrap ", ["subexpr", "if", [["subexpr", "eq", [["get", "podcast.type", ["loc", [null, [32, 60], [32, 72]]]], "podbean"], [], ["loc", [null, [32, 56], [32, 83]]]], "black-text white-text-background"], [], ["loc", [null, [32, 51], [32, 120]]]]]]], ["content", "podcast.title", ["loc", [null, [32, 122], [32, 139]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 37,
                    "column": 9
                  },
                  "end": {
                    "line": 39,
                    "column": 12
                  }
                },
                "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("						        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("p");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["content", "description", ["loc", [null, [38, 17], [38, 32]]]]],
              locals: ["description"],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 8
                },
                "end": {
                  "line": 40,
                  "column": 8
                }
              },
              "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "each", [["get", "podcast.descriptionParagraphs", ["loc", [null, [37, 17], [37, 46]]]]], [], 0, null, ["loc", [null, [37, 9], [39, 21]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 3
              },
              "end": {
                "line": 44,
                "column": 3
              }
            },
            "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col l4 m6 s12");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "card black-text");
            dom.setAttribute(el2, "style", "min-height: 349px");
            var el3 = dom.createTextNode("\n	            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "card-image");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("	            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n	            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "card-content");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("	            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n	          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", ["modern-web-podcast.podcast", ["get", "podcast.vanity", ["loc", [null, [25, 48], [25, 62]]]]], [], 0, null, ["loc", [null, [25, 8], [33, 20]]]], ["block", "read-more", [], ["maxHeight", "3.1em"], 1, null, ["loc", [null, [36, 8], [40, 22]]]]],
          locals: ["podcast"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 1
            },
            "end": {
              "line": 46,
              "column": 1
            }
          },
          "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "podcastGroup", ["loc", [null, [21, 11], [21, 23]]]]], [], 0, null, ["loc", [null, [21, 3], [44, 12]]]]],
        locals: ["podcastGroup"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 58,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/modern-web-podcast/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row padding-top-30");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "text-center title-color rainbow");
        var el4 = dom.createTextNode("Modern Web: The Podcast");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 right-align margin-bottom-30");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "new-cards-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "responsive-img");
        dom.setAttribute(el3, "src", "/img/sams-giga-web-size.png");
        dom.setAttribute(el3, "alt", "Giga");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [6, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [9]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 13, 13, contextualElement);
        return morphs;
      },
      statements: [["inline", "link-to", ["Snapchat & Conferences", "snapchat"], ["class", "btn pink"], ["loc", [null, [12, 2], [12, 66]]]], ["block", "each", [["get", "model.groupedPodcasts", ["loc", [null, [19, 9], [19, 30]]]]], [], 0, null, ["loc", [null, [19, 1], [46, 10]]]], ["inline", "rainbow-tail", [], ["rainbowClass", "rainbow"], ["loc", [null, [57, 0], [57, 39]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/modern-web-podcast/podcast", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/modern-web-podcast/podcast.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "iframe-card", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 20], [1, 25]]]]], [], []], "hasClicked", true], ["loc", [null, [1, 0], [1, 43]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/modern-web-ui", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 9
                },
                "end": {
                  "line": 18,
                  "column": 9
                }
              },
              "moduleName": "modernweb/templates/modern-web-ui.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("										");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(1);
              morphs[0] = dom.createAttrMorph(element1, 'src');
              return morphs;
            },
            statements: [["attribute", "src", ["concat", [["get", "video.imageURL", ["loc", [null, [17, 22], [17, 36]]]]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 9
                },
                "end": {
                  "line": 20,
                  "column": 9
                }
              },
              "moduleName": "modernweb/templates/modern-web-ui.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("										");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "video static-video responsive-img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'style');
              morphs[1] = dom.createAttrMorph(element0, 'alt');
              return morphs;
            },
            statements: [["attribute", "style", ["concat", ["background-image:url(\"", ["get", "video.imageURL", ["loc", [null, [19, 88], [19, 102]]]], "\")"]]], ["attribute", "alt", ["get", "video.title", ["loc", [null, [19, 114], [19, 125]]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 3
              },
              "end": {
                "line": 29,
                "column": 3
              }
            },
            "moduleName": "modernweb/templates/modern-web-ui.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col l4 m6 s12");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "card black-text");
            dom.setAttribute(el3, "style", "min-height: 349px");
            var el4 = dom.createTextNode("\n	            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "card-image");
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("	            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "card-content");
            var el5 = dom.createTextNode("\n                ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("h5");
            var el6 = dom.createComment("");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n              ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n	          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [3, 1]);
            var element3 = dom.childAt(element2, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createAttrMorph(element2, 'href');
            morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element3, [3, 1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "log", [["get", "video", ["loc", [null, [11, 14], [11, 19]]]]], [], ["loc", [null, [11, 8], [11, 21]]]], ["attribute", "href", ["concat", [["get", "video.videoURL", ["loc", [null, [13, 21], [13, 35]]]]]]], ["block", "if", [["subexpr", "eq", [["get", "video.type", ["loc", [null, [16, 19], [16, 29]]]], "podbean"], [], ["loc", [null, [16, 15], [16, 40]]]]], [], 0, 1, ["loc", [null, [16, 9], [20, 16]]]], ["content", "video.title", ["loc", [null, [24, 20], [24, 35]]]]],
          locals: ["video"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 1
            },
            "end": {
              "line": 31,
              "column": 1
            }
          },
          "moduleName": "modernweb/templates/modern-web-ui.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "videoGroup", ["loc", [null, [9, 11], [9, 21]]]]], [], 0, null, ["loc", [null, [9, 3], [29, 12]]]]],
        locals: ["videoGroup"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/modern-web-ui.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "padding-top-30");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "title-color center-align");
        var el3 = dom.createTextNode("Videos");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        dom.setAttribute(el2, "class", "text-center padding-top-15");
        var el3 = dom.createTextNode("Through local meetups, we've helped develop content focused on next generation standards, frameworks, tools, and techniques. Here are Modern Web UI featured videos.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "new-cards-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.grouped", ["loc", [null, [7, 9], [7, 22]]]]], [], 0, null, ["loc", [null, [7, 1], [31, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("modernweb/templates/sign-up/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/sign-up/new.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "submit");
        var el2 = dom.createTextNode("\nSubmit\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [6]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createElementMorph(element0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "placeholder", "First Name", "value", ["subexpr", "@mut", [["get", "firstName", ["loc", [null, [1, 51], [1, 60]]]]], [], []], "class", "firstName-input"], ["loc", [null, [1, 0], [1, 86]]]], ["inline", "input", [], ["type", "text", "placeholder", "Last Name", "value", ["subexpr", "@mut", [["get", "lastName", ["loc", [null, [3, 50], [3, 58]]]]], [], []], "class", "lastName-input"], ["loc", [null, [3, 0], [3, 83]]]], ["inline", "input", [], ["type", "text", "placeholder", "Email", "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [5, 46], [5, 51]]]]], [], []], "class", "email-input"], ["loc", [null, [5, 0], [5, 73]]]], ["element", "action", ["addSignup"], [], ["loc", [null, [7, 8], [7, 30]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/sign-up.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/signup-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/signup-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align margin-top-30");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "title-color");
        var el4 = dom.createTextNode("\n        Newsletter\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "margin-top-30");
        var el4 = dom.createTextNode("Sign up to receive the latest news on Modern Web happenings.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "img/sams-giga-web-size.png");
        dom.setAttribute(el3, "alt", "little giga dino cutie!");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 margin-top-30");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Begin MailChimp Signup Form ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "mc_embed_signup");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "action", "//modern-web.us13.list-manage.com/subscribe/post?u=78cfbae4f7c16f3f23fdfccff&id=c83f89cef4");
        dom.setAttribute(el4, "method", "post");
        dom.setAttribute(el4, "id", "mc-embedded-subscribe-form");
        dom.setAttribute(el4, "name", "mc-embedded-subscribe-form");
        dom.setAttribute(el4, "class", "validate");
        dom.setAttribute(el4, "target", "_blank");
        dom.setAttribute(el4, "novalidate", "");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "mc_embed_signup_scroll");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "right-align indicates-required margin-top-30");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "asterisk");
        var el8 = dom.createTextNode("*");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" indicates required");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "mc-field-group");
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "for", "mce-EMAIL");
        var el8 = dom.createTextNode("Email Address  ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "asterisk");
        var el9 = dom.createTextNode("*");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "type", "email");
        dom.setAttribute(el7, "value", "");
        dom.setAttribute(el7, "name", "EMAIL");
        dom.setAttribute(el7, "class", "required email");
        dom.setAttribute(el7, "id", "mce-EMAIL");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "mc-field-group");
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "for", "mce-FNAME");
        var el8 = dom.createTextNode("First Name ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "type", "text");
        dom.setAttribute(el7, "value", "");
        dom.setAttribute(el7, "name", "FNAME");
        dom.setAttribute(el7, "class", "");
        dom.setAttribute(el7, "id", "mce-FNAME");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "mc-field-group");
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "for", "mce-LNAME");
        var el8 = dom.createTextNode("Last Name ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "type", "text");
        dom.setAttribute(el7, "value", "");
        dom.setAttribute(el7, "name", "LNAME");
        dom.setAttribute(el7, "class", "");
        dom.setAttribute(el7, "id", "mce-LNAME");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "mce-responses");
        dom.setAttribute(el6, "class", "clear");
        var el7 = dom.createTextNode("\n    		");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "response");
        dom.setAttribute(el7, "id", "mce-error-response");
        dom.setAttribute(el7, "style", "display:none");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    		");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "response");
        dom.setAttribute(el7, "id", "mce-success-response");
        dom.setAttribute(el7, "style", "display:none");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    	");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" real people should not fill this in and expect good things - do not remove this or risk form bot signups");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "style", "position: absolute; left: -5000px;");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "type", "text");
        dom.setAttribute(el7, "name", "b_78cfbae4f7c16f3f23fdfccff_c83f89cef4");
        dom.setAttribute(el7, "tabindex", "-1");
        dom.setAttribute(el7, "value", "");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clear");
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "type", "submit");
        dom.setAttribute(el7, "value", "Subscribe");
        dom.setAttribute(el7, "name", "subscribe");
        dom.setAttribute(el7, "id", "mc-embedded-subscribe");
        dom.setAttribute(el7, "class", "btn-large green lighten-1 margin-top-30 margin-bottom-30");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("End mc_embed_signup");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/snapchat", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 98,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/snapchat.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row padding-top-30");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "text-center title-color rainbow");
        var el3 = dom.createTextNode("Snapchat");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s6 l12 center-align");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "responsiv-img");
        dom.setAttribute(el3, "src", "img/modern-web-snapchat-id.png");
        dom.setAttribute(el3, "alt", "snapchat id");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s6 l12 center-align margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Find us snapping at modern web focused conferences around the globe. Where will we be next?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Do you want us to come snap at your conference? ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "mailto:hello@modern-web.org");
        var el5 = dom.createTextNode("Email us");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "responsiv-img");
        dom.setAttribute(el3, "src", "img/ng-conf-header.png");
        dom.setAttribute(el3, "alt", "ng-conf");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("ng-conf 2016 - 5/4-5/6 (Salt Lake City, UT)");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/Ylrknm9juTI?rel=0");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/3sXTeJxgeQM?list=PL-G5r6j4GptGfHYMGNUaVcYLBL2ysaqcd");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/u-c6nAy0s78?list=PL-G5r6j4GptGfHYMGNUaVcYLBL2ysaqcd");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/YFp3olsxIKo?list=PL-G5r6j4GptGfHYMGNUaVcYLBL2ysaqcd");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "responsiv-img");
        dom.setAttribute(el3, "src", "img/emberconf-logo.png");
        dom.setAttribute(el3, "alt", "ember-conf");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center-align");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("EmberConf 2016 - 3/29-3/30 (Portland, OR)");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/FQ7BvP_seQ0?rel=0");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/tkV72rxeZcA?rel=0");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col l6 m6 s12 margin-bottom-30");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "video-container");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4, "width", "853");
        dom.setAttribute(el4, "height", "480");
        dom.setAttribute(el4, "src", "https://www.youtube.com/embed/SgAIiM1yvHs?rel=0");
        dom.setAttribute(el4, "frameborder", "0");
        dom.setAttribute(el4, "allowfullscreen", "");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 21, 21, contextualElement);
        return morphs;
      },
      statements: [["inline", "rainbow-tail", [], ["rainbowClass", "rainbow"], ["loc", [null, [97, 0], [97, 39]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/terms-of-service", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 136,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/terms-of-service.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "title-color");
        var el4 = dom.createTextNode("\n    	Web Site Terms and Conditions of Use\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	1. Terms\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	By accessing this web site, you are agreeing to be bound by these\n    	web site Terms and Conditions of Use, all applicable laws and regulations,\n    	and agree that you are responsible for compliance with any applicable local\n    	laws. If you do not agree with any of these terms, you are prohibited from\n    	using or accessing this site. The materials contained in this web site are\n    	protected by applicable copyright and trade mark law.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	2. Use License\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3, "type", "a");
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		Permission is granted to temporarily download one copy of the materials\n    		(information or software) on Modern Web's web site for personal,\n    		non-commercial transitory viewing only. This is the grant of a license,\n    		not a transfer of title, and under this license you may not:\n\n    		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ol");
        dom.setAttribute(el5, "type", "i");
        var el6 = dom.createTextNode("\n    			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("modify or copy the materials;");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("remove any copyright or other proprietary notations from the materials; or");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("transfer the materials to another person or \"mirror\" the materials on any other server.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		This license shall automatically terminate if you violate any of these restrictions and may be terminated by Modern Web at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	3. Disclaimer\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3, "type", "a");
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		The materials on Modern Web's web site are provided \"as is\". Modern Web makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Modern Web does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	4. Limitations\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	In no event shall Modern Web or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Modern Web's Internet site, even if Modern Web or a Modern Web authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	5. Revisions and Errata\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	The materials appearing on Modern Web's web site could include technical, typographical, or photographic errors. Modern Web does not warrant that any of the materials on its web site are accurate, complete, or current. Modern Web may make changes to the materials contained on its web site at any time without notice. Modern Web does not, however, make any commitment to update the materials.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	6. Links\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	Modern Web has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Modern Web of the site. Use of any such linked web site is at the user's own risk.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	7. Site Terms of Use Modifications\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	Modern Web may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n    	8. Governing Law\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	Any claim relating to Modern Web's web site shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	General Terms and Conditions applicable to Use of a Web Site.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("\n    	Privacy Policy\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3, "type", "a");
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		We will only retain personal information as long as necessary for the fulfillment of those purposes.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n    		We will make readily available to customers information about our policies and practices relating to the management of personal information.\n    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n    	We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("modernweb/templates/trainings", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 0
            },
            "end": {
              "line": 100,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/trainings.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "data-anchor", "learn");
          var el4 = dom.createTextNode("WHAT YOU'LL LEARN");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "class", "responsive-img");
          dom.setAttribute(el4, "src", "img/modern-web-giga-cloud-ember-sm.png");
          dom.setAttribute(el4, "alt", "Giga Ember");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row font-size-15em");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Summary");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        This training is designed to quickly level up your Ember skills.  The fast paced curriculum will focus on building a solid foundation in Ember and dive into advanced Ember techniques.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        From TDD to Engines, we'll teach you how to put a practical spin on many advanced techniques.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        By the end of this course you should be able to start solving real business problems with Ember or have a better sense of maximizing your current use of Ember.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 106,
              "column": 4
            },
            "end": {
              "line": 146,
              "column": 4
            }
          },
          "moduleName": "modernweb/templates/trainings.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "data-anchor", "instructors");
          var el4 = dom.createTextNode("YOUR INSTRUCTORS");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m4 l3");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3, "class", "responsive-img circle");
          dom.setAttribute(el3, "src", "/img/instructors/chase-mccarthy.jpg");
          dom.setAttribute(el3, "alt", "Chase McCarthy Headshot");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m8 l9");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Chase McCarthy - Ember Weekend Co-Host & Senior Developer, Hashrocket");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            Chase is a consummate nerd. Interested and proficient in a wide range of technology from iOS to Ruby and back again.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            He began his career in electronics but ended up pursuing a degree in Computer Science. When not learning the latest and greatest in Ember land you can find him buried in a book about machine learning, or possibly investigating flight control algorithms for his quadcopters.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            Chase works as software developer at Hashrocket, a Ruby on Rails consultancy, where he helps to steer clients toward the best tools for the job. That turns out to be Ember.js more often than not. To help himself and others stay current with Ember and Javascript, Chase and Jonathan Jackson started the weekly podcast Ember Weekend.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m4 l3");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3, "class", "responsive-img circle");
          dom.setAttribute(el3, "src", "/img/instructors/jonathan-jackson.png");
          dom.setAttribute(el3, "alt", "Jonathan Jackson Headshot");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m8 l9");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Jonathan Jackson - Ember Weekend Co-Host & Senior Developer, Hashrocket");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            Jonathan is a seasoned veteran of the Ruby and Rails world, which taught Jonathan the value of convention and community.  Enter Ember, which shares much of the same philosophy.  Jonathan recognized the same energy from the Ruby / Rails community and dove in head first.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            With commits on EmberCLI and even a few on Ember.js itself Jonathan found himself loving how much fun Ember could be.  Working at Hashrocket, a respected Ruby and Rails consultancy he was put into the enviable position of getting to work with Ember on a daily basis.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n            When not working professionally on Ember projects he and his friend Chase McCarthy would spend weekends working on Ember side projects to stay sharp.  Eventually they could no longer keep all the experience they were gaining to themselves and began the Ember Weekend podcast to share what they had learned.  When not Embering, scouring the interwebs for new programming patterns or writing his next blog post, you can find him spending time at the beach.\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 152,
              "column": 0
            },
            "end": {
              "line": 249,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/trainings.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "data-anchor", "schedule");
          var el4 = dom.createTextNode("SCHEDULE");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30 font-size-15em");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 center-align");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Participate in 1 or 2 days of Ember.js training based upon your skill level and expertise.");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "class", "responsive-img");
          dom.setAttribute(el4, "src", "img/cari-footer.png");
          dom.setAttribute(el4, "alt", "Cari");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30 font-size-15em");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m6 l6");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Day 1 - EmberJS Fast Track");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "red-text");
          var el4 = dom.createTextNode("Mon May 23, 2016, 9am-6pm");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Level up and develop a solid understanding of the Ember.js building blocks by utilizing advanced community driven solutions to common problems.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Some of the techniques we teach will include exploration into Ember's rich ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://www.emberaddons.com/");
          var el5 = dom.createTextNode("add-on ecosystem");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(", ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "http://emberobserver.com/categories/authentication");
          var el5 = dom.createTextNode("authorization / authentication");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(", and ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://guides.emberjs.com/v2.3.0/testing/");
          var el5 = dom.createTextNode("advanced testing techniques");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        This day is great for developers who have zero Ember.js experience.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        This course is also great for developers who understand Ember.js but need to develop a stronger understanding of how to utilize Ember.js to create ambitious web apps.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createElement("h4");
          var el5 = dom.createTextNode("Key Concepts");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Creating a new project");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Use ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "http://ember-cli.com/");
          var el7 = dom.createTextNode("Ember CLI");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" to create a new project and go over the basic structure of an app.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Running the server");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Serve an ember app in development.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Basic testing");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Generate an acceptance test and run the ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/testing/");
          var el7 = dom.createTextNode("test suite");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(".");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Promises");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Introduce how Ember deals with asynchronous behavior.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Routes");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Learn what gives structure to an Ember application.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Components");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Share reusable templates and behavior.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Actions");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Trigger changes based on user input.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Services");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Move persistent state out of short lived components.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Add-ons");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Utilize community driven and proven solutions.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Helpers");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Extract small pieces of reusable template code.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m6 l6");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Day 2 - EmberJS Expansion Track");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "red-text");
          var el4 = dom.createTextNode("Tues May 24, 2016, 9am-6pm");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Attendance of Day 1 is not required, but recommended you understand all fundamental basics listed under key concepts.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Strengthen your Ember.js knowledge and level up your skills using the framework. We will also build on the foundation of the app we create in Day 1.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n         We'll start this day off with training focused on what to do when your app is more complete. We'll walk through the structure of a complex Ember app by showcasing key features listed below.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createElement("h4");
          var el5 = dom.createTextNode("Key Concepts");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Advanced testing");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/testing/acceptance/");
          var el7 = dom.createTextNode("Acceptance tests");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://www.npmjs.com/package/ember-cli-page-object");
          var el7 = dom.createTextNode("Page objects");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/testing/testing-components/");
          var el7 = dom.createTextNode("Integration tests");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (components)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/testing/unit-testing-basics/");
          var el7 = dom.createTextNode("Unit tests");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (helpers, routes, services)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Authentication using Torii and Ember-Simple-Auth");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Account creation");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Account update");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* OAuth sign in");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("APIs and Ember-CLI-Mirage");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "http://emberjs.com/api/data/classes/DS.JSONAPIAdapter.html");
          var el7 = dom.createTextNode("JSON API");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "http://www.ember-cli-mirage.com/");
          var el7 = dom.createTextNode("Mocking an API");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Live JSON API");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Ember Data");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/models/");
          var el7 = dom.createTextNode("Creating a model");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "https://guides.emberjs.com/v2.3.0/models/creating-updating-and-deleting-records/");
          var el7 = dom.createTextNode("Persisting a model");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Deployment");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Deploy your Ember apps easily and confidently with ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "http://ember-cli.com/ember-cli-deploy/");
          var el7 = dom.createTextNode("ember-cli-deploy");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(".");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("strong");
          var el6 = dom.createElement("li");
          var el7 = dom.createTextNode("Sockets");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Learn how to integrate real-time data into Ember Data with sockets.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [5]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 5]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 5, 5);
          return morphs;
        },
        statements: [["content", "register-button", ["loc", [null, [169, 8], [169, 27]]]], ["content", "register-button", ["loc", [null, [212, 6], [212, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 255,
              "column": 0
            },
            "end": {
              "line": 296,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/trainings.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "data-anchor", "register");
          var el4 = dom.createTextNode("REGISTER TODAY");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m4 l4 center-align");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-2em");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", " https://www.eventbrite.com/e/emberjs-fast-track-expansion-track-modern-web-training-with-ember-weekend-tickets-21688386548");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        May 23-24, 2016, 9am-6pm\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        Immerse yourself in our 2-day training and walk away a better developer.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m4 l4 center-align");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-2em");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", " https://www.eventbrite.com/e/emberjs-fast-track-expansion-track-modern-web-training-with-ember-weekend-tickets-21688386548");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        Mon May 23, 2016, 9am-6pm\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        Become an Ember.js developer or refresh your knowledge.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12 m4 l4 center-align");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-2em");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", " https://www.eventbrite.com/e/emberjs-fast-track-expansion-track-modern-web-training-with-ember-weekend-tickets-21688386548");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        Tues May 24, 2016, 9am-6pm\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "font-size-15em");
          var el4 = dom.createTextNode("\n        Level up your skills to Ember.js pro with this one day training.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 1, 1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "md-btn", [], ["text", "2 Day Training", "buttonType", "large", "class", "waves-effect waves-light btn-large red"], ["loc", [null, [264, 142], [264, 240]]]], ["inline", "md-btn", [], ["text", "Fast Track", "buttonType", "large", "class", "waves-effect waves-light btn-large red"], ["loc", [null, [275, 142], [275, 236]]]], ["inline", "md-btn", [], ["text", "Expansion Track", "buttonType", "large", "class", "waves-effect waves-light btn-large red"], ["loc", [null, [286, 142], [286, 241]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 302,
              "column": 0
            },
            "end": {
              "line": 387,
              "column": 0
            }
          },
          "moduleName": "modernweb/templates/trainings.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createTextNode("PREREQUISITES");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row margin-top-30 font-size-15em");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("Recommended Skills");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        This is a fast paced training that will cover a wide range of web technologies. We highly recommended that you are comfortable with the following subjects:\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* JavaScript");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* jQuery");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* HTTP");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* AJAX");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* HTML/CSS");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        No previous Ember.js experience is required for training on Day 1. Day 2 will require that you be familiar with subject matter covered in Day 1.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("Hardware");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("strong");
          var el5 = dom.createTextNode("Recommended");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        * Macbook Pro with OS X 10.10.x (Yosemite) or newer\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("strong");
          var el5 = dom.createTextNode("Minimum");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        * Macbook Air and OS X 10.7 (Lion)\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        * Ubuntu laptop if that's your preference\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        * Note: Windows laptops are not recommended. Node and Ember CLI support for Windows is suboptimal and will not provide the best training experience.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("Software");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Node 0.12.x or newer");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createTextNode("* Ember CLI 2.3.0 (or latest stable release)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Make sure you can successfully `ember new project-name` and `ember serve` that project before the first day training. This will help us move quickly into training so we can cover as much as possible.\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("Other Things");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        It would also be helpful (though not required) to set up an account on the ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://embercommunity.slack.com");
          var el5 = dom.createTextNode("Ember Community Slack");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        If you run into any issues getting your Ember environment setup, please ask for help in the ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://embercommunity.slack.com/messages/needhelp/");
          var el5 = dom.createTextNode("#needhelp");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" channel or feel free to ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "mailto: hello@modern-web.org");
          var el5 = dom.createTextNode("email us");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Twitter: ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "http://twitter.com/modernweb_");
          var el5 = dom.createTextNode("@modernweb_");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" or find us directly at ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://twitter.com/code0100fun");
          var el5 = dom.createTextNode("@code0100fun");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" and ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://twitter.com/rondale-sc");
          var el5 = dom.createTextNode("@rondale-sc");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Ember.js Slack: ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://embercommunity.slack.com/messages/@rondale_sc/");
          var el5 = dom.createTextNode("rondale_sc");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" and ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "https://embercommunity.slack.com/messages/@code0100fun/");
          var el5 = dom.createTextNode("code0100fun");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n        Email: ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "mailto: hello@modern-web.org");
          var el5 = dom.createTextNode("hello@modern-web.org");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "class", "responsive-img");
          dom.setAttribute(el4, "src", "img/sams-giga-web-size.png");
          dom.setAttribute(el4, "alt", "Sams Giga");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "center-align");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 9, 3]), 1, 1);
          return morphs;
        },
        statements: [["content", "register-button", ["loc", [null, [383, 8], [383, 27]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 398,
            "column": 0
          }
        },
        "moduleName": "modernweb/templates/trainings.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row padding-top-30");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "center-align title-color");
        var el4 = dom.createTextNode("Modern Web Training");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "card-panel black-text z-depth-1");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m12 l8");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        var el7 = dom.createTextNode("\n        Best in industry training for beginner, intermediate, and advanced level developers.\n      ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "font-size-15em padding-top-45");
        var el7 = dom.createTextNode("\n        Courses on ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://emberjs.com/");
        var el8 = dom.createTextNode("EmberJS");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://angular.io/");
        var el8 = dom.createTextNode("Angular 2");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://facebook.github.io/react/");
        var el8 = dom.createTextNode("ReactJS");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://www.polymer-project.org/1.0/");
        var el8 = dom.createTextNode("Polymer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.ecma-international.org/ecma-262/6.0/");
        var el8 = dom.createTextNode("ES6/ES2015");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.phoenixframework.org/");
        var el8 = dom.createTextNode("Phoenix");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("/");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://elixir-lang.org/");
        var el8 = dom.createTextNode("Elixir");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(",\n        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://aws.amazon.com/");
        var el8 = dom.createTextNode("Amazon AWS");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://hub.docker.com/enterprise/trial/?gclid=COjfjZes58oCFdgQgQodY4UDrA");
        var el8 = dom.createTextNode("Docker");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(", Web Components, Test Driven Development and more.\n      ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m4 l4");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "class", "responsive-img");
        dom.setAttribute(el7, "src", "img/modern-web-giga-cloud-sm.png");
        dom.setAttribute(el7, "alt", "Giga with a cloud");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end title ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "center-align");
        var el4 = dom.createTextNode("Current Courses");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 padding-top-30");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "card-panel z-depth-1 center-align");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createTextNode("EMBERJS: FAST TRACK & EXPANSION TRACK");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        var el7 = dom.createTextNode("with Chase McCarthy & Jonathan Jackson from Ember Weekend.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "padding-top-30");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "class", "responsive-img");
        dom.setAttribute(el7, "src", "img/modern-web-cari-sign-ember-lg.png");
        dom.setAttribute(el7, "alt", "Cari EmberJS");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "font-size-15em");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "font-size-15em");
        var el7 = dom.createTextNode("\n            May 23 - 24, 2016 - Silicon Valley\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row font-size-15em center-align");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m6 l3");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m6 l3");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m6 l3");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col s12 m6 l3");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "font-size-2em");
        var el4 = dom.createTextNode("\n    Online and offline trainings available. Need an exclusive training? Inquire ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "mailto:hello@modern-web.org");
        var el5 = dom.createTextNode("here");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [10, 1, 1]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1, 1, 7]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [5]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [7]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [13, 1]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [15, 1]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [17, 1]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [19, 1]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [21, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "link-to", ["Register Now", "trainings", ["subexpr", "query-params", [], ["anchor", "register"], ["loc", [null, [50, 49], [50, 81]]]]], ["class", "waves-effect waves-light btn-large red"], ["loc", [null, [50, 12], [50, 130]]]], ["inline", "link-to", ["Instructors", "trainings", ["subexpr", "query-params", [], ["anchor", "instructors"], ["loc", [null, [59, 46], [59, 81]]]]], [], ["loc", [null, [59, 10], [59, 83]]]], ["inline", "link-to", ["What You'll Learn", "trainings", ["subexpr", "query-params", [], ["anchor", "learn"], ["loc", [null, [62, 52], [62, 81]]]]], [], ["loc", [null, [62, 10], [62, 84]]]], ["inline", "link-to", ["Schedule", "trainings", ["subexpr", "query-params", [], ["anchor", "schedule"], ["loc", [null, [65, 43], [65, 75]]]]], [], ["loc", [null, [65, 10], [65, 78]]]], ["inline", "link-to", ["Register", "trainings", ["subexpr", "query-params", [], ["anchor", "register"], ["loc", [null, [68, 43], [68, 75]]]]], [], ["loc", [null, [68, 10], [68, 78]]]], ["block", "md-card-panel", [], [], 0, null, ["loc", [null, [79, 0], [100, 18]]]], ["block", "md-card-panel", [], [], 1, null, ["loc", [null, [106, 4], [146, 22]]]], ["block", "md-card-panel", [], [], 2, null, ["loc", [null, [152, 0], [249, 18]]]], ["block", "md-card-panel", [], [], 3, null, ["loc", [null, [255, 0], [296, 18]]]], ["block", "md-card-panel", [], [], 4, null, ["loc", [null, [302, 0], [387, 18]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("modernweb/templates/welcome", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 12
          }
        },
        "moduleName": "modernweb/templates/welcome.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nwelcome page");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('modernweb/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define("modernweb/utils/ensureImage", ["exports"], function (exports) {
  exports["default"] = ensureImage;
  /**
    higher-order function to ensure there's an image on each podcast in a list. It's a "higher-order"
    function because it's a function that returns a function.
  
    This looks funny, because it's a function written so you can chain it with other functions.
    That way we can loop through the podcasts _only once_ with a map (below), and fix them
    all in one go.
  
    @param {function} project - This is a projection function, a projection function is any function that
      can be used with an Array `map`. It projects a value from the array into a new value.
  
    @returns {function} a projection function! When you call `ensureImage` it's going to take a function
      you can use in an Array `map`, and return a function you can use in an Array `map`. It chains two
      transformations together, so you you only have to `map` once.
  */

  function ensureImage(project) {
    return function (podcast) {
      return project(Object.assign({}, podcast, {
        imageURL: podcast.imageURL || "http://img.youtube.com/vi/" + podcast.id + "/hqdefault.jpg"
      }));
    };
  }
});
define('modernweb/utils/featuredvideo', ['exports'], function (exports) {
  exports['default'] = [{
    type: 'youtube',
    id: 'm-HjKwyQoQg',
    title: 'BabelJS',
    description: '',
    presenters: [{
      name: 'James Kyle'
    }]
  }, {
    type: 'youtube',
    id: '6P7hwhvlwig',
    title: 'ES2015 & Beyond',
    description: '',
    presenters: [{
      name: 'Jay Phelps'
    }]
  }, {
    type: 'youtube',
    id: 'ivti_bVkgwg',
    title: 'Angular 2 & Firebase',
    description: '',
    presenters: [{
      name: 'Jeff Cross'
    }]
  },

  /* PORT THE REST OF THESE OVER!!!! vvvvvvvvvvvvvvvv  */

  {
    title: 'BroccoliJS, HTMLBars, and Glimmer 2',
    description: '',
    presenters: 'Stefan Penner, Godfrey Chan, Yehuda Katz',
    videoURL: 'https://www.youtube.com/embed/h-dy5tHm2TA?rel=0',
    imageURL: 'http://img.youtube.com/vi/h-dy5tHm2TA/hqdefault.jpg',
    keyTopics: 'Glimmer, HTMLBars, BroccoliJS'
  }, {
    title: 'Bind to the Cloud with Falcor',
    description: '',
    presenters: 'Jafar Husain',
    videoURL: 'https://www.youtube.com/embed/rcs3c67vG7w?rel=0',
    imageURL: 'http://img.youtube.com/vi/rcs3c67vG7w/hqdefault.jpg',
    keyTopics: 'FalcorJS'
  }, {
    title: 'Interactive ES2015/ES6: Real World Patterns in 2015',
    description: '',
    presenters: 'Jarrod Overson',
    videoURL: 'https://www.youtube.com/embed/a-KdIBY93vs?rel=0',
    imageURL: 'http://img.youtube.com/vi/a-KdIBY93vs/hqdefault.jpg',
    keyTopics: 'ES2015, ES6'
  }, {
    title: 'The Philosophy of React as a Framework',
    description: '',
    presenters: 'Jim Sproch',
    videoURL: 'https://www.youtube.com/embed/H1vW1w8k7J0?rel=0',
    imageURL: 'http://img.youtube.com/vi/H1vW1w8k7J0/hqdefault.jpg',
    keyTopics: 'ReactJS'
  }, {
    title: 'Reactive Programming with RxJS',
    description: '',
    presenters: 'Ben Lesh',
    videoURL: 'https://www.youtube.com/embed/yk_6eU3Hcwo?rel=0',
    imageURL: 'http://img.youtube.com/vi/yk_6eU3Hcwo/hqdefault.jpg',
    keyTopics: 'Reactive Programming, RxJS'
  }, {
    title: 'Functional Programming: Sequence without Loops',
    description: '',
    presenters: 'Ariya Hidayat',
    videoURL: 'https://www.youtube.com/embed/S8Pb5tphPoE?rel=0',
    imageURL: 'http://img.youtube.com/vi/S8Pb5tphPoE/hqdefault.jpg',
    keyTopics: 'Functional Programming'
  }, {
    title: 'The Coveted Universal Web Component',
    description: '',
    presenters: 'Jay Phelps',
    videoURL: 'https://www.youtube.com/embed/sNeK4Kplo9g?rel=0',
    imageURL: 'http://img.youtube.com/vi/sNeK4Kplo9g/hqdefault.jpg',
    keyTopics: 'Web Components, Graffiti'
  }, {
    title: 'EmberJS Components: Past, Present, and Future',
    description: '',
    presenters: 'Stefan Penner',
    videoURL: 'https://www.youtube.com/embed/qxzMOIT-uNU?rel=0',
    imageURL: 'http://img.youtube.com/vi/qxzMOIT-uNU/hqdefault.jpg',
    keyTopics: 'EmberJS, Components'
  }];
});
define("modernweb/utils/groupsOfThree", ["exports"], function (exports) {
  exports["default"] = groupsOfThree;
  /**
    Takes an array and groups it into a new array of arrays of 3 (or less) items.
    So: `[a, b, c, d, e, f, g, h]` becomes `[[a, b, c], [d, e, f], [g, h]]`
  
    NOTE: The cool thing too look up and learn about here is `Array.prototype.reduce`.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  
    It's a way to iterate over the items in an array and track some sort of state while you're doing so,
    ultimately returning the state. In the example below, I'm iterating through all items in `arr`,
    and I'm tracking two pieces of state: 1. The current `group` of three I'm building,
    and 2. The `groups` list I'm adding groups too. At the end, the `reduce` call returns the entire state,
    and I get just the `.groups` property off of it and return.
  
    @param {Array} arr the array to create the results from
    @returns {Array} an array of arrays grouped into threes
  */

  function groupsOfThree(arr) {
    return arr.reduce(function (_ref, item, i) {
      var group = _ref.group;
      var groups = _ref.groups;

      if (!group || i % 3 === 0) {
        group = [];
        groups.push(group);
      }
      group.push(item);
      return { groups: groups, group: group };
    }, { group: null, groups: [] }).groups;
  }
});
define('modernweb/utils/speakers', ['exports'], function (exports) {
	exports['default'] = [{
		cardTitle: 'Jeff Cross',
		title: 'Angular Core Team',
		image: 'img/speakers/jeff-cross.jpg',
		current: true
	}, {
		cardTitle: 'James Kyle',
		title: 'BabelJS Core Team',
		image: 'img/speakers/james-kyle.jpg',
		current: true
	}, {
		cardTitle: 'Ben Lesh',
		title: 'Senior UI Engineer at Netflix',
		image: 'img/speakers/ben-lesh.jpg',
		current: true
	}, {
		cardTitle: 'Ariya Hidayat',
		title: 'Creator PhantomJS, Esprima',
		image: 'img/speakers/ariya-hidayat.jpg',
		current: true
	}, {
		cardTitle: 'Stefan Penner',
		title: 'Ember Core Team, Hacker @Yahoo',
		image: 'img/speakers/stefan-penner.jpeg',
		current: true
	}, {
		cardTitle: 'Jafar Husain',
		title: 'Cross-Team Lead at Netflix, TC39 Member',
		image: 'img/speakers/jafar-husain.jpg',
		current: true
	}, {
		cardTitle: 'Jay Phelps',
		title: 'Senior Front End Engineer at Netflix',
		image: 'img/speakers/jay-phelps.jpeg',
		current: true
	}, {
		cardTitle: 'Godfrey Chan',
		title: 'Rails Core Team, Ember at Tilde',
		image: 'img/speakers/godfrey-chan.jpg',
		current: true
	}, {
		cardTitle: 'Yehuda Katz',
		title: 'EmberJS Core Team',
		image: 'img/speakers/yehuda-katz.jpg',
		current: true
	}, {
		cardTitle: 'Nathan Hammond',
		title: 'Principal Web Developer at LinkedIn',
		image: 'img/speakers/nathan-hammond.jpg',
		current: true
	}, {
		cardTitle: 'Jim Sproch',
		title: 'React Core Team',
		image: 'img/speakers/jim-sproch.jpg',
		current: true
	}, {
		cardTitle: 'Jarrod Overson',
		title: 'Developing Web Components',
		image: 'img/speakers/jarrod-overson.jpg',
		current: true
	}];
});
define("modernweb/views/application", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].View.extend({
		didInsertElement: function didInsertElement() {
			this._super.apply(this, arguments);
			this.$(".button-collapse").sideNav({
				closeOnClick: true
			});
		}
	});
});
define('modernweb/views/default-collection-header', ['exports', 'ember-cli-materialize/views/default-collection-header'], function (exports, _emberCliMaterializeViewsDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultCollectionHeader['default'];
    }
  });
});
define('modernweb/views/default-column-header', ['exports', 'ember-cli-materialize/views/default-column-header'], function (exports, _emberCliMaterializeViewsDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultColumnHeader['default'];
    }
  });
});
define('modernweb/views/trainings', ['exports', 'ember', 'ember-anchor/mixins/view-support'], function (exports, _ember, _emberAnchorMixinsViewSupport) {
  exports['default'] = _ember['default'].View.extend(_emberAnchorMixinsViewSupport['default'], {});
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('modernweb/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"modernweb","environment":"development","contentSecurityPolicy":{"style-src":"'self' 'unsafe-inline'","connect-src":"'self' https://auth.firebase.com wss://*.firebaseio.com http://gdata.youtube.com","frame-src":"'self' https://w.soundcloud.com https://www.youtube.com","img-src":"'self' http://img.youtube.com"},"firebase":"https://modern-web-site.firebaseio.com/","baseURL":"/","locationType":"hash","EmberENV":{"FEATURES":{},"_ENABLE_LEGACY_VIEW_SUPPORT":true},"APP":{"name":"modernweb","version":"0.0.0+d99fd37d","autoboot":false},"emberAnchor":{"anchorQueryParam":"anchor"},"materializeDefaults":{"modalIsFooterFixed":false,"modalContainerId":"materialize-modal-root-element","buttonIconPosition":"left","loaderSize":"big","loaderMode":"indeterminate","dropdownInDuration":300,"dropdownOutDuration":300},"exportApplicationGlobal":true}};
});


define('~fastboot/app-factory', ['modernweb/app', 'modernweb/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=modernweb.map