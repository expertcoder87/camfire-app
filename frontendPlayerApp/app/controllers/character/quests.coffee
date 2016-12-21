`import Ember from 'ember'`


controller = Ember.Controller.extend

  actions:
    addQuestItem:(newTitle) ->
      if newTitle
        that=this
        @store.createRecord('quest-item', { description: newTitle, quest: @get('model.quest')} ).save().then (record) ->
          that.set('newTitle', '')

    getAllQuests: () ->
        allQuests: @store.findAll('quest')

    


`export default controller`
