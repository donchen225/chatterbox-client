var FormView = {

  $form: $('form'),
  $message: $('#message'),
  $rooms: $('#rooms'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$rooms.on('click', function() {
      console.dir(document.getElementById('roomInput').value);
      Rooms.add(document.getElementById('roomInput').value);
    }),
    $('body').on('click', function(event) {
      if (event.target.className === 'username') {
        Friends.toggleStatus(event.target.innerHTML);
        console.log(event.target);
        $(event.target).addClass('friend');
      }
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};