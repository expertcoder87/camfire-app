`import Ember from 'ember'`


controller = Ember.Controller.extend

  buttonDisable: false


  # validateInputs: Ember.observer('apCapEdit', 'hpEdit', 'hpCapEdit', 'apEdit', ()->
  #   if @get('apEdit') <= @get('apCapEdit') and @get('hpEdit') <= @get('hpCapEdit')
  #     $('.md-input-messages-animation').hide();)

  inputIsValid: ()->
    valid = true
    messages = []
    if @get('model.armourCurrentValue') > @get('model.armourCapValue') 
      valid = false
      messages.push("Armour points must be less than the max value.")
    if @get('model.hpCurrentValue') > @get('model.hpCapValue')
      valid = false
      messages.push("Health points must be less than the max value.")
    if @get('model.hpCapValue') > 99 
      valid = false
      messages.push("Health points must be less than 100 .")
    if @get('model.armourCapValue') > 99
      valid = false
      messages.push("Armour points must be less than 100 .")
    if @get('model.availableCurrencyAmmount') > 9999
      valid = false
      messages.push("Currency must be less than 10000 .")
    if @get('model.fp') > 99
      valid = false
      messages.push("Fudge points must be less than 100 .")
    if @get('model.xp') > 99
      valid = false
      messages.push("Experience points must be less than 100 .")
    @set('errorMessages', messages)
    valid

  actions:
    exitEdit: ()->
      @replaceRoute 'character', @get('model')

    saveCharacter: ()->
      if @inputIsValid()
        @get('model').save()
        @replaceRoute 'character', @get('model')

`export default controller`
