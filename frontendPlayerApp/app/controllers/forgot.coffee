`import Ember from 'ember'`
`import alertMixin from "frontend-upgrade/mixins/alert_message"`
`import signupMixin from "frontend-upgrade/mixins/sign_up_mixin"`
`import changePasswordMixin from "frontend-upgrade/mixins/change_password"`
`import forgotPasswordMixin from "frontend-upgrade/mixins/forgot_password_mixin"`
`import signinMixin from "frontend-upgrade/mixins/sign_in_mixin"`

controller = Ember.Controller.extend(alertMixin, changePasswordMixin, forgotPasswordMixin)

`export default controller`
