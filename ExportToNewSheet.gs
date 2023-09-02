function date(){
  var date = Utilities.formatDate(new Date(),"GMT-5", "MM-dd-yyyy")
  return date;
};

function copyTitle() {
  var ss = SpreadsheetApp.getActive();
  ss.setActiveSheet(ss.getSheetByName(date()), true);
  ss.getRange('Sheet1!A3:G3').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
};


function copyData(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('A2').activate();
  ss.setActiveSheet(ss.getSheetByName(date()), true);
  ss.getRange('Sheet1!A4:G15').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
};

function createNewSheet(){
  var sheet = SpreadsheetApp.getActive().insertSheet();
  sheet.setName(date());
  copyTitle();
  copyData();
};