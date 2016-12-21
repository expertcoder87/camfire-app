import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

const UniqueCharactername = BaseValidator.extend({
  store: Ember.inject.service(),

  validate(value, options, model, attribute) {
    return this.get('store').query('character', {name:value, game_id: model.get('game.id')}).then((characters) => {
      if(characters.toArray().length) {
        let message = "Character Name already exists.";
        return message;
      } else {
        return true;
      }
    });
  }
});

export default UniqueCharactername;
