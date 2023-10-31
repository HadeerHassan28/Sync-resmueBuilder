const PORT = 5001;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

const generatePDF = require("./pdfGenerator");
const puppeteer = require("puppeteer");
const { log } = require("console");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//! get:
app.get("/template.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "template.js"));
  console.log(req);
});
//!Post:
app.post("/generatePdf", async (req, res) => {
  try {
    const { formData, htmlContent } = req.body;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({ format: "A4" });

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
