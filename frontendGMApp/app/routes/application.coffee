`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`
`import realTimeMixin from "frontend-upgrade/mixins/real_time_mixin"`
`import notificationSubscription from 'frontend-upgrade/mixins/notification_subscription_mixin'`


route = AuthenticatedRoute.extend realTimeMixin,notificationSubscription,
	fastboot: Ember.inject.service(),
	showSpinner: true,
	buttonStatus: "Login"

	beforeModel: ->
		return Ember.RSVP.Promise.all([@getCurrentUser()])

	getCurrentUser:()->
		that = @
		that = this
		hash =
			success: (data)->
				if data['message'] != 'Nobody logged In'
					that.store.pushPayload(data)
					that.store.find('user',data.user.id).then((user)->
						that.get('session').set('user',user)
						that.subscribeToNotificationChannel()
					)
		unless @get('fastboot.isFastBoot')
			ajax(constants.LOGGED_IN_USER_URL,'GET',hash,@)

	subscribeToNotificationChannel:->
		@subscribe('/notifications' , @notificationCallback, @)


	actions:

		loading:(transition, originRoute)->
      controller = @controllerFor('application')
      controller.set('showSpinner', true)
      transition.promise.finally () ->
          controller.set('showSpinner', false)

		changePasswd: ->
			@send 'openModal', 'change-password', @controllerFor('loginmodal')
		logout: ->
			that = this
			hash =
				success: ->
					that.set 'session.user', undefined
					that.unsubscribeToNotificationChannel
					that.transitionTo('login')
			ajax(constants.LOGOUT_URL, 'GET', hash, @ )


		openModal: (template, ctrl) ->
			lastRenderedTemplate = @lastRenderedTemplate
			@render 'components/modal',
				outlet: 'modal'
				into: 'application'
				controller: ctrl
			if template
				@render template,
					into: 'components/modal'
					controller: ctrl
			@controllerFor('application').set 'modalShown', true
			@lastRenderedTemplate = lastRenderedTemplate
		closeModal: ->
			@controllerFor('application').set 'modalShown', false
			@disconnectOutlet
				outlet: 'modal'
				parentView: 'application'

`export default route`
