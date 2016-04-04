import Ember from 'ember';

export default Ember.Component.extend({

  waitTime: Ember.computed('ticket.timestamp', function() {
    var currentTime = new Date();
    var ticketTime = new Date(this.get('ticket.timestamp')) ;
    var waitTime = currentTime - ticketTime;
    console.log("Current Time:", currentTime);
    console.log("Ticket Time:", ticketTime);
    console.log("Computed Wait:", waitTime/1000);
    if(waitTime/60000/60/24 > 1) {
      return "Invalid Datestamp, please resubmit"
    } 
    return parseInt(waitTime/60000);
  }),

  actions: {
    delete(ticket) {
      if(confirm("Do you want to delete this ticket?")) {
        this.sendAction('destroyTicket', ticket);
      }
    }
  }
});
