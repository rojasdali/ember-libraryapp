import DS from 'ember-data';
import { match, gte, and, not } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isMsgLongEnough: gte("message.length", 5),
  isValid: match('email', /^.+@.+\..+$/),
  isDisabled: and("isMsgLongEnough", "isValid"),
  isNotDisabled: not('isDisabled'),
});
