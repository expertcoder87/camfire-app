`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  secretStoryDetails: DS.attr('string')
  shareImage: DS.attr('boolean')
  story: DS.belongsTo('story')
  imageUrl: DS.attr('string')
  sharedNow: DS.attr('boolean')


`export default model`
