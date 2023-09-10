function calculateSuccessfulPercentage(ss, sheetNameColumnRange, writeToField){
  var range = ss.getRange(sheetNameColumnRange);
  var rowCount = range.getLastRow() - 3;

  // Count the number of "Successful" entries in column F
  var successfulCount = 0;
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === 'Successful') {
      successfulCount++;
    }
  }
  var successPercentage = (successfulCount / rowCount);
  ss.getRange(writeToField).activate();
  ss.getCurrentCell().setValue(successPercentage);

}

function calculateAverageDuration(ss, sheetNameColumnRange) {
  var range = ss.getRange(sheetNameColumnRange);
  var values = range.getValues();
  
  var totalSeconds = 0;
  
  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];
    
    // Extract the time portion from the cell value
    var timeValue = Utilities.formatDate(cellValue, ss.getSpreadsheetTimeZone(), 'HH:mm:ss');
    
    var timeParts = timeValue.split(":");
    
    // Extract hours, minutes, and seconds
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);
    
    // Convert the time to total seconds and add to the total
    totalSeconds += (hours * 3600) + (minutes * 60) + seconds;
  }
  
  var averageSeconds = totalSeconds / values.length;
  
  var averageHours = Math.floor(averageSeconds / 3600);
  var averageMinutes = Math.floor((averageSeconds % 3600) / 60);
  var averageSeconds = Math.floor(averageSeconds % 60);
  
  return averageHours + ":" + (averageMinutes < 10 ? "0" : "") + averageMinutes + ":" + (averageSeconds < 10 ? "0" : "") + averageSeconds;
}

