function deleteData(ss) {
  ss.getRange('A4:I').activate();
  ss.getActiveSheet().deleteRows(ss.getActiveRange().getRow(), ss.getActiveRange().getNumRows());
};
