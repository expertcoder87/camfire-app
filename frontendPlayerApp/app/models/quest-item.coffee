`import DS from "ember-data"`

model = DS.Model.extend
  description: DS.attr('string')
  isComplete: DS.attr('boolean', { defaultValue: false })
  quest: DS.belongsTo('quest')

`export default model`
