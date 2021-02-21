function processRequest(userID) {
    var rangeValues = requestRange();
    var count = 0;
    var keyboard = [];
  
    for (i = 0; i < requestLastRow() - 1; i++) {
      var req = requestInfo(rangeValues[i][0])
      var user = userInfo(rangeValues[i][3]);
      var name = user.name;
    
      if (req.userId !== userID && req.status === "Available") {
          keyboard[count] = [
              {
                text: req.status + " (" + req.credits + " cr) " 
                + name + '\n '+ req.time.slice(0, -2),
                callback_data: 'take_request-' + i,
              },
          ];
          count++;
      }
    }
    if (count === 0) {
      return false;
    } else {
      return {inline_keyboard: keyboard};
    }
}
              
function takeRequest(userID, data) {
    var rangeValues = requestRange();

    var data_arr = data.split('-');
    var refId = parseInt(data_arr[1]) + 1;
    var refCategory = parseInt(data_arr[2]) + 1;
    var refCredits = parseInt(data_arr[3]) + 1;
    var refRemark = parseInt(data_arr[8]) + 1;
    var requestor_id = rangeValues[refId - 1][3];
    var requestor = userInfo(requestor_id);

    setRequestStatus(refId, "Taken");
    setRequestSlave(refId, userID);

    var slave = userInfo(userID);
    text = slave_update = "Request taken";
    var str = "Request taken by " + slave.name + " from " + slave.room;

    sendText(userID, text);
    text = 'Request made by ' + requestor.tele_handle + ' (' + requestor.room + ') : ' + refCategory + ' \n' + refCredits + ' credit(s)' +'\nRef number: ' + refId + '\nRemark: ' + refRemark;
    sendText(requestor_id, str);
}
