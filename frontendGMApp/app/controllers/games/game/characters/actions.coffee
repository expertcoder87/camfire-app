`import Ember from 'ember'`


controller = Ember.Controller.extend

  contextLabelCallback: (context)->
    context.get('name')

  contextsChanged: Ember.observer('model.contexts', ()->
    obj = Ember.Object.create(name: 'All Skills and Attributes')
    obj2 = Ember.Object.create(name: 'All Attributes')
    arr = [obj, obj2]
    @get('model.contexts').toArray().forEach (context)->
      arr.pushObject(context)
    @set('contextList', arr)
    @set('selectedContext', arr[0])
    )

  selectedContextChanged: Ember.observer('selectedContext', ()->
    if @get('selectedContext.name') == 'All Skills and Attributes'
      @set('actionList', @get('model.actions'))
    else if @get('selectedContext.name') == 'All Attributes'
      @set('actionList', @get('model.actions').filterBy('targetType',"Attribute"))
    else
      @set('actionList', @get('model.actions').filterBy('context', @get('selectedContext.name')))
    )

  actions:
    actionDetails: (actionId)->
      if actionId
          @transitionToRoute('games.game.characters.actions.edit', actionId)

    addAction: (character)->
        @transitionToRoute('games.game.characters.addactions', character.id)

    goBack: ()->
        @transitionToRoute('games.game.characters.character', @get('model.character.id'))

`export default controller`
