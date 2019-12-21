var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  // to display all of the messages
  render: function(messages) {
    // create a var to store our API call array, the messages
    // console.trace('messagesView', messages);
    // iterate over all of the message object
    for (var i = 0; i < messages.results.length; i++) {
      // add messages and username into chats div

      this.$chats.append(MessageView.render(messages.results[i]));
    }
  },
  // to render a message
  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};