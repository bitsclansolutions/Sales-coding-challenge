import { Controller, Get, Query, Res, Logger } from '@nestjs/common';
import { Response } from 'express';
import * as pdf from 'html-pdf';
import { Clip } from '../graphql/generated'; // Import Clip type

@Controller('/pdf/generate')
export default class PdfgenerateController {
  private readonly logger = new Logger(PdfgenerateController.name);

  @Get()
  public async pdfgenerate(@Query('clip') clipString: string, @Res() res: Response): Promise<void> {
    try {
      // Parse the clip string into a JSON object
      const clip: Clip = JSON.parse(decodeURIComponent(clipString)); // Use Clip type

      // Extract data from the clip object
      const { title, content, clip_media } = clip;

      // Generate HTML for the PDF
      let html = `<h1>${title}</h1>`;
      html += `<div>${content}</div>`;
      if (clip_media && clip_media.length > 0) {
        html += '<h2>Images:</h2>';
        for (const media of clip_media) {
          if (media && media.imageUrl) {
            html += `<img src="${media.imageUrl}" alt="${media.altText}"/>`;
          } else {
            // Log a warning if imageUrl is missing
            this.logger.warn(`Invalid media object: ${JSON.stringify(media)}`);
          }
        }
      }

      // Generate PDF from HTML
      pdf.create(html).toBuffer((err, buffer) => {
        if (err) {
          this.logger.error(err.message);
          res.status(500).send('Error generating PDF');
        } else {
          // Set response headers for PDF
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
          // Send PDF buffer as response
          res.send(buffer);
        }
      });
    } catch (error) {
      // Error handling logic
      this.logger.error(error.message);
      res.status(500).send('An error occurred while processing the request.');
    }
  }
}
