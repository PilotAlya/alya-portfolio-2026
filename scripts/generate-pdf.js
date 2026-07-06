import htmlPdf from 'html-pdf-node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function generatePDF(inputFile, outputFile) {
  const htmlPath = path.join(__dirname, '../public', inputFile);
  const outputPath = path.join(__dirname, '../public', outputFile);

  console.log(`📄 Generating ${outputFile}...`);

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const file = { content: htmlContent };

  try {
    const pdfBuffer = await htmlPdf.generatePdf(file, options);
    fs.writeFileSync(outputPath, pdfBuffer);
    console.log(`✅ ${outputFile} generated successfully`);
    console.log(`📦 File size: ${(pdfBuffer.length / 1024).toFixed(2)} KB\n`);
  } catch (error) {
    console.error(`❌ Error generating ${outputFile}:`, error);
    process.exit(1);
  }
}

async function generateAllPDFs() {
  console.log('🚀 Starting PDF generation for both resumes...\n');
  
  await generatePDF('resume-qa.html', 'resume-qa.pdf');
  await generatePDF('resume-sa.html', 'resume-sa.pdf');
  
  console.log('✨ All PDFs generated successfully!');
}

generateAllPDFs();
