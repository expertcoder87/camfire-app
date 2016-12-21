"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('frontend-upgrade/adapters/application', ['exports', 'active-model-adapter', 'frontend-upgrade/utils/constants', 'frontend-upgrade/config/environment'], function (exports, _activeModelAdapter, _frontendUpgradeUtilsConstants, _frontendUpgradeConfigEnvironment) {
  var ApplicationAdapter;

  ApplicationAdapter = _activeModelAdapter['default'].extend({
    namespace: _frontendUpgradeUtilsConstants['default'].NAMESPACE
  }, {
    host: _frontendUpgradeConfigEnvironment['default'].APP.HOST
  }, {
    coalesceFindRequests: true
  });

  exports['default'] = ApplicationAdapter;
});
define('frontend-upgrade/app', ['exports', 'ember', 'ember-resolver', 'ember-load-initializers', 'frontend-upgrade/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _frontendUpgradeConfigEnvironment) {
  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _frontendUpgradeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendUpgradeConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _frontendUpgradeConfigEnvironment['default'].modulePrefix);

  $(function () {
    $.ajaxPrefilter(function (options, originalOptions, xhr) {
      var token;
      token = $('meta[name="csrf-token"]').attr('content');
      return xhr.setRequestHeader('X-CSRF-Token', token);
    });
    return $(document).ajaxComplete(function (event, xhr, settings) {
      var csrf_token;
      csrf_token = xhr.getResponseHeader('X-CSRF-Token');
      if (csrf_token) {
        return $('meta[name="csrf-token"]').attr('content', csrf_token);
      }
    });
  });

  exports['default'] = App;
});
define('frontend-upgrade/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'frontend-upgrade/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _frontendUpgradeConfigEnvironment) {

  var name = _frontendUpgradeConfigEnvironment['default'].APP.name;
  var version = _frontendUpgradeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('frontend-upgrade/components/base-focusable', ['exports', 'ember-paper/components/base-focusable'], function (exports, _emberPaperComponentsBaseFocusable) {
  exports['default'] = _emberPaperComponentsBaseFocusable['default'];
});
define('frontend-upgrade/components/campfire-input', ['exports', 'ember'], function (exports, _ember) {
  var view;

  view = _ember['default'].Component.extend({
    templateName: 'campfire-input',
    didInsertElement: function didInsertElement() {
      var self;
      self = this;
      return this.$().click(function () {
        return self.set('autoFocus', true);
      });
    }
  });

  exports['default'] = view;
});
define('frontend-upgrade/components/dropdown-menu', ['exports', 'ember'], function (exports, _ember) {
  var view;

  view = _ember['default'].Component.extend({
    templateName: 'components/dropdown-menu',
    menuOptions: ['Logout', 'Game', 'Character']
  });

  exports['default'] = view;
});
define('frontend-upgrade/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('frontend-upgrade/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTetherComponentsEmberTether) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTetherComponentsEmberTether['default'];
    }
  });
});
define('frontend-upgrade/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define("frontend-upgrade/components/forgot-password", ["exports", "ember", "frontend-upgrade/utils/constants"], function (exports, _ember, _frontendUpgradeUtilsConstants) {
  var view;

  view = _ember["default"].Component.extend({
    templateName: 'components/forgot-password',
    onFailure: function onFailure(error) {
      return console.log(error);
    }
  });

  exports["default"] = view;
});
define("frontend-upgrade/components/game-character", ["exports", "ember"], function (exports, _ember) {
  var view;

  view = _ember["default"].Component.extend({
    templateName: 'components/game-character'
  });

  exports["default"] = view;
});
define("frontend-upgrade/components/game-listing", ["exports", "ember"], function (exports, _ember) {
  var view;

  view = _ember["default"].Component.extend({
    templateName: 'components/game-listing'
  });

  exports["default"] = view;
});
define("frontend-upgrade/components/gm-view", ["exports", "ember"], function (exports, _ember) {
  var view;

  view = _ember["default"].Component.extend({
    templateName: 'gm-view',
    didInsertElement: function didInsertElement() {
      return $("#owl-demo").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        items: 1,
        paginationSpeed: false,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
      });
    }
  });

  exports["default"] = view;
});
define("frontend-upgrade/components/log-in", ["exports", "ember", "frontend-upgrade/utils/constants"], function (exports, _ember, _frontendUpgradeUtilsConstants) {
  var view;

  view = _ember["default"].Component.extend({
    templateName: 'components/login',
    onFailure: function onFailure(error) {
      return console.log(error);
    },
    didInsertElement: function didInsertElement() {
      var self;
      return self = this;
    }
  });

  exports["default"] = view;
});
define('frontend-upgrade/components/login-button', ['exports', 'ember'], function (exports, _ember) {
  var view;

  view = _ember['default'].Component.extend({
    templateName: 'components/loginbutton',
    classNames: ['login-bar']
  });

  exports['default'] = view;
});
define('frontend-upgrade/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('frontend-upgrade/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('frontend-upgrade/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _emberPaperComponentsPaperAutocompleteHighlight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteHighlight['default'];
    }
  });
});
define('frontend-upgrade/components/paper-autocomplete-item', ['exports', 'ember-paper/components/paper-autocomplete-item'], function (exports, _emberPaperComponentsPaperAutocompleteItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteItem['default'];
    }
  });
});
define('frontend-upgrade/components/paper-autocomplete-list', ['exports', 'ember-paper/components/paper-autocomplete-list'], function (exports, _emberPaperComponentsPaperAutocompleteList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteList['default'];
    }
  });
});
define('frontend-upgrade/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _emberPaperComponentsPaperAutocomplete) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocomplete['default'];
    }
  });
});
define('frontend-upgrade/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _emberPaperComponentsPaperBackdrop) {
  exports['default'] = _emberPaperComponentsPaperBackdrop['default'];
});
define('frontend-upgrade/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _emberPaperComponentsPaperButton) {
  exports['default'] = _emberPaperComponentsPaperButton['default'];
});
define('frontend-upgrade/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _emberPaperComponentsPaperCardActions) {
  exports['default'] = _emberPaperComponentsPaperCardActions['default'];
});
define('frontend-upgrade/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _emberPaperComponentsPaperCardAvatar) {
  exports['default'] = _emberPaperComponentsPaperCardAvatar['default'];
});
define('frontend-upgrade/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _emberPaperComponentsPaperCardContent) {
  exports['default'] = _emberPaperComponentsPaperCardContent['default'];
});
define('frontend-upgrade/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _emberPaperComponentsPaperCardHeaderHeadline) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderHeadline['default'];
});
define('frontend-upgrade/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _emberPaperComponentsPaperCardHeaderSubhead) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderSubhead['default'];
});
define('frontend-upgrade/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _emberPaperComponentsPaperCardHeaderText) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderText['default'];
});
define('frontend-upgrade/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _emberPaperComponentsPaperCardHeaderTitle) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderTitle['default'];
});
define('frontend-upgrade/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _emberPaperComponentsPaperCardHeader) {
  exports['default'] = _emberPaperComponentsPaperCardHeader['default'];
});
define('frontend-upgrade/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _emberPaperComponentsPaperCardIconActions) {
  exports['default'] = _emberPaperComponentsPaperCardIconActions['default'];
});
define('frontend-upgrade/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _emberPaperComponentsPaperCardImage) {
  exports['default'] = _emberPaperComponentsPaperCardImage['default'];
});
define('frontend-upgrade/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _emberPaperComponentsPaperCardMedia) {
  exports['default'] = _emberPaperComponentsPaperCardMedia['default'];
});
define('frontend-upgrade/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _emberPaperComponentsPaperCardTitleMedia) {
  exports['default'] = _emberPaperComponentsPaperCardTitleMedia['default'];
});
define('frontend-upgrade/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _emberPaperComponentsPaperCardTitleText) {
  exports['default'] = _emberPaperComponentsPaperCardTitleText['default'];
});
define('frontend-upgrade/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _emberPaperComponentsPaperCardTitle) {
  exports['default'] = _emberPaperComponentsPaperCardTitle['default'];
});
define('frontend-upgrade/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _emberPaperComponentsPaperCard) {
  exports['default'] = _emberPaperComponentsPaperCard['default'];
});
define('frontend-upgrade/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _emberPaperComponentsPaperCheckbox) {
  exports['default'] = _emberPaperComponentsPaperCheckbox['default'];
});
define('frontend-upgrade/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _emberPaperComponentsPaperContent) {
  exports['default'] = _emberPaperComponentsPaperContent['default'];
});
define('frontend-upgrade/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _emberPaperComponentsPaperDialogActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogActions['default'];
    }
  });
});
define('frontend-upgrade/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _emberPaperComponentsPaperDialogContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContainer['default'];
    }
  });
});
define('frontend-upgrade/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _emberPaperComponentsPaperDialogContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContent['default'];
    }
  });
});
define('frontend-upgrade/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _emberPaperComponentsPaperDialogInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogInner['default'];
    }
  });
});
define('frontend-upgrade/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _emberPaperComponentsPaperDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialog['default'];
    }
  });
});
define('frontend-upgrade/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _emberPaperComponentsPaperDivider) {
  exports['default'] = _emberPaperComponentsPaperDivider['default'];
});
define('frontend-upgrade/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _emberPaperComponentsPaperForm) {
  exports['default'] = _emberPaperComponentsPaperForm['default'];
});
define('frontend-upgrade/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _emberPaperComponentsPaperGridList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridList['default'];
    }
  });
});
define('frontend-upgrade/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _emberPaperComponentsPaperGridTileFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTileFooter['default'];
    }
  });
});
define('frontend-upgrade/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _emberPaperComponentsPaperGridTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTile['default'];
    }
  });
});
define('frontend-upgrade/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _emberPaperComponentsPaperIcon) {
  exports['default'] = _emberPaperComponentsPaperIcon['default'];
});
define('frontend-upgrade/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _emberPaperComponentsPaperInput) {
  exports['default'] = _emberPaperComponentsPaperInput['default'];
});
define('frontend-upgrade/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _emberPaperComponentsPaperItem) {
  exports['default'] = _emberPaperComponentsPaperItem['default'];
});
define('frontend-upgrade/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _emberPaperComponentsPaperList) {
  exports['default'] = _emberPaperComponentsPaperList['default'];
});
define('frontend-upgrade/components/paper-menu-container-wrap', ['exports', 'ember-paper/components/paper-menu-container-wrap'], function (exports, _emberPaperComponentsPaperMenuContainerWrap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContainerWrap['default'];
    }
  });
});
define('frontend-upgrade/components/paper-menu-container', ['exports', 'ember-paper/components/paper-menu-container'], function (exports, _emberPaperComponentsPaperMenuContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContainer['default'];
    }
  });
});
define('frontend-upgrade/components/paper-menu-content-pane', ['exports', 'ember-paper/components/paper-menu-content-pane'], function (exports, _emberPaperComponentsPaperMenuContentPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContentPane['default'];
    }
  });
});
define('frontend-upgrade/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _emberPaperComponentsPaperMenuContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContent['default'];
    }
  });
});
define('frontend-upgrade/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _emberPaperComponentsPaperMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuItem['default'];
    }
  });
});
define('frontend-upgrade/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _emberPaperComponentsPaperMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenu['default'];
    }
  });
});
define('frontend-upgrade/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _emberPaperComponentsPaperOptgroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperOptgroup['default'];
    }
  });
});
define('frontend-upgrade/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _emberPaperComponentsPaperOption) {
  exports['default'] = _emberPaperComponentsPaperOption['default'];
});
define('frontend-upgrade/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _emberPaperComponentsPaperProgressCircular) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressCircular['default'];
    }
  });
});
define('frontend-upgrade/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _emberPaperComponentsPaperProgressLinear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressLinear['default'];
    }
  });
});
define('frontend-upgrade/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _emberPaperComponentsPaperRadioGroup) {
  exports['default'] = _emberPaperComponentsPaperRadioGroup['default'];
});
define('frontend-upgrade/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _emberPaperComponentsPaperRadio) {
  exports['default'] = _emberPaperComponentsPaperRadio['default'];
});
define('frontend-upgrade/components/paper-select-container', ['exports', 'ember-paper/components/paper-select-container'], function (exports, _emberPaperComponentsPaperSelectContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectContainer['default'];
    }
  });
});
define('frontend-upgrade/components/paper-select-core', ['exports', 'ember-paper/components/paper-select-core'], function (exports, _emberPaperComponentsPaperSelectCore) {
  exports['default'] = _emberPaperComponentsPaperSelectCore['default'];
});
define('frontend-upgrade/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _emberPaperComponentsPaperSelectHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectHeader['default'];
    }
  });
});
define('frontend-upgrade/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _emberPaperComponentsPaperSelectMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenu['default'];
    }
  });
});
define('frontend-upgrade/components/paper-select-value', ['exports', 'ember-paper/components/paper-select-value'], function (exports, _emberPaperComponentsPaperSelectValue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectValue['default'];
    }
  });
});
define('frontend-upgrade/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _emberPaperComponentsPaperSelect) {
  exports['default'] = _emberPaperComponentsPaperSelect['default'];
});
define('frontend-upgrade/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _emberPaperComponentsPaperSidenavContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSidenavContainer['default'];
    }
  });
});
define('frontend-upgrade/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _emberPaperComponentsPaperSidenavInner) {
  exports['default'] = _emberPaperComponentsPaperSidenavInner['default'];
});
define('frontend-upgrade/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _emberPaperComponentsPaperSidenavToggle) {
  exports['default'] = _emberPaperComponentsPaperSidenavToggle['default'];
});
define('frontend-upgrade/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _emberPaperComponentsPaperSidenav) {
  exports['default'] = _emberPaperComponentsPaperSidenav['default'];
});
define('frontend-upgrade/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _emberPaperComponentsPaperSlider) {
  exports['default'] = _emberPaperComponentsPaperSlider['default'];
});
define('frontend-upgrade/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _emberPaperComponentsPaperSubheader) {
  exports['default'] = _emberPaperComponentsPaperSubheader['default'];
});
define('frontend-upgrade/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _emberPaperComponentsPaperSwitch) {
  exports['default'] = _emberPaperComponentsPaperSwitch['default'];
});
define('frontend-upgrade/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _emberPaperComponentsPaperToolbarTools) {
  exports['default'] = _emberPaperComponentsPaperToolbarTools['default'];
});
define('frontend-upgrade/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _emberPaperComponentsPaperToolbar) {
  exports['default'] = _emberPaperComponentsPaperToolbar['default'];
});
define('frontend-upgrade/components/quest-item', ['exports', 'ember'], function (exports, _ember) {
  var view;

  view = _ember['default'].Component.extend({
    templateName: 'quest-item',
    classNameBindings: ['item.isComplete:task-completed'],
    itemChecked: (function () {
      return this.get('item').save();
    }).observes('item.isComplete'),
    actions: {
      removeQuestItem: function removeQuestItem(itemId) {
        return this.get('item').destroyRecord();
      }
    }
  });

  exports['default'] = view;
});
define('frontend-upgrade/components/sign-up', ['exports', 'ember'], function (exports, _ember) {
  var animatedView, view;

  animatedView = function (self, time) {
    self.$().css('opacity', 0);
    if (time) {
      return self.$().animate({
        opacity: 1
      }, time);
    } else {
      return self.$().animate({
        opacity: 1
      }, 1000);
    }
  };

  view = _ember['default'].Component.extend({
    isShowingModal: true,
    templateName: 'signup',
    didInsertElement: function didInsertElement() {
      return animatedView(this);
    },
    signupButtonClass: (function () {
      return 'ch-btn signupbutton floatLT';
    }).property('controller.canSignup'),
    setFocus: (function () {
      if (this.get('controller').get('hasAcceptedTerms')) {
        return $('.checkbox-signup').focus();
      }
    }).observes('controller.hasAcceptedTerms')
  });

  exports['default'] = view;
});
define('frontend-upgrade/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('frontend-upgrade/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _emberCssTransitionsComponentsTransitionGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsComponentsTransitionGroup['default'];
    }
  });
});
define('frontend-upgrade/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend({
    showPromptDialog: false
  }, {
    history: ['application'],
    showBaackButton: true,
    actions: {
      goBack: function goBack() {
        var lastRoute;
        $.unique(this.get('history'));
        if (this.get('history.length') > 1) {
          this.get('history').popObject();
          lastRoute = this.get('history').popObject();
          if (lastRoute === 'characters') {
            if (this.get('history.length') > 0) {
              lastRoute = this.get('history').popObject();
              return this.replaceRoute(lastRoute);
            } else {
              return this.replaceRoute('application');
            }
          } else {
            this.get('history').pushObject(lastRoute);
            return this.replaceRoute(lastRoute);
          }
        } else {
          return this.replaceRoute('application');
        }
      }
    }
  });

  exports['default'] = controller;
});
define("frontend-upgrade/controllers/character", ["exports", "ember"], function (exports, _ember) {
  var CharacterController;

  CharacterController = _ember["default"].Controller.extend({
    navBarName: "Character",
    showPrompt: true
  });

  exports["default"] = CharacterController;
});
define('frontend-upgrade/controllers/character/actions', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend({
    contextLabelCallback: function contextLabelCallback(context) {
      return context.get('name');
    },
    contextsChanged: _ember['default'].observer('model.contexts', function () {
      var arr, obj;
      obj = _ember['default'].Object.create({
        name: 'All Skills and Attributes'
      });
      arr = [obj];
      this.get('model.contexts').toArray().forEach(function (context) {
        return arr.pushObject(context);
      });
      this.set('contextList', arr);
      return this.set('selectedContext', arr[0]);
    }),
    selectedContextChanged: _ember['default'].observer('selectedContext', function () {
      if (this.get('selectedContext.name') === 'All Skills and Attributes') {
        return this.set('actionList', this.get('model.actions'));
      } else {
        return this.set('actionList', this.get('model.actions').filterBy('context', this.get('selectedContext.name')));
      }
    }),
    actions: {
      actionDetails: function actionDetails(actionId) {
        if (actionId) {
          return this.transitionToRoute('character.actions.edit', actionId);
        }
      }
    }
  });

  exports['default'] = controller;
});
define("frontend-upgrade/controllers/character/actions/edit", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeHelpersAjax) {
  var controller;

  controller = _ember["default"].Controller.extend({
    valilLevels: ['Terrible', 'Poor', 'Mediocre', 'Fair', 'Good', 'Great', 'Superb'],
    actions: {
      decreaseLevel: function decreaseLevel() {
        var data, dataType, hash, nextLevel, request, type, url;
        if (this.get('model.level') !== 'Terrible') {
          nextLevel = this.valilLevels.indexOf(this.get('model.level')) - 1;
          this.set('model.level', this.valilLevels[nextLevel]);
          data = {
            level: this.valilLevels[nextLevel]
          };
          type = 'PUT';
          url = _frontendUpgradeUtilsConstants["default"].HOST + "/actions/" + this.get('model.id');
          dataType = 'json';
          data = data;
          hash = {
            dataType: dataType,
            data: data
          };
          request = (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          return request.fail(function (jqXHR, textStatus, e) {
            return console.log('Error Occurred' + e);
          });
        }
      },
      increaseLevel: function increaseLevel() {
        var data, dataType, hash, nextLevel, request, type, url;
        if (this.get('model.level') !== 'Superb') {
          nextLevel = this.valilLevels.indexOf(this.get('model.level')) + 1;
          this.set('model.level', this.valilLevels[nextLevel]);
          data = {
            level: this.valilLevels[nextLevel]
          };
          type = 'PUT';
          url = _frontendUpgradeUtilsConstants["default"].HOST + "/actions/" + this.get('model.id');
          dataType = 'json';
          data = data;
          hash = {
            dataType: dataType,
            data: data
          };
          request = (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          return request.fail(function (jqXHR, textStatus, e) {
            return console.log('Error Occurred' + e);
          });
        }
      },
      closeActionDetails: function closeActionDetails() {
        return this.replaceRoute("character.actions");
      }
    }
  });

  exports["default"] = controller;
});
define('frontend-upgrade/controllers/character/createstash', ['exports', 'ember'], function (exports, _ember) {
  var controller, pseudoThis;

  controller = _ember['default'].Controller.extend({
    stashName: null,
    capacity: null,
    errorMessage: null
  }, pseudoThis = this, {
    transitionToInventory: function transitionToInventory(stash) {
      return this.replaceRoute("character.inventories");
    },
    failure: function failure(reason) {
      return pseudoThis.set('errorMessage', reason);
    },
    valuesChanged: _ember['default'].observer('capacity', 'stashName', function () {
      return this.set('errorMessage', null);
    }),
    actions: {
      closeCreateStash: function closeCreateStash() {
        return this.replaceRoute("character.inventories");
      },
      saveStash: function saveStash(capacity, name, character) {
        var newRecord;
        if (capacity && name && character && capacity <= 999) {
          pseudoThis = this;
          newRecord = this.store.createRecord('inventory', {
            name: name,
            character: character,
            capacity: capacity
          });
          return newRecord.save().then(function (record) {
            return pseudoThis.transitionToInventory(record);
          })["catch"](function (arg) {
            newRecord.unloadRecord();
            return pseudoThis.failure("Name is already taken.");
          });
        }
      }
    }
  });

  exports['default'] = controller;
});
define('frontend-upgrade/controllers/character/details', ['exports', 'ember'], function (exports, _ember) {
  var CharacterDetailsController;

  CharacterDetailsController = _ember['default'].Controller.extend({
    self: this,
    actions: {
      closeEdit: function closeEdit() {
        return this.replaceRoute('character');
      },
      saveCharacter: function saveCharacter(description, characterGifts, characterFaults) {
        var self;
        if (description) {
          this.get('character').set('description', description);
        }
        if (characterGifts) {
          this.get('character').set('gifts', characterGifts);
        }
        if (characterFaults) {
          this.get('character').set('faults', characterFaults);
        }
        self = this;
        return this.get('character').save().then(function () {
          return self.replaceRoute('character');
        });
      }
    }
  });

  exports['default'] = CharacterDetailsController;
});
define('frontend-upgrade/controllers/character/editstats', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend({
    buttonDisable: false,
    inputIsValid: function inputIsValid() {
      var messages, valid;
      valid = true;
      messages = [];
      if (this.get('model.armourCurrentValue') > this.get('model.armourCapValue')) {
        valid = false;
        messages.push("Armour points must be less than the max value.");
      }
      if (this.get('model.hpCurrentValue') > this.get('model.hpCapValue')) {
        valid = false;
        messages.push("Health points must be less than the max value.");
      }
      if (this.get('model.hpCapValue') > 99) {
        valid = false;
        messages.push("Health points must be less than 100 .");
      }
      if (this.get('model.armourCapValue') > 99) {
        valid = false;
        messages.push("Armour points must be less than 100 .");
      }
      if (this.get('model.availableCurrencyAmmount') > 9999) {
        valid = false;
        messages.push("Currency must be less than 10000 .");
      }
      if (this.get('model.fp') > 99) {
        valid = false;
        messages.push("Fudge points must be less than 100 .");
      }
      if (this.get('model.xp') > 99) {
        valid = false;
        messages.push("Experience points must be less than 100 .");
      }
      this.set('errorMessages', messages);
      return valid;
    },
    actions: {
      exitEdit: function exitEdit() {
        return this.replaceRoute('character', this.get('model'));
      },
      saveCharacter: function saveCharacter() {
        if (this.inputIsValid()) {
          this.get('model').save();
          return this.replaceRoute('character', this.get('model'));
        }
      }
    }
  });

  exports['default'] = controller;
});
define('frontend-upgrade/controllers/character/gmscreen', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend();

  exports['default'] = controller;
});
define('frontend-upgrade/controllers/character/index', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend({
    actions: {
      editDetails: function editDetails() {
        return this.transitionToRoute('character.details');
      },
      goToCharactersList: function goToCharactersList(id) {
        return this.replaceRoute("characters", id);
      },
      inventoryAction: function inventoryAction() {
        return this.transitionToRoute("character.inventories");
      },
      editStats: function editStats() {
        return this.transitionToRoute("character.editstats");
      },
      goToQuests: function goToQuests() {
        return this.transitionToRoute("character.quests");
      },
      goToActions: function goToActions() {
        return this.transitionToRoute("character.actions");
      },
      goToGmScreen: function goToGmScreen() {
        return this.transitionToRoute("character.gmscreen");
      }
    }
  });

  exports['default'] = controller;
});
define('frontend-upgrade/controllers/character/inventories', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  var controller;

  controller = _ember['default'].Controller.extend({
    inventoryItems: [],
    onInventoryLoad: function onInventoryLoad(args) {
      var promise, self;
      self = this;
      promise = new Promise(function (resolve, reject) {
        reject("failed");
      });
      return promise;
    },
    inventoryLabelCallback: function inventoryLabelCallback(inventory) {
      return inventory.get('name') + "    (" + inventory.get('currentCapacity') + " / " + inventory.get('capacity') + ")";
    },
    inventoryChanged: _ember['default'].observer('inventorySelected', function () {
      if (this.get('inventorySelected')) {
        return this.set('inventoryItems', this.store.query('inventory-item', {
          inventory_id: this.get('inventorySelected.id')
        }));
      }
    }),
    actions: {
      itemDetail: function itemDetail(itemId) {
        if (itemId) {
          return this.transitionToRoute('character.inventories.item', itemId);
        }
      },
      createStash: function createStash() {
        return this.transitionToRoute('character.createstash');
      }
    }
  });

  exports['default'] = controller;
});
define("frontend-upgrade/controllers/character/inventories/item", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeHelpersAjax) {
  var controller;

  controller = _ember["default"].Controller.extend({
    inventories: _ember["default"].inject.controller('character.inventories'),
    navBarName: "Item",
    giveView: false,
    discardView: false,
    moveView: false,
    characterInventories: [],
    disabledButton: false,
    disabledButton1: false,
    getItemLabelCallback: function getItemLabelCallback(args) {
      return args.get('name');
    },
    moveQuantityChanged: _ember["default"].observer('moveQuantity', function () {
      if (this.get('moveQuantity') > this.get('model').inventory_item.get('quantity')) {
        return this.set('disabledButton', true);
      } else {
        return this.set('disabledButton', false);
      }
    }),
    giveQuantityChanged: _ember["default"].observer('giveQuantity', function () {
      if (this.get('giveQuantity') > this.get('model').inventory_item.get('quantity')) {
        return this.set('disabledButton1', true);
      } else {
        return this.set('disabledButton1', false);
      }
    }),
    goToInventories: function goToInventories() {
      return this.replaceRoute("character.inventories");
    },
    updateInventories: function updateInventories(character) {
      var inventoryIds, selectedInvId, self;
      self = this;
      inventoryIds = character.get('inventories').toArray().map(function (inv) {
        return inv.get("id");
      });
      selectedInvId = self.get('inventories.inventorySelected.id');
      this.get('inventories').set('inventorySelected', null);
      return this.store.query('inventory', {
        ids: inventoryIds
      }).then(function (record) {
        return _ember["default"].run.next(function () {
          return self.get('inventories').set('inventorySelected', record.findBy('id', selectedInvId));
        });
      });
    },
    actions: {
      discardItem: function discardItem(quantity, item) {
        var character, currentQuantity, that;
        that = this;
        if (quantity >= 1 && quantity <= item.get('quantity')) {
          character = item.get('inventory.character');
          if (quantity == item.get('quantity')) {
            item.destroyRecord().then(function () {
              that.updateInventories(character);
              return that.transitionToRoute('character.inventories');
            });
          } else {
            currentQuantity = item.get('quantity') - quantity;
            item.set('quantity', currentQuantity);
            item.save().then(function () {
              that.updateInventories(character);
              return that.transitionToRoute('character.inventories');
            });
          }
          return this.set('discardQuantity', null);
        }
      },
      showView: function showView(operation) {
        if (operation === "give") {
          this.toggleProperty('giveView');
          this.set('discardView', false);
          return this.set('moveView', false);
        } else if (operation === "move") {
          this.toggleProperty('moveView');
          this.set('discardView', false);
          return this.set('giveView', false);
        } else if (operation === "discard") {
          this.toggleProperty('discardView');
          this.set('giveView', false);
          return this.set('moveView', false);
        }
      },
      giveItem: function giveItem(itemRecord, quantity, character) {
        var data, dataType, hash, inventory_item, request, type, url;
        if (itemRecord && quantity && character) {
          inventory_item = {};
          inventory_item.item_id = itemRecord.id;
          inventory_item.thing_id = itemRecord.get('thing').get('id');
          inventory_item.character_id = character.id;
          inventory_item.quantity = quantity;
          data = inventory_item;
          type = 'POST';
          url = _frontendUpgradeUtilsConstants["default"].GIVE_ITEMS;
          dataType = 'json';
          data = data;
          hash = {
            dataType: dataType,
            data: data
          };
          request = (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          request.done(function (response) {
            if (response.msg === 1) {
              itemRecord.set('quantity', response.quantity);
              this.updateInventories(itemRecord.get('inventory.character'));
              return this.goToInventories();
            } else {
              return self.showAlertNow('alert-error', "try again");
            }
          });
          return request.fail(function (jqXHR, textStatus, e) {
            return console.log('Error Occurred' + e);
          });
        }
      },
      moveItem: function moveItem(itemRecord, quantity, inventoryRecord) {
        var data, dataType, hash, inventory_item, request, type, url;
        if (itemRecord && quantity && inventoryRecord) {
          inventory_item = {};
          inventory_item.item_id = itemRecord.id;
          inventory_item.thing_id = itemRecord.get('thing').get('id');
          inventory_item.inventory_id = inventoryRecord.id;
          inventory_item.quantity = quantity;
          data = inventory_item;
          type = 'POST';
          url = _frontendUpgradeUtilsConstants["default"].MOVE_ITEMS;
          dataType = 'json';
          data = data;
          hash = {
            dataType: dataType,
            data: data
          };
          request = (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          request.done(function (response) {
            if (response.msg === 1) {
              itemRecord.set('quantity', response.quantity);
              this.updateInventories(itemRecord.get('inventory.character'));
              return this.goToInventories();
            } else {
              return self.showAlertNow('alert-error', "try again");
            }
          });
          return request.fail(function (jqXHR, textStatus, e) {
            return console.log('Error Occurred' + e);
          });
        }
      },
      closeItemDetails: function closeItemDetails() {
        return this.replaceRoute("character.inventories");
      }
    }
  });

  exports["default"] = controller;
});
define('frontend-upgrade/controllers/character/quests', ['exports', 'ember'], function (exports, _ember) {
  var controller;

  controller = _ember['default'].Controller.extend({
    actions: {
      addQuestItem: function addQuestItem(newTitle) {
        var that;
        if (newTitle) {
          that = this;
          return this.store.createRecord('quest-item', {
            description: newTitle,
            quest: this.get('model.quest')
          }).save().then(function (record) {
            return that.set('newTitle', '');
          });
        }
      },
      getAllQuests: function getAllQuests() {
        return {
          allQuests: this.store.findAll('quest')
        };
      }
    }
  });

  exports['default'] = controller;
});
define("frontend-upgrade/controllers/characters", ["exports", "ember"], function (exports, _ember) {
  var controller;

  controller = _ember["default"].Controller.extend({
    navBarName: "Games",
    showPrompt: true,
    actions: {
      playCharacter: function playCharacter(characterId) {
        if (characterId === "none") {
          return this.transitionToRoute('games');
        } else {
          return this.transitionToRoute('character', characterId);
        }
      },
      closePrompt: function closePrompt() {
        return this.set('showPrompt', false);
      }
    }
  });

  exports["default"] = controller;
});
define("frontend-upgrade/controllers/forgot", ["exports", "ember", "frontend-upgrade/mixins/alert_message", "frontend-upgrade/mixins/sign_up_mixin", "frontend-upgrade/mixins/change_password", "frontend-upgrade/mixins/forgot_password_mixin", "frontend-upgrade/mixins/sign_in_mixin"], function (exports, _ember, _frontendUpgradeMixinsAlert_message, _frontendUpgradeMixinsSign_up_mixin, _frontendUpgradeMixinsChange_password, _frontendUpgradeMixinsForgot_password_mixin, _frontendUpgradeMixinsSign_in_mixin) {
  var controller;

  controller = _ember["default"].Controller.extend(_frontendUpgradeMixinsAlert_message["default"], _frontendUpgradeMixinsChange_password["default"], _frontendUpgradeMixinsForgot_password_mixin["default"]);

  exports["default"] = controller;
});
define("frontend-upgrade/controllers/games", ["exports", "ember"], function (exports, _ember) {
  var controller;

  controller = _ember["default"].Controller.extend({
    navBarName: "Games",
    showPrompt: true,
    actions: {
      playGame: function playGame(gameId) {
        var game;
        if (gameId === "none") {
          return this.transitionToRoute('games');
        } else {
          game = this.store.peekRecord('game', gameId);
          if (game.get('currentUserCharacterId')) {
            return this.transitionToRoute('character', game.get('currentUserCharacterId'));
          } else {
            return this.transitionToRoute('characters', gameId);
          }
        }
      },
      closePrompt: function closePrompt() {
        return this.set('showPrompt', false);
      }
    }
  });

  exports["default"] = controller;
});
define('frontend-upgrade/controllers/login', ['exports', 'ember'], function (exports, _ember) {
  var LoginController;

  LoginController = _ember['default'].Controller.extend();

  exports['default'] = LoginController;
});
define("frontend-upgrade/controllers/loginmodal", ["exports", "ember", "frontend-upgrade/mixins/alert_message", "frontend-upgrade/mixins/sign_up_mixin", "frontend-upgrade/mixins/change_password", "frontend-upgrade/mixins/forgot_password_mixin", "frontend-upgrade/mixins/sign_in_mixin"], function (exports, _ember, _frontendUpgradeMixinsAlert_message, _frontendUpgradeMixinsSign_up_mixin, _frontendUpgradeMixinsChange_password, _frontendUpgradeMixinsForgot_password_mixin, _frontendUpgradeMixinsSign_in_mixin) {
  var controller;

  controller = _ember["default"].Controller.extend(_frontendUpgradeMixinsAlert_message["default"], _frontendUpgradeMixinsChange_password["default"], _frontendUpgradeMixinsSign_up_mixin["default"], _frontendUpgradeMixinsForgot_password_mixin["default"], _frontendUpgradeMixinsSign_in_mixin["default"], {
    reset: function reset() {
      this.set('firstname', void 0);
      this.set('lastname', void 0);
      this.set('email', void 0);
      this.set('password', void 0);
      this.set('oldPassword', void 0);
      this.set('newPassword', void 0);
      this.set('confirmPassword', void 0);
      this.set('passwordCnfrm', void 0);
      this.set('emailLogin', void 0);
      this.set('passwordLogin', void 0);
      this.set('hasAcceptedTerms', void 0);
      this.set('showAlert', false);
      this.set('alertMessage', '');
      this.set('alertType', '');
      return this.set('processing', false);
    },
    showChngPsswrd: false,
    processing: false
  });

  exports["default"] = controller;
});
define("frontend-upgrade/controllers/passwordedit", ["exports", "ember", "frontend-upgrade/mixins/alert_message", "frontend-upgrade/utils/constants", "frontend-upgrade/helpers/ajax", "frontend-upgrade/config/environment"], function (exports, _ember, _frontendUpgradeMixinsAlert_message, _frontendUpgradeUtilsConstants, _frontendUpgradeHelpersAjax, _frontendUpgradeConfigEnvironment) {
  var controller;

  controller = _ember["default"].Controller.extend(_frontendUpgradeMixinsAlert_message["default"], {
    queryParams: ['reset_password_token'],
    reset_password_token: null,
    passwd: null,
    confirmPasswd: null,
    actions: {
      resetPasswd: function resetPasswd() {
        var c_passwd, hash, passwd, type, url;
        passwd = this.get('passwd');
        c_passwd = this.get('confirmPasswd');
        if (passwd !== c_passwd) {
          return this.showAlertNow('alert-error', 'passwords dont match');
        }
        url = _frontendUpgradeConfigEnvironment["default"].APP.HOST + "/auth/password";
        type = 'PATCH';
        hash = {
          data: {
            reset_password_token: this.get('reset_password_token'),
            password: passwd,
            confirm_password: c_passwd
          },
          success: function success(responseJSON) {
            var msg;
            msg = responseJSON.message || 'Password reset.';
            this.showAlertNow('alert-success', msg);
            return this.transitionToRoute('loginmodal');
          },
          error: function error(jqXhr) {
            var msg;
            msg = jqXhr.responseJSON.message || 'Could not reset password.';
            return this.showAlertNow('alert-error', msg);
          }
        };
        if (!this.get('fastboot.isFastBoot')) {
          return (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
        }
      }
    }
  });

  exports["default"] = controller;
});
define("frontend-upgrade/controllers/signup", ["exports", "ember", "frontend-upgrade/mixins/alert_message", "frontend-upgrade/mixins/sign_up_mixin", "frontend-upgrade/mixins/change_password", "frontend-upgrade/mixins/forgot_password_mixin", "frontend-upgrade/mixins/sign_in_mixin"], function (exports, _ember, _frontendUpgradeMixinsAlert_message, _frontendUpgradeMixinsSign_up_mixin, _frontendUpgradeMixinsChange_password, _frontendUpgradeMixinsForgot_password_mixin, _frontendUpgradeMixinsSign_in_mixin) {
  var controller;

  controller = _ember["default"].Controller.extend(_frontendUpgradeMixinsAlert_message["default"], _frontendUpgradeMixinsChange_password["default"], _frontendUpgradeMixinsSign_up_mixin["default"], _frontendUpgradeMixinsForgot_password_mixin["default"], _frontendUpgradeMixinsSign_in_mixin["default"], {
    reset: function reset() {
      this.set('firstname', void 0);
      this.set('lastname', void 0);
      this.set('email', void 0);
      this.set('password', void 0);
      this.set('oldPassword', void 0);
      this.set('newPassword', void 0);
      this.set('confirmPassword', void 0);
      this.set('passwordCnfrm', void 0);
      this.set('emailLogin', void 0);
      this.set('passwordLogin', void 0);
      this.set('hasAcceptedTerms', void 0);
      this.set('showAlert', false);
      this.set('alertMessage', '');
      this.set('alertType', '');
      return this.set('processing', false);
    },
    showChngPsswrd: false,
    processing: false
  });

  exports["default"] = controller;
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/base-focusable.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/base-focusable.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/base-focusable.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-autocomplete-highlight.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-autocomplete-highlight.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-autocomplete-highlight.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-autocomplete-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-autocomplete-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-autocomplete-item.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-autocomplete-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-autocomplete-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-autocomplete-list.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-autocomplete.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-autocomplete.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-autocomplete.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-backdrop.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-backdrop.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-backdrop.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-button.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-button.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-actions.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-avatar.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-avatar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-avatar.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-content.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-content.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-content.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-header-headline.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-header-headline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-header-headline.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-header-subhead.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-header-subhead.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-header-subhead.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-header-text.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-header-text.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-header-text.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-header-title.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-header-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-header-title.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-header.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-header.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-icon-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-icon-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-icon-actions.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-image.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-image.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-media.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-media.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-media.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-title-media.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-title-media.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-title-media.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-title-text.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-title-text.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-title-text.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card-title.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card-title.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-card.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-card.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-checkbox.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-checkbox.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-checkbox.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-content.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-content.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-content.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-dialog-actions.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-dialog-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-dialog-actions.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-dialog-container.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-dialog-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-dialog-container.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-dialog-content.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-dialog-content.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-dialog-content.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-dialog-inner.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-dialog-inner.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-dialog-inner.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-dialog.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-dialog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-dialog.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-divider.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-divider.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-divider.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-form.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-form.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-grid-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-grid-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-grid-list.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-grid-tile-footer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-grid-tile-footer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-grid-tile-footer.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-grid-tile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-grid-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-grid-tile.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-icon.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-icon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-icon.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-input.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-input.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-item.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-list.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-list.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-abstract.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-abstract.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-abstract.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-container-abstract.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-container-abstract.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-container-abstract.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-container.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-container.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-content-pane.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-content-pane.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-content-pane.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-content.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-content.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-content.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu-item.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-menu.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-menu.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-optgroup.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-optgroup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-optgroup.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-option.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-option.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-option.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-progress-circular.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-progress-circular.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-progress-circular.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-progress-linear.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-progress-linear.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-progress-linear.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-radio-group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-radio-group.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-radio-group.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-radio.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-radio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-radio.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select-container.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select-container.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select-core.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select-core.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select-core.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select-header.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select-header.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select-menu.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select-menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select-menu.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select-value.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select-value.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select-value.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-select.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-select.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-sidenav-container.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-sidenav-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-sidenav-container.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-sidenav-inner.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-sidenav-inner.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-sidenav-inner.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-sidenav-toggle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-sidenav-toggle.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-sidenav-toggle.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-sidenav.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-sidenav.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-sidenav.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-slider.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-slider.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-slider.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-subheader.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-subheader.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-subheader.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-switch.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-switch.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-switch.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-toolbar-tools.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-toolbar-tools.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-toolbar-tools.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/components/paper-toolbar.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/components/paper-toolbar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/components/paper-toolbar.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/helpers/underscore.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/helpers/underscore.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/helpers/underscore.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/initializers/paper-wormhole.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/initializers/paper-wormhole.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/initializers/paper-wormhole.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/child-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/child-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/child-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/color-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/color-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/color-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/events-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/events-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/events-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/flex-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/flex-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/flex-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/parent-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/parent-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/parent-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/proxiable-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/proxiable-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/proxiable-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/proxy-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/proxy-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/proxy-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/ripple-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/ripple-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/ripple-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/mixins/translate3d-mixin.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/mixins/translate3d-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/mixins/translate3d-mixin.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/services/paper-sidenav.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/services/paper-sidenav.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/services/paper-sidenav.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/utils/grid-layout.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/utils/grid-layout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/utils/grid-layout.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/utils/promise-proxies.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/utils/promise-proxies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/utils/promise-proxies.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/validators/max.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/validators/max.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/validators/max.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/validators/maxlength.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/validators/maxlength.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/validators/maxlength.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/validators/min.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/validators/min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/validators/min.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/validators/minlength.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/validators/minlength.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/validators/minlength.js should pass jshint.');
  });
});
define('frontend-upgrade/ember-paper/tests/modules/ember-paper/validators/required.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-paper/validators/required.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-paper/validators/required.js should pass jshint.');
  });
});
define('frontend-upgrade/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _emberPaperHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore.underscore;
    }
  });
});
define('frontend-upgrade/helpers/ajax', ['exports', 'ember'], function (exports, _ember) {
  var helper;

  helper = function (url, type, hash, context) {
    if (type.toLowerCase() !== 'get' && hash.data !== null) {
      hash.data = JSON.stringify(hash.data);
    }
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.contentType = 'application/json; charset=utf-8';
    hash.context = context || this;
    return $.ajax(hash);
  };

  exports['default'] = helper;
});
define('frontend-upgrade/helpers/image-source', ['exports', 'ember'], function (exports, _ember) {
  var ImageSourceHelper, imageSource;

  exports.imageSource = imageSource = function (params) {
    if (!params[0].get('fastboot.isFastBoot')) {
      if (navigator.app === "mobile") {
        params[1];
      } else {
        "/" + params[1];
      }
    }
    return params[0];
  };

  ImageSourceHelper = _ember['default'].Helper.helper(imageSource);

  exports.imageSource = imageSource;
  exports['default'] = ImageSourceHelper;
});
define('frontend-upgrade/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('frontend-upgrade/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("frontend-upgrade/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('frontend-upgrade/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('frontend-upgrade/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend-upgrade/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _frontendUpgradeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_frontendUpgradeConfigEnvironment['default'].APP.name, _frontendUpgradeConfigEnvironment['default'].APP.version)
  };
});
define('frontend-upgrade/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('frontend-upgrade/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('frontend-upgrade/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('frontend-upgrade/initializers/export-application-global', ['exports', 'ember', 'frontend-upgrade/config/environment'], function (exports, _ember, _frontendUpgradeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_frontendUpgradeConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _frontendUpgradeConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_frontendUpgradeConfigEnvironment['default'].modulePrefix);
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
define('frontend-upgrade/initializers/fastboot', ['exports'], function (exports) {
  var fastboot, initialize;

  initialize = function (application) {
    application.inject('route', 'fastboot', 'service:fastboot');
    application.inject('controller', 'fastboot', 'service:fastboot');
    application.inject('component', 'fastboot', 'service:fastboot');
  };

  fastboot = {
    name: 'fastboot',
    initialize: initialize
  };

  exports['default'] = fastboot;
});
define('frontend-upgrade/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('frontend-upgrade/initializers/paper-wormhole', ['exports', 'ember-paper/initializers/paper-wormhole'], function (exports, _emberPaperInitializersPaperWormhole) {
  exports['default'] = {
    name: 'paper-wormhole',
    initialize: _emberPaperInitializersPaperWormhole['default']
  };
});
define('frontend-upgrade/initializers/session', ['exports'], function (exports) {
  var initialize, session;

  initialize = function (application) {
    application.inject('route', 'session', 'service:session');
    application.inject('controller', 'session', 'service:session');
    application.inject('component', 'session', 'service:session');
  };

  session = {
    name: 'session',
    initialize: initialize
  };

  exports['default'] = session;
});
define('frontend-upgrade/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('frontend-upgrade/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("frontend-upgrade/instance-initializers/browser/clear-double-boot", ["exports"], function (exports) {
  /*globals Ember*/

  // When using `ember fastboot --serve-assets` the application output will
  // already be rendered to the DOM when the actual JavaScript loads. Ember
  // does not automatically clear its `rootElement` so this leads to the
  // "double" applications being visible at once (only the "bottom" one is
  // running via JS and is interactive).
  //
  // This removes any pre-rendered ember-view elements, so that the booting
  // application will replace the pre-rendered output

  exports["default"] = {
    name: "clear-double-boot",

    initialize: function initialize(instance) {
      var originalDidCreateRootView = instance.didCreateRootView;

      instance.didCreateRootView = function () {
        Ember.$(instance.rootElement + ' .ember-view').remove();

        originalDidCreateRootView.apply(instance, arguments);
      };
    }
  };
});
define("frontend-upgrade/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('frontend-upgrade/mixins/alert_message', ['exports', 'ember'], function (exports, _ember) {
  var mixin;

  mixin = _ember['default'].Mixin.create({
    showAlert: false,
    alertType: '',
    alertMessage: '',
    showAlertObs: (function () {
      var alertClass, self;
      $('#alertBox').attr('class', 'alert');
      self = this;
      alertClass = self.get('alertType');
      self.set('alertType', '');
      if (this.get('showAlert') !== null) {
        return _ember['default'].run.next(function () {
          $('#alertBox').addClass(alertClass);
          $('#alertBox').css('opacity', 0);
          return $('#alertBox').animate({
            opacity: 1
          }, 250);
        });
      }
    }).observes('showAlert', 'alertMessage'),
    showAlertNow: function showAlertNow(alertType, alertMessage) {
      this.set('alertType', alertType);
      this.set('showAlert', true);
      return this.set('alertMessage', alertMessage);
    },
    hideAlert: function hideAlert() {
      var self;
      self = this;
      $('#alertBox').css('opacity', 1);
      return $('#alertBox').animate({
        opacity: 0
      }, 250, function () {
        return self.set('showAlert', false);
      });
    }
  });

  exports['default'] = mixin;
});
define("frontend-upgrade/mixins/change_password", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeHelpersAjax) {
  var mixin;

  mixin = _ember["default"].Mixin.create({
    destroySession: function destroySession() {
      this.get('session').set('user', null);
      return location.reload();
    },
    changePasswordMessage: function changePasswordMessage(response) {
      var alertMessageType;
      alertMessageType = '';
      if (response === 'Password change successful. Please login again with new password.') {
        alertMessageType = 'alert-success';
      }
      if (response === 'There was some error on our side. Please try again later.' || response === 'It seems you entered the wrong old password') {
        alertMessageType = 'alert-error';
      }
      this.showAlertNow(alertMessageType, response);
      if (_ember["default"].isEqual(this.get('alertType'), 'alert-success')) {
        return _ember["default"].run.debounce(this, this.destroySession, 1000);
      }
    },
    validateChangePassword: function validateChangePassword() {
      if (_ember["default"].isEmpty(this.get('oldPassword')) || _ember["default"].isEmpty(this.get('confirmPassword')) || _ember["default"].isEmpty(this.get('newPassword'))) {
        this.changePasswordMessage('It seems you have left some fields empty.');
        return false;
      }
      if (this.get('newPassword.length') < 8) {
        this.changePasswordMessage('Password length should be greater than or equal to 8');
        return false;
      }
      if (this.get('newPassword') === this.get('oldPassword')) {
        if (!confirm('You have entered same new password and Old Password.Are you sure?')) {
          this.changePasswordMessage('You have entered same new password and Old Password.');
          return false;
        } else {
          return true;
        }
      }
      if (this.get('newPassword') !== this.get('confirmPassword')) {
        this.changePasswordMessage('New password and confirm password dont match');
        return false;
      }
      return true;
    },
    actions: {
      changePassword: function changePassword() {
        var hash, self, type, url;
        if (!this.validateChangePassword()) {
          return;
        }
        self = this;
        url = _frontendUpgradeUtilsConstants["default"].CHANGE_PASSWORD_URL;
        type = 'POST';
        hash = {
          data: {
            'user': {
              'id': self.get('session.user.id'),
              'oldPassword': self.get('oldPassword'),
              'newPassword': self.get('newPassword')
            }
          },
          success: function success(response) {
            self.set('notice', response.message);
            return self.changePasswordMessage(response.message);
          },
          error: function error(response) {
            return self.changePasswordMessage(response.responseJSON.message);
          }
        };
        if (!this.get('fastboot.isFastBoot')) {
          return (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash);
        }
      }
    }
  });

  exports["default"] = mixin;
});
define("frontend-upgrade/mixins/forgot_password_mixin", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/utils/validators", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeUtilsValidators, _frontendUpgradeHelpersAjax) {
  var mixin;

  mixin = _ember["default"].Mixin.create({
    actions: {
      forgotpassword: function forgotpassword() {
        var data, error, hash, self, success, type, url;
        self = this;
        if (!this.get('fastboot.isFastBoot')) {
          $('#forgot-password-btn').attr('disabled', 'disabled');
        }
        if (self.get('emailLogin') && _frontendUpgradeUtilsValidators["default"].isEmailValid(self.get('emailLogin'))) {
          data = {};
          data.email = self.get('emailLogin');
          self.set('processing', true);
          type = 'POST';
          url = _frontendUpgradeUtilsConstants["default"].FORGOT_PASSWORD_URL;
          data = data;
          success = function (response) {
            var alertTypeMessage;
            alertTypeMessage = '';
            self.set('processing', false);
            if (!this.get('fastboot.isFastBoot')) {
              $('#forgot-password-btn').removeAttr('disabled');
            }
            if (response.message === 'User does not exist.') {
              alertTypeMessage = 'alert-error';
            } else {
              alertTypeMessage = 'alert-success';
            }
            return self.showAlertNow(alertTypeMessage, response.message);
          };
          error = function () {
            self.set('processing', false);
            if (!this.get('fastboot.isFastBoot')) {
              return $('#forgot-password-btn').removeAttr('disabled');
            }
          };
          hash = {
            data: data,
            success: success,
            error: error
          };
          if (!this.get('fastboot.isFastBoot')) {
            return (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          }
        } else {
          self.showAlertNow('alert-error', 'Please make sure you provide the correct email address');
          if (!this.get('fastboot.isFastBoot')) {
            return $('#forgot-password-btn').removeAttr('disabled');
          }
        }
      }
    }
  });

  exports["default"] = mixin;
});
define('frontend-upgrade/mixins/notification_subscription_mixin', ['exports', 'ember', 'frontend-upgrade/mixins/real_time_mixin'], function (exports, _ember, _frontendUpgradeMixinsReal_time_mixin) {
  var notificationSubscription;

  notificationSubscription = _ember['default'].Mixin.create(_frontendUpgradeMixinsReal_time_mixin['default'], {
    notificationCallback: function notificationCallback(payload) {
      var controller, parsedPayload, that;
      parsedPayload = JSON.parse(payload);
      if (parsedPayload['character']) {
        return this.store.pushPayload(parsedPayload);
      } else if (parsedPayload['inventory']) {
        controller = this.controllerFor('character.inventories');
        return this.store.findRecord('character', this.paramsFor('character').id, {
          reload: true
        }).then(function (record) {
          return controller.set('model', record.get('inventories', {
            reload: true
          }));
        });
      } else if (parsedPayload['inventory_item']) {
        controller = this.controllerFor('character.inventories');
        return controller.set('inventoryItems', this.store.query('inventory-item', {
          inventory_id: controller.get('inventorySelected.id')
        }));
      } else if (parsedPayload['action']) {
        controller = this.controllerFor('character.actions');
        that = this;
        return this.store.query('action', {
          character_id: this.paramsFor('character').id
        }).then(function (actions) {
          controller.set('model.actions', actions);
          if (controller.get('selectedContext.name') === 'All Skills and Attributes') {
            return controller.set('actionList', controller.get('model.actions'));
          } else {
            return controller.set('actionList', controller.get('model.actions').filterBy('context', controller.get('selectedContext.name')));
          }
        });
      } else if (parsedPayload['scene']) {
        return this.store.query('scene', {
          character_id: this.paramsFor('character').id
        }).then(function (record) {
          controller = this.controllerFor('character.gmscene');
          return controller.set('model', record);
        });
      }
    },
    subscribeToNotificationChannel: function subscribeToNotificationChannel() {
      return this.subscribe('/notifications', this.notificationCallback, this);
    },
    unsubscribeToNotificationChannel: function unsubscribeToNotificationChannel() {
      return this.unsubscribe('/notifications');
    }
  });

  exports['default'] = notificationSubscription;
});
define('frontend-upgrade/mixins/real_time_mixin', ['exports', 'ember', 'frontend-upgrade/utils/constants'], function (exports, _ember, _frontendUpgradeUtilsConstants) {
  var mixin;

  mixin = _ember['default'].Mixin.create({
    rtClient: null,
    subscribe: function subscribe(channel, callback, context) {
      context = context || this;
      return this.get('rtClient').subscribe(channel, function (payload) {
        return callback.call(context, payload);
      });
    },
    unsubscribe: function unsubscribe(channel) {
      return this.get('rtClient').unsubscribe(channel);
    },
    publish: function publish(channel, payload) {
      return this.get('rtClient').publish(channel, payload);
    },
    init: function init() {
      var client;
      this._super();
      client = new Faye.Client(_frontendUpgradeUtilsConstants['default'].FAYE_URL);
      client.addExtension({
        outgoing: function outgoing(message, callback) {
          message.ext = message.ext || {};
          message.ext.csrfToken = $('meta[name=csrf-token]').attr('content');
          return callback(message);
        }
      });
      return this.set('rtClient', client);
    }
  });

  exports['default'] = mixin;
});
define("frontend-upgrade/mixins/sign_in_mixin", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/utils/validators", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeUtilsValidators, _frontendUpgradeHelpersAjax) {
  var mixin;

  mixin = _ember["default"].Mixin.create({
    canLogin: false,
    showAlertNow: function showAlertNow(type, msg) {
      return alert(msg);
    },
    facebookLoginSuccess: function facebookLoginSuccess(data) {
      if (data.status !== 'error') {
        this.getLoggedInAndSignIn();
      } else {
        return this.showAlertNow('alert-error', 'Login with facebook failed. Please try manual login.');
      }
    },
    canLoginUpdate: (function () {
      if (!_ember["default"].isEmpty(this.get('emailLogin')) && !_ember["default"].isEmpty(this.get('passwordLogin'))) {
        this.set('canLogin', true);
      }
      if (!this.get('isLoginEmailValid')) {
        this.set('canLogin', false);
      }
      if (this.get('passwordLogin')) {
        if (this.get('passwordLogin').toString().length < 8) {
          return this.set('canLogin', false);
        }
      }
    }).observes('isLoginEmailValid', 'passwordLogin'),
    isLoginEmailValid: (function () {
      return _frontendUpgradeUtilsValidators["default"].isEmailValid(this.get('emailLogin'));
    }).property('emailLogin'),
    getLoggedInAndSignIn: function getLoggedInAndSignIn() {
      var hash, self, success, type, url, xhrFields;
      self = this;
      type = 'GET';
      xhrFields = {
        withCredentails: true
      };
      url = _frontendUpgradeUtilsConstants["default"].LOGGED_IN_USER_URL;
      success = function (data) {
        if (data['message'] !== 'Nobody logged In') {
          self.store.pushPayload(data);
          return self.store.find('user', data.user.id).then(function (user) {
            self.get('session').set('user', user);
            return self.transitionToRoute('games');
          });
        }
      };
      hash = {
        xhrFields: xhrFields,
        success: success
      };
      if (!this.get('fastboot.isFastBoot')) {
        return (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
      }
    },
    googleLogin: function googleLogin(googleUser) {
      return this.send('googlelogin', googleUser);
    },
    googleLoginOnSuccess: function googleLoginOnSuccess(data) {
      var self;
      self = this;
      if (data.status !== 'error') {
        this.store.pushPayload(data);
        this.store.find('user', data.user.id).then(function (user) {
          self.get('session').set('user', user);
          return self.transitionToRoute('home');
        });
      } else {
        return this.showAlertNow('alert-error', 'Login with google failed. Please try manual login.');
      }
    },
    actions: {
      signMeUp: function signMeUp() {
        var self;
        self = this;
        return self.transitionToRoute("signup");
      },
      login: function login() {
        var credentials, hash, self, user;
        self = this;
        if (this.get('canLogin')) {
          credentials = {};
          user = {};
          user.email = self.get('emailLogin');
          user.password = self.get('passwordLogin');
          credentials.user = user;
          hash = {
            data: credentials,
            success: function success(response) {
              if (response.message === 'Sign in successful') {
                return self.getLoggedInAndSignIn();
              } else {
                return self.showAlertNow('alert-error', response.message);
              }
            }
          };
          if (!this.get('fastboot.isFastBoot')) {
            return (0, _frontendUpgradeHelpersAjax["default"])(_frontendUpgradeUtilsConstants["default"].SIGN_IN_URL, 'POST', hash, this);
          }
        } else {
          return self.showAlertNow('', 'It seems you have missed some fields.Please make sure all the above fields are filled and correct.');
        }
      },
      facebooklogin: function facebooklogin() {
        var self;
        if (window.fbLoaded) {
          self = this;
          FB.init({
            appId: _frontendUpgradeUtilsConstants["default"].FACEBOOK_APP_ID,
            status: true,
            cookie: true,
            xfbml: true
          });
          return FB.login(function (response) {
            var hash;
            if (response.status === 'connected' && !self.get('fastboot.isFastBoot')) {
              hash = {
                data: {
                  access_token: response.authResponse.accessToken
                },
                success: self.facebookLoginSuccess
              };
              return (0, _frontendUpgradeHelpersAjax["default"])(_frontendUpgradeUtilsConstants["default"].HOST + '/users/auth/facebook', 'post', hash, self);
            }
          }, {
            scope: 'email'
          });
        }
      },
      googlelogin: function googlelogin(googleUser) {
        var hash, self;
        self = this;
        hash = {
          data: {
            access_token: googleUser.getAuthResponse().access_token
          },
          success: function success(response) {
            return self.googleLoginOnSuccess(response);
          }
        };
        if (!this.get('fastboot.isFastBoot')) {
          gapi.auth2.getAuthInstance().signOut().then(function () {
            return console.log("Logged out successfully");
          });
          return (0, _frontendUpgradeHelpersAjax["default"])(_frontendUpgradeUtilsConstants["default"].HOST + '/users/auth/google', 'post', hash, this);
        }
      }
    }
  });

  exports["default"] = mixin;
});
define("frontend-upgrade/mixins/sign_up_mixin", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/utils/validators", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeUtilsValidators, _frontendUpgradeHelpersAjax) {
  var mixin;

  mixin = _ember["default"].Mixin.create({
    canSignup: true,
    isSet: true,
    isShowingModal: false,
    canSignupUpdate: (function () {
      if (!_ember["default"].isEmpty(this.get('firstname')) && !_ember["default"].isEmpty(this.get('lastname')) && !_ember["default"].isEmpty(this.get('email')) && !_ember["default"].isEmpty(this.get('password')) && !_ember["default"].isEmpty(this.get('passwordCnfrm'))) {
        this.set('canSignup', true);
      } else {
        this.set('canSignup', false);
        this.set('alertMessage', 'Please provide all details to sign up.');
        return;
      }
      if (!this.get('isEmailValid')) {
        this.set('canSignup', false);
        return;
      }
      if (this.get('password')) {
        if (this.get('password').toString().length < 8) {
          this.set('canSignup', false);
          this.set('alertMessage', 'Password should be atleast 8 characters.');
          return;
        }
      }
      if (this.get('password') !== this.get('passwordCnfrm')) {
        this.set('canSignup', false);
        this.set('alertMessage', 'Password and Confirmation password do not match.');
      }
    }).observes('firstname', 'lastname', 'password', 'passwordCnfrm', 'isEmailValid', 'hasAcceptedTerms'),
    isEmailValid: (function () {
      return _frontendUpgradeUtilsValidators["default"].isEmailValid(this.get('email'));
    }).property('email'),
    showAlert: (function () {
      return !this.get('canSignup');
    }).property('canSignup'),
    actions: {
      signup: function signup() {
        var data, dataType, hash, request, self, type, url, user;
        self = this;
        this.canSignupUpdate();
        if (this.get('canSignup') && !this.get('fastboot.isFastBoot')) {
          $('#signup-submit').attr('disabled', 'disabled');
          user = {};
          user.firstname = self.get('firstname');
          user.lastname = self.get('lastname');
          user.email = self.get('email');
          user.password = self.get('password');
          data = {
            user: user
          };
          type = 'POST';
          url = _frontendUpgradeUtilsConstants["default"].SIGN_UP_URL;
          dataType = 'json';
          data = data;
          hash = {
            dataType: dataType,
            data: data
          };
          request = (0, _frontendUpgradeHelpersAjax["default"])(url, type, hash, this);
          this.set('isShowingModal', true);
          request.done(function (response) {
            var errorMessage;
            this.set('isShowingModal', false);
            if (response.msg === 1) {
              self.showAlertNow('alert-success', 'User has been created.');
              return self.getLoggedInAndSignIn();
            } else {
              if (response.email) {
                errorMessage = 'Sorry this email ' + response.email[0] + '. Please sign up with a different email.';
                self.showAlertNow('alert-error', errorMessage);
              }
              return $('#signup-submit').removeAttr('disabled');
            }
          });
          return request.fail(function (jqXHR, textStatus, e) {
            return console.log('Error Occurred' + e);
          });
        } else {
          if (_ember["default"].isEmpty(this.get('canSignup'))) {
            self.showAlertNow('alert-error', 'Please provide all the details to sign up.');
            return;
          }
          return self.showAlertNow('alert-error', this.get('alertMessage'));
        }
      },
      toggleTranslucent: function toggleTranslucent() {
        return this.set('canSignup', true);
      }
    }
  });

  exports["default"] = mixin;
});
define('frontend-upgrade/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _emberCssTransitionsMixinsTransitionMixin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsMixinsTransitionMixin['default'];
    }
  });
});
define('frontend-upgrade/models/action', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    level: _emberData['default'].attr('string'),
    actionName: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    context: _emberData['default'].attr('string'),
    character: _emberData['default'].belongsTo('character')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/character', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    game: _emberData['default'].belongsTo('game'),
    inventories: _emberData['default'].hasMany('inventory'),
    quests: _emberData['default'].hasMany('quest'),
    armourCapValue: _emberData['default'].attr('number'),
    armourCurrentValue: _emberData['default'].attr('number'),
    hpCapValue: _emberData['default'].attr('number'),
    hpCurrentValue: _emberData['default'].attr('number'),
    xp: _emberData['default'].attr('number'),
    fp: _emberData['default'].attr('number'),
    currency: _emberData['default'].attr('number'),
    availableCurrencyAmmount: _emberData['default'].attr('number'),
    gifts: _emberData['default'].attr('string'),
    faults: _emberData['default'].attr('string'),
    user: _emberData['default'].belongsTo('user')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/context', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    game: _emberData['default'].belongsTo('game')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/game', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    world_name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    startingXp: _emberData['default'].attr('string'),
    useFudgePoints: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    characters: _emberData['default'].hasMany('character'),
    currentUserCharacterId: _emberData['default'].attr('number')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/inventory-item', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    thing: _emberData['default'].belongsTo('thing'),
    inventory: _emberData['default'].belongsTo('inventory'),
    quantity: _emberData['default'].attr('number')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/inventory', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    character: _emberData['default'].belongsTo('character'),
    inventoryItems: _emberData['default'].hasMany('inventory-item'),
    capacity: _emberData['default'].attr('number'),
    currentCapacity: _emberData['default'].attr('number')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/quest-item', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    description: _emberData['default'].attr('string'),
    isComplete: _emberData['default'].attr('boolean', {
      defaultValue: false
    }),
    quest: _emberData['default'].belongsTo('quest')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/quest', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    questItems: _emberData['default'].hasMany('quest-item')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/scene', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/story', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    publicDescription: _emberData['default'].attr('string'),
    secretGmOverview: _emberData['default'].attr('string'),
    shareToPlayers: _emberData['default'].attr('boolean'),
    game: _emberData['default'].belongsTo('game')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/thing', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    armourCurrentValue: _emberData['default'].attr('number'),
    armourCapValue: _emberData['default'].attr('number'),
    offensiveFactor: _emberData['default'].attr('number'),
    encumbrance: _emberData['default'].attr('number'),
    game: _emberData['default'].belongsTo('game')
  });

  exports['default'] = model;
});
define('frontend-upgrade/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  var model;

  model = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    firstname: _emberData['default'].attr('string'),
    lastname: _emberData['default'].attr('string')
  });

  exports['default'] = model;
});
define('frontend-upgrade/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('frontend-upgrade/router', ['exports', 'ember', 'frontend-upgrade/config/environment'], function (exports, _ember, _frontendUpgradeConfigEnvironment) {
  var Router;

  Router = _ember['default'].Router.extend({
    location: _frontendUpgradeConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('characters', {
      path: 'games/:id/characters'
    });
    this.route('character', {
      path: 'characters/:id'
    }, function () {
      this.route('details');
      this.route('editstats', {
        path: 'editstats'
      });
      this.route('createstash', {
        path: 'createstash'
      });
      this.route('quests', {
        path: 'quests'
      });
      this.route('gmscreen', {
        path: 'gmscreen'
      });
      this.route('actions', {
        path: 'actions'
      }, function () {
        return this.route('edit', {
          path: ':action_id/edit'
        });
      });
      return this.route('inventories', {
        path: 'inventories'
      }, function () {
        return this.route('item', {
          path: 'items/:item_id'
        });
      });
    });
    this.route('games', {
      path: '/games'
    });
    this.route('passwordedit', {
      path: '/auth/password/edit'
    });
    this.route('forgot', {
      path: '/forgot'
    });
    this.route('loginmodal', {
      path: '/'
    });
    return this.route('signup', {
      path: '/signup'
    });
  });

  exports['default'] = Router;
});
define("frontend-upgrade/routes/application", ["exports", "ember", "frontend-upgrade/utils/constants", "frontend-upgrade/mixins/real_time_mixin", "frontend-upgrade/mixins/notification_subscription_mixin", "frontend-upgrade/helpers/ajax"], function (exports, _ember, _frontendUpgradeUtilsConstants, _frontendUpgradeMixinsReal_time_mixin, _frontendUpgradeMixinsNotification_subscription_mixin, _frontendUpgradeHelpersAjax) {
  var route;

  route = _ember["default"].Route.extend(_frontendUpgradeMixinsReal_time_mixin["default"], _frontendUpgradeMixinsNotification_subscription_mixin["default"], {
    fastboot: _ember["default"].inject.service(),
    beforeModel: function beforeModel() {
      return _ember["default"].RSVP.Promise.all([this.getCurrentUser()]);
    },
    getCurrentUser: function getCurrentUser() {
      var hash, that;
      that = this;
      that = this;
      hash = {
        success: function success(data) {
          if (data['message'] !== 'Nobody logged In') {
            that.store.pushPayload(data);
            return that.store.find('user', data.user.id).then(function (user) {
              that.get('session').set('user', user);
              return that.subscribeToNotificationChannel();
            });
          }
        }
      };
      if (!this.get('fastboot.isFastBoot')) {
        return (0, _frontendUpgradeHelpersAjax["default"])(_frontendUpgradeUtilsConstants["default"].LOGGED_IN_USER_URL, 'GET', hash, this);
      }
    },
    subscribeToNotificationChannel: function subscribeToNotificationChannel() {
      return this.subscribe('/notifications', this.notificationCallback, this);
    },
    actions: {
      changePasswd: function changePasswd() {
        return this.send('openModal', 'change-password', this.controllerFor('loginmodal'));
      },
      logout: function logout() {
        var hash, that;
        that = this;
        hash = {
          success: function success() {
            that.set('session.user', void 0);
            that.unsubscribeToNotificationChannel;
            return that.transitionTo('loginmodal');
          }
        };
        return (0, _frontendUpgradeHelpersAjax["default"])(_frontendUpgradeUtilsConstants["default"].LOGOUT_URL, 'GET', hash, this);
      },
      openModal: function openModal(template, ctrl) {
        var lastRenderedTemplate;
        lastRenderedTemplate = this.lastRenderedTemplate;
        this.render('components/modal', {
          outlet: 'modal',
          into: 'application',
          controller: ctrl
        });
        if (template) {
          this.render(template, {
            into: 'components/modal',
            controller: ctrl
          });
        }
        this.controllerFor('application').set('modalShown', true);
        return this.lastRenderedTemplate = lastRenderedTemplate;
      },
      closeModal: function closeModal() {
        this.controllerFor('application').set('modalShown', false);
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/authenticated", ["exports", "ember", "frontend-upgrade/utils/constants"], function (exports, _ember, _frontendUpgradeUtilsConstants) {
  var route;

  route = _ember["default"].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      if (!this.get('session.user')) {
        return this.transitionTo('loginmodal');
      }
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Character",
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').set('navBarName', this.navBarName);
      this.controllerFor('character.index').set('model', model);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      this.controllerFor('application').set('showBackButton', true);
      model.set('user', this.get('session.user'));
      return model.save();
    },
    model: function model(params) {
      return this.store.findRecord('character', params.id, {
        reload: true
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/actions", ["exports", "ember"], function (exports, _ember) {
  var route;

  route = _ember["default"].Route.extend({
    navBarName: "Actions",
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('model', model);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      this.controllerFor('application').set('showBackButton', true);
      return this.controllerFor('application').set('navBarName', this.navBarName);
    },
    model: function model() {
      return _ember["default"].RSVP.hash({
        contexts: this.store.query('context', {
          character_id: this.paramsFor('character').id
        }),
        actions: this.store.query('action', {
          character_id: this.paramsFor('character').id
        })
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/actions/edit", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    model: function model(params) {
      if (params.action_id) {
        return this.store.findRecord('action', params.action_id, {
          reload: true
        });
      }
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/createstash", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    setupController: function setupController(controller, nullModel) {
      controller.set('character', this.modelFor('character'));
      controller.set('stashName', null);
      controller.set('capacity', null);
      return controller.set('errorMesssage', null);
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/details", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    setupController: function setupController(controller, model) {
      controller.set('character', this.modelFor('character'));
      controller.set('description', this.modelFor('character').get('description'));
      controller.set('characterGifts', this.modelFor('character').get('gifts'));
      return controller.set('characterFaults', this.modelFor('character').get('faults'));
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/editstats", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Character",
    resetController: function resetController(controller, isExiting, transition) {
      if (isExiting && controller.get('model.hasDirtyAttributes')) {
        controller.get('model').rollbackAttributes();
        return controller.set('errorMessages', null);
      } else if (isExiting) {
        return controller.set('errorMessages', null);
      }
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/gmscreen", ["exports", "ember"], function (exports, _ember) {
  var route;

  route = _ember["default"].Route.extend({
    navBarName: "GM SCREEN",
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      return this.controllerFor('application').set('navBarName', this.navBarName);
    },
    model: function model() {
      return this.store.query('scene', {
        character_id: this.paramsFor('character').id
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/index", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Character",
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').set('navBarName', this.navBarName);
      return this.controllerFor('character.index').set('model', model);
    },
    model: function model(params) {
      return _ember["default"].RSVP.hash({
        character: this.store.peekRecord('character', this.paramsFor('character').id),
        equippedInventory: this.store.peekRecord('character', this.paramsFor('character').id).get('inventories').then(function (records) {
          return records.findBy('name', 'Equipped');
        })
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/inventories", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Inventory",
    actions: {
      inventoryChanged: function inventoryChanged(inventoryRecord) {
        return this.controllerFor('character.inventories').set('inventorySelected', inventoryRecord);
      }
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      this.controllerFor('application').set('navBarName', this.navBarName);
      controller.set('model', model);
      return controller.set('inventorySelected', model.filterBy('name', 'Equipped')[0]);
    },
    model: function model(params) {
      return this.store.findRecord('character', this.paramsFor('character').id, {
        reload: true
      }).then(function (record) {
        return record.get('inventories', {
          reload: true
        });
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/inventories/item", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    currentGame: _ember["default"].inject.service('current-game'),
    game_id: null,
    beforeModel: function beforeModel(params) {
      return this.set('game_id', this.paramsFor('character').id);
    },
    model: function model(params) {
      if (params.item_id) {
        return _ember["default"].RSVP.hash({
          inventory_item: this.store.findRecord('inventory-item', params.item_id, {
            reload: true
          }),
          characters: this.store.findRecord('game', this.get('game_id'), {
            reload: true
          }).then(function (record) {
            return record.get('characters');
          })
        });
      }
    },
    afterModel: function afterModel(model, transition) {
      return this.set('game_id', null);
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('currentCharacter', model.inventory_item.get('inventory').get('character'));
      controller.set('characterInventories', controller.get('currentCharacter').get('inventories'));
      controller.set('moveQuantity', null);
      controller.set('giveQuantity', null);
      controller.set('character', null);
      controller.set('inventorySelected', null);
      controller.set('discardQuantity', null);
      controller.set('characterInventories', controller.get('characterInventories').filter(function (arg) {
        return arg.get('id') !== model.inventory_item.get('inventory').get('id');
      }));
      return controller.set('characters', model.characters.filter(function (arg) {
        return arg.get('id') !== controller.get('currentCharacter').get('id');
      }));
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/character/quests", ["exports", "ember"], function (exports, _ember) {
  var route;

  route = _ember["default"].Route.extend({
    navBarName: "Quests",
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      this.controllerFor('application').set('showBackButton', true);
      return this.controllerFor('application').set('navBarName', this.navBarName);
    },
    model: function model() {
      return _ember["default"].RSVP.hash({
        quest: this.store.queryRecord('quest', {
          character_id: this.paramsFor('character').id,
          name: "Default Quest"
        }),
        questItems: this.store.queryRecord('quest', {
          character_id: this.paramsFor('character').id,
          name: "Default Quest"
        }).then(function (record) {
          return record.get('questItems');
        })
      });
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/characters", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Characters",
    currentGame: _ember["default"].inject.service('current-game'),
    model: function model(params) {
      if (params.id) {
        return _ember["default"].RSVP.hash({
          game: this.store.findRecord('game', params.id, {
            reload: true
          }),
          characters: this.store.query('character', {
            game_id: params.id,
            assigned: false
          })
        });
      } else {
        return transitionToRoute('application');
      }
    },
    afterModel: function afterModel(model, transition) {
      return this.get('currentGame').setGame(model.game);
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('selected_game', model.game);
      this.controllerFor('application').set('navBarName', this.navBarName);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      return this.controllerFor('application').set('showBackButton', true);
    }
  });

  exports["default"] = route;
});
define('frontend-upgrade/routes/forgot', ['exports', 'ember'], function (exports, _ember) {
  var route;

  route = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      if (this.get('session.user')) {
        return this.transitionTo('games');
      }
    }
  });

  exports['default'] = route;
});
define("frontend-upgrade/routes/games", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    navBarName: "Choose Game",
    model: function model() {
      return this.store.findAll('game');
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      this.controllerFor('application').set('navBarName', this.navBarName);
      this.controllerFor('application').get('history').pushObject(this.get('routeName'));
      return this.controllerFor('application').set('showBackButton', false);
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/games/characters", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({
    model: function model(params) {
      return this.store.peekRecord('game', params.game_id).get('characters');
    },
    renderTemplate: function renderTemplate(controller, model) {
      return this.render('games.characters');
    }
  });

  exports["default"] = route;
});
define("frontend-upgrade/routes/home", ["exports", "ember", "frontend-upgrade/routes/authenticated"], function (exports, _ember, _frontendUpgradeRoutesAuthenticated) {
  var route;

  route = _frontendUpgradeRoutesAuthenticated["default"].extend({});

  exports["default"] = route;
});
define('frontend-upgrade/routes/loginmodal', ['exports', 'ember'], function (exports, _ember) {
  var route;

  route = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      if (this.get('session.user')) {
        return this.transitionTo('games');
      }
    }
  });

  exports['default'] = route;
});
define("frontend-upgrade/routes/signup", ["exports", "ember"], function (exports, _ember) {
  var route;

  route = _ember["default"].Route.extend();

  exports["default"] = route;
});
define('frontend-upgrade/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  var ApplicationSerializer;

  ApplicationSerializer = _activeModelAdapter.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin);

  exports['default'] = ApplicationSerializer;
});
define('frontend-upgrade/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('frontend-upgrade/services/constants', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    sniffer: _ember['default'].inject.service('sniffer'),

    webkit: _ember['default'].computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },

    CSS: _ember['default'].computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: _ember['default'].Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('frontend-upgrade/services/current-game', ['exports', 'ember'], function (exports, _ember) {
  var service;

  service = _ember['default'].Service.extend({
    current_game: null,
    setGame: function setGame(game) {
      return this.set('current_game', game);
    }
  });

  exports['default'] = service;
});
define('frontend-upgrade/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

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
define('frontend-upgrade/services/modal-dialog', ['exports', 'ember', 'ember-modal-dialog/services/modal-dialog', 'frontend-upgrade/config/environment'], function (exports, _ember, _emberModalDialogServicesModalDialog, _frontendUpgradeConfigEnvironment) {
  var computed = _ember['default'].computed;
  exports['default'] = _emberModalDialogServicesModalDialog['default'].extend({
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_frontendUpgradeConfigEnvironment['default'].environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('frontend-upgrade/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _emberPaperServicesPaperSidenav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperServicesPaperSidenav['default'];
    }
  });
});
define('frontend-upgrade/services/session', ['exports', 'ember'], function (exports, _ember) {
  var service;

  service = _ember['default'].Service.extend({});

  exports['default'] = service;
});
define('frontend-upgrade/services/sniffer', ['exports', 'ember'], function (exports, _ember) {

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports['default'] = _ember['default'].Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: _ember['default'].computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = undefined;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = undefined;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
/* globals FastBoot */
define('frontend-upgrade/services/transition-events', ['exports', 'ember-css-transitions/services/transition-events'], function (exports, _emberCssTransitionsServicesTransitionEvents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsServicesTransitionEvents['default'];
    }
  });
});
define('frontend-upgrade/services/util', ['exports', 'ember'], function (exports, _ember) {

  var Util = _ember['default'].Service.extend({

    // Disables scroll around the passed element.
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = _ember['default'].$(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0);

      var body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = _ember['default'].$('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;

        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },

    /*
     * supplant() method from Crockford's `Remedial Javascript`
     * Equivalent to use of $interpolate; without dependency on
     * interpolation symbols and scope. Note: the '{<token>}' can
     * be property names, property chains, or array indices.
     */
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },
    nextTick: (function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    })(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports['default'] = Util;
});
define("frontend-upgrade/signup", ["exports", "ember"], function (exports, _ember) {
  var route;

  route = _ember["default"].Route.extend();

  exports["default"] = route;
});
define("frontend-upgrade/templates/-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert");
          dom.setAttribute(el1, "id", "alertBox");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "class", "close");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["hideAlert"], [], ["loc", [null, [3, 38], [3, 60]]], 0, 0], ["content", "alertMessage", ["loc", [null, [4, 2], [4, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/-alert.hbs"
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
      statements: [["block", "if", [["get", "showAlert", ["loc", [null, [1, 6], [1, 15]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [6, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container footer");
        var el2 = dom.createTextNode("\n	@copyright Navyug Infosolutions\n");
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
define("frontend-upgrade/templates/-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "login-button", [], ["ctrl", ["subexpr", "@mut", [["get", "this", ["loc", [null, [2, 21], [2, 25]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 1], [2, 27]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 10,
                      "column": 12
                    },
                    "end": {
                      "line": 10,
                      "column": 111
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/application.hbs"
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
                statements: [["inline", "paper-icon", ["navigate-before"], ["size", 36], ["loc", [null, [10, 71], [10, 111]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 9,
                    "column": 10
                  },
                  "end": {
                    "line": 11,
                    "column": 10
                  }
                },
                "moduleName": "frontend-upgrade/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
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
              statements: [["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["goBack"], [], ["loc", [null, [10, 52], [10, 69]]], 0, 0]], 0, null, ["loc", [null, [10, 12], [10, 128]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 6
                },
                "end": {
                  "line": 18,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "flex-15");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "flex-70");
              var el2 = dom.createElement("p");
              dom.setAttribute(el2, "class", "centerHorizontal");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "flex-15");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 0]), 0, 0);
              morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
              return morphs;
            },
            statements: [["block", "if", [["get", "showBackButton", ["loc", [null, [9, 16], [9, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 10], [11, 17]]]], ["content", "navBarName", ["loc", [null, [14, 57], [14, 71]]], 0, 0, 0, 0], ["inline", "dropdown-menu", [], ["ctrl", ["subexpr", "@mut", [["get", "this", ["loc", [null, [16, 31], [16, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [16, 10], [16, 37]]], 0, 0]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/application.hbs"
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
          statements: [["block", "paper-toolbar-tools", [], [], 0, null, ["loc", [null, [7, 6], [18, 30]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 21,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "layout-row flex");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
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
        statements: [["block", "paper-toolbar", [], ["class", "fixed-position"], 0, null, ["loc", [null, [6, 4], [19, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "setImage");
        dom.setAttribute(el1, "id", "set");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "this.session.user", ["loc", [null, [4, 8], [4, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 2], [21, 9]]]], ["content", "outlet", ["loc", [null, [22, 4], [22, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/change-password.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "ChangePasswordComponent");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-section-header");
        var el3 = dom.createTextNode("Change Password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-section-content");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "method", "POST");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "form-list noStyle noMargin floatLT");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "form-item floatLT");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input-label floatLT");
        var el7 = dom.createTextNode("Old Password*");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input floatLT");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "form-item floatLT");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input-label floatLT");
        var el7 = dom.createTextNode("New Password*");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input floatLT");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "form-item floatLT");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input-label floatLT");
        var el7 = dom.createTextNode("Confirm Password*");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "input floatLT");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "form-item floatLT changepasswrdbutton");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "submit");
        dom.setAttribute(el6, "value", "Change Password");
        dom.setAttribute(el6, "class", "ch-btn");
        dom.setAttribute(el6, "id", "change-password-button");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3, 1, 1]);
        var element1 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 0, 0);
        morphs[3] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["id", "oldPasswordInput", "type", "password", "value", ["subexpr", "@mut", [["get", "oldPassword", ["loc", [null, [8, 84], [8, 95]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Old Password", "classNames", "floatLT"], ["loc", [null, [8, 32], [8, 145]]], 0, 0], ["inline", "input", [], ["id", "newPasswordInput", "type", "password", "value", ["subexpr", "@mut", [["get", "newPassword", ["loc", [null, [12, 84], [12, 95]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "New Password", "classNames", "floatLT"], ["loc", [null, [12, 32], [12, 145]]], 0, 0], ["inline", "input", [], ["id", "confirmPasswordInput", "type", "password", "value", ["subexpr", "@mut", [["get", "confirmPassword", ["loc", [null, [16, 88], [16, 103]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Confirm Password", "classNames", "floatLT"], ["loc", [null, [16, 32], [16, 157]]], 0, 0], ["element", "action", ["changePassword"], [], ["loc", [null, [19, 93], [19, 120]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/character", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/character.hbs"
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/character/actions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 6
                },
                "end": {
                  "line": 6,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/character/actions.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
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
            statements: [["content", "context.name", ["loc", [null, [5, 8], [5, 24]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/actions.hbs"
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
          statements: [["block", "paper-option", [], ["value", ["subexpr", "@mut", [["get", "context", ["loc", [null, [4, 28], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [4, 6], [6, 23]]]]],
          locals: ["context"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/character/actions.hbs"
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
        statements: [["block", "each", [["get", "contextList", ["loc", [null, [3, 12], [3, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [7, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 16,
                      "column": 14
                    },
                    "end": {
                      "line": 21,
                      "column": 14
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/actions.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1, "class", "layout-row flex");
                  var el2 = dom.createTextNode("\n                  ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "flex-80");
                  var el3 = dom.createTextNode("  ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                  ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "flex-20");
                  var el3 = dom.createTextNode("  ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element0 = dom.childAt(fragment, [1]);
                  var morphs = new Array(2);
                  morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
                  morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
                  return morphs;
                },
                statements: [["content", "action.actionName", ["loc", [null, [18, 41], [18, 62]]], 0, 0, 0, 0], ["content", "action.level", ["loc", [null, [19, 41], [19, 57]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 15,
                    "column": 12
                  },
                  "end": {
                    "line": 22,
                    "column": 12
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/actions.hbs"
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
              statements: [["block", "paper-item", [], ["onClick", ["subexpr", "action", ["actionDetails", ["get", "action.id", ["loc", [null, [16, 60], [16, 69]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 36], [16, 70]]], 0, 0]], 0, null, ["loc", [null, [16, 14], [21, 29]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 10
                },
                "end": {
                  "line": 24,
                  "column": 10
                }
              },
              "moduleName": "frontend-upgrade/templates/character/actions.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("            ");
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
            statements: [["block", "paper-content", [], ["class", "md-whiteframe-z1"], 0, null, ["loc", [null, [15, 12], [22, 30]]]], ["content", "paper-divider", ["loc", [null, [23, 12], [23, 29]]], 0, 0, 0, 0]],
            locals: ["action"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/character/actions.hbs"
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
          statements: [["block", "each", [["get", "actionList", ["loc", [null, [14, 18], [14, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 10], [24, 19]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 28,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/character/actions.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "layout-column flex");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "flex-80");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["block", "paper-list", [], [], 0, null, ["loc", [null, [13, 8], [25, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/actions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element1, 5, 5);
        return morphs;
      },
      statements: [["block", "paper-select", [], ["class", "selectContext", "itemLabelCallback", ["subexpr", "@mut", [["get", "contextLabelCallback", ["loc", [null, [2, 58], [2, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "selectedContext", ["loc", [null, [2, 86], [2, 101]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "selectedContext", ["loc", [null, [2, 124], [2, 139]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 119], [2, 140]]], 0, 0]], [], ["loc", [null, [2, 111], [2, 141]]], 0, 0]], 0, null, ["loc", [null, [2, 2], [8, 19]]]], ["block", "if", [["get", "selectedContext", ["loc", [null, [10, 8], [10, 23]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 2], [28, 9]]]], ["content", "outlet", ["loc", [null, [30, 2], [30, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/character/actions/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 107
                }
              },
              "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
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
            statements: [["inline", "paper-icon", [], ["icon", "close"], ["loc", [null, [8, 80], [8, 107]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-toolbar-tools inventory-modal");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "flex");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(element0, 5, 5);
            return morphs;
          },
          statements: [["content", "model.actionName", ["loc", [null, [6, 10], [6, 30]]], 0, 0, 0, 0], ["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["closeActionDetails"], [], ["loc", [null, [8, 48], [8, 77]]], 0, 0]], 0, null, ["loc", [null, [8, 8], [8, 124]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
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
            statements: [["content", "model.description", ["loc", [null, [15, 10], [15, 31]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 20,
                    "column": 10
                  },
                  "end": {
                    "line": 20,
                    "column": 99
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
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
              statements: [["inline", "paper-icon", ["remove"], [], ["loc", [null, [20, 76], [20, 99]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 22,
                    "column": 10
                  },
                  "end": {
                    "line": 22,
                    "column": 96
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
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
              statements: [["inline", "paper-icon", ["add"], [], ["loc", [null, [22, 76], [22, 96]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 8
                },
                "end": {
                  "line": 23,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["decreaseLevel"], [], ["loc", [null, [20, 50], [20, 74]]], 0, 0]], 0, null, ["loc", [null, [20, 10], [20, 116]]]], ["content", "model.level", ["loc", [null, [21, 10], [21, 25]]], 0, 0, 0, 0], ["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["increaseLevel"], [], ["loc", [null, [22, 50], [22, 74]]], 0, 0]], 1, null, ["loc", [null, [22, 10], [22, 113]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 4
              },
              "end": {
                "line": 25,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "alignCenter");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "card.content", [], [], 0, null, ["loc", [null, [13, 6], [17, 23]]]], ["block", "card.actions", [], ["class", "action-level-edit"], 1, null, ["loc", [null, [19, 8], [23, 25]]]]],
          locals: ["card"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar", [], [], 0, null, ["loc", [null, [4, 4], [10, 22]]]], ["block", "paper-card", [], ["class", "inventory-modal-card"], 1, null, ["loc", [null, [12, 4], [25, 19]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/actions/edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "paper-dialog", [], ["origin", ["subexpr", "@mut", [["get", "dialogOrigin", ["loc", [null, [2, 26], [2, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "clickOutsideToClose", true], 0, null, ["loc", [null, [2, 2], [26, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/character/createstash", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 105
                }
              },
              "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
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
            statements: [["inline", "paper-icon", [], ["icon", "close"], ["loc", [null, [8, 78], [8, 105]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
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
            dom.setAttribute(el1, "class", "md-toolbar-tools inventory-modal");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createTextNode("Create Stash");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "flex");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 5, 5);
            return morphs;
          },
          statements: [["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["closeCreateStash"], [], ["loc", [null, [8, 48], [8, 75]]], 0, 0]], 0, null, ["loc", [null, [8, 8], [8, 122]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 25,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["inline", "campfire-input", [], ["id", "stash1", "class", "stash-modal", "placeholder", "Stash name", "autofocus", true, "value", ["subexpr", "@mut", [["get", "stashName", ["loc", [null, [17, 102], [17, 111]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "stashName", ["loc", [null, [17, 134], [17, 143]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 129], [17, 144]]], 0, 0]], [], ["loc", [null, [17, 121], [17, 145]]], 0, 0]], ["loc", [null, [17, 6], [17, 147]]], 0, 0], ["inline", "campfire-input", [], ["id", "stash2", "class", "stash-modal", "max", 999, "errorMessages", ["subexpr", "hash", [], ["max", "Should be less than or equal to 999"], ["loc", [null, [20, 22], [20, 70]]], 0, 0], "type", "number", "placeholder", "Capacity", "value", ["subexpr", "@mut", [["get", "capacity", ["loc", [null, [23, 14], [23, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "capacity", ["loc", [null, [24, 30], [24, 38]]], 0, 0, 0, 0]], [], ["loc", [null, [24, 25], [24, 39]]], 0, 0]], [], ["loc", [null, [24, 17], [24, 40]]], 0, 0]], ["loc", [null, [18, 6], [24, 42]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 28,
                  "column": 6
                },
                "end": {
                  "line": 28,
                  "column": 99
                }
              },
              "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Save");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 4
              },
              "end": {
                "line": 29,
                "column": 6
              }
            },
            "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
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
          statements: [["block", "paper-button", [], ["primary", true, "onClick", ["subexpr", "action", ["saveStash", ["get", "capacity", ["loc", [null, [28, 64], [28, 72]]], 0, 0, 0, 0], ["get", "stashName", ["loc", [null, [28, 73], [28, 82]]], 0, 0, 0, 0], ["get", "character", ["loc", [null, [28, 83], [28, 92]]], 0, 0, 0, 0]], [], ["loc", [null, [28, 44], [28, 93]]], 0, 0]], 0, null, ["loc", [null, [28, 6], [28, 116]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 30,
              "column": 4
            }
          },
          "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "error-panel");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar", [], [], 0, null, ["loc", [null, [4, 4], [10, 22]]]], ["content", "errorMessage", ["loc", [null, [13, 6], [13, 22]]], 0, 0, 0, 0], ["block", "paper-dialog-content", [], ["class", "dialogContent alignCenter inventory-modal-card"], 1, null, ["loc", [null, [16, 4], [25, 29]]]], ["block", "paper-dialog-actions", [], ["class", "layout-row alignCenter"], 2, null, ["loc", [null, [27, 4], [29, 31]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/createstash.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "createStashDialogs accelerated");
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
      statements: [["block", "paper-dialog", [], ["class", "createStashDialogs", "origin", ["subexpr", "@mut", [["get", "dialogOrigin", ["loc", [null, [2, 54], [2, 66]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [2, 2], [30, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/character/details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/character/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-toolbar-tools");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "character.name", ["loc", [null, [4, 10], [4, 28]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "frontend-upgrade/templates/character/details.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["inline", "textarea", [], ["rows", 8, "wrap", ["subexpr", "@mut", [["get", "hard", ["loc", [null, [10, 29], [10, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "maxlength", 500, "value", ["subexpr", "@mut", [["get", "description", ["loc", [null, [10, 54], [10, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 6], [10, 67]]], 0, 0], ["inline", "paper-input", [], ["class", "character-detail-popup", "flex", 200, "label", "Gifts", "value", ["subexpr", "@mut", [["get", "characterGifts", ["loc", [null, [11, 80], [11, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "characterGifts", ["loc", [null, [11, 117], [11, 131]]], 0, 0, 0, 0]], [], ["loc", [null, [11, 112], [11, 132]]], 0, 0]], [], ["loc", [null, [11, 104], [11, 133]]], 0, 0]], ["loc", [null, [11, 6], [11, 135]]], 0, 0], ["inline", "paper-input", [], ["class", "character-detail-popup", "flex", 200, "label", "Faults", "value", ["subexpr", "@mut", [["get", "characterFaults", ["loc", [null, [12, 81], [12, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "characterFaults", ["loc", [null, [12, 119], [12, 134]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 114], [12, 135]]], 0, 0]], [], ["loc", [null, [12, 106], [12, 136]]], 0, 0]], ["loc", [null, [12, 6], [12, 138]]], 0, 0]],
            locals: ["form"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/character/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "details-dialog");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
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
          statements: [["block", "paper-form", [], [], 0, null, ["loc", [null, [9, 4], [13, 19]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 4
                },
                "end": {
                  "line": 18,
                  "column": 114
                }
              },
              "moduleName": "frontend-upgrade/templates/character/details.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Save");
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
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 19,
                  "column": 69
                }
              },
              "moduleName": "frontend-upgrade/templates/character/details.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Cancel");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 20,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/character/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "flex");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["block", "paper-button", [], ["primary", true, "onClick", ["subexpr", "action", ["saveCharacter", ["get", "description", ["loc", [null, [18, 65], [18, 76]]], 0, 0, 0, 0], ["get", "characterGifts", ["loc", [null, [18, 77], [18, 91]]], 0, 0, 0, 0], ["get", "characterFaults", ["loc", [null, [18, 92], [18, 107]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 41], [18, 108]]], 0, 0]], 0, null, ["loc", [null, [18, 4], [18, 131]]]], ["block", "paper-button", [], ["primary", true, "onClick", ["subexpr", "action", ["closeEdit"], [], ["loc", [null, [19, 41], [19, 61]]], 0, 0]], 1, null, ["loc", [null, [19, 4], [19, 86]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/character/details.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar", [], ["class", "popup-title"], 0, null, ["loc", [null, [2, 2], [6, 20]]]], ["block", "paper-dialog-content", [], ["class", "details-dialog"], 1, null, ["loc", [null, [7, 2], [15, 27]]]], ["block", "paper-dialog-actions", [], ["class", "layout-row details-dialog"], 2, null, ["loc", [null, [16, 2], [20, 27]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/details.hbs"
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
      statements: [["block", "paper-dialog", [], ["class", "modal-popup"], 0, null, ["loc", [null, [1, 0], [21, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/character/editstats", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
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
            dom.setAttribute(el1, "class", "md-toolbar-tools");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "model.name", ["loc", [null, [5, 12], [5, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 8
                },
                "end": {
                  "line": 13,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" ");
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
            statements: [["content", "message", ["loc", [null, [12, 13], [12, 24]]], 0, 0, 0, 0]],
            locals: ["message"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 63,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
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
            dom.setAttribute(el1, "class", "error-panel");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "flex-80");
            var el3 = dom.createTextNode("Currency");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "flex-60");
            var el3 = dom.createTextNode("Armour Points");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "space-around");
            var el3 = dom.createTextNode("/");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "flex-60");
            var el3 = dom.createTextNode("Health Points");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "space-around");
            var el3 = dom.createTextNode("/");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "flex-80");
            var el3 = dom.createTextNode(" Fudge Points ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "flex-80");
            var el3 = dom.createTextNode(" Experience Points ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [5]);
            var element1 = dom.childAt(fragment, [7]);
            var morphs = new Array(8);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
            morphs[2] = dom.createMorphAt(element0, 3, 3);
            morphs[3] = dom.createMorphAt(element0, 7, 7);
            morphs[4] = dom.createMorphAt(element1, 3, 3);
            morphs[5] = dom.createMorphAt(element1, 7, 7);
            morphs[6] = dom.createMorphAt(dom.childAt(fragment, [9]), 3, 3);
            morphs[7] = dom.createMorphAt(dom.childAt(fragment, [11]), 3, 3);
            return morphs;
          },
          statements: [["block", "each", [["get", "errorMessages", ["loc", [null, [11, 16], [11, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 8], [13, 17]]]], ["inline", "campfire-input", [], ["class", "flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.availableCurrencyAmmount", ["loc", [null, [20, 16], [20, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.availableCurrencyAmmount", ["loc", [null, [21, 32], [21, 62]]], 0, 0, 0, 0]], [], ["loc", [null, [21, 27], [21, 63]]], 0, 0]], [], ["loc", [null, [21, 19], [21, 64]]], 0, 0]], ["loc", [null, [18, 8], [21, 66]]], 0, 0], ["inline", "campfire-input", [], ["class", "inputWidth flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.armourCurrentValue", ["loc", [null, [27, 16], [27, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.armourCurrentValue", ["loc", [null, [27, 63], [27, 87]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 58], [27, 88]]], 0, 0]], [], ["loc", [null, [27, 50], [27, 89]]], 0, 0]], ["loc", [null, [26, 8], [27, 91]]], 0, 0], ["inline", "campfire-input", [], ["class", "inputWidth flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.armourCapValue", ["loc", [null, [31, 16], [31, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.armourCapValue", ["loc", [null, [32, 32], [32, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [32, 27], [32, 53]]], 0, 0]], [], ["loc", [null, [32, 19], [32, 54]]], 0, 0]], ["loc", [null, [29, 8], [32, 56]]], 0, 0], ["inline", "campfire-input", [], ["class", "inputWidth flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.hpCurrentValue", ["loc", [null, [38, 16], [38, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.hpCurrentValue", ["loc", [null, [39, 32], [39, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [39, 27], [39, 53]]], 0, 0]], [], ["loc", [null, [39, 19], [39, 54]]], 0, 0]], ["loc", [null, [37, 8], [39, 56]]], 0, 0], ["inline", "campfire-input", [], ["class", "inputWidth flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.hpCapValue", ["loc", [null, [43, 16], [43, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.hpCapValue", ["loc", [null, [44, 32], [44, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [44, 27], [44, 49]]], 0, 0]], [], ["loc", [null, [44, 19], [44, 50]]], 0, 0]], ["loc", [null, [41, 8], [44, 52]]], 0, 0], ["inline", "campfire-input", [], ["class", "flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.fp", ["loc", [null, [51, 16], [51, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.fp", ["loc", [null, [52, 32], [52, 40]]], 0, 0, 0, 0]], [], ["loc", [null, [52, 27], [52, 41]]], 0, 0]], [], ["loc", [null, [52, 19], [52, 42]]], 0, 0]], ["loc", [null, [49, 8], [52, 44]]], 0, 0], ["inline", "paper-input", [], ["class", "flex-20", "type", "number", "value", ["subexpr", "@mut", [["get", "model.xp", ["loc", [null, [59, 16], [59, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.xp", ["loc", [null, [60, 32], [60, 40]]], 0, 0, 0, 0]], [], ["loc", [null, [60, 27], [60, 41]]], 0, 0]], [], ["loc", [null, [60, 19], [60, 42]]], 0, 0]], ["loc", [null, [57, 8], [60, 44]]], 0, 0]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 66,
                  "column": 8
                },
                "end": {
                  "line": 71,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            Save\n");
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
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 72,
                  "column": 8
                },
                "end": {
                  "line": 72,
                  "column": 72
                }
              },
              "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Cancel");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 64,
                "column": 6
              },
              "end": {
                "line": 73,
                "column": 6
              }
            },
            "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "flex");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["block", "paper-button", [], ["disabled", ["subexpr", "@mut", [["get", "buttonDisable", ["loc", [null, [67, 19], [67, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "primary", true, "onClick", ["subexpr", "action", ["saveCharacter"], [], ["loc", [null, [69, 18], [69, 42]]], 0, 0]], 0, null, ["loc", [null, [66, 8], [71, 25]]]], ["block", "paper-button", [], ["primary", true, "onClick", ["subexpr", "action", ["exitEdit"], [], ["loc", [null, [72, 45], [72, 64]]], 0, 0]], 1, null, ["loc", [null, [72, 8], [72, 89]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 74,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar", [], ["class", "popup-title"], 0, null, ["loc", [null, [3, 4], [7, 22]]]], ["block", "paper-dialog-content", [], ["class", "character-stats-edit"], 1, null, ["loc", [null, [9, 4], [63, 29]]]], ["block", "paper-dialog-actions", [], ["class", "layout-row"], 2, null, ["loc", [null, [64, 6], [73, 31]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 76,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/editstats.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin accelerated");
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
      statements: [["block", "paper-dialog", [], ["fullscreen", ["subexpr", "@mut", [["get", "fullscreen", ["loc", [null, [2, 29], [2, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "origin", ["subexpr", "@mut", [["get", "dialogOrigin", ["loc", [null, [2, 47], [2, 59]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [2, 2], [74, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/character/gmscreen", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/character/gmscreen.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin accelerated offload");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "gm-view", [], ["itemList", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 21], [2, 26]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 2], [2, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/character/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 79
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("choose a different character");
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
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 8
                  },
                  "end": {
                    "line": 14,
                    "column": 52
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.name", ["loc", [null, [14, 27], [14, 51]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 12,
                  "column": 6
                },
                "end": {
                  "line": 16,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
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
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "text.headline", [], [], 0, null, ["loc", [null, [14, 8], [14, 70]]]]],
            locals: ["text"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 4
              },
              "end": {
                "line": 18,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
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
          statements: [["block", "title.text", [], ["class", "character-title"], 0, null, ["loc", [null, [12, 6], [16, 21]]]]],
          locals: ["title"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 8
                },
                "end": {
                  "line": 24,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
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
            statements: [["inline", "card.image", [], ["class", "card-media character-details alignCenter", "src", ["subexpr", "@mut", [["get", "model.character.imageUrl", ["loc", [null, [23, 77], [23, 101]]], 0, 0, 0, 0]], [], [], 0, 0], "alt", "Nova 3d"], ["loc", [null, [23, 10], [23, 117]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 31,
                    "column": 14
                  },
                  "end": {
                    "line": 31,
                    "column": 75
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.availableCurrencyAmmount", ["loc", [null, [31, 30], [31, 74]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 12
                },
                "end": {
                  "line": 32,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode(" $ ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [31, 14], [31, 90]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child2 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 37,
                    "column": 14
                  },
                  "end": {
                    "line": 37,
                    "column": 104
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("/");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.armourCurrentValue", ["loc", [null, [37, 30], [37, 68]]], 0, 0, 0, 0], ["content", "model.character.armourCapValue", ["loc", [null, [37, 69], [37, 103]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 35,
                  "column": 12
                },
                "end": {
                  "line": 38,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode(" AP ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [37, 14], [37, 119]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child3 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 43,
                    "column": 14
                  },
                  "end": {
                    "line": 43,
                    "column": 96
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("/");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.hpCurrentValue", ["loc", [null, [43, 30], [43, 64]]], 0, 0, 0, 0], ["content", "model.character.hpCapValue", ["loc", [null, [43, 65], [43, 95]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 41,
                  "column": 12
                },
                "end": {
                  "line": 44,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode(" HP ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [43, 14], [43, 111]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child4 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 49,
                    "column": 14
                  },
                  "end": {
                    "line": 49,
                    "column": 53
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.fp", ["loc", [null, [49, 30], [49, 52]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 47,
                  "column": 12
                },
                "end": {
                  "line": 50,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode(" FP ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [49, 14], [49, 68]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child5 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 55,
                    "column": 14
                  },
                  "end": {
                    "line": 55,
                    "column": 53
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "model.character.xp", ["loc", [null, [55, 30], [55, 52]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 53,
                  "column": 12
                },
                "end": {
                  "line": 56,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode(" XP ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [55, 14], [55, 68]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 4
              },
              "end": {
                "line": 60,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/index.hbs"
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
            dom.setAttribute(el1, "class", "flex-50 marginClass");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "flex-50");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "layout-column layout-align-space-between flex stats-row");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "flex-20");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "flex-20");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "flex-20");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "flex-20");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "flex-20");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
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
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [3, 1]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
            morphs[5] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
            return morphs;
          },
          statements: [["block", "card.media", [], [], 0, null, ["loc", [null, [22, 8], [24, 23]]]], ["block", "paper-item", [], [], 1, null, ["loc", [null, [29, 12], [32, 27]]]], ["block", "paper-item", [], [], 2, null, ["loc", [null, [35, 12], [38, 27]]]], ["block", "paper-item", [], [], 3, null, ["loc", [null, [41, 12], [44, 27]]]], ["block", "paper-item", [], [], 4, null, ["loc", [null, [47, 12], [50, 27]]]], ["block", "paper-item", [], [], 5, null, ["loc", [null, [53, 12], [56, 27]]]]],
          locals: [],
          templates: [child0, child1, child2, child3, child4, child5]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 63,
                  "column": 6
                },
                "end": {
                  "line": 63,
                  "column": 78
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Edit Details");
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
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 64,
                  "column": 6
                },
                "end": {
                  "line": 64,
                  "column": 74
                }
              },
              "moduleName": "frontend-upgrade/templates/character/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Edit Stats");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 62,
                "column": 4
              },
              "end": {
                "line": 66,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "paper-button", [], ["raised", true, "onClick", ["subexpr", "action", ["editDetails"], [], ["loc", [null, [63, 42], [63, 64]]], 0, 0]], 0, null, ["loc", [null, [63, 6], [63, 95]]]], ["block", "paper-button", [], ["raised", true, "onClick", ["subexpr", "action", ["editStats"], [], ["loc", [null, [64, 42], [64, 62]]], 0, 0]], 1, null, ["loc", [null, [64, 6], [64, 91]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 70,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "character-detail");
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          morphs[2] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["block", "card.title", [], [], 0, null, ["loc", [null, [10, 4], [18, 19]]]], ["block", "card.content", [], ["class", "layout-row layout-align-space-between flex"], 1, null, ["loc", [null, [20, 4], [60, 21]]]], ["block", "card.content", [], ["class", "layout-row layout-align-space-around"], 2, null, ["loc", [null, [62, 4], [66, 21]]]]],
        locals: ["card"],
        templates: [child0, child1, child2]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 73,
              "column": 6
            },
            "end": {
              "line": 73,
              "column": 98
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Actions");
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
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 6
            },
            "end": {
              "line": 74,
              "column": 187
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Inventory (");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("/");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(")");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["content", "model.equippedInventory.currentCapacity", ["loc", [null, [74, 106], [74, 149]]], 0, 0, 0, 0], ["content", "model.equippedInventory.capacity", ["loc", [null, [74, 150], [74, 186]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 77,
              "column": 6
            },
            "end": {
              "line": 77,
              "column": 96
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Quests");
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
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 78,
              "column": 6
            },
            "end": {
              "line": 78,
              "column": 101
            }
          },
          "moduleName": "frontend-upgrade/templates/character/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("GM Screen");
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
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 83,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "layout-column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flex-20 change-character");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flex-80");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    \n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "layout-row layout-align-space-around character-buttons");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "layout-row layout-align-space-around character-buttons");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element3, [5]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element3, 1, 1);
        morphs[2] = dom.createMorphAt(element4, 1, 1);
        morphs[3] = dom.createMorphAt(element4, 3, 3);
        morphs[4] = dom.createMorphAt(element5, 1, 1);
        morphs[5] = dom.createMorphAt(element5, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["characters", ["get", "model.character.game.id", ["loc", [null, [4, 26], [4, 49]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 2], [4, 91]]]], ["block", "paper-card", [], [], 1, null, ["loc", [null, [7, 2], [70, 17]]]], ["block", "paper-button", [], ["class", "character-button", "raised", true, "onClick", ["subexpr", "action", ["goToActions"], [], ["loc", [null, [73, 67], [73, 89]]], 0, 0]], 2, null, ["loc", [null, [73, 6], [73, 115]]]], ["block", "paper-button", [], ["class", "character-button", "raised", true, "onClick", ["subexpr", "action", ["inventoryAction"], [], ["loc", [null, [74, 67], [74, 93]]], 0, 0]], 3, null, ["loc", [null, [74, 6], [74, 204]]]], ["block", "paper-button", [], ["raised", true, "class", "character-button", "onClick", ["subexpr", "action", ["goToQuests"], [], ["loc", [null, [77, 67], [77, 88]]], 0, 0]], 4, null, ["loc", [null, [77, 6], [77, 113]]]], ["block", "paper-button", [], ["raised", true, "class", "character-button", "onClick", ["subexpr", "action", ["goToGmScreen"], [], ["loc", [null, [78, 67], [78, 90]]], 0, 0]], 5, null, ["loc", [null, [78, 6], [78, 118]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("frontend-upgrade/templates/character/inventories", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 14
                },
                "end": {
                  "line": 10,
                  "column": 14
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("    (");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" / ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(")\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["content", "inventory.name", ["loc", [null, [9, 16], [9, 34]]], 0, 0, 0, 0], ["content", "inventory.currentCapacity", ["loc", [null, [9, 39], [9, 68]]], 0, 0, 0, 0], ["content", "inventory.capacity", ["loc", [null, [9, 71], [9, 93]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 11,
                "column": 12
              }
            },
            "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
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
          statements: [["block", "paper-option", [], ["value", ["subexpr", "@mut", [["get", "inventory", ["loc", [null, [8, 36], [8, 45]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [8, 14], [10, 31]]]]],
          locals: ["inventory"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 10
            },
            "end": {
              "line": 12,
              "column": 10
            }
          },
          "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
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
        statements: [["block", "each", [["get", "model", ["loc", [null, [7, 20], [7, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 12], [11, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 10
            },
            "end": {
              "line": 15,
              "column": 100
            }
          },
          "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Add Stash");
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
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 12
              },
              "end": {
                "line": 26,
                "column": 12
              }
            },
            "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "layout-row flex");
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "flex-80");
            var el3 = dom.createTextNode("Items");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "flex-20");
            var el3 = dom.createTextNode("Quantity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
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
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 32,
                      "column": 18
                    },
                    "end": {
                      "line": 37,
                      "column": 18
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                    ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1, "class", "layout-row flex");
                  var el2 = dom.createTextNode("\n                      ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "flex-90");
                  var el3 = dom.createTextNode("  ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                      ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "flex-10");
                  var el3 = dom.createTextNode("  ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                    ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element0 = dom.childAt(fragment, [1]);
                  var morphs = new Array(2);
                  morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
                  morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
                  return morphs;
                },
                statements: [["content", "item.thing.name", ["loc", [null, [34, 45], [34, 64]]], 0, 0, 0, 0], ["content", "item.quantity", ["loc", [null, [35, 45], [35, 62]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 31,
                    "column": 16
                  },
                  "end": {
                    "line": 38,
                    "column": 16
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
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
              statements: [["block", "paper-item", [], ["onClick", ["subexpr", "action", ["itemDetail", ["get", "item.id", ["loc", [null, [32, 61], [32, 68]]], 0, 0, 0, 0]], [], ["loc", [null, [32, 40], [32, 69]]], 0, 0]], 0, null, ["loc", [null, [32, 18], [37, 33]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 30,
                  "column": 14
                },
                "end": {
                  "line": 40,
                  "column": 14
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("                ");
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
            statements: [["block", "paper-content", [], ["class", "md-whiteframe-z1"], 0, null, ["loc", [null, [31, 16], [38, 34]]]], ["content", "paper-divider", ["loc", [null, [39, 16], [39, 33]]], 0, 0, 0, 0]],
            locals: ["item"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 12
              },
              "end": {
                "line": 41,
                "column": 12
              }
            },
            "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
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
          statements: [["block", "each", [["get", "inventoryItems", ["loc", [null, [30, 22], [30, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 14], [40, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 44,
              "column": 6
            }
          },
          "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "layout-column flex");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "flex-20");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "flex-80");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "paper-item", [], ["class", "headerColor"], 0, null, ["loc", [null, [21, 12], [26, 27]]]], ["block", "paper-list", [], [], 1, null, ["loc", [null, [29, 12], [41, 27]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 49,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/inventories.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "layout-column flex");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flex-100");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "layout-row flex");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "flex-70");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "flex-30 marginRightClass");
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
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element3, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["block", "paper-select", [], ["class", "selectBox", "itemLabelCallback", ["subexpr", "@mut", [["get", "inventoryLabelCallback", ["loc", [null, [6, 62], [6, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "inventorySelected", ["loc", [null, [6, 92], [6, 109]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "inventorySelected", ["loc", [null, [6, 132], [6, 149]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 127], [6, 150]]], 0, 0]], [], ["loc", [null, [6, 119], [6, 151]]], 0, 0]], 0, null, ["loc", [null, [6, 10], [12, 27]]]], ["block", "paper-button", [], ["class", "topPosition", "raised", true, "onClick", ["subexpr", "action", ["createStash"], [], ["loc", [null, [15, 66], [15, 88]]], 0, 0]], 1, null, ["loc", [null, [15, 10], [15, 117]]]], ["block", "if", [["get", "inventorySelected", ["loc", [null, [18, 12], [18, 29]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [18, 6], [44, 13]]]], ["content", "outlet", ["loc", [null, [47, 2], [47, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend-upgrade/templates/character/inventories/item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 8
                },
                "end": {
                  "line": 7,
                  "column": 105
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
            statements: [["inline", "paper-icon", [], ["icon", "close"], ["loc", [null, [7, 78], [7, 105]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-toolbar-tools inventory-modal");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "flex");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(element8, 5, 5);
            return morphs;
          },
          statements: [["content", "model.inventory_item.thing.name", ["loc", [null, [5, 10], [5, 45]]], 0, 0, 0, 0], ["block", "paper-button", [], ["iconButton", true, "onClick", ["subexpr", "action", ["closeItemDetails"], [], ["loc", [null, [7, 48], [7, 75]]], 0, 0]], 0, null, ["loc", [null, [7, 8], [7, 122]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 12
                },
                "end": {
                  "line": 17,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("br");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n               Total Qty:  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["content", "model.inventory_item.thing.description", ["loc", [null, [13, 16], [13, 58]]], 0, 0, 0, 0], ["content", "model.inventory_item.quantity", ["loc", [null, [16, 27], [16, 60]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 20,
                    "column": 16
                  },
                  "end": {
                    "line": 20,
                    "column": 89
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Move");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 16
                  },
                  "end": {
                    "line": 21,
                    "column": 90
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Give ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 22,
                    "column": 16
                  },
                  "end": {
                    "line": 22,
                    "column": 98
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Discard");
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
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 14
                },
                "end": {
                  "line": 23,
                  "column": 14
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-button", [], ["primary", ["subexpr", "@mut", [["get", "moveView", ["loc", [null, [20, 40], [20, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["showView", "move"], [], ["loc", [null, [20, 57], [20, 83]]], 0, 0]], 0, null, ["loc", [null, [20, 16], [20, 106]]]], ["block", "paper-button", [], ["primary", ["subexpr", "@mut", [["get", "giveView", ["loc", [null, [21, 40], [21, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["showView", "give"], [], ["loc", [null, [21, 57], [21, 83]]], 0, 0]], 1, null, ["loc", [null, [21, 16], [21, 107]]]], ["block", "paper-button", [], ["primary", ["subexpr", "@mut", [["get", "discardView", ["loc", [null, [22, 40], [22, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["showView", "discard"], [], ["loc", [null, [22, 60], [22, 89]]], 0, 0]], 2, null, ["loc", [null, [22, 16], [22, 115]]]]],
            locals: [],
            templates: [child0, child1, child2]
          };
        })();
        var child2 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 31,
                      "column": 20
                    },
                    "end": {
                      "line": 31,
                      "column": 64
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Quantity ");
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
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 47,
                      "column": 16
                    },
                    "end": {
                      "line": 47,
                      "column": 119
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Save ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 26,
                    "column": 12
                  },
                  "end": {
                    "line": 50,
                    "column": 12
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "layout-column flex");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-40");
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "layout-row flex");
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-30");
                var el5 = dom.createTextNode("\n                    ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                  ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-70");
                var el5 = dom.createTextNode("\n                    ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                  ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n              ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-60 alignCenter");
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n              ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element6 = dom.childAt(fragment, [1]);
                var element7 = dom.childAt(element6, [1, 1]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element7, [1]), 1, 1);
                morphs[1] = dom.createMorphAt(dom.childAt(element7, [3]), 1, 1);
                morphs[2] = dom.createMorphAt(dom.childAt(element6, [3]), 1, 1);
                return morphs;
              },
              statements: [["block", "paper-item", [], ["class", "push-below"], 0, null, ["loc", [null, [31, 20], [31, 79]]]], ["inline", "paper-input", [], ["value", ["subexpr", "@mut", [["get", "discardQuantity", ["loc", [null, [35, 28], [35, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter Quantity", "type", "number", "autofocus", true, "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "discardQuantity", ["loc", [null, [39, 44], [39, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [39, 39], [39, 60]]], 0, 0]], [], ["loc", [null, [39, 31], [39, 61]]], 0, 0], "min", "1", "max", ["subexpr", "@mut", [["get", "model.inventory_item.quantity", ["loc", [null, [41, 26], [41, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "errorMessages", ["subexpr", "hash", [], ["max", "should be less or equal to the total quantity."], ["loc", [null, [42, 36], [42, 95]]], 0, 0]], ["loc", [null, [34, 20], [42, 97]]], 0, 0], ["block", "paper-button", [], ["raised", true, "onClick", ["subexpr", "action", ["discardItem", ["get", "discardQuantity", ["loc", [null, [47, 74], [47, 89]]], 0, 0, 0, 0], ["get", "model.inventory_item", ["loc", [null, [47, 90], [47, 110]]], 0, 0, 0, 0]], [], ["loc", [null, [47, 52], [47, 111]]], 0, 0]], 1, null, ["loc", [null, [47, 16], [47, 136]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 10
                },
                "end": {
                  "line": 51,
                  "column": 10
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
            statements: [["block", "card.content", [], [], 0, null, ["loc", [null, [26, 12], [50, 29]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child3 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 59,
                      "column": 24
                    },
                    "end": {
                      "line": 59,
                      "column": 68
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Quantity ");
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
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 76,
                      "column": 22
                    },
                    "end": {
                      "line": 76,
                      "column": 65
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Give to ");
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
              var child0 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "revision": "Ember@2.7.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 81,
                          "column": 26
                        },
                        "end": {
                          "line": 83,
                          "column": 26
                        }
                      },
                      "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                              ");
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
                    statements: [["content", "character.name", ["loc", [null, [82, 30], [82, 48]]], 0, 0, 0, 0]],
                    locals: [],
                    templates: []
                  };
                })();
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 80,
                        "column": 22
                      },
                      "end": {
                        "line": 84,
                        "column": 22
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
                  statements: [["block", "paper-option", [], ["value", ["subexpr", "@mut", [["get", "character", ["loc", [null, [81, 48], [81, 57]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [81, 26], [83, 43]]]]],
                  locals: ["character"],
                  templates: [child0]
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 79,
                      "column": 22
                    },
                    "end": {
                      "line": 85,
                      "column": 22
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
                statements: [["block", "each", [["get", "characters", ["loc", [null, [80, 30], [80, 40]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [80, 22], [84, 31]]]]],
                locals: [],
                templates: [child0]
              };
            })();
            var child3 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 90,
                      "column": 18
                    },
                    "end": {
                      "line": 90,
                      "column": 150
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Save ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 54,
                    "column": 14
                  },
                  "end": {
                    "line": 93,
                    "column": 14
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "layout-column flex");
                var el2 = dom.createTextNode("\n                  ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-40");
                var el3 = dom.createTextNode("\n                    ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "layout-row flex");
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-30");
                var el5 = dom.createTextNode("\n                        ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                      ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-70");
                var el5 = dom.createTextNode("\n                        ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                      ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-40");
                var el3 = dom.createTextNode("\n                  ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "layout-row flex");
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-30");
                var el5 = dom.createTextNode("\n                      ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                    ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-70");
                var el5 = dom.createTextNode("\n");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("                    ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-20 alignCenter");
                var el3 = dom.createTextNode("\n                  ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element3 = dom.childAt(fragment, [1]);
                var element4 = dom.childAt(element3, [1, 1]);
                var element5 = dom.childAt(element3, [3, 1]);
                var morphs = new Array(5);
                morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
                morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
                morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
                morphs[3] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
                morphs[4] = dom.createMorphAt(dom.childAt(element3, [5]), 1, 1);
                return morphs;
              },
              statements: [["block", "paper-item", [], ["class", "push-below"], 0, null, ["loc", [null, [59, 24], [59, 83]]]], ["inline", "paper-input", [], ["value", ["subexpr", "@mut", [["get", "giveQuantity", ["loc", [null, [63, 34], [63, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "number", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "giveQuantity", ["loc", [null, [65, 50], [65, 62]]], 0, 0, 0, 0]], [], ["loc", [null, [65, 45], [65, 63]]], 0, 0]], [], ["loc", [null, [65, 37], [65, 64]]], 0, 0], "max", ["subexpr", "@mut", [["get", "model.inventory_item.quantity", ["loc", [null, [66, 34], [66, 63]]], 0, 0, 0, 0]], [], [], 0, 0], "errorMessages", ["subexpr", "hash", [], ["max", "should be less or equal to the total quantity."], ["loc", [null, [67, 44], [69, 31]]], 0, 0]], ["loc", [null, [62, 24], [69, 33]]], 0, 0], ["block", "paper-item", [], ["class", "push-below"], 1, null, ["loc", [null, [76, 22], [76, 80]]]], ["block", "paper-select", [], ["class", "selectBox", "itemLabelCallback", ["subexpr", "@mut", [["get", "getItemLabelCallback", ["loc", [null, [79, 75], [79, 95]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "character", ["loc", [null, [79, 102], [79, 111]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "character", ["loc", [null, [79, 134], [79, 143]]], 0, 0, 0, 0]], [], ["loc", [null, [79, 129], [79, 144]]], 0, 0]], [], ["loc", [null, [79, 121], [79, 145]]], 0, 0]], 2, null, ["loc", [null, [79, 22], [85, 39]]]], ["block", "paper-button", [], ["disabled", ["subexpr", "@mut", [["get", "disabledButton1", ["loc", [null, [90, 43], [90, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "raised", true, "onClick", ["subexpr", "action", ["giveItem", ["get", "model.inventory_item", ["loc", [null, [90, 98], [90, 118]]], 0, 0, 0, 0], ["get", "giveQuantity", ["loc", [null, [90, 119], [90, 131]]], 0, 0, 0, 0], ["get", "character", ["loc", [null, [90, 132], [90, 141]]], 0, 0, 0, 0]], [], ["loc", [null, [90, 79], [90, 142]]], 0, 0]], 3, null, ["loc", [null, [90, 18], [90, 167]]]]],
              locals: [],
              templates: [child0, child1, child2, child3]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 52,
                  "column": 10
                },
                "end": {
                  "line": 94,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "paper-divider", ["loc", [null, [53, 12], [53, 29]]], 0, 0, 0, 0], ["block", "card.content", [], [], 0, null, ["loc", [null, [54, 14], [93, 31]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child4 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 102,
                      "column": 24
                    },
                    "end": {
                      "line": 102,
                      "column": 68
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Quantity ");
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
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 120,
                      "column": 20
                    },
                    "end": {
                      "line": 120,
                      "column": 63
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Move to ");
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
              var child0 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "revision": "Ember@2.7.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 125,
                          "column": 28
                        },
                        "end": {
                          "line": 127,
                          "column": 28
                        }
                      },
                      "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                                ");
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
                    statements: [["content", "inventory.name", ["loc", [null, [126, 32], [126, 50]]], 0, 0, 0, 0]],
                    locals: [],
                    templates: []
                  };
                })();
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 124,
                        "column": 24
                      },
                      "end": {
                        "line": 128,
                        "column": 24
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
                  statements: [["block", "paper-option", [], ["value", ["subexpr", "@mut", [["get", "inventory", ["loc", [null, [125, 50], [125, 59]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [125, 28], [127, 45]]]]],
                  locals: ["inventory"],
                  templates: [child0]
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 123,
                      "column": 22
                    },
                    "end": {
                      "line": 129,
                      "column": 22
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
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
                statements: [["block", "each", [["get", "characterInventories", ["loc", [null, [124, 32], [124, 52]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [124, 24], [128, 33]]]]],
                locals: [],
                templates: [child0]
              };
            })();
            var child3 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 134,
                      "column": 18
                    },
                    "end": {
                      "line": 134,
                      "column": 156
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Save ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 97,
                    "column": 14
                  },
                  "end": {
                    "line": 137,
                    "column": 14
                  }
                },
                "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "layout-column flex");
                var el2 = dom.createTextNode("\n                  ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-40");
                var el3 = dom.createTextNode("\n                    ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "layout-row flex");
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-30");
                var el5 = dom.createTextNode("\n                        ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                      ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-70");
                var el5 = dom.createTextNode("\n                        ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                      ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-40");
                var el3 = dom.createTextNode("\n                  ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "layout-row flex");
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-30");
                var el5 = dom.createTextNode("\n                    ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("\n                    ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("div");
                dom.setAttribute(el4, "class", "flex-70");
                var el5 = dom.createTextNode("\n");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("                    ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "flex-20 alignCenter");
                var el3 = dom.createTextNode("\n                  ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var element1 = dom.childAt(element0, [1, 1]);
                var element2 = dom.childAt(element0, [3, 1]);
                var morphs = new Array(5);
                morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
                morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
                morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
                morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
                morphs[4] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
                return morphs;
              },
              statements: [["block", "paper-item", [], ["class", "push-below"], 0, null, ["loc", [null, [102, 24], [102, 83]]]], ["inline", "paper-input", [], ["type", "number", "value", ["subexpr", "@mut", [["get", "moveQuantity", ["loc", [null, [107, 34], [107, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "moveQuantity", ["loc", [null, [108, 50], [108, 62]]], 0, 0, 0, 0]], [], ["loc", [null, [108, 45], [108, 63]]], 0, 0]], [], ["loc", [null, [108, 37], [108, 64]]], 0, 0], "max", ["subexpr", "@mut", [["get", "model.inventory_item.quantity", ["loc", [null, [109, 32], [109, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "errorMessages", ["subexpr", "hash", [], ["max", "should be less or equal to the total quantity."], ["loc", [null, [110, 42], [112, 33]]], 0, 0]], ["loc", [null, [105, 24], [113, 30]]], 0, 0], ["block", "paper-item", [], ["class", "push-below"], 1, null, ["loc", [null, [120, 20], [120, 78]]]], ["block", "paper-select", [], ["class", "selectBox", "itemLabelCallback", ["subexpr", "@mut", [["get", "getItemLabelCallback", ["loc", [null, [123, 75], [123, 95]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "inventorySelected", ["loc", [null, [123, 102], [123, 119]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "inventorySelected", ["loc", [null, [123, 142], [123, 159]]], 0, 0, 0, 0]], [], ["loc", [null, [123, 137], [123, 160]]], 0, 0]], [], ["loc", [null, [123, 129], [123, 161]]], 0, 0]], 2, null, ["loc", [null, [123, 22], [129, 39]]]], ["block", "paper-button", [], ["disabled", ["subexpr", "@mut", [["get", "disabledButton", ["loc", [null, [134, 43], [134, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["moveItem", ["get", "model.inventory_item", ["loc", [null, [134, 85], [134, 105]]], 0, 0, 0, 0], ["get", "moveQuantity", ["loc", [null, [134, 106], [134, 118]]], 0, 0, 0, 0], ["get", "inventorySelected", ["loc", [null, [134, 119], [134, 136]]], 0, 0, 0, 0]], [], ["loc", [null, [134, 66], [134, 137]]], 0, 0], "raised", true], 3, null, ["loc", [null, [134, 18], [134, 173]]]]],
              locals: [],
              templates: [child0, child1, child2, child3]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 95,
                  "column": 10
                },
                "end": {
                  "line": 138,
                  "column": 12
                }
              },
              "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "paper-divider", [], ["class", "dividerColor"], ["loc", [null, [96, 12], [96, 50]]], 0, 0], ["block", "card.content", [], [], 0, null, ["loc", [null, [97, 14], [137, 31]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 10
              },
              "end": {
                "line": 139,
                "column": 10
              }
            },
            "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "alignCenter");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
            morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
            morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[4] = dom.createMorphAt(fragment, 6, 6, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "card.content", [], [], 0, null, ["loc", [null, [11, 12], [17, 29]]]], ["block", "card.actions", [], ["class", "inv-item-actions"], 1, null, ["loc", [null, [19, 14], [23, 31]]]], ["block", "if", [["get", "discardView", ["loc", [null, [25, 16], [25, 27]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [25, 10], [51, 17]]]], ["block", "if", [["get", "giveView", ["loc", [null, [52, 16], [52, 24]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [52, 10], [94, 19]]]], ["block", "if", [["get", "moveView", ["loc", [null, [95, 16], [95, 24]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [95, 10], [138, 19]]]]],
          locals: ["card"],
          templates: [child0, child1, child2, child3, child4]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 140,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar", [], [], 0, null, ["loc", [null, [3, 4], [9, 22]]]], ["block", "paper-card", [], ["class", "inventory-modal-card"], 1, null, ["loc", [null, [10, 10], [139, 25]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 143,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/inventories/item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "paper-dialog", [], ["origin", ["subexpr", "@mut", [["get", "dialogOrigin", ["loc", [null, [2, 26], [2, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "clickOutsideToClose", true], 0, null, ["loc", [null, [2, 2], [140, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/character/quests", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 6
            },
            "end": {
              "line": 11,
              "column": 79
            }
          },
          "moduleName": "frontend-upgrade/templates/character/quests.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Add");
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
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/character/quests.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["inline", "paper-divider", [], ["class", "questDivider"], ["loc", [null, [18, 6], [18, 44]]], 0, 0], ["inline", "quest-item", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [19, 26], [19, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [19, 8], [19, 32]]], 0, 0], ["inline", "paper-divider", [], ["class", "questDivider"], ["loc", [null, [20, 6], [20, 44]]], 0, 0]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/character/quests.hbs"
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
        statements: [["block", "each", [["get", "model.questItems", ["loc", [null, [16, 12], [16, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [16, 4], [21, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/character/quests.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "quest-margin");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "layout-row flex");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "flex-80");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "class", "inputField", "placeholder", "Enter new quest", "value", ["subexpr", "@mut", [["get", "newTitle", ["loc", [null, [7, 14], [7, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "addQuestItem"], ["loc", [null, [4, 6], [8, 30]]], 0, 0], ["block", "paper-button", [], ["raised", true, "onClick", ["subexpr", "action", ["addQuestItem", ["get", "newTitle", ["loc", [null, [11, 65], [11, 73]]], 0, 0, 0, 0]], [], ["loc", [null, [11, 42], [11, 74]]], 0, 0]], 0, null, ["loc", [null, [11, 6], [11, 96]]]], ["block", "paper-content", [], ["class", "questItemTheme"], 1, null, ["loc", [null, [15, 2], [22, 20]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/characters", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 7,
                        "column": 12
                      },
                      "end": {
                        "line": 7,
                        "column": 48
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/characters.hbs"
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
                  statements: [["content", "character.name", ["loc", [null, [7, 30], [7, 48]]], 0, 0, 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 6,
                      "column": 10
                    },
                    "end": {
                      "line": 8,
                      "column": 10
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/characters.hbs"
                },
                isEmpty: false,
                arity: 1,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("            ");
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
                statements: [["block", "text.headline", [], [], 0, null, ["loc", [null, [7, 12], [7, 66]]]]],
                locals: ["text"],
                templates: [child0]
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 8
                  },
                  "end": {
                    "line": 9,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
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
              statements: [["block", "title.text", [], [], 0, null, ["loc", [null, [6, 10], [8, 25]]]]],
              locals: ["title"],
              templates: [child0]
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 10,
                    "column": 8
                  },
                  "end": {
                    "line": 12,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("img");
                dom.setAttribute(el1, "class", "alignImage");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element0, 'src');
                morphs[1] = dom.createElementMorph(element0);
                return morphs;
              },
              statements: [["attribute", "src", ["get", "character.imageUrl", ["loc", [null, [11, 40], [11, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["playCharacter", ["get", "character.id", ["loc", [null, [11, 86], [11, 98]]], 0, 0, 0, 0]], [], ["loc", [null, [11, 61], [11, 100]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 8
                  },
                  "end": {
                    "line": 16,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
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
              statements: [["content", "character.description", ["loc", [null, [15, 13], [15, 38]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child3 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 18,
                      "column": 10
                    },
                    "end": {
                      "line": 18,
                      "column": 120
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/characters.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Play Character ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 17,
                    "column": 8
                  },
                  "end": {
                    "line": 19,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
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
              statements: [["block", "paper-button", [], ["class", "gameButton", "raised", true, "onClick", ["subexpr", "action", ["playCharacter", ["get", "character.id", ["loc", [null, [18, 89], [18, 101]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 65], [18, 102]]], 0, 0]], 0, null, ["loc", [null, [18, 10], [18, 137]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 6
                },
                "end": {
                  "line": 20,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/characters.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "card.title", [], [], 0, null, ["loc", [null, [5, 8], [9, 23]]]], ["block", "card.content", [], ["class", "layout-row layout-align-space-between"], 1, null, ["loc", [null, [10, 8], [12, 25]]]], ["block", "card.content", [], ["class", "layout-column layout-align-space-between"], 2, null, ["loc", [null, [14, 8], [16, 25]]]], ["block", "card.actions", [], ["class", "layout-column"], 3, null, ["loc", [null, [17, 8], [19, 25]]]]],
            locals: ["card"],
            templates: [child0, child1, child2, child3]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/characters.hbs"
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
          statements: [["block", "paper-card", [], [], 0, null, ["loc", [null, [4, 6], [20, 21]]]]],
          locals: ["character"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/characters.hbs"
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
        statements: [["block", "each", [["get", "model.characters", ["loc", [null, [3, 12], [3, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [21, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 8
                  },
                  "end": {
                    "line": 31,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
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
                dom.setAttribute(el1, "style", "max-width:800px;max-height:810px;");
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("\n              Looks like there are no available characters to play in this game. Contact your Game Master and ask them to create a character for you. Coming soon: the ability to create your own character.\n            ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n          ");
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
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 34,
                      "column": 10
                    },
                    "end": {
                      "line": 34,
                      "column": 85
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/characters.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("Ok");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 32,
                    "column": 8
                  },
                  "end": {
                    "line": 35,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/characters.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                dom.setAttribute(el1, "class", "flex");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["block", "paper-button", [], ["primary", true, "raised", true, "onClick", ["subexpr", "action", ["closePrompt"], [], ["loc", [null, [34, 59], [34, 81]]], 0, 0]], 0, null, ["loc", [null, [34, 10], [34, 102]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 6
                },
                "end": {
                  "line": 36,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/characters.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "paper-dialog-content", [], [], 0, null, ["loc", [null, [25, 8], [31, 33]]]], ["block", "paper-dialog-actions", [], ["class", "layout-row"], 1, null, ["loc", [null, [32, 8], [35, 33]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/characters.hbs"
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
          statements: [["block", "paper-dialog", [], [], 0, null, ["loc", [null, [24, 6], [36, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 2
            },
            "end": {
              "line": 38,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/characters.hbs"
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
        statements: [["block", "if", [["get", "showPrompt", ["loc", [null, [23, 10], [23, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [23, 4], [37, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/characters.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.characters.length", ["loc", [null, [2, 8], [2, 31]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [38, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/base-focusable", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/base-focusable.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/campfire-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 30
          }
        },
        "moduleName": "frontend-upgrade/templates/components/campfire-input.hbs"
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
      statements: [["inline", "paper-input", [], ["value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [2, 8], [2, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [3, 14], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [4, 7], [4, 11]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [5, 12], [5, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "value", ["loc", [null, [6, 24], [6, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 19], [6, 30]]], 0, 0]], [], ["loc", [null, [6, 11], [6, 31]]], 0, 0], "min", ["subexpr", "@mut", [["get", "min", ["loc", [null, [7, 6], [7, 9]]], 0, 0, 0, 0]], [], [], 0, 0], "max", ["subexpr", "@mut", [["get", "max", ["loc", [null, [8, 6], [8, 9]]], 0, 0, 0, 0]], [], [], 0, 0], "errorMessages", ["subexpr", "@mut", [["get", "errorMessage", ["loc", [null, [9, 16], [9, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [9, 30]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/dropdown-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 128
              }
            },
            "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
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
          statements: [["inline", "paper-icon", ["more_vert"], ["class", "md-menu-origin"], ["loc", [null, [2, 79], [2, 128]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["block", "paper-button", [], ["onClick", ["subexpr", "action", ["toggleMenu"], ["target", ["get", "menu", ["loc", [null, [2, 56], [2, 60]]], 0, 0, 0, 0]], ["loc", [null, [2, 28], [2, 61]]], 0, 0], "iconButton", true], 0, null, ["loc", [null, [2, 4], [2, 145]]]]],
        locals: ["menu"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 6
                },
                "end": {
                  "line": 8,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
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
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
              return morphs;
            },
            statements: [["inline", "paper-icon", [["get", "item.icon", ["loc", [null, [6, 21], [6, 30]]], 0, 0, 0, 0]], ["class", "md-menu-align-target"], ["loc", [null, [6, 8], [6, 61]]], 0, 0], ["content", "item.title", ["loc", [null, [7, 14], [7, 28]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
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
          statements: [["block", "paper-menu-item", [], [], 0, null, ["loc", [null, [5, 6], [8, 26]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            var el2 = dom.createTextNode("Logout");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["logout"], ["target", ["get", "ctrl", ["loc", [null, [12, 38], [12, 42]]], 0, 0, 0, 0]], ["loc", [null, [12, 13], [12, 44]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 6
                },
                "end": {
                  "line": 18,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["inline", "paper-icon", [["get", "item.icon", ["loc", [null, [17, 21], [17, 30]]], 0, 0, 0, 0]], ["class", "md-menu-align-target"], ["loc", [null, [17, 8], [17, 61]]], 0, 0], ["content", "item.title", ["loc", [null, [17, 62], [17, 76]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
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
          statements: [["block", "paper-menu-item", [], [], 0, null, ["loc", [null, [16, 6], [18, 26]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "items", ["loc", [null, [4, 12], [4, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 4], [9, 13]]]], ["block", "paper-menu-item", [], ["disabled", false], 1, null, ["loc", [null, [11, 4], [13, 24]]]], ["content", "paper-divider", ["loc", [null, [14, 4], [14, 21]]], 0, 0, 0, 0], ["block", "each", [["get", "items", ["loc", [null, [15, 12], [15, 17]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [15, 4], [19, 13]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/dropdown-menu.hbs"
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
      statements: [["block", "paper-menu", [], [], 0, 1, ["loc", [null, [1, 0], [20, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/forgot-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 5
            },
            "end": {
              "line": 9,
              "column": 117
            }
          },
          "moduleName": "frontend-upgrade/templates/components/forgot-password.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Send Email ");
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
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 60
            },
            "end": {
              "line": 12,
              "column": 90
            }
          },
          "moduleName": "frontend-upgrade/templates/components/forgot-password.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Login");
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
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/forgot-password.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "loginView");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "alignCenter changeInput");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("center");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "layout-column flex");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "flex-50");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "flex-50");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "text-white colored-link");
        var el5 = dom.createTextNode(" Already Registered?  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	 ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
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
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "paper-input", [], ["value", ["subexpr", "@mut", [["get", "ctrl.emailLogin", ["loc", [null, [6, 25], [6, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "label", "Email", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.emailLogin", ["loc", [null, [6, 77], [6, 92]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 72], [6, 93]]], 0, 0]], [], ["loc", [null, [6, 64], [6, 94]]], 0, 0], "icon", "email"], ["loc", [null, [6, 5], [6, 109]]], 0, 0], ["block", "paper-button", [], ["id", "forgot-password-btn", "raised", true, "onClick", ["subexpr", "action", ["forgotpassword"], ["target", ["get", "ctrl", ["loc", [null, [9, 98], [9, 102]]], 0, 0, 0, 0]], ["loc", [null, [9, 66], [9, 103]]], 0, 0]], 0, null, ["loc", [null, [9, 5], [9, 134]]]], ["block", "link-to", ["loginmodal"], [], 1, null, ["loc", [null, [12, 60], [12, 102]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/game-character", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 4,
                    "column": 12
                  },
                  "end": {
                    "line": 4,
                    "column": 45
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Card with block");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 12
                  },
                  "end": {
                    "line": 5,
                    "column": 40
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Extra large");
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
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 10
                },
                "end": {
                  "line": 6,
                  "column": 10
                }
              },
              "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["block", "text.headline", [], [], 0, null, ["loc", [null, [4, 12], [4, 63]]]], ["block", "text.subhead", [], [], 1, null, ["loc", [null, [5, 12], [5, 57]]]]],
            locals: ["text"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 8
              },
              "end": {
                "line": 7,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
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
          statements: [["block", "title.text", [], [], 0, null, ["loc", [null, [3, 10], [6, 25]]]]],
          locals: ["title"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 10
                },
                "end": {
                  "line": 11,
                  "column": 10
                }
              },
              "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "card-media");
              var el2 = dom.createElement("img");
              dom.setAttribute(el2, "src", "http://1079638729.rsc.cdn77.org/file_exchange/java_game_images/games/3/2603/real/1.jpg");
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
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 13,
                    "column": 12
                  },
                  "end": {
                    "line": 13,
                    "column": 70
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
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
              statements: [["inline", "paper-icon", ["favorite"], [], ["loc", [null, [13, 45], [13, 70]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 12
                  },
                  "end": {
                    "line": 14,
                    "column": 70
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
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
              statements: [["inline", "paper-icon", ["settings"], [], ["loc", [null, [14, 45], [14, 70]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 15,
                    "column": 12
                  },
                  "end": {
                    "line": 15,
                    "column": 67
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
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
              statements: [["inline", "paper-icon", ["share"], [], ["loc", [null, [15, 45], [15, 67]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 12,
                  "column": 10
                },
                "end": {
                  "line": 16,
                  "column": 10
                }
              },
              "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["block", "paper-button", [], ["iconButton", true], 0, null, ["loc", [null, [13, 12], [13, 87]]]], ["block", "paper-button", [], ["iconButton", true], 1, null, ["loc", [null, [14, 12], [14, 87]]]], ["block", "paper-button", [], ["iconButton", true], 2, null, ["loc", [null, [15, 12], [15, 84]]]]],
            locals: [],
            templates: [child0, child1, child2]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 8
              },
              "end": {
                "line": 17,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "card.media", [], ["size", "l"], 0, null, ["loc", [null, [9, 10], [11, 25]]]], ["block", "card.actions", [], ["class", "layout-column"], 1, null, ["loc", [null, [12, 10], [16, 27]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 6
            }
          },
          "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "card.title", [], [], 0, null, ["loc", [null, [2, 8], [7, 23]]]], ["block", "card.content", [], ["class", "layout-row layout-align-space-between"], 1, null, ["loc", [null, [8, 8], [17, 25]]]]],
        locals: ["card"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/game-character.hbs"
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
      statements: [["block", "paper-card", [], [], 0, null, ["loc", [null, [1, 0], [18, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/game-listing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 6
                  },
                  "end": {
                    "line": 14,
                    "column": 6
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/game-listing.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("img");
                dom.setAttribute(el1, "src", "/assets/images/nova.jpg");
                dom.setAttribute(el1, "class", "md-avatar");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "md-list-item-text");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("h3");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n              ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n          ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [3]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
                morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
                morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
                return morphs;
              },
              statements: [["content", "game.world_name", ["loc", [null, [8, 18], [8, 37]]], 0, 0, 0, 0], ["content", "game.description", ["loc", [null, [10, 16], [10, 36]]], 0, 0, 0, 0], ["content", "paper-divider", ["loc", [null, [13, 10], [13, 27]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 15,
                  "column": 4
                }
              },
              "moduleName": "frontend-upgrade/templates/components/game-listing.hbs"
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
            statements: [["block", "paper-item", [], ["class", "md-3-line"], 0, null, ["loc", [null, [5, 6], [14, 21]]]]],
            locals: ["game"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/game-listing.hbs"
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
          statements: [["block", "each", [["get", "games", ["loc", [null, [4, 12], [4, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 4], [15, 13]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/game-listing.hbs"
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
        statements: [["block", "paper-list", [], [], 0, null, ["loc", [null, [3, 2], [16, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/game-listing.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
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
      statements: [["block", "paper-content", [], ["class", "md-whiteframe-z1"], 0, null, ["loc", [null, [2, 2], [17, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/gm-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/gm-view.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item accelerated offload");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          dom.setAttribute(el2, "class", "center-align");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "alt", "The Last of us");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createAttrMorph(element1, 'src');
          return morphs;
        },
        statements: [["content", "scene.name", ["loc", [null, [4, 31], [4, 45]]], 0, 0, 0, 0], ["attribute", "src", ["get", "scene.imageUrl", ["loc", [null, [5, 17], [5, 31]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: ["scene"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/gm-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "owl-demo");
        dom.setAttribute(el1, "class", "owl-carousel owl-theme");
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
      statements: [["block", "each", [["get", "itemList", ["loc", [null, [2, 10], [2, 18]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 2], [7, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/log-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 7
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("								");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "src", "assets/images/Only_logo.png");
            dom.setAttribute(el1, "class", "logoCampfire");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 7
              },
              "end": {
                "line": 13,
                "column": 7
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							 	");
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
          statements: [["inline", "paper-input", [], ["label", "Email", "type", "text", "value", ["subexpr", "@mut", [["get", "ctrl.emailLogin", ["loc", [null, [12, 55], [12, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.emailLogin", ["loc", [null, [12, 93], [12, 108]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 88], [12, 109]]], 0, 0]], [], ["loc", [null, [12, 80], [12, 110]]], 0, 0], "icon", "email"], ["loc", [null, [12, 9], [12, 125]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 7
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("								");
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
          statements: [["inline", "paper-input", [], ["label", "Password", "type", "password", "value", ["subexpr", "@mut", [["get", "ctrl.passwordLogin", ["loc", [null, [15, 61], [15, 79]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.passwordLogin", ["loc", [null, [15, 102], [15, 120]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 97], [15, 121]]], 0, 0]], [], ["loc", [null, [15, 89], [15, 122]]], 0, 0], "icon", "lock"], ["loc", [null, [15, 8], [15, 136]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 11
                },
                "end": {
                  "line": 19,
                  "column": 105
                }
              },
              "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" Login ");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 7
              },
              "end": {
                "line": 20,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("											");
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
          statements: [["block", "paper-button", [], ["class", "loginButton", "raised", true, "onClick", ["subexpr", "action", ["login"], ["target", ["get", "ctrl", ["loc", [null, [19, 90], [19, 94]]], 0, 0, 0, 0]], ["loc", [null, [19, 67], [19, 95]]], 0, 0]], 0, null, ["loc", [null, [19, 11], [19, 122]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 68
                },
                "end": {
                  "line": 24,
                  "column": 97
                }
              },
              "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Register");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 9
              },
              "end": {
                "line": 25,
                "column": 9
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("								 		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "text-white colored-link");
            var el2 = dom.createTextNode(" Not Registered yet?  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("  ");
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
          statements: [["block", "link-to", ["signup"], [], 0, null, ["loc", [null, [24, 68], [24, 109]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 28,
                  "column": 47
                },
                "end": {
                  "line": 28,
                  "column": 83
                }
              },
              "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Forgot Password");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 8
              },
              "end": {
                "line": 29,
                "column": 8
              }
            },
            "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							 		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "text-white colored-link");
            var el2 = dom.createTextNode("  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("  ");
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
          statements: [["block", "link-to", ["forgot"], [], 0, null, ["loc", [null, [28, 47], [28, 95]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 31,
              "column": 5
            }
          },
          "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("							 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "layout-column");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							 ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("center");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("						 	 ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("						 ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [4]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[3] = dom.createMorphAt(element0, 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[5] = dom.createMorphAt(element0, 5, 5);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "paper-item", [], ["class", "login-item"], 0, null, ["loc", [null, [8, 8], [10, 22]]]], ["block", "paper-item", [], ["class", "login-item"], 1, null, ["loc", [null, [11, 7], [13, 22]]]], ["block", "paper-item", [], ["class", "login-item"], 2, null, ["loc", [null, [14, 7], [16, 23]]]], ["block", "paper-item", [], ["class", "login-item"], 3, null, ["loc", [null, [18, 7], [20, 23]]]], ["block", "paper-item", [], ["class", "login-item"], 4, null, ["loc", [null, [23, 9], [25, 24]]]], ["block", "paper-item", [], ["class", "login-item alignCenter"], 5, null, ["loc", [null, [27, 8], [29, 23]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/log-in.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "layout-column sign-up-scroll");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flex-20");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flex-50");
        var el3 = dom.createTextNode("\n			 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "layout-align-start-centers");
        var el4 = dom.createTextNode("\n				 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "paperListItem changeInput");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "paper-list", [], [], 0, null, ["loc", [null, [7, 6], [31, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/login-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 1
            },
            "end": {
              "line": 10,
              "column": 1
            }
          },
          "moduleName": "frontend-upgrade/templates/components/login-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "id", "user-name-top");
          var el2 = dom.createTextNode("\n			Hello, ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "id", "change-password-button");
          dom.setAttribute(el1, "class", "buttonhover");
          var el2 = dom.createTextNode(" Change password | ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "id", "logoutbutton");
          dom.setAttribute(el1, "class", "buttonhover");
          var el2 = dom.createTextNode("Logout");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(fragment, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "this.session.user.firstname", ["loc", [null, [6, 10], [6, 41]]], 0, 0, 0, 0], ["content", "this.session.user.lastname", ["loc", [null, [6, 42], [6, 72]]], 0, 0, 0, 0], ["element", "action", ["changePasswd"], ["target", ["get", "ctrl", ["loc", [null, [8, 84], [8, 88]]], 0, 0, 0, 0]], ["loc", [null, [8, 53], [8, 90]]], 0, 0], ["element", "action", ["logout"], ["target", ["get", "ctrl", ["loc", [null, [9, 68], [9, 72]]], 0, 0, 0, 0]], ["loc", [null, [9, 43], [9, 74]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/login-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login-text");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "this.session.user", ["loc", [null, [4, 7], [4, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 1], [10, 8]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend-upgrade/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("frontend-upgrade/templates/components/modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "frontend-upgrade/templates/components/modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "backdrop");
        var el2 = dom.createComment(" modal backdrop ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "alert-content-wrapper");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "close");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("X");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["element", "bind-attr", [], ["class", ":modal"], ["loc", [null, [2, 32], [2, 60]]], 0, 0], ["element", "action", ["closeModal"], [], ["loc", [null, [3, 24], [3, 47]]], 0, 0], ["content", "outlet", ["loc", [null, [4, 2], [4, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-autocomplete-highlight", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-autocomplete-highlight.hbs"
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
      statements: [["content", "highlight", ["loc", [null, [1, 0], [1, 13]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-autocomplete-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-autocomplete-item.hbs"
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
      statements: [["inline", "yield", [["get", "label", ["loc", [null, [1, 8], [1, 13]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 15]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-autocomplete", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["inline", "paper-input", [], ["type", "search", "label", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [5, 12], [5, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "focus-in", "inputFocusIn", "focus-out", "inputFocusOut", "key-down", "inputKeyDown", "value", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [9, 12], [9, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchText", ["loc", [null, [10, 28], [10, 38]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 23], [10, 39]]], 0, 0]], [], ["loc", [null, [10, 15], [10, 40]]], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [11, 15], [11, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [12, 15], [12, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "flex", true], ["loc", [null, [3, 4], [13, 17]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 31,
                  "column": 6
                },
                "end": {
                  "line": 33,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
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
            statements: [["inline", "paper-icon", ["close"], [], ["loc", [null, [32, 8], [32, 30]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 34,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
          statements: [["block", "paper-button", [], ["iconButton", true, "themed", false, "onClick", ["subexpr", "action", ["clear"], [], ["loc", [null, [31, 59], [31, 75]]], 0, 0]], 0, null, ["loc", [null, [31, 6], [33, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 36,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
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
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "search", "flex", true, "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 18], [17, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [18, 12], [18, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "focus-in", "inputFocusIn", "focus-out", "inputFocusOut", "key-down", "inputKeyDown", "autocomplete", "off", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [23, 15], [23, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [24, 15], [24, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "aria-haspopup", true, "aria-autocomplete", "list", "aria-activedescendant", "", "aria-expanded", ["subexpr", "@mut", [["get", "notHidden", ["loc", [null, [28, 20], [28, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 4], [28, 31]]], 0, 0], ["block", "if", [["get", "enableClearButton", ["loc", [null, [30, 10], [30, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 4], [34, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 2
            },
            "end": {
              "line": 40,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["content", "paper-progress-linear", ["loc", [null, [39, 4], [39, 29]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 49,
                      "column": 12
                    },
                    "end": {
                      "line": 51,
                      "column": 12
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("              ");
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
                statements: [["inline", "yield", [["get", "searchText", ["loc", [null, [50, 22], [50, 32]]], 0, 0, 0, 0], ["get", "item", ["loc", [null, [50, 33], [50, 37]]], 0, 0, 0, 0], ["get", "index", ["loc", [null, [50, 38], [50, 43]]], 0, 0, 0, 0]], [], ["loc", [null, [50, 14], [50, 45]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 52,
                        "column": 14
                      },
                      "end": {
                        "line": 54,
                        "column": 14
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                ");
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
                  statements: [["inline", "component", [["get", "itemComponent", ["loc", [null, [53, 28], [53, 41]]], 0, 0, 0, 0]], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [53, 53], [53, 63]]], 0, 0, 0, 0]], [], [], 0, 0], "label", ["subexpr", "@mut", [["get", "label", ["loc", [null, [53, 70], [53, 75]]], 0, 0, 0, 0]], [], [], 0, 0], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [53, 82], [53, 87]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [53, 16], [53, 89]]], 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              var child1 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 54,
                        "column": 14
                      },
                      "end": {
                        "line": 56,
                        "column": 14
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                ");
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
                  statements: [["inline", "paper-autocomplete-highlight", [], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [55, 58], [55, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "label", ["subexpr", "@mut", [["get", "label", ["loc", [null, [55, 75], [55, 80]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [55, 16], [55, 82]]], 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 51,
                      "column": 12
                    },
                    "end": {
                      "line": 57,
                      "column": 12
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
                statements: [["block", "if", [["get", "itemComponent", ["loc", [null, [52, 20], [52, 33]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [52, 14], [56, 21]]]]],
                locals: [],
                templates: [child0, child1]
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 47,
                    "column": 10
                  },
                  "end": {
                    "line": 58,
                    "column": 10
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
              statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [49, 18], [49, 26]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [49, 12], [57, 19]]]]],
              locals: ["label"],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 8
                },
                "end": {
                  "line": 60,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n");
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
            statements: [["block", "paper-autocomplete-item", [], ["lookupKey", ["subexpr", "@mut", [["get", "lookupKey", ["loc", [null, [47, 47], [47, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [47, 62], [47, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "selectedIndex", ["subexpr", "@mut", [["get", "selectedIndex", ["loc", [null, [47, 81], [47, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [47, 101], [47, 106]]], 0, 0, 0, 0]], [], [], 0, 0], "pick", "pickModel"], 0, null, ["loc", [null, [47, 10], [58, 38]]]]],
            locals: ["item", "index"],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 63,
                      "column": 12
                    },
                    "end": {
                      "line": 65,
                      "column": 12
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("li");
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
                statements: [["inline", "yield", [["get", "searchText", ["loc", [null, [64, 28], [64, 38]]], 0, 0, 0, 0]], ["to", "inverse"], ["loc", [null, [64, 20], [64, 53]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 66,
                        "column": 14
                      },
                      "end": {
                        "line": 68,
                        "column": 14
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
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
                  statements: [["inline", "component", [["get", "notFoundComponent", ["loc", [null, [67, 34], [67, 51]]], 0, 0, 0, 0]], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [67, 63], [67, 73]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [67, 22], [67, 75]]], 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              var child1 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 68,
                        "column": 14
                      },
                      "end": {
                        "line": 70,
                        "column": 14
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
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
                  statements: [["content", "notFoundMsg", ["loc", [null, [69, 22], [69, 37]]], 0, 0, 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 65,
                      "column": 12
                    },
                    "end": {
                      "line": 71,
                      "column": 12
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
                statements: [["block", "if", [["get", "notFoundComponent", ["loc", [null, [66, 20], [66, 37]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [66, 14], [70, 21]]]]],
                locals: [],
                templates: [child0, child1]
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 61,
                    "column": 10
                  },
                  "end": {
                    "line": 72,
                    "column": 10
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
              statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [63, 18], [63, 26]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [63, 12], [71, 19]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 8
                },
                "end": {
                  "line": 73,
                  "column": 8
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
            statements: [["block", "if", [["get", "showLoadingBar", ["loc", [null, [61, 16], [61, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [61, 10], [72, 17]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 74,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "each", [["get", "suggestions", ["loc", [null, [45, 16], [45, 27]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [45, 8], [73, 17]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 2
            },
            "end": {
              "line": 75,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
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
        statements: [["block", "paper-autocomplete-list", [], ["suggestions", ["subexpr", "@mut", [["get", "suggestions", ["loc", [null, [43, 43], [43, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "selectedIndex", ["subexpr", "@mut", [["get", "selectedIndex", ["loc", [null, [43, 69], [43, 82]]], 0, 0, 0, 0]], [], [], 0, 0], "wrapToElementId", ["subexpr", "@mut", [["get", "autocompleteWrapperId", ["loc", [null, [43, 99], [43, 120]]], 0, 0, 0, 0]], [], [], 0, 0], "mouse-up", "listMouseUp", "mouse-leave", "listMouseLeave", "mouse-enter", "listMouseEnter"], 0, null, ["loc", [null, [43, 4], [74, 32]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 80,
                "column": 4
              },
              "end": {
                "line": 82,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
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
          statements: [["content", "message", ["loc", [null, [81, 11], [81, 22]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 2
            },
            "end": {
              "line": 83,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 2,
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
        statements: [["block", "if", [["get", "message", ["loc", [null, [80, 10], [80, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [80, 4], [82, 11]]]]],
        locals: ["message", "index"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 85,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-autocomplete.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("md-autocomplete-wrap");
        dom.setAttribute(el1, "role", "listbox");
        dom.setAttribute(el1, "layout", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("aria-status");
        dom.setAttribute(el1, "class", "md-visually-hidden");
        dom.setAttribute(el1, "role", "status");
        dom.setAttribute(el1, "aria-live", "assertive");
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
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "id", ["get", "autocompleteWrapperId", ["loc", [null, [1, 27], [1, 48]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "notFloating", ["loc", [null, [1, 91], [1, 102]]], 0, 0, 0, 0], "md-whiteframe-z1"], [], ["loc", [null, [1, 86], [1, 123]]], 0, 0], " ", ["subexpr", "if", [["get", "notHidden", ["loc", [null, [1, 129], [1, 138]]], 0, 0, 0, 0], "md-menu-showing"], [], ["loc", [null, [1, 124], [1, 158]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "floating", ["loc", [null, [2, 8], [2, 16]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [36, 9]]]], ["block", "if", [["get", "loading", ["loc", [null, [38, 8], [38, 15]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [38, 2], [40, 9]]]], ["block", "if", [["get", "notHidden", ["loc", [null, [42, 8], [42, 17]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [42, 2], [75, 9]]]], ["block", "each", [["get", "messages", ["loc", [null, [79, 10], [79, 18]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [79, 2], [83, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
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
          "moduleName": "frontend-upgrade/templates/components/paper-button.hbs"
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
        statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-button.hbs"
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
        statements: [["content", "label", ["loc", [null, [4, 2], [4, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-button.hbs"
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
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-actions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-actions.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["icons", ["subexpr", "component", ["paper-card-icon-actions"], [], ["loc", [null, [2, 8], [2, 45]]], 0, 0]], ["loc", [null, [1, 8], [3, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [3, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-header-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-header-text.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["title", ["subexpr", "component", ["paper-card-header-title"], [], ["loc", [null, [2, 8], [2, 45]]], 0, 0], "subhead", ["subexpr", "component", ["paper-card-header-subhead"], [], ["loc", [null, [3, 10], [3, 49]]], 0, 0]], ["loc", [null, [1, 8], [4, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [4, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-header.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["text", ["subexpr", "component", ["paper-card-header-text"], [], ["loc", [null, [2, 7], [2, 43]]], 0, 0], "avatar", ["subexpr", "component", ["paper-card-avatar"], [], ["loc", [null, [3, 9], [3, 40]]], 0, 0]], ["loc", [null, [1, 8], [4, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [4, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-media", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-card-media.hbs"
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
          var el2 = dom.createTextNode("\n    ");
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
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [2, 25], [2, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-card-media.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'src');
          morphs[2] = dom.createAttrMorph(element0, 'alt');
          morphs[3] = dom.createAttrMorph(element0, 'title');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [6, 25], [6, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["get", "src", ["loc", [null, [6, 39], [6, 42]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["get", "alt", ["loc", [null, [6, 51], [6, 54]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "title", ["get", "title", ["loc", [null, [6, 65], [6, 70]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-media.hbs"
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
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-title-media", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-card-title-media.hbs"
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
          var el2 = dom.createTextNode("\n    ");
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
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [2, 25], [2, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-card-title-media.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'src');
          morphs[2] = dom.createAttrMorph(element0, 'alt');
          morphs[3] = dom.createAttrMorph(element0, 'title');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [6, 25], [6, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["get", "src", ["loc", [null, [6, 39], [6, 42]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["get", "alt", ["loc", [null, [6, 51], [6, 54]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "title", ["get", "title", ["loc", [null, [6, 65], [6, 70]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-title-media.hbs"
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
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-title-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-title-text.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["headline", ["subexpr", "component", ["paper-card-header-headline"], [], ["loc", [null, [2, 11], [2, 51]]], 0, 0], "subhead", ["subexpr", "component", ["paper-card-header-subhead"], [], ["loc", [null, [3, 10], [3, 49]]], 0, 0]], ["loc", [null, [1, 8], [4, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [4, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card-title", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card-title.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["text", ["subexpr", "component", ["paper-card-title-text"], [], ["loc", [null, [2, 7], [2, 42]]], 0, 0], "media", ["subexpr", "component", ["paper-card-title-media"], [], ["loc", [null, [3, 8], [3, 44]]], 0, 0]], ["loc", [null, [1, 8], [4, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [4, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-card.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["title", ["subexpr", "component", ["paper-card-title"], [], ["loc", [null, [2, 8], [2, 38]]], 0, 0], "content", ["subexpr", "component", ["paper-card-content"], [], ["loc", [null, [3, 10], [3, 42]]], 0, 0], "actions", ["subexpr", "component", ["paper-card-actions"], [], ["loc", [null, [4, 10], [4, 42]]], 0, 0], "header", ["subexpr", "component", ["paper-card-header"], [], ["loc", [null, [5, 9], [5, 40]]], 0, 0], "image", ["subexpr", "component", ["paper-card-image"], [], ["loc", [null, [6, 8], [6, 38]]], 0, 0], "media", ["subexpr", "component", ["paper-card-media"], [], ["loc", [null, [7, 8], [7, 38]]], 0, 0]], ["loc", [null, [1, 8], [8, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [8, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-checkbox.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [7, 6], [7, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-checkbox.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [13, 6], [13, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 0], [16, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 4
                },
                "end": {
                  "line": 20,
                  "column": 4
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-dialog.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
            statements: [["content", "yield", ["loc", [null, [19, 6], [19, 15]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 21,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-dialog.hbs"
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
          statements: [["block", "paper-dialog-inner", [], ["origin", ["subexpr", "@mut", [["get", "origin", ["loc", [null, [11, 13], [11, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "defaultedParent", ["subexpr", "@mut", [["get", "defaultedParent", ["loc", [null, [12, 22], [12, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "defaultedOpenFrom", ["subexpr", "@mut", [["get", "defaultedOpenFrom", ["loc", [null, [13, 24], [13, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "defaultedCloseTo", ["subexpr", "@mut", [["get", "defaultedCloseTo", ["loc", [null, [14, 23], [14, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "fullscreen", ["subexpr", "@mut", [["get", "fullscreen", ["loc", [null, [15, 17], [15, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "clickOutsideToClose", ["subexpr", "@mut", [["get", "clickOutsideToClose", ["loc", [null, [16, 26], [16, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "focusOnOpen", ["subexpr", "@mut", [["get", "focusOnOpen", ["loc", [null, [17, 18], [17, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [10, 4], [20, 27]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-dialog.hbs"
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "paper-backdrop", [], ["locked-open", ["subexpr", "@mut", [["get", "isLockedOpen", ["loc", [null, [3, 16], [3, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "opaque", true, "fixed", ["subexpr", "unless", [["get", "parent", ["loc", [null, [5, 18], [5, 24]]], 0, 0, 0, 0], true], [], ["loc", [null, [5, 10], [5, 30]]], 0, 0], "class", "md-dialog-backdrop", "onClick", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [7, 12], [7, 37]]], 0, 0]], ["loc", [null, [2, 2], [8, 4]]], 0, 0], ["block", "paper-dialog-container", [], ["outsideClicked", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [9, 43], [9, 68]]], 0, 0]], 0, null, ["loc", [null, [9, 2], [21, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-dialog.hbs"
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
      statements: [["block", "ember-wormhole", [], ["to", ["subexpr", "@mut", [["get", "destinationId", ["loc", [null, [1, 21], [1, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [22, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-form.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["isValid", ["get", "isValid", ["loc", [null, [2, 10], [2, 17]]], 0, 0, 0, 0], "isInvalid", ["get", "isInvalid", ["loc", [null, [3, 12], [3, 21]]], 0, 0, 0, 0], "input", ["subexpr", "component", ["paper-input"], ["parentComponent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [5, 20], [5, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "onValidityChange", ["subexpr", "action", ["onValidityChange"], [], ["loc", [null, [6, 21], [6, 48]]], 0, 0]], ["loc", [null, [4, 8], [7, 3]]], 0, 0], "onSubmit", ["subexpr", "action", ["onSubmit"], [], ["loc", [null, [8, 11], [8, 30]]], 0, 0]], ["loc", [null, [1, 8], [9, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [9, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-grid-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-grid-list.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-grid-tile-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-grid-tile-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("figcaption");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
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
      statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-grid-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-grid-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("figure");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-icon.hbs"
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
      statements: [["inline", "-paper-underscore", [["get", "iconClass", ["loc", [null, [1, 20], [1, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 31]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
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
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element3, 'for');
          morphs[1] = dom.createAttrMorph(element3, 'class');
          morphs[2] = dom.createMorphAt(element3, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["get", "inputElementId", ["loc", [null, [2, 15], [2, 29]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "required", ["loc", [null, [2, 44], [2, 52]]], 0, 0, 0, 0], "md-required"], [], ["loc", [null, [2, 39], [2, 68]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 70], [2, 79]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
        statements: [["inline", "paper-icon", [["get", "icon", ["loc", [null, [6, 15], [6, 19]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 2], [6, 21]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 34,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("textarea");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(22);
          morphs[0] = dom.createAttrMorph(element2, 'class');
          morphs[1] = dom.createAttrMorph(element2, 'id');
          morphs[2] = dom.createAttrMorph(element2, 'placeholder');
          morphs[3] = dom.createAttrMorph(element2, 'disabled');
          morphs[4] = dom.createAttrMorph(element2, 'autofocus');
          morphs[5] = dom.createAttrMorph(element2, 'onfocus');
          morphs[6] = dom.createAttrMorph(element2, 'onblur');
          morphs[7] = dom.createAttrMorph(element2, 'onkeydown');
          morphs[8] = dom.createAttrMorph(element2, 'oninput');
          morphs[9] = dom.createAttrMorph(element2, 'name');
          morphs[10] = dom.createAttrMorph(element2, 'rows');
          morphs[11] = dom.createAttrMorph(element2, 'cols');
          morphs[12] = dom.createAttrMorph(element2, 'maxlength');
          morphs[13] = dom.createAttrMorph(element2, 'tabindex');
          morphs[14] = dom.createAttrMorph(element2, 'required');
          morphs[15] = dom.createAttrMorph(element2, 'selectionEnd');
          morphs[16] = dom.createAttrMorph(element2, 'selectionStart');
          morphs[17] = dom.createAttrMorph(element2, 'selectionDirection');
          morphs[18] = dom.createAttrMorph(element2, 'wrap');
          morphs[19] = dom.createAttrMorph(element2, 'readonly');
          morphs[20] = dom.createAttrMorph(element2, 'form');
          morphs[21] = dom.createAttrMorph(element2, 'spellcheck');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-input ", ["subexpr", "if", [["get", "isInvalid", ["loc", [null, [11, 25], [11, 34]]], 0, 0, 0, 0], "ng-invalid"], [], ["loc", [null, [11, 20], [11, 49]]], 0, 0], " ", ["subexpr", "if", [["get", "isTouched", ["loc", [null, [11, 55], [11, 64]]], 0, 0, 0, 0], "ng-dirty"], [], ["loc", [null, [11, 50], [11, 77]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["get", "inputElementId", ["loc", [null, [12, 9], [12, 23]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [13, 18], [13, 29]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [14, 15], [14, 23]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "autofocus", ["get", "autofocus", ["loc", [null, [15, 16], [15, 25]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onfocus", ["get", "onFocus", ["loc", [null, [16, 14], [16, 21]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onblur", ["subexpr", "action", ["handleBlur"], [], ["loc", [null, [null, null], [17, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "onkeydown", ["get", "onKeyDown", ["loc", [null, [18, 16], [18, 25]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "oninput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [null, null], [19, 36]]], 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "passThru.name", ["loc", [null, [21, 11], [21, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "rows", ["get", "passThru.rows", ["loc", [null, [22, 11], [22, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "cols", ["get", "passThru.cols", ["loc", [null, [23, 11], [23, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "maxlength", ["get", "passThru.maxlength", ["loc", [null, [24, 16], [24, 34]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "passThru.tabindex", ["loc", [null, [25, 15], [25, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "required", ["get", "passThru.required", ["loc", [null, [26, 15], [26, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selectionEnd", ["get", "passThru.selectionEnd", ["loc", [null, [27, 19], [27, 40]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selectionStart", ["get", "passThru.selectionStart", ["loc", [null, [28, 21], [28, 44]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selectionDirection", ["get", "passThru.selectionDirection", ["loc", [null, [29, 25], [29, 52]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "wrap", ["get", "passThru.wrap", ["loc", [null, [30, 11], [30, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "readonly", ["get", "passThru.readonly", ["loc", [null, [31, 15], [31, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "form", ["get", "passThru.form", ["loc", [null, [32, 11], [32, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "spellcheck", ["get", "passThru.spellcheck", ["loc", [null, [33, 17], [33, 36]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 72,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(35);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'id');
          morphs[2] = dom.createAttrMorph(element1, 'placeholder');
          morphs[3] = dom.createAttrMorph(element1, 'type');
          morphs[4] = dom.createAttrMorph(element1, 'disabled');
          morphs[5] = dom.createAttrMorph(element1, 'autofocus');
          morphs[6] = dom.createAttrMorph(element1, 'onfocus');
          morphs[7] = dom.createAttrMorph(element1, 'onblur');
          morphs[8] = dom.createAttrMorph(element1, 'onkeydown');
          morphs[9] = dom.createAttrMorph(element1, 'oninput');
          morphs[10] = dom.createAttrMorph(element1, 'accept');
          morphs[11] = dom.createAttrMorph(element1, 'autocomplete');
          morphs[12] = dom.createAttrMorph(element1, 'autosave');
          morphs[13] = dom.createAttrMorph(element1, 'form');
          morphs[14] = dom.createAttrMorph(element1, 'formaction');
          morphs[15] = dom.createAttrMorph(element1, 'formenctype');
          morphs[16] = dom.createAttrMorph(element1, 'formmethod');
          morphs[17] = dom.createAttrMorph(element1, 'formnovalidate');
          morphs[18] = dom.createAttrMorph(element1, 'formtarget');
          morphs[19] = dom.createAttrMorph(element1, 'height');
          morphs[20] = dom.createAttrMorph(element1, 'inputmode');
          morphs[21] = dom.createAttrMorph(element1, 'min');
          morphs[22] = dom.createAttrMorph(element1, 'maxlength');
          morphs[23] = dom.createAttrMorph(element1, 'max');
          morphs[24] = dom.createAttrMorph(element1, 'multiple');
          morphs[25] = dom.createAttrMorph(element1, 'name');
          morphs[26] = dom.createAttrMorph(element1, 'pattern');
          morphs[27] = dom.createAttrMorph(element1, 'readonly');
          morphs[28] = dom.createAttrMorph(element1, 'required');
          morphs[29] = dom.createAttrMorph(element1, 'selectionDirection');
          morphs[30] = dom.createAttrMorph(element1, 'size');
          morphs[31] = dom.createAttrMorph(element1, 'spellcheck');
          morphs[32] = dom.createAttrMorph(element1, 'step');
          morphs[33] = dom.createAttrMorph(element1, 'tabindex');
          morphs[34] = dom.createAttrMorph(element1, 'width');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-input ", ["subexpr", "if", [["get", "isInvalid", ["loc", [null, [36, 25], [36, 34]]], 0, 0, 0, 0], "ng-invalid"], [], ["loc", [null, [36, 20], [36, 49]]], 0, 0], "  ", ["subexpr", "if", [["get", "isTouched", ["loc", [null, [36, 56], [36, 65]]], 0, 0, 0, 0], "ng-dirty"], [], ["loc", [null, [36, 51], [36, 78]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["get", "inputElementId", ["loc", [null, [37, 9], [37, 23]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [38, 18], [38, 29]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "type", ["get", "type", ["loc", [null, [39, 11], [39, 15]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [40, 15], [40, 23]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "autofocus", ["get", "autofocus", ["loc", [null, [41, 16], [41, 25]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onfocus", ["get", "onFocus", ["loc", [null, [42, 14], [42, 21]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onblur", ["subexpr", "action", ["handleBlur"], [], ["loc", [null, [null, null], [43, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "onkeydown", ["get", "onKeyDown", ["loc", [null, [44, 16], [44, 25]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "oninput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [null, null], [45, 36]]], 0, 0], 0, 0, 0, 0], ["attribute", "accept", ["get", "passThru.accept", ["loc", [null, [47, 13], [47, 28]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "autocomplete", ["get", "passThru.autocomplete", ["loc", [null, [48, 19], [48, 40]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "autosave", ["get", "passThru.autosave", ["loc", [null, [49, 15], [49, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "form", ["get", "passThru.form", ["loc", [null, [50, 11], [50, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "formaction", ["get", "passThru.formaction", ["loc", [null, [51, 17], [51, 36]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "formenctype", ["get", "passThru.formenctype", ["loc", [null, [52, 18], [52, 38]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "formmethod", ["get", "passThru.formmethod", ["loc", [null, [53, 17], [53, 36]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "formnovalidate", ["get", "passThru.formnovalidate", ["loc", [null, [54, 21], [54, 44]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "formtarget", ["get", "passThru.formtarget", ["loc", [null, [55, 17], [55, 36]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "height", ["get", "passThru.height", ["loc", [null, [56, 13], [56, 28]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "inputmode", ["get", "passThru.inputmode", ["loc", [null, [57, 16], [57, 34]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "min", ["get", "passThru.min", ["loc", [null, [58, 10], [58, 22]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "maxlength", ["get", "passThru.maxlength", ["loc", [null, [59, 16], [59, 34]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "max", ["get", "passThru.max", ["loc", [null, [60, 10], [60, 22]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "multiple", ["get", "passThru.multiple", ["loc", [null, [61, 15], [61, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "passThru.name", ["loc", [null, [62, 11], [62, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "pattern", ["get", "passThru.pattern", ["loc", [null, [63, 14], [63, 30]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "readonly", ["get", "passThru.readonly", ["loc", [null, [64, 15], [64, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "required", ["get", "passThru.required", ["loc", [null, [65, 15], [65, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selectionDirection", ["get", "passThru.selectionDirection", ["loc", [null, [66, 25], [66, 52]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "size", ["get", "passThru.size", ["loc", [null, [67, 11], [67, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "spellcheck", ["get", "passThru.spellcheck", ["loc", [null, [68, 17], [68, 36]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "step", ["get", "passThru.step", ["loc", [null, [69, 11], [69, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "passThru.tabindex", ["loc", [null, [70, 15], [70, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "width", ["get", "passThru.width", ["loc", [null, [71, 12], [71, 26]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 4
              },
              "end": {
                "line": 78,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
            dom.setAttribute(el1, "class", "md-char-counter");
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
          statements: [["content", "renderCharCount", ["loc", [null, [77, 35], [77, 54]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 82,
                  "column": 6
                },
                "end": {
                  "line": 87,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "paper-input-error ng-enter ng-enter-active");
              dom.setAttribute(el1, "ng-message", "");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'id');
              morphs[1] = dom.createMorphAt(element0, 1, 1);
              return morphs;
            },
            statements: [["attribute", "id", ["concat", ["error-", ["get", "inputElementId", ["loc", [null, [83, 25], [83, 39]]], 0, 0, 0, 0], "-", ["get", "index", ["loc", [null, [83, 44], [83, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "error.message", ["loc", [null, [85, 10], [85, 27]]], 0, 0, 0, 0]],
            locals: ["error", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 80,
                "column": 2
              },
              "end": {
                "line": 89,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-input-messages-animation md-auto-hide");
            dom.setAttribute(el1, "ng-messages", "");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
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
          statements: [["block", "each", [["get", "validationErrorMessages", ["loc", [null, [82, 14], [82, 37]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [82, 6], [87, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 0
            },
            "end": {
              "line": 90,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
          dom.setAttribute(el1, "class", "md-errors-spacer");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "maxlength", ["loc", [null, [76, 10], [76, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [76, 4], [78, 11]]]], ["block", "if", [["get", "isInvalidAndTouched", ["loc", [null, [80, 8], [80, 27]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [80, 2], [89, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 0
            },
            "end": {
              "line": 94,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
        statements: [["inline", "paper-icon", [["get", "iconRight", ["loc", [null, [93, 15], [93, 24]]], 0, 0, 0, 0]], [], ["loc", [null, [93, 2], [93, 26]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 95,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-input.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "label", ["loc", [null, [1, 6], [1, 11]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [5, 6], [5, 10]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [5, 0], [7, 7]]]], ["block", "if", [["get", "textarea", ["loc", [null, [9, 6], [9, 14]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [9, 0], [72, 7]]]], ["block", "unless", [["get", "hideAllMessages", ["loc", [null, [74, 10], [74, 25]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [74, 0], [90, 11]]]], ["block", "if", [["get", "iconRight", ["loc", [null, [92, 6], [92, 15]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [92, 0], [94, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-no-style md-list-item-inner");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 0], [2, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-menu-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-menu-container.hbs"
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
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 14]]], 0, 0], ["inline", "paper-backdrop", [], ["class", "md-menu-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [2, 50], [2, 71]]], 0, 0]], ["loc", [null, [2, 0], [2, 73]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-menu-content-pane", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-menu-content-pane.hbs"
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
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 14]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-menu-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
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
          "moduleName": "frontend-upgrade/templates/components/paper-menu-content.hbs"
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
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 10], [2, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 2], [2, 16]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-menu-content.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["class", "md-menu-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [5, 52], [5, 73]]], 0, 0]], ["loc", [null, [5, 2], [5, 75]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-menu-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "paper-menu-content-pane", [], ["width", ["subexpr", "@mut", [["get", "width", ["loc", [null, [1, 33], [1, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "dense", ["subexpr", "@mut", [["get", "dense", ["loc", [null, [1, 45], [1, 50]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [3, 28]]]], ["block", "ember-wormhole", [], ["to", "paper-wormhole"], 1, null, ["loc", [null, [4, 0], [6, 19]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-menu-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-menu-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
          statements: [["content", "yield", ["loc", [null, [3, 4], [3, 13]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-menu-item.hbs"
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
        statements: [["block", "paper-button", [], ["onClick", "handleClick", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [2, 49], [2, 57]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [2, 2], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-menu-item.hbs"
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
        statements: [["content", "yield", ["loc", [null, [6, 2], [6, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-menu-item.hbs"
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
      statements: [["block", "if", [["get", "onClick", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
          statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [4, 4], [4, 26]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-menu.hbs"
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
        statements: [["block", "paper-menu-content", [], ["width", ["subexpr", "@mut", [["get", "width", ["loc", [null, [3, 30], [3, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "dense", ["subexpr", "@mut", [["get", "dense", ["loc", [null, [3, 42], [3, 47]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [3, 2], [5, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-menu.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 14]]], 0, 0], ["block", "if", [["get", "isOpen", ["loc", [null, [2, 6], [2, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [6, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-nav-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-nav-container.hbs"
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
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 14]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-optgroup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 9
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-optgroup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 7], [1, 16]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [2, 0], [2, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-option", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 36
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-option.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-text");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 21], [1, 30]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-progress-circular", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-progress-circular.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-spinner-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-inner ");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-gap");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-left");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "md-half-circle");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-right");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "md-half-circle");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3, 1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element0, 'style');
        morphs[2] = dom.createAttrMorph(element2, 'style');
        morphs[3] = dom.createAttrMorph(element3, 'style');
        morphs[4] = dom.createAttrMorph(element4, 'style');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["md-scale-wrapper ", ["get", "spinnerClass", ["loc", [null, [1, 31], [1, 43]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "scaleWrapperStyle", ["loc", [null, [1, 55], [1, 72]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "gapStyle", ["loc", [null, [4, 34], [4, 42]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "leftStyle", ["loc", [null, [6, 44], [6, 53]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "rightStyle", ["loc", [null, [9, 44], [9, 54]]], 0, 0, 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-progress-linear", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-progress-linear.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-dashed");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar md-bar1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar md-bar2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'style');
        morphs[2] = dom.createAttrMorph(element2, 'style');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["md-container ", ["get", "queryModeClass", ["loc", [null, [1, 27], [1, 41]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "bar1Style", ["loc", [null, [3, 38], [3, 47]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "bar2Style", ["loc", [null, [4, 38], [4, 47]]], 0, 0, 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-radio-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 3
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-radio-group.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["radio", ["subexpr", "component", ["paper-radio"], ["toggle", ["subexpr", "@mut", [["get", "toggle", ["loc", [null, [3, 11], [3, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 13], [4, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [5, 15], [5, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", ["onChange"], [], ["loc", [null, [6, 13], [6, 32]]], 0, 0], "parentGroup", ["subexpr", "@mut", [["get", "this", ["loc", [null, [7, 16], [7, 20]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 10], [7, 21]]], 0, 0]], ["loc", [null, [1, 8], [8, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [8, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-radio.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [8, 6], [8, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-radio.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [14, 6], [14, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-off");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-on");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [5, 6], [5, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-select-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-select-container.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["class", "md-select-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [3, 54], [3, 75]]], 0, 0]], ["loc", [null, [3, 2], [3, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-select-container.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 14]]], 0, 0], ["block", "ember-wormhole", [], ["to", "paper-wormhole"], 0, null, ["loc", [null, [2, 0], [4, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-select-core", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 6,
                      "column": 8
                    },
                    "end": {
                      "line": 8,
                      "column": 8
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
                statements: [["content", "paper-progress-circular", ["loc", [null, [7, 15], [7, 42]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 8,
                      "column": 8
                    },
                    "end": {
                      "line": 10,
                      "column": 8
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
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
                statements: [["inline", "yield", [["get", "items", ["loc", [null, [9, 18], [9, 23]]], 0, 0, 0, 0]], [], ["loc", [null, [9, 10], [9, 25]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 6
                  },
                  "end": {
                    "line": 11,
                    "column": 6
                  }
                },
                "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
              statements: [["block", "if", [["get", "isLoading", ["loc", [null, [6, 14], [6, 23]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [6, 8], [10, 15]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 12,
                  "column": 4
                }
              },
              "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
            statements: [["block", "paper-content", [], ["class", "md-default-theme"], 0, null, ["loc", [null, [5, 6], [11, 24]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
          statements: [["block", "paper-select-menu", [], [], 0, null, ["loc", [null, [4, 4], [12, 26]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
        statements: [["block", "paper-select-container", [], [], 0, null, ["loc", [null, [3, 2], [13, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 7
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-select-core.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "paper-select-value", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [1, 33], [1, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "label", ["loc", [null, [1, 51], [1, 56]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [1, 58]]], 0, 0], ["block", "if", [["get", "isOpen", ["loc", [null, [2, 6], [2, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [14, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-select-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-select-header.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-select-value", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 55
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-select-value.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "md-select-icon");
        dom.setAttribute(el1, "aria-hidden", "true");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 6], [1, 15]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
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
          "moduleName": "frontend-upgrade/templates/components/paper-select.hbs"
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
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["subexpr", "if", [["get", "value", ["loc", [null, [2, 20], [2, 25]]], 0, 0, 0, 0], "md-static", "md-placeholder"], [], ["loc", [null, [null, null], [2, 56]]], 0, 0], 0, 0, 0, 0], ["attribute", "for", ["get", "inputElementId", ["loc", [null, [2, 63], [2, 77]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 80], [2, 89]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-select.hbs"
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
        statements: [["inline", "paper-icon", [["get", "icon", ["loc", [null, [6, 15], [6, 19]]], 0, 0, 0, 0]], ["class", ["subexpr", "@mut", [["get", "icon-class", ["loc", [null, [6, 26], [6, 36]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 2], [6, 38]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-select.hbs"
        },
        isEmpty: false,
        arity: 1,
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
        statements: [["inline", "yield", [["get", "items", ["loc", [null, [10, 10], [10, 15]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 2], [10, 17]]], 0, 0]],
        locals: ["items"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-select.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "label", ["loc", [null, [1, 6], [1, 11]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [5, 6], [5, 10]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [5, 0], [7, 7]]]], ["block", "paper-select-core", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [9, 33], [9, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 51], [9, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [9, 66], [9, 74]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "@mut", [["get", "onChange", ["loc", [null, [9, 84], [9, 92]]], 0, 0, 0, 0]], [], [], 0, 0], "getItems", ["subexpr", "@mut", [["get", "getItems", ["loc", [null, [9, 102], [9, 110]]], 0, 0, 0, 0]], [], [], 0, 0], "itemLabelCallback", ["subexpr", "@mut", [["get", "itemLabelCallback", ["loc", [null, [9, 129], [9, 146]]], 0, 0, 0, 0]], [], [], 0, 0]], 2, null, ["loc", [null, [9, 0], [11, 22]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-sidenav-toggle", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 25
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-sidenav-toggle.hbs"
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
      statements: [["inline", "yield", [["subexpr", "action", [["get", "toggle", ["loc", [null, [1, 16], [1, 22]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 8], [1, 23]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 25]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-sidenav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-sidenav.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["locked-open", ["subexpr", "@mut", [["get", "isLockedOpen", ["loc", [null, [3, 16], [3, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "opaque", true, "class", "md-sidenav-backdrop", "onClick", ["subexpr", "action", ["onBackdropTap"], [], ["loc", [null, [6, 12], [6, 36]]], 0, 0]], ["loc", [null, [2, 2], [7, 4]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-sidenav.hbs"
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
        statements: [["content", "yield", ["loc", [null, [18, 2], [18, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-sidenav.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "closed", ["loc", [null, [1, 10], [1, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [8, 11]]]], ["block", "paper-sidenav-inner", [], ["class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [11, 8], [11, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [12, 7], [12, 11]]], 0, 0, 0, 0]], [], [], 0, 0], "position", ["subexpr", "@mut", [["get", "position", ["loc", [null, [13, 11], [13, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "lockedOpen", ["subexpr", "@mut", [["get", "lockedOpen", ["loc", [null, [14, 13], [14, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "closed", ["subexpr", "@mut", [["get", "closed", ["loc", [null, [15, 9], [15, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "closeOnClick", ["subexpr", "@mut", [["get", "closeOnClick", ["loc", [null, [16, 15], [16, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "onToggle", ["subexpr", "action", ["onToggle"], [], ["loc", [null, [17, 11], [17, 30]]], 0, 0]], 1, null, ["loc", [null, [10, 0], [19, 24]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-slider", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-slider.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-slider-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-track-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track md-track-fill");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track-ticks");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-thumb-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-focus-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-focus-ring");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-sign");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "md-thumb-text");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-disabled-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 3]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'style');
        morphs[1] = dom.createAttrMorph(element2, 'style');
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [7, 1]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "style", ["get", "activeTrackStyle", ["loc", [null, [4, 52], [4, 68]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["get", "thumbContainerStyle", ["loc", [null, [7, 44], [7, 63]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "value", ["loc", [null, [12, 40], [12, 49]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-subheader", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-subheader.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-subheader-inner");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "md-subheader-content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [3, 6], [3, 15]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/paper-switch", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-switch.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 4], [11, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/paper-switch.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [15, 4], [15, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/paper-switch.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-switch-bar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-thumb-container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-thumb");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "style", ["get", "thumbContainerStyle", ["loc", [null, [4, 42], [4, 61]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [9, 6], [9, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/components/paper-toolbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/paper-toolbar.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["tools", ["subexpr", "component", ["paper-toolbar-tools"], [], ["loc", [null, [2, 8], [2, 41]]], 0, 0]], ["loc", [null, [1, 8], [3, 1]]], 0, 0]], [], ["loc", [null, [1, 0], [3, 3]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/components/quest-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 2,
                "column": 83
              }
            },
            "moduleName": "frontend-upgrade/templates/components/quest-item.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/quest-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
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
          statements: [["inline", "paper-icon", ["delete"], [], ["loc", [null, [7, 6], [7, 29]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
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
          "moduleName": "frontend-upgrade/templates/components/quest-item.hbs"
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
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flex-75");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-checkbox", [], ["value", ["subexpr", "@mut", [["get", "item.isComplete", ["loc", [null, [2, 26], [2, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "item.isComplete", ["loc", [null, [2, 64], [2, 79]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 59], [2, 80]]], 0, 0]], [], ["loc", [null, [2, 51], [2, 81]]], 0, 0]], 0, null, ["loc", [null, [2, 2], [2, 102]]]], ["content", "item.description", ["loc", [null, [4, 4], [4, 24]]], 0, 0, 0, 0], ["block", "paper-button", [], ["class", "md-secondary", "iconButton", true, "onClick", ["subexpr", "action", ["removeQuestItem", ["get", "item.id", ["loc", [null, [6, 89], [6, 96]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 63], [6, 97]]], 0, 0]], 1, null, ["loc", [null, [6, 2], [8, 19]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 15
          }
        },
        "moduleName": "frontend-upgrade/templates/components/quest-item.hbs"
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
      statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [1, 0], [9, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/components/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 1
              },
              "end": {
                "line": 5,
                "column": 1
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
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
          statements: [["inline", "paper-input", [], ["label", "First Name", "type", "text", "value", ["subexpr", "@mut", [["get", "ctrl.firstname", ["loc", [null, [4, 53], [4, 67]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.firstname", ["loc", [null, [4, 90], [4, 104]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 85], [4, 105]]], 0, 0]], [], ["loc", [null, [4, 77], [4, 106]]], 0, 0], "icon", "person", "required", true], ["loc", [null, [4, 2], [4, 137]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 1
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
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
          statements: [["inline", "paper-input", [], ["label", "Last Name", "type", "text", "value", ["subexpr", "@mut", [["get", "ctrl.lastname", ["loc", [null, [7, 52], [7, 65]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.lastname", ["loc", [null, [7, 88], [7, 101]]], 0, 0, 0, 0]], [], ["loc", [null, [7, 83], [7, 102]]], 0, 0]], [], ["loc", [null, [7, 75], [7, 103]]], 0, 0], "icon", "person", "required", true], ["loc", [null, [7, 2], [7, 134]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	  ");
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
          statements: [["inline", "paper-input", [], ["label", "Email", "type", "email", "value", ["subexpr", "@mut", [["get", "ctrl.email", ["loc", [null, [10, 50], [10, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.email", ["loc", [null, [10, 83], [10, 93]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 78], [10, 94]]], 0, 0]], [], ["loc", [null, [10, 70], [10, 95]]], 0, 0], "icon", "email", "required", true], ["loc", [null, [10, 3], [10, 125]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
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
          statements: [["inline", "paper-input", [], ["label", "Password", "type", "password", "value", ["subexpr", "@mut", [["get", "ctrl.password", ["loc", [null, [13, 55], [13, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.password", ["loc", [null, [13, 91], [13, 104]]], 0, 0, 0, 0]], [], ["loc", [null, [13, 86], [13, 105]]], 0, 0]], [], ["loc", [null, [13, 78], [13, 106]]], 0, 0], "icon", "lock", "required", true], ["loc", [null, [13, 2], [13, 134]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 1
              },
              "end": {
                "line": 17,
                "column": 1
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
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
          statements: [["inline", "paper-input", [], ["label", "Re-Enter Password", "type", "password", "value", ["subexpr", "@mut", [["get", "ctrl.passwordCnfrm", ["loc", [null, [16, 64], [16, 82]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "ctrl.passwordCnfrm", ["loc", [null, [16, 105], [16, 123]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 100], [16, 124]]], 0, 0]], [], ["loc", [null, [16, 92], [16, 125]]], 0, 0], "icon", "lock", "required", true], ["loc", [null, [16, 2], [16, 153]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 20,
                  "column": 3
                },
                "end": {
                  "line": 20,
                  "column": 77
                }
              },
              "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Sign up");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 22,
                "column": 1
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "loginButton");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
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
          statements: [["block", "paper-button", [], ["raised", true, "onClick", ["subexpr", "action", ["signup"], ["target", ["get", "ctrl", ["loc", [null, [20, 63], [20, 67]]], 0, 0, 0, 0]], ["loc", [null, [20, 39], [20, 68]]], 0, 0]], 0, null, ["loc", [null, [20, 3], [20, 94]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child6 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 61
                },
                "end": {
                  "line": 25,
                  "column": 91
                }
              },
              "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Login");
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
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 2
              },
              "end": {
                "line": 26,
                "column": 2
              }
            },
            "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			 ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "text-white colored-link");
            var el2 = dom.createTextNode(" Already Registered?  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("  ");
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
          statements: [["block", "link-to", ["loginmodal"], [], 0, null, ["loc", [null, [25, 61], [25, 103]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("center");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          morphs[5] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[6] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "paper-item", [], [], 0, null, ["loc", [null, [3, 1], [5, 16]]]], ["block", "paper-item", [], [], 1, null, ["loc", [null, [6, 2], [8, 16]]]], ["block", "paper-item", [], [], 2, null, ["loc", [null, [9, 2], [11, 17]]]], ["block", "paper-item", [], [], 3, null, ["loc", [null, [12, 2], [14, 17]]]], ["block", "paper-item", [], [], 4, null, ["loc", [null, [15, 1], [17, 16]]]], ["block", "paper-item", [], [], 5, null, ["loc", [null, [18, 2], [22, 16]]]], ["block", "paper-item", [], ["class", "alignCenter"], 6, null, ["loc", [null, [24, 2], [26, 17]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/components/sign-up.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "paperListItem changeInput sign-up-scroll");
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
      statements: [["block", "paper-list", [], [], 0, null, ["loc", [null, [2, 0], [28, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend-upgrade/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("frontend-upgrade/templates/components/transition-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/components/transition-group.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/forgot", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/forgot.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createComment("");
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "forgot-password", [], ["ctrl", ["subexpr", "@mut", [["get", "this", ["loc", [null, [1, 47], [1, 51]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 24], [1, 53]]], 0, 0], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/games", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 8,
                        "column": 12
                      },
                      "end": {
                        "line": 8,
                        "column": 49
                      }
                    },
                    "moduleName": "frontend-upgrade/templates/games.hbs"
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
                  statements: [["content", "game.world_name", ["loc", [null, [8, 30], [8, 49]]], 0, 0, 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 7,
                      "column": 10
                    },
                    "end": {
                      "line": 9,
                      "column": 10
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/games.hbs"
                },
                isEmpty: false,
                arity: 1,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("            ");
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
                statements: [["block", "text.headline", [], [], 0, null, ["loc", [null, [8, 12], [8, 67]]]]],
                locals: ["text"],
                templates: [child0]
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 6,
                    "column": 8
                  },
                  "end": {
                    "line": 10,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/games.hbs"
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
              statements: [["block", "title.text", [], [], 0, null, ["loc", [null, [7, 10], [9, 25]]]]],
              locals: ["title"],
              templates: [child0]
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 12,
                    "column": 8
                  },
                  "end": {
                    "line": 16,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/games.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("p");
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n          ");
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
              statements: [["content", "game.description", ["loc", [null, [14, 12], [14, 32]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 18,
                      "column": 12
                    },
                    "end": {
                      "line": 18,
                      "column": 102
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/games.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(" Play ");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 17,
                    "column": 8
                  },
                  "end": {
                    "line": 19,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/games.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
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
              statements: [["block", "paper-button", [], ["class", "gameButton", "raised", true, "onClick", ["subexpr", "action", ["playGame", ["get", "game.id", ["loc", [null, [18, 86], [18, 93]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 67], [18, 94]]], 0, 0]], 0, null, ["loc", [null, [18, 12], [18, 119]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 6
                },
                "end": {
                  "line": 20,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/games.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "card.title", [], [], 0, null, ["loc", [null, [6, 8], [10, 24]]]], ["inline", "card.image", [], ["class", "xs", "src", ["subexpr", "@mut", [["get", "game.imageUrl", ["loc", [null, [11, 37], [11, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "alt", "Nova 3d", "title", "Nova 3d"], ["loc", [null, [11, 8], [11, 82]]], 0, 0], ["block", "card.content", [], [], 1, null, ["loc", [null, [12, 8], [16, 25]]]], ["block", "card.actions", [], ["class", "layout-column"], 2, null, ["loc", [null, [17, 8], [19, 25]]]]],
            locals: ["card"],
            templates: [child0, child1, child2]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/games.hbs"
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
          statements: [["block", "paper-card", [], [], 0, null, ["loc", [null, [4, 6], [20, 21]]]]],
          locals: ["game"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/games.hbs"
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
        statements: [["block", "each", [["get", "model", ["loc", [null, [3, 12], [3, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [21, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 8
                  },
                  "end": {
                    "line": 31,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/games.hbs"
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
                dom.setAttribute(el1, "style", "max-width:800px;max-height:810px;");
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("\n              Looks like you have not been invited to any games. Contact your Game Master to get an invitation. Or, be your own Game Master. Create a game and invite your friends.\n            ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n          ");
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
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 34,
                      "column": 10
                    },
                    "end": {
                      "line": 34,
                      "column": 85
                    }
                  },
                  "moduleName": "frontend-upgrade/templates/games.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("Ok");
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
                "revision": "Ember@2.7.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 32,
                    "column": 8
                  },
                  "end": {
                    "line": 35,
                    "column": 8
                  }
                },
                "moduleName": "frontend-upgrade/templates/games.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                dom.setAttribute(el1, "class", "flex");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["block", "paper-button", [], ["primary", true, "raised", true, "onClick", ["subexpr", "action", ["closePrompt"], [], ["loc", [null, [34, 59], [34, 81]]], 0, 0]], 0, null, ["loc", [null, [34, 10], [34, 102]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 6
                },
                "end": {
                  "line": 36,
                  "column": 6
                }
              },
              "moduleName": "frontend-upgrade/templates/games.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "paper-dialog-content", [], [], 0, null, ["loc", [null, [25, 8], [31, 33]]]], ["block", "paper-dialog-actions", [], ["class", "layout-row"], 1, null, ["loc", [null, [32, 8], [35, 33]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 4
              }
            },
            "moduleName": "frontend-upgrade/templates/games.hbs"
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
          statements: [["block", "paper-dialog", [], [], 0, null, ["loc", [null, [24, 6], [36, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 2
            },
            "end": {
              "line": 38,
              "column": 2
            }
          },
          "moduleName": "frontend-upgrade/templates/games.hbs"
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
        statements: [["block", "if", [["get", "showPrompt", ["loc", [null, [23, 10], [23, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [23, 4], [37, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/games.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        dom.setAttribute(el1, "id", "game-screen");
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
      statements: [["block", "if", [["get", "model.length", ["loc", [null, [2, 8], [2, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [38, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/games/characters", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/games/characters.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode(" hello ");
        dom.appendChild(el1, el2);
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
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "listMargin");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(element0, 7, 7);
        morphs[4] = dom.createMorphAt(element0, 9, 9);
        morphs[5] = dom.createMorphAt(element0, 11, 11);
        return morphs;
      },
      statements: [["content", "game-listing", ["loc", [null, [2, 2], [2, 18]]], 0, 0, 0, 0], ["content", "game-listing", ["loc", [null, [3, 2], [3, 18]]], 0, 0, 0, 0], ["content", "game-listing", ["loc", [null, [4, 2], [4, 18]]], 0, 0, 0, 0], ["content", "game-listing", ["loc", [null, [5, 2], [5, 18]]], 0, 0, 0, 0], ["content", "game-listing", ["loc", [null, [6, 2], [6, 18]]], 0, 0, 0, 0], ["content", "game-listing", ["loc", [null, [7, 2], [7, 18]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/loading.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "paper-progress-linear", ["loc", [null, [1, 0], [1, 25]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend-upgrade/templates/loginmodal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/loginmodal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "fade in");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "log-in", [], ["ctrl", ["subexpr", "@mut", [["get", "this", ["loc", [null, [3, 22], [3, 26]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 28]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/loginmodal.hbs"
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
      statements: [["block", "unless", [["get", "this.session.user", ["loc", [null, [1, 10], [1, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/templates/passwordedit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 100
            }
          },
          "moduleName": "frontend-upgrade/templates/passwordedit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Reset Password ");
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
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 56
            },
            "end": {
              "line": 8,
              "column": 86
            }
          },
          "moduleName": "frontend-upgrade/templates/passwordedit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Login");
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
        "revision": "Ember@2.7.1",
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
        "moduleName": "frontend-upgrade/templates/passwordedit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "loginView listMargin");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "alignCenter changeInput");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("center");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "layout-column flex");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "text-white flex-10");
        var el6 = dom.createTextNode(" Already Registered?  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        return morphs;
      },
      statements: [["inline", "paper-input", [], ["flex", 30, "type", "password", "value", ["subexpr", "@mut", [["get", "this.passwd", ["loc", [null, [5, 48], [5, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "label", "New Password", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "this.passwd", ["loc", [null, [5, 104], [5, 115]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 99], [5, 116]]], 0, 0]], [], ["loc", [null, [5, 91], [5, 117]]], 0, 0], "icon", "lock"], ["loc", [null, [5, 4], [5, 131]]], 0, 0], ["inline", "paper-input", [], ["flex", 30, "type", "password", "label", "Confirm Password", "value", ["subexpr", "@mut", [["get", "this.confirmPasswd", ["loc", [null, [6, 73], [6, 91]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "this.confirmPasswd", ["loc", [null, [6, 114], [6, 132]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 109], [6, 133]]], 0, 0]], [], ["loc", [null, [6, 101], [6, 134]]], 0, 0], "icon", "lock"], ["loc", [null, [6, 4], [6, 148]]], 0, 0], ["block", "paper-button", [], ["flex", 30, "raised", true, "onClick", ["subexpr", "action", ["resetPasswd"], ["target", ["get", "this", ["loc", [null, [7, 77], [7, 81]]], 0, 0, 0, 0]], ["loc", [null, [7, 48], [7, 82]]], 0, 0]], 0, null, ["loc", [null, [7, 4], [7, 117]]]], ["block", "link-to", ["loginmodal"], [], 1, null, ["loc", [null, [8, 56], [8, 98]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend-upgrade/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "frontend-upgrade/templates/signup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["inline", "paper-progress-linear", [], ["warn", true, "value", ["subexpr", "@mut", [["get", "determinateValue", ["loc", [null, [3, 44], [3, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "bufferValue", ["subexpr", "@mut", [["get", "determinateValue2", ["loc", [null, [3, 73], [3, 90]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 4], [3, 92]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend-upgrade/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["inline", "sign-up", [], ["ctrl", ["subexpr", "@mut", [["get", "this", ["loc", [null, [1, 20], [1, 24]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 5], [1, 26]]], 0, 0], ["block", "if", [["get", "isShowingModal", ["loc", [null, [2, 6], [2, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "outlet", ["loc", [null, [5, 0], [5, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend-upgrade/utils/constants", ["exports", "frontend-upgrade/config/environment"], function (exports, _frontendUpgradeConfigEnvironment) {
  var constants;

  constants = {
    NAMESPACE: "api/v1",
    HOST: "http://52.27.156.129",
    APP_NAME: '',
    GOOGLE_CLIENT_ID: "766074953374-8tp00okjcdkpvvl4158u0mu739ps7b6l.apps.googleusercontent.com",
    FACEBOOK_APP_ID: '267182603462991'
  };

  constants.HOST = _frontendUpgradeConfigEnvironment["default"].APP.HOST + "/" + constants.NAMESPACE;

  constants.LOGOUT_URL = constants.HOST + '/sign_out';

  constants.LOGGED_IN_USER_URL = constants.HOST + '/users/logged_in';

  constants.SIGN_IN_URL = constants.HOST + '/users/sign_in';

  constants.SIGN_UP_URL = constants.HOST + '/users/sign_up';

  constants.FORGOT_PASSWORD_URL = constants.HOST + '/users/forgot_password';

  constants.RESET_PASSWORD_URL = constants.HOST + '/auth/password';

  constants.CHANGE_PASSWORD_URL = constants.HOST + '/users/change_password';

  constants.GIVE_ITEMS = constants.HOST + '/inventory_items/give_item';

  constants.MOVE_ITEMS = constants.HOST + '/inventory_items/move_item';

  constants.FAYE_URL = _frontendUpgradeConfigEnvironment["default"].APP.FAYE_URL + "/faye";

  exports["default"] = constants;
});
define('frontend-upgrade/utils/grid-layout', ['exports', 'ember-paper/utils/grid-layout'], function (exports, _emberPaperUtilsGridLayout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperUtilsGridLayout['default'];
    }
  });
});
define("frontend-upgrade/utils/validators", ["exports", "ember"], function (exports, _ember) {
  var validators;

  validators = {};

  validators.isEmailValid = function (email) {
    var emailRegEx;
    emailRegEx = void 0;
    emailRegEx = new RegExp(/^((?!\.)[a-z0-9._%+-]+(?!\.)\w)@[a-z0-9-]+\.[a-z.]{1,5}(?!\.)\w$/i);
    return emailRegEx.test(email);
  };

  exports["default"] = validators;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('frontend-upgrade/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"frontend-upgrade","environment":"development","rootURL":"","locationType":"hash","EmberENV":{"FEATURES":{}},"APP":{"HOST":"http://52.27.156.129","FAYE_URL":"http://52.27.156.129","name":"frontend-upgrade","version":"0.0.0+fe78cf3d","rootElement":"body"},"fastboot":{"hostWhitelist":["localhost",{}]},"exportApplicationGlobal":true}};
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("frontend-upgrade/app")["default"].create({"HOST":"http://52.27.156.129","FAYE_URL":"http://52.27.156.129","name":"frontend-upgrade","version":"0.0.0+fe78cf3d","rootElement":"body"});
}

define('~fastboot/app-factory', ['frontend-upgrade/app', 'frontend-upgrade/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=frontend-upgrade.map