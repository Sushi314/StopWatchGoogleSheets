function copyTitle(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  ss.setActiveSheet(sheet, true);
  ss.getRange('A1').activate();
  ss.getRange('Timer!A3:G3').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
};

function copyData(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = ss.getSheetByName(sheetName);

  if (targetSheet) {
    var timerSheet = ss.getSheetByName('Timer');
    var timerData = timerSheet.getRange('A4:G' + timerSheet.getLastRow()).getValues();
    
    var targetData = targetSheet.getRange('A2:G' + targetSheet.getLastRow()).getValues();

    // Iterate through each row in 'Timer!A4:G'
    for (var i = 0; i < timerData.length; i++) {
      var rowExists = false;

      // Check if the current row from 'Timer!A4:G' already exists in 'All Data'
      for (var j = 0; j < targetData.length; j++) {
        if (JSON.stringify(timerData[i]) === JSON.stringify(targetData[j])) {
          rowExists = true;
          break;
        }
      }

      if (!rowExists) {
        // Data doesn't exist in 'All Data', so copy it
        targetSheet.appendRow(timerData[i]);
      }
    }
  } else {
    Logger.log("Sheet '" + sheetName + "' not found.");
  }
}




function copyDropDown() {
  var ss = SpreadsheetApp.getActive();
  ss.setActiveSheet(ss.getSheetByName('Timer'), true);
  ss.getRange('A4').activate();
  ss.getRange('Config!A1').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  ss.setActiveSheet(ss.getSheetByName('Timer'), true);
  ss.getRange('F4').activate();
  ss.getRange('Config!B1').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false); 
};

function createNewSheet(newSheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.insertSheet(newSheetName);
};