`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  navBarName: "Character"

  setupController: (controller, model) ->

    @_super(controller, model)
    @controllerFor('application').set('navBarName', @navBarName)
    @controllerFor('character.index').set('model', model)


  model: (params) ->
    Ember.RSVP.hash(
      character: @store.peekRecord('character', this.paramsFor('character').id),
      equippedInventory: @store.peekRecord('character', this.paramsFor('character').id).get('inventories').then (records) ->
        records.findBy('name', 'Equipped')
      )


`export default route`
