`import Ember from 'ember'`
`import alertMixin from "frontend-upgrade/mixins/alert_message"`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`
`import config from '../config/environment'`

controller = Ember.Controller.extend(
	notify: Ember.inject.service('notify'),
	queryParams: ['reset_password_token']
	reset_password_token: null
	passwd: null
	confirmPasswd: null
	actions:
		resetPasswd: ->
			passwd = @get('passwd')
			c_passwd = @get('confirmPasswd')
			if passwd != c_passwd
				return @get('notify').error 'Password and Confirmation password do not match.'
			url=config.APP.HOST + "/auth/password"
			type = 'PATCH'
			hash =
				data:
					reset_password_token: @get('reset_password_token')
					password: passwd
					confirm_password: c_passwd
				success: (responseJSON) ->
          msg = responseJSON.message or 'Password reset.'
          @get('notify').success msg
          @transitionToRoute('/')
				error: (jqXhr) ->
					msg = jqXhr.responseJSON.message or 'Could not reset password.'
					@get('notify').success msg
			unless @get('fastboot.isFastBoot')
				ajax url, type, hash, this
)

`export default controller`
