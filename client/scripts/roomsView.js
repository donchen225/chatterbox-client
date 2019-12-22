var RoomsView = {

  $button: $('#rooms button'),
  $select: $('select'),

  initialize: function() {
  },

  // this would render the view of the rooms
  render: function() {
  },

  renderRoom: function(roomName) {
    Rooms.roomname = roomName;
    this.$select.append(`<option> ${Rooms.roomname} </option>`);
  }

};