# Vercel Blob Storage Demo

This project demonstrates how to use [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for file storage in a Next.js application. It showcases file uploads, listing, and basic file management capabilities using Vercel's Blob Storage service.

## Features

- 📤 File upload functionality
- 📋 List uploaded files
- 🔒 Secure file handling
- 🎨 TailwindCSS styling
- ⚡ Built with Next.js App Router

## Technical Details

### Implementation Details

- **Frontend Stack**
  - Next.js 15.5.4 with App Router
  - TailwindCSS for styling
  - React 19.1.0
  - TypeScript for type safety

- **Backend Services**
  - Vercel Blob Storage for file management
  - Next.js API Routes for server-side operations
  - Server-side and client-side upload implementations

- **Key Components**
  ```typescript
  // Example upload implementation
  async function uploadFile(file: File) {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'x-upload-type': 'server-side',
      },
    });
    return response.json();
  }
  ```

### Performance Optimizations
- Chunked file uploads for large files
- Client-side file validation
- Optimized file listing with pagination
- Caching implementation for file lists

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or later)
- npm or yarn
- A Vercel account
- Vercel Blob Storage enabled in your project

## Environment Setup

1. Clone this repository
2. Create a `.env.local` file in the root directory
3. Add your Vercel Blob token:
   ```env
   BLOB_READ_WRITE_TOKEN="your_blob_token_here"
   ```

To get your Blob token:
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Storage → Blob
4. Create or copy your token

## Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Troubleshooting Guide

### Common Issues and Solutions

1. **Upload Failures**
   ```bash
   Error: Failed to upload file
   ```
   - Check BLOB_READ_WRITE_TOKEN is set correctly
   - Verify file size is within limits (max 500MB)
   - Ensure proper file permissions

2. **Authentication Errors**
   ```bash
   Error: No token found
   ```
   - Restart the development server
   - Check .env.local file exists
   - Verify token hasn't expired

3. **Build Errors**
   ```bash
   Error: Cannot find module '@/components/...'
   ```
   - Clear .next directory
   - Verify tsconfig.json paths
   - Run npm install

### Debug Mode
Enable debug mode by setting:
```env
DEBUG=vercel-blob:*
```

### Performance Issues
- Use the Network tab to monitor upload speeds
- Check file compression settings
- Verify chunk size configurations

## Project Structure

```
app/
├── api/
│   ├── blobs/      # API route for listing files
│   ├── upload/     # API route for file uploads
│   └── client-upload/
├── upload/         # Upload page component
└── page.tsx        # Main page
components/
└── BlobList.tsx    # File listing component
```

## API Routes

- `GET /api/blobs` - List all uploaded files
- `POST /api/upload` - Upload files (server-side)
- `POST /api/client-upload` - Upload files (client-side)

## Enhanced Security Considerations

### Data Protection
- Implement client-side encryption for sensitive files
- Use Azure Key Vault or AWS KMS for key management
- Enable audit logging for all file operations

### Access Control
```typescript
// Example security middleware
export async function validateRequest(req: NextApiRequest) {
  // Validate authentication
  const token = req.headers.authorization;
  if (!await verifyToken(token)) throw new Error('Unauthorized');
  
  // Rate limiting
  await rateLimit(req);
  
  // Scan for malware
  await scanFile(req.body);
}
```

### Best Practices
1. **File Validation**
   - Implement mime type checking
   - Scan for malware
   - Validate file size limits

2. **Access Management**
   - Use signed URLs with expiration
   - Implement role-based access
   - Enable audit logging

3. **Data Privacy**
   - Encrypt sensitive data
   - Implement data retention policies
   - Set up secure key rotation

4. **Compliance**
   - GDPR considerations
   - HIPAA compliance (if needed)
   - Data residency requirements

## Contribution Guidelines

### Getting Started
1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Submit a pull request

### Code Style
- Use ESLint and Prettier configs
- Follow TypeScript best practices
- Write meaningful commit messages

### Testing
```bash
# Run tests
npm run test

# Run specific test suite
npm run test:unit

# Check types
npm run type-check
```

### Pull Request Process
1. Update documentation
2. Add tests for new features
3. Ensure CI passes
4. Get code review approval

## Deployment

Deploy your own version of this demo:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vercel-blob-demo)

Remember to:
1. Configure environment variables in your Vercel project settings
2. Enable Blob Storage in your Vercel project
3. Set up proper access controls

### Production Checklist
- [ ] Set up monitoring
- [ ] Configure error tracking
- [ ] Enable usage analytics
- [ ] Review security settings
- [ ] Set up backup strategy

## Learn More

- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - feel free to use this demo as a starting point for your own projects!

## Support

For support, please:
1. Check the troubleshooting guide
2. Search existing issues
3. Create a new issue with:
   - Environment details
   - Steps to reproduce
   - Expected vs actual behavior
