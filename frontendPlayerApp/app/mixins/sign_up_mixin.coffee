`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`
`import validators from "frontend-upgrade/utils/validators"`
`import ajax from "frontend-upgrade/helpers/ajax"`

mixin = Ember.Mixin.create
  canSignup: true
  isSet: true
  isShowingModal: false

  canSignupUpdate: (->
    if !Ember.isEmpty(@get('firstname')) and !Ember.isEmpty(@get('lastname')) and !Ember.isEmpty(@get('email')) and !Ember.isEmpty(@get('password')) and !Ember.isEmpty(@get('passwordCnfrm'))
      @set 'canSignup', true
    else
      @set 'canSignup', false
      @set 'alertMessage', 'Please provide all details to sign up.'
      return
    if !@get('isEmailValid')
      @set 'canSignup', false
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
  ).observes('firstname', 'lastname', 'password', 'passwordCnfrm', 'isEmailValid', 'hasAcceptedTerms')

  isEmailValid: (->
    validators.isEmailValid @get('email')
  ).property('email')


  showAlert: (->
    !@get('canSignup')
  ).property('canSignup')

  actions:
    signup: ->
      self = this
      @set('email', @get('email').trim()) if @get('email')

      @canSignupUpdate()
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

        @set('isShowingModal', true)
        request.done (response) ->
          @set('isShowingModal', false)
          if response.msg == 1
            self.showAlertNow 'alert-success', 'User has been created.'
            self.getLoggedInAndSignIn().then ->
              self.set('firstname',null)
              self.set('lastname',null)
              self.set('email',null)
              self.set('password',null)
              self.set('passwordCnfrm',null)

          else
            if response.email
              errorMessage = 'Sorry this email ' + response.email[0] + '. Please sign up with a different email.'
              self.showAlertNow 'alert-error', errorMessage
              self.set('password',null)
              self.set('passwordCnfrm',null)

            $('#signup-submit').removeAttr 'disabled'


        request.fail (jqXHR, textStatus, e) ->
          console.log 'Error Occurred' + e
      else
        if Ember.isEmpty(@get('canSignup'))
          #swal('Please provide all the details to sign up.')
          self.showAlertNow 'alert-error', 'Please provide all the details to sign up.'
          return
        self.showAlertNow 'alert-error', @get('alertMessage')

    toggleTranslucent: ->
      @set('canSignup', true)



`export default mixin`
