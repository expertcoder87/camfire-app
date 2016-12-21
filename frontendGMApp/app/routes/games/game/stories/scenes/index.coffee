`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend
  setupController: (controller, model) ->
    @_super(controller, model)
    controller.set('scenes',model.scenes)
    controller.set('story',model.story)


  model: (params)->
    Ember.RSVP.hash(
      story: @store.findRecord('story', @paramsFor('games.game.stories.scenes').story_id)
      scenes: @store.query('scene', {story_id: @paramsFor('games.game.stories.scenes').story_id})
      )

`export default route`
