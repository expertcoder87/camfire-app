`import DS from "ember-data"`
`import { validator, buildValidations } from "ember-cp-validations"`
`import actionTarget from "frontend-upgrade/models/action-target"`

Validations = buildValidations
  name: [validator('presence', {presence:true, description:'Name'}),
        validator('format', {type:'string'})]
  description: validator('presence', {presence:true, description:'Description'})


model = actionTarget.extend(Validations, {

  name: DS.attr('string')
  description: DS.attr('string')
  game: DS.belongsTo('game')
  context: DS.belongsTo('context')
  targetType: "Skill"})

`export default model`
