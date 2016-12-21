`import Ember from 'ember'`

controller = Ember.Controller.extend

  whichNavOptions: true,
  showSpinner: true,
  navOptions: [["GAMES", "games"], ["MARKETPLACE", "marketplace"]],
  leftSideBarOpen: false,
  loading: false

  actions:
      openGames: ()->
          @transitionToRoute "games"

      changeRoute: (routeName)->
        @transitionToRoute routeName

      toggleMenu: ()->
        @toggleProperty('leftSideBarOpen')

      openGame: ()->
        @toggleProperty('whichNavOptions')

`export default controller`
