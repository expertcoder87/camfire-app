`import Ember from "ember"`
view = Ember.Component.extend(
  templateName: 'quest-item'
  classNameBindings: ['item.isComplete:task-completed', 'editing']


  focusInput:()->
    this.element.querySelector('input.edit').focus();

  didInsertElement:()->
      self=this
      el = this.$('label')[0]
      Hammer(el).on('doubletap', ()->
        self.set('editing', true)
        Ember.run.scheduleOnce('afterRender', self, 'focusInput'))

  actions:
    saveItem: ()->
       @get('item').save()

    removeQuestItem: (itemId) ->
      @get('item').destroyRecord()
    toggleCompleted: ()->
      @get('item').toggleProperty('isComplete')
      @get('item').save()

    editNotes: ()->
      @set('editing', true)
      Ember.run.scheduleOnce('afterRender', @ , 'focusInput')

    doneEditing: ()->
      @get('item').save()
      @set('editing', false)


)

`export default view`
