const puppeteer = require("puppeteer");

async function generatePDF(htmlContent, outputPath) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set the content to the page
  await page.setContent(htmlContent);

  // Generate PDF
  await page.pdf({ path: outputPath, format: "A4" });

  await browser.close();
  console.log("PDF generated successfully!");
  return htmlContent;
}

module.exports = generatePDF;
