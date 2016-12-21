`import Ember from "ember"`
view = Ember.Component.extend(
  templateName: 'campfire-input'

  didInsertElement: ->
    self=this
    @$().click ()->
      self.set('autoFocus', true)
  
)
    
`export default view`
