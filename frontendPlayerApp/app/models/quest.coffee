`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  questItems: DS.hasMany('quest-item')

`export default model`
