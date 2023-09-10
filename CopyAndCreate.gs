function copyTitle(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);
  ss.setActiveSheet(sheet, true);
  ss.getRange('A1').activate();
  ss.getRange('Timer!A3:I3').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
};

function copyData(ss, sheetName) {
  var targetSheet = ss.getSheetByName(sheetName);

  if (targetSheet) {
    var timerSheet = ss.getSheetByName('Timer');
    var timerData = timerSheet.getRange('A4:I' + timerSheet.getLastRow()).getValues();
    
    var targetData = targetSheet.getRange('A2:I' + targetSheet.getLastRow()).getValues();

    // Iterate through each row in 'Timer!A4:I'
    for (var i = 0; i < timerData.length; i++) {
      var rowExists = false;

      // Check if the current row from 'Timer!A4:I' already exists in 'All Data'
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
    Logger.log("Function copyData: Sheet '" + sheetName + "' not found.");
  }
}




function copyDropDown(ss) {
  ss.setActiveSheet(ss.getSheetByName('Timer'), true);
  ss.getRange('A4').activate();
  ss.getRange('Config!B2').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  ss.getRange('F4').activate();
  ss.getRange('Config!C2').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  ss.getRange('G4').activate();
  ss.getRange('Config!D2').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  ss.getRange('H4').activate();
  ss.getRange('Config!E2').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);  
};
