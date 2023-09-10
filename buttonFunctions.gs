function startButton(ss, buttonSS, sheetTimer, time) {
  var sheetTimer = ss.getSheetByName('Timer');
  buttonSS.setBackground("#ff0100")
  buttonSS.setFontColor("red")
  sheetTimer.insertRowsAfter(3,1)
  sheetTimer.getRange(4,3).setValue(time)
  sheetTimer.getRange(4,2).setValue(time)
  formatCells(ss);
  formatCellDate(ss);
  formatCommentCell(ss);
  copyDropDown(ss);
}

function stopButton(ss, buttonSS, sheetTimer, time){
  buttonSS.setBackground("#01ff00")
  buttonSS.setFontColor("#00ff00")
  sheetTimer.getRange(4,4).setValue(time)
  sheetTimer.getRange(4,5).setFormula("D4-C4")
  var e4 = sheetTimer.getRange("E4")
  var e4Value = e4.getValue()
  var configSheet = ss.getSheetByName('Config')
  var configSheetA2 = configSheet.getRange("A2")
  var configSheetA2Value = configSheetA2.getValue()
        
  if (e4Value > configSheetA2Value){
    dropDownChange(ss)
  }

  calculateSuccessfulPercentage(ss, 'Timer!F4:F', 'F2')
  duration = calculateAverageDuration(ss, 'Timer!E4:E')
  ss.getRange('G2').activate();
  ss.getCurrentCell().setValue(duration);
}

function exportButton(ss, sheetTimer){
  var buttonExport = sheetTimer.getRange(2,3)
  buttonExport.setBackground("#674ea7")
  buttonExport.setFontColor("#b3a7d4")
  
  copyData(ss, 'All Data');
  allDataFormating(ss, 'All Data');
  sheetTimer.getRange('C2').activate();
  sheetTimer.getCurrentCell().setValue('FALSE')
  buttonExport.setBackground("#b3a7d4")
  buttonExport.setFontColor("#b3a7d3")
}

function exportClearButton(ss, sheetTimer){
  var buttonClear = sheetTimer.getRange(2,5)
  buttonClear.setBackground("#cc0000")
  buttonClear.setFontColor("#f4cccc")
  copyData(ss,'All Data');
  allDataFormating(ss, 'All Data')
  sheetTimer.getRange('E2').activate();
  ss.getCurrentCell().setValue('FALSE');
  
  buttonClear.setBackground("#f4cccc")
  buttonClear.setFontColor("#cc0000")
  
  deleteData(ss);
  sheetTimer.getRange('E2').activate();
  ss.getCurrentCell().setValue('FALSE');
}

function dataUpdateButton(ss){
  
}
