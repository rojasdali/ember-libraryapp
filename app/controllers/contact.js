import Controller from '@ember/controller';
import { match, not, and, gte } from '@ember/object/computed';

export default Controller.extend({

    headerMessage: 'Contact',
    emailAddress: '',
    message: '',
    isMsgLongEnough: gte("message.length", 5),
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: and("isMsgLongEnough", "isValid"),
    isNotDisabled: not('isDisabled'),

   actions: {

    sendMessage() {
      alert(`Your message ${this.get('message')} from ${this.get('emailAddress')} will be sent to us now`);
      this.set('responseMessage', `Thank you for your message! We will get back to ${this.get('emailAddress')} shortly.`);
      this.set('emailAddress', '');
    }
  }

});
