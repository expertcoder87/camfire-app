`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`
`import realTimeMixin from "frontend-upgrade/mixins/real_time_mixin"`
`import notificationSubscription from 'frontend-upgrade/mixins/notification_subscription_mixin'`
`import ajax from "frontend-upgrade/helpers/ajax"`

route = Ember.Route.extend realTimeMixin, notificationSubscription,
  fastboot: Ember.inject.service()


  beforeModel: ->
    email = window.localStorage.getItem('userEmail')
    if !Ember.isEmpty(email)
      return Ember.RSVP.Promise.all([@getCurrentUser()])
    else
      @replaceWith 'loginmodal'

  getCurrentUser:()->
    self = this
    credentials = {}
    user = {}
    user.email = window.localStorage.getItem('userEmail')
    user.password= window.localStorage.getItem('userPassword')
    if !Ember.isEmpty(user.email)
      credentials.user = user
      request = $.ajax(
        type: 'POST'
        url: constants.SIGN_IN_URL
        data: credentials)
      request.done (response) ->
        if response.constructor == Object and response.message == 'Sign in successful'
             Ember.RSVP.Promise.all([self.getloggedInUser(self)])
        else
          self.replaceWith 'loginmodal'

  getloggedInUser:(self)->
    $.ajax
      type: 'GET'
      url: constants.LOGGED_IN_USER_URL
      success: (data, textStatus, request)->
        if data['message'] != 'Nobody logged In'
          self.store.pushPayload data.user
          window.localStorage.setItem('session_key',request.getResponseHeader('Set-Cookie'))
          self.store.find('user', data.user.id).then (user) ->
            self.get('session').set 'user', user
            self.subscribeToNotificationChannel()
            self.replaceWith 'games'
      error: ->
        console.log 'Failed to check for logged in users'

  subscribeToNotificationChannel:->
    @subscribe('/notifications' , @notificationCallback, @)

  actions:
    changePasswd: ->
      @send 'openModal', 'change-password', @controllerFor('loginmodal')
    logout: ->
      that = this
      window.localStorage.setItem('userEmail',"")
      window.localStorage.setItem('userPassword',"")
      that.store.unloadAll('user')
      hash =
        success: ->
          that.set 'session.user', undefined
          that.unsubscribeToNotificationChannel
          that.store.unloadAll()
          that.transitionTo('loginmodal')
      ajax(constants.LOGOUT_URL, 'GET', hash, @)


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
