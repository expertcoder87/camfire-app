`import DS from "ember-data"`

model = DS.Model.extend

  name: DS.attr('string')
  character: DS.belongsTo('character')
  inventoryItems: DS.hasMany('inventory-item')
  capacity: DS.attr('number')
  currentCapacity: DS.attr('number')

`export default model`
