#!/bin/bash

# Prepare files for FTP upload
# This script builds the app and creates a clean directory for FTP upload

set -e

echo "🚀 Preparing files for FTP deployment..."

# Build the application
echo "📦 Building Next.js application..."
npm run build

# Create FTP upload directory
echo "📁 Creating FTP upload directory..."
rm -rf ftp-upload
mkdir -p ftp-upload

# Copy necessary files
echo "📋 Copying files..."
cp -r .next ftp-upload/
cp -r node_modules ftp-upload/
cp -r public ftp-upload/
cp -r components ftp-upload/
cp -r app ftp-upload/
cp server.js ftp-upload/
cp package.json ftp-upload/
cp package-lock.json ftp-upload/
cp ecosystem.config.js ftp-upload/
cp .env.production ftp-upload/
cp .htaccess ftp-upload/
cp next.config.js ftp-upload/
cp tsconfig.json ftp-upload/
cp tailwind.config.ts ftp-upload/
cp postcss.config.mjs ftp-upload/

echo "✅ Files ready in ./ftp-upload/ directory"
echo ""
echo "📤 Next steps:"
echo "1. Open your FTP client (FileZilla, Cyberduck, etc.)"
echo "2. Connect to: ftp.christianbryantrva.com or weq.vvw.mybluehost.me"
echo "3. Navigate to: public_html/christianbryantrva.com/"
echo "4. Upload all files from ./ftp-upload/ directory"
echo "5. Configure Node.js app in cPanel"
echo ""
echo "📖 See DEPLOYMENT-FTP.md for detailed instructions"
echo ""
echo "💡 Tip: Uploading node_modules will take 30-60 minutes"
echo "   Consider using cPanel Terminal to run 'npm install' on the server instead"
