`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:

    openSkill: (skill)->
      @transitionToRoute "games.game.skills.skill", skill.id

    goBack: ()->
      @transitionToRoute "games.index"

    createSkill:()->
      @transitionToRoute "games.game.createskill"

`export default controller`
