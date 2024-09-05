function doPost(e) {
    const files = e.files;

    if (files && files['document']) {
        const fileBlob = files['document'][0];
        const pdfFile = DriveApp.createFile(fileBlob);
        const pdfUrl = pdfFile.getUrl();
        Logger.log("PDF Uploaded: " + pdfUrl);
        return ContentService.createTextOutput("PDF Uploaded successfully! URL: " + pdfUrl).setMimeType(ContentService.MimeType.TEXT);
    } else {
        return ContentService.createTextOutput("No file uploaded.").setMimeType(ContentService.MimeType.TEXT);
    }
}