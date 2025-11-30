#!/bin/bash

# Deployment script for portfolio-professional
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment process..."

# Build the application
echo "📦 Building Next.js application..."
npm run build

# Create deployment archive
echo "📚 Creating deployment archive..."
tar -czf portfolio-deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.next/cache' \
  --exclude='logs' \
  --exclude='*.log' \
  --exclude='.env.local' \
  --exclude='deploy.sh' \
  --exclude='portfolio-deploy.tar.gz' \
  .

echo "✅ Deployment archive created: portfolio-deploy.tar.gz"
echo ""
echo "📤 Next steps:"
echo "1. Upload to server:"
echo "   scp -i ~/.ssh/id_ed25519 portfolio-deploy.tar.gz xtian@weq.vvw.mybluehost.me:~/"
echo ""
echo "2. SSH into server:"
echo "   ssh -i ~/.ssh/id_ed25519 xtian@weq.vvw.mybluehost.me"
echo ""
echo "3. On the server, run:"
echo "   cd ~/public_html/christianbryantrva.com"
echo "   tar -xzf ~/portfolio-deploy.tar.gz"
echo "   npm install --production"
echo "   mkdir -p logs"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 save"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
