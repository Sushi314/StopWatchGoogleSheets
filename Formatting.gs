function dropDownChange(ss) {
  ss.getRange('F4').activate();
  ss.getCurrentCell().setValue('Successful');
  ss.getRange('G4').activate();
  ss.getCurrentCell().setValue('Trial Ended');
};

function formatedCurrentDate(){
  var date = Utilities.formatDate(new Date(),ss.getSpreadsheetTimeZone(), "MM-dd-yyyy")
  return date;
};

function formatCells(ss){
  ss.getRange('A4:H4').activate();
  ss.getActiveSheet().setRowHeight(4, 21);
  ss.getActiveRangeList()
  .setFontSize(10)
  .setFontWeight(null)
  .setHorizontalAlignment('center')
  .setVerticalAlignment('top');
};

function formatCommentCell(ss){
  ss.getRange('I4').activate();
  ss.getActiveRangeList()
  .setFontSize(10)
  .setFontWeight(null)
  .setHorizontalAlignment('left')
  .setVerticalAlignment('top')
  .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
};

function formatCellDate(ss){
  ss.getRange('B4').activate();
  ss.getActiveRangeList().setNumberFormat('M/d/yyyy');
  ss.getRange('C4:E4').activate();
  ss.getActiveRangeList().setNumberFormat('h":"mm":"ss');
  
}

function allDataFormating(ss, sheetName){
  var targetSheet = ss.setActiveSheet(ss.getSheetByName(sheetName), true);

  if (targetSheet){
    ss.getRange('C2:D').activate();
    ss.getActiveRangeList().setNumberFormat('h":"mm":"ss');
    ss.getRange('E2:E').activate();
    ss.getActiveRangeList().setNumberFormat('[h]:mm:ss');
    ss.getRange('B2:B').activate();
    ss.getActiveRangeList().setNumberFormat('M/d/yyyy');

  } else {
    Logger.log("Funtion allDataFormating: Sheet '" + sheetName + "' not found.");
  }
}
