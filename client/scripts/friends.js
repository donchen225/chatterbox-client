var Friends = {

  friendsList: [],

  toggleStatus: function(newFriend) {
    console.log(newFriend);
    this.friendsList.push(newFriend);
    console.log(this.friendsList);
  }

};