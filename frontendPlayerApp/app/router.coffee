`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType)
Router.map ->
  @route 'characters' , path : 'games/:id/characters'
  @route 'character', path: 'characters/:id', ->
        @route 'details'
        @route 'editstats', path: 'editstats'
        @route 'createstash', path: 'createstash'
        @route 'quests', path: 'quests'
        @route 'gmscreen', path: 'gmscreen'
        @route 'actions', path: 'actions', ->
          @route 'edit', path: ':action_id/edit'
        @route 'inventories', path: 'inventories', ->
          @route 'item', path: 'items/:item_id'
  @route 'games', path: '/games'
  @route 'passwordedit', path: '/auth/password/edit'
  @route 'forgot', path: '/forgot'
  @route 'loginmodal', path: '/loginmodal'
  @route 'signup', path: '/signup'

`export default Router`
