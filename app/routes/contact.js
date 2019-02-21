import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('contact');
      },
    
      actions: {
    
        sendMessage(newContactMessage) {
          newContactMessage.save().then(() => {
              this.controller.set('responseMessage', true)
              this.set('email', '');
              this.set('message', '');
          })
        },
    
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
          }
      }
});
