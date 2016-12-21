`import Ember from 'ember'`


controller = Ember.Controller.extend

  contextLabelCallback: (context)->
    context.get('name')

  contextsChanged: Ember.observer('model.contexts', ()->
    obj = Ember.Object.create(name: 'All Skills and Attributes')
    arr = [obj]
    @get('model.contexts').toArray().forEach (context)->
      arr.pushObject(context)
    @set('contextList', arr)
    @set('selectedContext', arr[0])
    )

  selectedContextChanged: Ember.observer('selectedContext', ()->
    if @get('selectedContext.name') == 'All Skills and Attributes'
      @set('actionList', @get('model.actions'))
    else
      @set('actionList', @get('model.actions').filterBy('context', @get('selectedContext.name')))
    )

  actions:
    actionDetails: (actionId)->
      if actionId
          @transitionToRoute('character.actions.edit', actionId)

`export default controller`
