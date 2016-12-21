`import DS from "ember-data"`
`import Ember from "ember"`
`import { validator, buildValidations } from "ember-cp-validations"`


Validations = buildValidations
  email: [ validator('presence', true),
           validator('format', { type: 'email' })]

model = DS.Model.extend(Validations, {

  email: DS.attr("string")
  status: DS.attr("string")
  game: DS.belongsTo("game")})
`export default model`
