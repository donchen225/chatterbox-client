var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  // to display all of the messages
  render: function(messages) {
    console.log(Array.isArray(messages));
    // create a var to store our API call array, the messages

    // iterate over all of the message object
    // for (var i = 0; i < messages.length; i++) {
    //   // add messages and username into chats div
    //   this.$chats.append(MessageView.render(messages[i]));
    // }
  },
  // to render a message
  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};