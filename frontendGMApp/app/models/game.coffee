`import DS from "ember-data"`
`import { validator, buildValidations } from "ember-cp-validations"`

Validations = buildValidations
  startingXp: [validator('presence', {
      presence: true,
      description: 'Starting Xp:'
    }), validator('number', {
    allowString: true,
    positive: true, description: "Starting Xp"})]

model = DS.Model.extend(Validations, {
  worldName: DS.attr('string')
  description: DS.attr('string')
  startingXp: DS.attr('string')
  useFudgePoints: DS.attr('string')
  imageUrl: DS.attr('string')
  characters: DS.hasMany('character')
  currentUserCharacterId: DS.attr('number')
  things: DS.hasMany('thing')
  sharedToMarket: DS.attr('boolean')
  skills: DS.hasMany('skill')
  stories: DS.hasMany('story')
  gameAttributes: DS.hasMany('attribute')
  invitations: DS.hasMany('invitation')
  canBeShared: DS.attr('boolean')
  gm: DS.belongsTo('user')
  createdBy: DS.belongsTo('user')
  parent: DS.belongsTo('game')
  })


`export default model`
