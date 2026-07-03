import htmlPdf from 'html-pdf-node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const htmlPath = path.join(__dirname, '../public/resume.html');
const outputPath = path.join(__dirname, '../public/resume.pdf');

console.log('📄 Generating PDF from HTML resume...');

// Read HTML file
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// PDF options
const options = {
  format: 'A4',
  printBackground: true,
  margin: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  },
  preferCSSPageSize: true
};

const file = { content: htmlContent };

// Generate PDF
htmlPdf.generatePdf(file, options).then(pdfBuffer => {
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log('✅ PDF generated successfully at:', outputPath);
  console.log('📦 File size:', (pdfBuffer.length / 1024).toFixed(2), 'KB');
}).catch(error => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});
