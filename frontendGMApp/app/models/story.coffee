`import DS from "ember-data"`
`import Ember from "ember"`
`import { validator, buildValidations } from "ember-cp-validations"`

Validations = buildValidations
  title: [validator('presence', {presence:true, description:'Title'}),
        validator('format', {type:'string'})]
  publicDescription: validator('presence', {presence:true, description:'Public Description'})
  secretGmOverview: validator('presence', {presence:true, description:'Secret GM Overview'})

model = DS.Model.extend(Validations, {

  title: DS.attr('string')
  publicDescription: DS.attr('string')
  secretGmOverview: DS.attr('string')
  shareToPlayers: DS.attr('boolean')
  game: DS.belongsTo('game')
})

`export default model`
