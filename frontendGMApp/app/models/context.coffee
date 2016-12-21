`import DS from "ember-data"`
`import Ember from "ember"`
`import { validator, buildValidations } from "ember-cp-validations"`

Validations = buildValidations
  name: [validator('presence', {presence:true, description:'Name'}),
        validator('format', {type:'string'})]

model = DS.Model.extend(Validations, {

  name: DS.attr('string')
  game: DS.belongsTo('game')
})

`export default model`
