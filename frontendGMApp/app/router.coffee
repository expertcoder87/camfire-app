`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType)

Router.map ->
	@route 'passwordedit', path: '/auth/password/edit'
	@route 'login', path: '/'
	@route 'signup', path: '/signup'
	@route 'forgot', path: '/forgot'
	@route 'marketplace', path: '/marketplace'
	@route 'games', path:'/games', ->
		@route 'game', path: '/:id', ->
			@route 'inviteplayers', path: 'inviteplayers'
			@route 'skills', path: '/skills', ->
				@route 'skill', path: '/:skill_id'
			@route 'attributes', path: '/attributes', ->
				@route 'attribute', path: '/:attribute_id'
			@route 'stories', path: '/stories', ->
				@route 'story', path: '/:story_id', ->
				@route 'scenes', path: '/:story_id/scenes', ->
					@route 'edit', path: '/:scene_id'
				@route 'addscenes', path: ':story_id/addscenes'
			@route 'createskill', path: '/createskill'
			@route 'createattribute', path: '/createattribute'
			@route 'createstory', path: '/createstory'
			@route 'creatething', path: '/creatething'
			@route 'createcharacter', path: '/createcharacter'
			@route 'world', path: '/world'
			@route 'things', path: '/things', ->
				@route 'thing', path: '/:thing_id'
			@route 'characters', path: '/characters', ->
				@route 'createstash', path: '/:character_id/createstash'
				@route 'character', path: '/:character_id', ->
				@route 'actions', path: '/:character_id/actions', ->
					@route 'edit', path: '/:action_id'
				@route 'addactions', path: ':character_id/addactions'
				@route 'inventories', path:'/:character_id/inventories', ->
					@route 'addinventoryitem', path: '/:inventory_id/addinventoryitem'
					@route 'item', path: '/:item_id'
		@route 'creategame', path: '/creategame'

`export default Router`
