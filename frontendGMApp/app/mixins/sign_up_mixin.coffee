`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`
`import validators from "frontend-upgrade/utils/validators"`
`import ajax from "frontend-upgrade/helpers/ajax"`

mixin = Ember.Mixin.create
  notify: Ember.inject.service('notify'),
  canSignup:null
  canSignupUpdate: (->
    if !Ember.isEmpty(@get('email')) and !Ember.isEmpty(@get('password')) and !Ember.isEmpty(@get('passwordCnfrm'))
      @set 'canSignup', true
    else
      @set 'canSignup', false
      @set 'alertMessage', 'Please provide all details to sign up.'
      return
    if !@get('isEmailValid')
      @set 'canSignup', false
      @set 'alertMessage', 'Please give a valid email address'
      return
    if @get('password')
      if @get('password').toString().length < 8
        @set 'canSignup', false
        @set 'alertMessage', 'Password should be atleast 8 characters.'
        return
    if @get('password') != @get('passwordCnfrm')
      @set 'canSignup', false
      @set 'alertMessage', 'Password and Confirmation password do not match.'
      return
    return
  ).observes('firstname', 'lastname', 'password', 'passwordCnfrm', 'email', 'hasAcceptedTerms')
  isEmailValid: (->
    validators.isEmailValid @get('email')
  ).property('email')
  actions: signup: ->
    self = this
    @set('email', @get('email').trim()) if @get('email')

    if @get('canSignup') && !@get('fastboot.isFastBoot')
      $('#signup-submit').attr 'disabled', 'disabled'
      user = {}
      user.firstname = self.get('firstname')
      user.lastname = self.get('lastname')
      user.email = self.get('email')
      user.password = self.get('password')
      data = user: user
      type =  'POST'
      url = constants.SIGN_UP_URL
      dataType =  'json'
      data =  data
      hash =
        dataType: dataType
        data: data
      request = ajax(url, type, hash, @)
      request.done (response) ->
        if response.msg == 1
          self.getLoggedInAndSignIn()
        else
          if response.email
            errorMessage = 'Sorry this email ' + response.email[0] + '. Please sign up with a different email.'
            self.get('notify').info(errorMessage)
          $('#signup-submit').removeAttr 'disabled'
        self.set('firstname',null)
        self.set('lastname',null)
        self.set('email',null)
        self.set('password',null)
        self.set('passwordCnfrm',null)

      request.fail (jqXHR, textStatus, e) ->
        console.log 'Error Occurred' + e
    else
      if Ember.isEmpty(@get('canSignup'))
        self.get('notify').info('Please provide the details to sign up.')
        return
      self.get('notify').error @get('alertMessage')


`export default mixin`
