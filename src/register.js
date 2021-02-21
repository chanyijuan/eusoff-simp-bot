function register(userID) {
    var user = userInfo(userID);
    var text = 'failed';
  
    if (Object.getOwnPropertyNames(user).length === 0) {
      text =
        "Welcome to Eusoff Favours Bot. You do not exist in our system yet. Let's change that." +
        '\n\n' +
        '<b> What is your name and room number? </b>';
      sendText(userID, text);
      text =
        'Please input in the format: <b> Name RoomNo @tele_handle </b>, for example: John A101 @johnsmith98';
    } else if (Object.getOwnPropertyNames(user).length != 0 && user.tele_handle == null) {
      text =
        "Something's wrong with your telegram handle. Please update it." +
        "\n\n" +
        "<b> What is your updated Telegram handle? </b>";
        sendText(userID, text);
        text = 
          "Please input in the format: @tele_handle \n" + 
          "eg. @johnsmith2000";
    } else {
      text =
        'Welcome back ' +
        user.name +
        '!!' +
        '\n\n' +
        'Your room number is ' +
        user.room +
        '\n\n' +
        "To view active requests /view \n" + 
        "To delete your current requests /cancel\n" +
        "To mark a request as complete /complete\n" +
        "To make request /make_request\n" + 
        "To take request /take_request\n\n" + 
        "To simp /simp\n" +
        "To view the leaderboards /leaderboard\n" +
        "To view the simp leaderboards /simp_leaderboard\n" + 
        "To subscribe to favour updates /subscribe\n" + 
        "To unsubscribe from updates /unsubscribe\n";
    }
    sendText(userID, text);
}

function addUser(data) {  
    var raw_user_data = data.message.text;
    var user_data_arr = raw_user_data.split(" ");

    var name = user_data_arr[0];
    var room = user_data_arr[1];
    var id = data.message.chat.id;
  
    newUser(id, name, room);
  
    var text =
        'Hello ' +
        name +
        '! You are successfully added to Favours Bot.' +
        '\n\n' +
        'Please check your details.' +
        '\n' +
        'Name: ' +
        name +
        '\n' +
        'Room: ' +
        room +
        '\n\n' +
        "To view active requests /view \n" + 
        "To delete your current requests /cancel\n" +
        "To mark a request as complete /complete\n" +
        "To make request /make_request\n" + 
        "To take request /take_request\n\n" + 
        "To simp /simp\n" +
        "To view the leaderboards /leaderboard\n" +
        "To view the simp leaderboards /simp_leaderboard\n" + 
        "To subscribe to favour updates /subscribe\n" + 
        "To unsubscribe from updates /unsubscribe\n";
  
      sendText(id, text);
}
