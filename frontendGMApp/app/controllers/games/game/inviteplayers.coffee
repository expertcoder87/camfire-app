`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify'),
  deleteDialog: false


  checkEmail: (email)->
    this.get('model.invitations').filterBy('email', email)


  actions:
    askDelete:(invitation) ->
      @set('invitation',invitation)
      @set('deleteDialog', true)

    removeDeleteDialog:() ->
      @set('deleteDialog', false)

    invitePlayer:(email)->

      inviteCheck = @checkEmail(email)
      if inviteCheck.length
        @set('email',null)        
        @get('notify').info('Invitation already sent')
      else if email.length
        newRecord = @store.createRecord('invitation', {email:email, status: 'Sent', game:this.get('model').game})
        newRecord.validate().then (arg)=>
          if arg.validations.get('errors').length
            newRecord.unloadRecord()
            for error in  arg.validations.get('errors')
              msg = error.get('message')
              @set('email',null)
              @get('notify').info(msg)
          else
            newRecord.save().then (record)=>
              @set('email',null)
              @get('notify').info('Invitation sent to ' + record.get('email'))

    delete: () ->
      @get('invitation').destroyRecord().then ()=>
        @set('deleteDialog', false)
        @get('notify').info('Invitation revoked!')

    goBack:()->
      @transitionToRoute "games.index"

`export default controller`
