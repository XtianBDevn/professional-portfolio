# Deployment Guide for Bluehost

## Prerequisites on Bluehost Server
- Node.js installed (v18 or higher recommended)
- PM2 process manager (optional but recommended)
- Domain pointing to server IP (50.6.224.128)

## Step 1: Prepare Local Files
```bash
# Build the production version
npm run build

# Create deployment archive (excluding node_modules)
tar -czf portfolio-deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.next/cache' \
  --exclude='logs' \
  .
```

## Step 2: Upload to Bluehost
```bash
# Upload the archive
scp -i ~/.ssh/id_ed25519 portfolio-deploy.tar.gz xtian@weq.vvw.mybluehost.me:~/

# SSH into server
ssh -i ~/.ssh/id_ed25519 xtian@weq.vvw.mybluehost.me
```

## Step 3: On Bluehost Server
```bash
# Navigate to web directory (adjust path as needed)
cd ~/public_html/christianbryantrva.com
# OR
cd ~/www/christianbryantrva.com

# Extract files
tar -xzf ~/portfolio-deploy.tar.gz

# Install dependencies
npm install --production

# Create logs directory
mkdir -p logs

# Start the application with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# OR start without PM2
NODE_ENV=production PORT=3000 node server.js
```

## Step 4: Configure Web Server (Apache/Nginx)

### Apache (.htaccess)
Create or update .htaccess in your domain root:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

### Nginx
```nginx
server {
    listen 80;
    server_name christianbryantrva.com www.christianbryantrva.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Step 5: SSL Certificate (Optional but Recommended)
```bash
# If using Let's Encrypt
certbot --apache -d christianbryantrva.com -d www.christianbryantrva.com
```

## Useful PM2 Commands
```bash
pm2 status                 # Check status
pm2 logs portfolio         # View logs
pm2 restart portfolio      # Restart app
pm2 stop portfolio         # Stop app
pm2 delete portfolio       # Remove from PM2
```

## Troubleshooting
- If port 3000 is in use, change PORT in .env.production
- Check logs: `pm2 logs portfolio` or `tail -f logs/combined.log`
- Verify Node.js version: `node --version`
- Check if app is running: `curl http://localhost:3000`

## Updates
To deploy updates:
```bash
# Local machine
npm run build
tar -czf portfolio-update.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  .next package.json server.js ecosystem.config.js

# Upload and restart
scp -i ~/.ssh/id_ed25519 portfolio-update.tar.gz xtian@weq.vvw.mybluehost.me:~/
ssh -i ~/.ssh/id_ed25519 xtian@weq.vvw.mybluehost.me "cd ~/public_html/christianbryantrva.com && tar -xzf ~/portfolio-update.tar.gz && pm2 restart portfolio"
```
