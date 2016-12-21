`import DS from "ember-data"`

model = DS.Model.extend

  thing: DS.belongsTo('thing')
  inventory: DS.belongsTo('inventory')
  quantity: DS.attr('number')

`export default model`
