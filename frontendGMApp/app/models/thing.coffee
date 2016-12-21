`import DS from "ember-data"`
`import Ember from "ember"`
`import { validator, buildValidations } from "ember-cp-validations"`

Validations = buildValidations
  name: [validator('presence', {presence:true, description:'Name'}),
        validator('format', {type:'string'})]
  description: validator('presence', {presence:true, description:'Description'}),
  encumbrance: [validator('presence', {
      presence: true,
      description: 'Encumbrance:'
    }), validator('number', {
    allowString: true,
    positive: true, description: "Encumbrance"})]

  armourCapValue: [validator('presence',{
      presence: true,
      description: 'Armour Limit:'
    }), validator('number', {
    allowString: true,

    positive: true, description: "Armour"})]

  armourCurrentValue: [validator('presence',{
      presence: true,
      description: 'Armour Current Value:'
    }), validator('number', {
    allowString: true,
    lte: Ember.computed.readOnly('model.armourCapValue'),
    positive: true, description: "Armour Current"})]

  offensiveFactor: [validator('presence',{
      presence: true,
      description: 'Offensive factor:'
    }), validator('number', {
    allowString: true,
    positive: true, description: "Offensive Factor"})]


model = DS.Model.extend(Validations, {
  name: DS.attr('string')
  description: DS.attr('string')
  armourCurrentValue: DS.attr('number')
  armourCapValue: DS.attr('number')
  offensiveFactor: DS.attr('number')
  encumbrance: DS.attr('number')
  game: DS.belongsTo('game')
  imageUrl: DS.attr('string')
  inventoryItems: DS.hasMany('inventory-item')})

`export default model`
