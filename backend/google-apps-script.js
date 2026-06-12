const SHEET_NAME = "wishes";

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActive();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(["date", "name", "coming", "withWhom", "count", "wish"]);
  }
  return sheet;
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function listGuests() {
  const sheet = getSheet();
  const rows = sheet.getDataRange().getValues().slice(1);
  const guests = rows
    .filter((row) => row.some(Boolean))
    .map((row) => ({
      date: row[0] || "",
      name: row[1] || "",
      coming: row[2] || "",
      withWhom: row[3] || "",
      count: row[4] || "",
      wish: row[5] || ""
    }))
    .reverse();
  return json({ guests });
}

function doGet() {
  return listGuests();
}

function doPost(event) {
  const payload = JSON.parse(event.postData.contents || "{}");
  const sheet = getSheet();

  if (payload.action === "clear") {
    sheet.clear();
    sheet.appendRow(["date", "name", "coming", "withWhom", "count", "wish"]);
    return json({ ok: true });
  }

  const guest = payload.guest || {};
  sheet.appendRow([
    guest.date || new Date().toLocaleString("kk-KZ"),
    guest.name || "",
    guest.coming || "",
    guest.withWhom || "",
    guest.count || "",
    guest.wish || ""
  ]);
  return json({ ok: true });
}
