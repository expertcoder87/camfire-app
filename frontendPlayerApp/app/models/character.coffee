`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  description: DS.attr('string')
  imageUrl: DS.attr('string')
  game: DS.belongsTo('game')
  inventories: DS.hasMany('inventory')
  quests: DS.hasMany('quest')
  armourCapValue: DS.attr('number')
  armourCurrentValue: DS.attr('number')
  hpCapValue: DS.attr('number')
  hpCurrentValue: DS.attr('number')
  xp: DS.attr('number')
  fp: DS.attr('number')
  currency: DS.attr('number')
  availableCurrencyAmmount: DS.attr('number')
  gifts: DS.attr('string')
  faults: DS.attr('string')
  user: DS.belongsTo('user')
  
`export default model`
