`import DS from "ember-data"`

actionTarget = DS.Model.extend

  actions: DS.hasMany('game-action')

`export default actionTarget`
