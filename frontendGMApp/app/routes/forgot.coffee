`import Ember from "ember"`

route = Ember.Route.extend(
  	beforeModel: ->
  		if @get('session.user')
  			@transitionTo('games')
)


`export default route`
