function deleteData() {
  var ss = SpreadsheetApp.getActive();
  ss.getRange('A4:H').activate();
  ss.getActiveSheet().deleteRows(ss.getActiveRange().getRow(), ss.getActiveRange().getNumRows());
};
