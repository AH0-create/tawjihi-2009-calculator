function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('النتائج')
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet('النتائج');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'التاريخ والوقت',
        'اسم الطالب',
        'رقم الهاتف',
        'الحقل الدراسي',
        'اللغة العربية',
        'اللغة الإنجليزية',
        'التربية الإسلامية',
        'تاريخ الأردن',
        'المجموع من 300',
        'المعدل من 30'
      ]);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.phone || '',
      data.field || '',
      data.arabic || 0,
      data.english || 0,
      data.islamic || 0,
      data.history || 0,
      data.total || 0,
      data.score || 0
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Tawjihi 2009 Calculator API is working')
    .setMimeType(ContentService.MimeType.TEXT);
}