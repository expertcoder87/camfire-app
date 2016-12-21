`import DS from "ember-data"`

model = DS.Model.extend

  world_name: DS.attr('string')
  description: DS.attr('string')
  startingXp: DS.attr('string')
  useFudgePoints: DS.attr('string')
  imageUrl: DS.attr('string')
  characters: DS.hasMany('character')
  currentUserCharacterId: DS.attr('number')

`export default model`
