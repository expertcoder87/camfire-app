`import Ember from 'ember'`
`import config from '../config/environment'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`

controller = Ember.Controller.extend
  appController: Ember.inject.controller('application')
  downloading: false
  notify: Ember.inject.service('notify')

  actions:
   downloadGame: (game) ->
    @get('appController').set('loading',true)
    url=config.APP.HOST + '/api/gm/games/download_game/'
    type = 'PATCH'
    hash =
      data:
        id: game.id
      success: (responseJSON) ->
        @get('appController').set('loading',false);
        if responseJSON.game
          msg = "'#{responseJSON.game.world_name}' downloaded successfully."
          @get('notify').success msg
          @transitionToRoute '/'
        else
          @get('notify').alert "Sorry ,Can't Download game"

      error: (jqXhr) ->
        msg = jqXhr.responseJSON.message or 'Could not Download game.'
        @set('downloading' ,false)
        @get('notify').success msg
    if !@get('fastboot.isFastBoot')
      ajax url, type, hash, this


`export default controller`
