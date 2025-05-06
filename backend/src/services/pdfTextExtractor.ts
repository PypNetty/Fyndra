import PDFParser from "pdf2json";
import Tesseract from "tesseract.js";
import * as pdf2img from "pdf-img-convert";

export async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", (errData) =>
      reject(errData.parserError)
    );
    pdfParser.on("pdfParser_dataReady", async (pdfData) => {
      const texts = pdfData.Pages.flatMap((page: any) =>
        page.Texts.map((text: any) =>
          decodeURIComponent(text.R.map((r: any) => r.T).join(""))
        )
      );
      const joined = texts.join(" ");
      if (joined.trim().length > 0) {
        resolve(joined);
      } else {
        // Si aucun texte, tente l'OCR sur chaque page image
        try {
          const images = await pdf2img.convert(buffer); // images = Buffer[]
          let ocrText = "";
          for (const img of images) {
            let imageBuffer: Buffer;
            if (typeof img === "string") {
              imageBuffer = Buffer.from(img, "base64");
            } else {
              imageBuffer = Buffer.from(img);
            }
            const {
              data: { text },
            } = await Tesseract.recognize(imageBuffer, "fra+eng");
            ocrText += text + " ";
          }
          resolve(ocrText.trim());
        } catch (e) {
          reject(e);
        }
      }
    });
    pdfParser.parseBuffer(buffer);
  });
}
