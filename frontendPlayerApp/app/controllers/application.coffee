`import Ember from 'ember'`

controller = Ember.Controller.extend
  	showPromptDialog: false,
    history: ['application']
    showBaackButton: true

    actions :
      goBack: ()->
        $.unique(@get('history'))
        if @get('history.length') > 1
          @get('history').popObject()
          lastRoute = @get('history').popObject()
          if lastRoute=='characters'
            if @get('history.length') > 0
              lastRoute = @get('history').popObject()
              @replaceRoute lastRoute
            else @replaceRoute 'application'
          else
            @get('history').pushObject(lastRoute)
            @replaceRoute lastRoute
        else
            @replaceRoute 'application'

`export default controller`
