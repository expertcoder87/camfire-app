`import Ember from "ember"`

route = Ember.Route.extend

	beforeModel:->
		@_super.apply this, arguments
		if @get('session.user')
			@transitionTo('games.index')


`export default route`
