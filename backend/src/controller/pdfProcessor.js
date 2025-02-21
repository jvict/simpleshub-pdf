import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();
const options = {}; // see below for options

function extractCPFs(filePath) {
    return new Promise((resolve, reject) => {
      pdfExtract.extract(filePath, options)
        .then(data => {
          const text = data.pages.map(page => page.content.map(item => item.str).join(' ')).join(' ');
          const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
          const cpfs = text.match(cpfRegex) || [];
          resolve(cpfs);
        })
        .catch(error => {
          reject(new Error(`Erro ao processar o PDF: ${error.message}`));
        });
    });
  }

export default extractCPFs;