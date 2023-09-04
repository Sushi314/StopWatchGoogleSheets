function deleteData() {
  var ss = SpreadsheetApp.getActive();
  ss.getRange('A4:G').activate();
  ss.getActiveSheet().deleteRows(ss.getActiveRange().getRow(), ss.getActiveRange().getNumRows());
};
