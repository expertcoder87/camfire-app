`import DS from "ember-data"`

model = DS.Model.extend

  level: DS.attr('string')
  actionName: DS.attr('string')
  description: DS.attr('string')
  context: DS.attr('string')
  character: DS.belongsTo('character')
  actionTarget: DS.belongsTo('action-target', {polymorphic:true})
  
`export default model`
