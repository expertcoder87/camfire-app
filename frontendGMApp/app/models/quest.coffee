`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  isCompleted: DS.attr('boolean', { defaultValue: false })

`export default model`
