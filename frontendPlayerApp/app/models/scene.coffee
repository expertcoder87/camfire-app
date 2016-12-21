`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  imageUrl: DS.attr('string')

`export default model`
