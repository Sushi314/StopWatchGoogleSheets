function formatedCurrentDate(){
  var date = Utilities.formatDate(new Date(),"GMT-5", "MM-dd-yyyy")
  return date;
};

function formatCells(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('A4:F4').activate();
  ss.getActiveRangeList()
  .setFontSize(10)
  .setFontWeight(null)
  .setHorizontalAlignment('center')
  .setVerticalAlignment('top');
};

function formatCommentCell(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('G4').activate();
  ss.getActiveRangeList()
  .setFontSize(10)
  .setFontWeight(null)
  .setHorizontalAlignment('left')
  .setVerticalAlignment('top')
  .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
};

function formatCellDate(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('B4').activate();
  ss.getActiveRangeList().setNumberFormat('M/d/yyyy');
  ss.getRange('C4:E4').activate();
  ss.getActiveRangeList().setNumberFormat('h":"mm":"ss');
  
}

function allDataFormating(sheetName){
  var ss = SpreadsheetApp.getActive();
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