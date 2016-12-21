`import Ember from 'ember'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`


controller = Ember.Controller.extend

  valilLevels: ['Terrible', 'Poor', 'Mediocre', 'Fair', 'Good', 'Great', 'Superb']  

  actions:

    decreaseLevel: ()->
      unless @get('model.level') == 'Terrible'
        nextLevel = @valilLevels.indexOf(@get('model.level')) - 1
        @set('model.level', @valilLevels[nextLevel])
        data = {level: @valilLevels[nextLevel]}
        type =  'PUT'
        url = constants.HOST + "/actions/" + @get('model.id')
        dataType =  'json'
        data =  data
        hash =
          dataType: dataType
          data: data
        request = ajax(url, type, hash, @)

        request.fail (jqXHR, textStatus, e) ->
          console.log 'Error Occurred' + e

    increaseLevel: ()->
      unless @get('model.level') == 'Superb'
        nextLevel = @valilLevels.indexOf(@get('model.level')) + 1
        @set('model.level', @valilLevels[nextLevel])
        data = {level: @valilLevels[nextLevel]}
        type =  'PUT'
        url = constants.HOST + "/actions/" + @get('model.id')
        dataType =  'json'
        data =  data
        hash =
          dataType: dataType
          data: data
        request = ajax(url, type, hash, @)
          
        request.fail (jqXHR, textStatus, e) ->
          console.log 'Error Occurred' + e

    closeActionDetails: ()->
      @replaceRoute "character.actions"

`export default controller`
