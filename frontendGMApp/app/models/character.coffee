`import DS from "ember-data"`
`import { validator, buildValidations } from "ember-cp-validations"`


Validations = buildValidations

  name: [validator('unique-charactername'),
         validator('presence', {presence:true, description:'Name'}),
         validator('format', {type:'string'})]

  characterType: validator('presence', {presence:true, description:'Character Type'}),

  description: validator('presence', {presence:true, description:'Description'}),

  xp: [validator('presence', {
        presence: true,
        description: 'XP'
      }), validator('number', {
      allowString: true,
      lt:100,
      positive: true, description: 'XP'})]

  fp: [validator('presence', {
        presence: true,
        description: 'FP'
      }), validator('number', {
      allowString: true,
      lt:100,
      positive: true, description: 'FP'})]

  availableCurrencyAmmount: [validator('presence', {
        presence: true,
        description: 'Currency'
      }), validator('number', {
      allowString: true,
      lt:10000,
      positive: true, description: 'Currency'})]

  armourCapValue: [validator('presence',{
      presence: true,
      description: 'Armour Limit:'
    }), validator('number', {
    allowString: true,
    lt:100,
    positive: true, description: "Armour"})]

  armourCurrentValue: [validator('presence',{
      presence: true,
      description: ' Current Value:'
    }), validator('number', {
    allowString: true,
    lte:Ember.computed.readOnly('model.armourCapValue'),
    positive: true, description: "Armour Current"})]

  hpCapValue: [validator('presence',{
      presence: true,
      description: 'Health Limit:'
    }), validator('number', {
    allowString: true,
    lt:100,
    positive: true, description: "Health"})]

  hpCurrentValue: [validator('presence',{
      presence: true,
      description: 'Health Current Value:'
    }), validator('number', {
    allowString: true,
    lte:Ember.computed.readOnly('model.hpCapValue'),
    positive: true, description: "Current Health"})]

model = DS.Model.extend(Validations, {

  name: DS.attr('string')
  description: DS.attr('string')
  imageUrl: DS.attr('string')
  game: DS.belongsTo('game')
  inventories: DS.hasMany('inventory')
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
  characterType: DS.attr('string')
  actions: DS.hasMany('action')})

`export default model`
