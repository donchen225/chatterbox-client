// state
var Rooms = {

  currentRoom: [],

  add: function(roomName) {
    RoomsView.renderRoom(roomName);

    // this.currentRoom.push(`<li> ${Rooms.roomname} </li>`);
  }

};