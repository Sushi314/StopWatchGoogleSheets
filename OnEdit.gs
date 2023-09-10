function onEdit(e) {
  var ss = SpreadsheetApp.getActive();
  var sheet = e.source.getActiveSheet()
  var sheetName = sheet.getName()
  var editRow = e.range.getRow()
  var editColumn = e.range.getColumn()


  if (sheetName == "Timer"){
    var sheetTimer = ss.getSheetByName('Timer');

    // Start Stop buttons
    if(editRow == 2 && editColumn == 1){
      var time = new Date()
      var buttonSS = sheetTimer.getRange(2,1)
      
      var a1 = sheetTimer.getRange("A1")
      var a1Value = a1.getValue()

      // When start is clicked
      if(a1Value == "START"){
        a1.setValue("STOP")
        startButton(ss, buttonSS, sheetTimer, time)
      }

      // When stop is clicked
      if(a1Value == "STOP"){
        a1.setValue("START")
        stopButton(ss, buttonSS, sheetTimer, time)
      }
    }


    //Export button
    if (editRow == 2 && editColumn == 3){
      exportButton(ss, sheetTimer)
    }
    //Export and clear
    if (editRow == 2 && editColumn == 5){
      exportClearButton(ss, sheetTimer)
    }
  }

  if (sheetName == "Data Totals"){
    var thisT = ss.getRange('Timer!C4');
    var test = thisT.getValue()
    Logger.log(test)
  }

}
