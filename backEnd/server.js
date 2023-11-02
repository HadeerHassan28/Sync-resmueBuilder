const PORT = 5001;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const puppeteer = require("puppeteer");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//! get:
app.get("/template.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "template.js"));
});
//!Post:

app.post("/generatePdf", async (req, res) => {
  try {
    const formData = req.body.formData; // Access formData directly from req.body
    const htmlContent = req.body.htmlContent; // Access htmlContent directly from req.body

    //console.log(formData, htmlContent); //Done

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    await page.waitForSelector(".pdf-content-loaded", { timeout: 30000 });
    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    });

    // console.log(pdfBuffer);
    await browser.close();

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=generated-pdf.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
