function formatCells(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('B4:F4').activate();
  ss.getActiveRangeList()
  .setFontSize(10)
  .setFontWeight(null)
  .setHorizontalAlignment('center')
  .setVerticalAlignment('top');
};

function formatCellDate(){
  var ss = SpreadsheetApp.getActive();
  ss.getRange('B4').activate();
  ss.getActiveRangeList().setNumberFormat('M/d/yyyy');
  ss.getRange('C4:E4').activate();
  ss.getActiveRangeList().setNumberFormat('h":"mm":"ss');

}

function copyDropDown() {
  var ss = SpreadsheetApp.getActive();
  ss.getRange('A4').activate();
  ss.getRange('A3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  ss.getRange('F4').activate();
  ss.getRange('F3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  
};

function onEdit(e) {
  var sheet = e.source.getActiveSheet()
  var sheetName = sheet.getName()
  var time = new Date()
  var ss = SpreadsheetApp.getActive();
  var sheetOne = ss.getSheetByName('Sheet1');

  var editRow = e.range.getRow()
  var editColumn = e.range.getColumn()

  var buttonExport =sheetOne.getRange(2,3)
  var buttonClear = sheetOne.getRange(2,5)

  if(sheetName == "Sheet1" && editRow == 2 && editColumn == 1){
    var buttonSS = sheetOne.getRange(2,1)
    var a1 = sheetOne.getRange("A1")
    var a1Value = a1.getValue()

    if(a1Value == "START"){
      a1.setValue("STOP")
      buttonSS.setBackground("#ff0100")
      buttonSS.setFontColor("red")
      sheetOne.insertRowsAfter(3,1)
      sheetOne.getRange(4,3).setValue(time)
      sheetOne.getRange(4,2).setValue(time)
      formatCells();
      formatCellDate();
    }

    if(a1Value == "STOP"){
      a1.setValue("START")
      buttonSS.setBackground("#01ff00")
      buttonSS.setFontColor("#00ff00")
      sheetOne.getRange(4,4).setValue(time)
      sheetOne.getRange(4,5).setFormula("D4-C4")
    }
  }

  if (sheetName == "Sheet1" && editRow == 2 && editColumn == 3){
    buttonExport.setBackground("#674ea7")
    buttonExport.setFontColor("#b3a7d4")
    createNewSheet();
    sheetOne.getRange('C2').activate();
    sheetOne.getCurrentCell().setValue('FALSE');
    buttonExport.setBackground("#b3a7d4")
    buttonExport.setFontColor("#b3a7d3")
  }

  if (sheetName == "Sheet1" && editRow == 2 && editColumn == 5){
    buttonClear.setBackground("#cc0000")
    buttonClear.setFontColor("#f4cccc")
    createNewSheet();
    sheetOne.getRange('E2').activate();
    ss.getCurrentCell().setValue('FALSE');
    buttonClear.setBackground("#f4cccc")
    buttonClear.setFontColor("#cc0000")
    
    deleteData();
    sheetOne.getRange('E2').activate();
    ss.getCurrentCell().setValue('FALSE');
  }

}



