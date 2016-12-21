`import DS from "ember-data"`

model = DS.Model.extend
  name: DS.attr('string')
  game: DS.belongsTo('game')

`export default model`
