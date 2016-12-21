`import DS from "ember-data"`

model = DS.Model.extend

  title: DS.attr('string')
  publicDescription: DS.attr('string')
  secretGmOverview: DS.attr('string')
  shareToPlayers: DS.attr('boolean')
  game: DS.belongsTo('game')

`export default model`
