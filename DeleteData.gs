function deleteData() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('4:4').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
};