function onEdit(e) {
  var sheet = e.source.getActiveSheet()
  var sheetName = sheet.getName()
  var time = new Date()
  var ss = SpreadsheetApp.getActive();
  var sheetTimer = ss.getSheetByName('Timer');

  var editRow = e.range.getRow()
  var editColumn = e.range.getColumn()

  var buttonExport = sheetTimer.getRange(2,3)
  var buttonClear = sheetTimer.getRange(2,5)

  if(sheetName == "Timer" && editRow == 2 && editColumn == 1){
    var buttonSS = sheetTimer.getRange(2,1)
    var a1 = sheetTimer.getRange("A1")
    var a1Value = a1.getValue()

    if(a1Value == "START"){
      a1.setValue("STOP")
      buttonSS.setBackground("#ff0100")
      buttonSS.setFontColor("red")
      sheetTimer.insertRowsAfter(3,1)
      sheetTimer.getRange(4,3).setValue(time)
      sheetTimer.getRange(4,2).setValue(time)
      formatCells();
      formatCellDate();
      formatCommentCell();
      copyDropDown();
    }

    if(a1Value == "STOP"){
      a1.setValue("START")
      buttonSS.setBackground("#01ff00")
      buttonSS.setFontColor("#00ff00")
      sheetTimer.getRange(4,4).setValue(time)
      sheetTimer.getRange(4,5).setFormula("D4-C4")

      var e4 = sheetTimer.getRange("E4")
      var e4Value = e4.getValue()
      var configSheet = ss.getSheetByName('Config')
      var configSheetB2 = configSheet.getRange("B2")
      var configSheetB2Value = configSheetB2.getValue()
      
      if (sheetName == "Timer" && e4Value > configSheetB2Value){
        ss.getRange('F4').activate();
        ss.getCurrentCell().setValue('Successful');
      }
    }
  }

  if (sheetName == "Timer" && editRow == 2 && editColumn == 3){
    buttonExport.setBackground("#674ea7")
    buttonExport.setFontColor("#b3a7d4")
    
    copyData('All Data');
    allDataFormating('All Data');
    sheetTimer.getRange('C2').activate();
    sheetTimer.getCurrentCell().setValue('FALSE');

    buttonExport.setBackground("#b3a7d4")
    buttonExport.setFontColor("#b3a7d3")
  }

  if (sheetName == "Timer" && editRow == 2 && editColumn == 5){
    buttonClear.setBackground("#cc0000")
    buttonClear.setFontColor("#f4cccc")

    copyData('All Data');
    allDataFormating('All Data');

    sheetTimer.getRange('E2').activate();
    ss.getCurrentCell().setValue('FALSE');
    
    buttonClear.setBackground("#f4cccc")
    buttonClear.setFontColor("#cc0000")
    
    deleteData();
    sheetTimer.getRange('E2').activate();
    ss.getCurrentCell().setValue('FALSE');
  }


}


