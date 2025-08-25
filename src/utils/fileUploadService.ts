// File upload service using file.io (free, no backend required)
// file.io provides free file hosting with expiring links - perfect for resumes

export interface FileUploadResult {
  success: boolean;
  url?: string;
  error?: string;
  expires?: string;
}

export class FileUploadService {
  private static readonly FILE_IO_API = 'https://file.io';
  private static readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  private static readonly ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];

  /**
   * Upload file to file.io service
   * Returns a temporary download link that expires after 14 days or 1 download
   */
  static async uploadFile(file: File): Promise<FileUploadResult> {
    try {
      // Validate file size
      if (file.size > this.MAX_FILE_SIZE) {
        return {
          success: false,
          error: 'File size exceeds 10MB limit'
        };
      }

      // Validate file type
      if (!this.ALLOWED_TYPES.includes(file.type)) {
        return {
          success: false,
          error: 'Invalid file type. Please upload PDF, DOC, DOCX, or TXT files only.'
        };
      }

      console.log('Uploading file to file.io:', file.name, file.type, file.size);

      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('expires', '14d'); // File expires in 14 days
      formData.append('maxDownloads', '10'); // Allow up to 10 downloads

      // Upload to file.io
      const response = await fetch(this.FILE_IO_API, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success && result.link) {
        console.log('File uploaded successfully:', result.link);
        return {
          success: true,
          url: result.link,
          expires: '14 days or 10 downloads'
        };
      } else {
        throw new Error(result.message || 'Upload failed');
      }

    } catch (error) {
      console.error('File upload error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed'
      };
    }
  }

  /**
   * Validate file before upload
   */
  static validateFile(file: File): { valid: boolean; error?: string } {
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        valid: false,
        error: 'File size exceeds 10MB limit'
      };
    }

    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: 'Invalid file type. Please upload PDF, DOC, DOCX, or TXT files only.'
      };
    }

    return { valid: true };
  }

  /**
   * Format file size for display
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Get file extension from filename
   */
  static getFileExtension(filename: string): string {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  }
}

export default FileUploadService;