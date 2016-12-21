`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  description: DS.attr('string')
  armourCurrentValue: DS.attr('number')
  armourCapValue: DS.attr('number')
  offensiveFactor: DS.attr('number')
  encumbrance: DS.attr('number')
  game: DS.belongsTo('game')

`export default model`
