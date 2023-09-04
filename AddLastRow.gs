function addLastRow(targetSheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = ss.getSheetByName(targetSheetName);

  if (targetSheet) {
    var lastRow = targetSheet.getLastRow();
    targetSheet.insertRowAfter(lastRow);
    return lastRow + 1;
  } else {
    Logger.log("function addLastRow: Sheet '" + targetSheetName + "' not found.");
    return null;
  }
}