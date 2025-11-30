# FTP Deployment Guide for Bluehost

## Overview
FTP deployment uploads all files including node_modules, which takes longer but doesn't require SSH access.

## Prerequisites
- FTP client (FileZilla, Cyberduck, or built-in FTP)
- Bluehost FTP credentials
- Access to cPanel for Node.js configuration

---

## Method 1: Full Upload (Recommended for First Deployment)

### Step 1: Build Locally
```bash
# In your local project directory
npm run build
```

This creates the `.next` folder with your production build.

### Step 2: Install Production Dependencies Locally
```bash
# Install all dependencies
npm install

# This ensures node_modules is complete
```

### Step 3: Connect via FTP
**FTP Credentials (from Bluehost):**
- **Host:** ftp.christianbryantrva.com (or your domain)
- **Username:** Your cPanel username (likely 'xtian')
- **Password:** Your cPanel password
- **Port:** 21 (FTP) or 22 (SFTP)

**Using FileZilla:**
1. Open FileZilla
2. File → Site Manager → New Site
3. Enter credentials above
4. Protocol: SFTP (SSH File Transfer Protocol) - more secure
5. Click Connect

### Step 4: Upload Files
Navigate to your web root on the server:
- Usually: `/public_html/christianbryantrva.com/`
- Or: `/home/xtian/public_html/christianbryantrva.com/`

**Upload these files/folders:**
```
✅ .next/                    (entire folder - built app)
✅ node_modules/             (entire folder - dependencies)
✅ public/                   (images, avatar.jpg, etc.)
✅ components/               (your React components)
✅ app/                      (Next.js app directory)
✅ server.js                 (production server)
✅ package.json              (dependencies list)
✅ package-lock.json         (dependency lock file)
✅ ecosystem.config.js       (PM2 config)
✅ .env.production           (environment variables)
✅ .htaccess                 (Apache proxy config)
✅ next.config.js            (Next.js config)
✅ tsconfig.json             (TypeScript config)
✅ tailwind.config.ts        (Tailwind config)
✅ postcss.config.mjs        (PostCSS config)

❌ DO NOT upload:
- .git/
- .next/cache/
- node_modules/.cache/
- *.log files
- deploy.sh
- DEPLOYMENT*.md
```

**Note:** Uploading node_modules via FTP can take 30-60 minutes due to thousands of files.

### Step 5: Configure Node.js in cPanel

1. **Log into cPanel** → https://weq.vvw.mybluehost.me:2083
2. **Find "Setup Node.js App"** (or "Node.js Selector")
3. **Create Application:**
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application root:** `public_html/christianbryantrva.com`
   - **Application URL:** `christianbryantrva.com`
   - **Application startup file:** `server.js`
   - **Port:** Leave default or set to 3000

4. **Click "Create"**

5. **Start the application** in the Node.js App interface

### Step 6: Verify Deployment
Visit: https://christianbryantrva.com

---

## Method 2: Upload Build Only (Faster Updates)

For subsequent deployments, you only need to upload changed files:

### What to Upload for Updates:
```bash
# Only upload these for code changes:
✅ .next/                    (rebuilt app)
✅ components/               (if changed)
✅ app/                      (if changed)
✅ public/                   (if changed)
✅ server.js                 (if changed)
```

**Don't re-upload node_modules unless dependencies changed!**

---

## Method 3: Using FTP + Bluehost File Manager

If FTP is slow, use Bluehost File Manager:

1. **Zip locally:**
   ```bash
   # Create a zip with all necessary files
   zip -r portfolio.zip . \
     -x "*.git*" \
     -x "*.log" \
     -x "deploy.sh" \
     -x "DEPLOYMENT*.md"
   ```

2. **Upload via cPanel File Manager:**
   - Login to cPanel
   - Go to File Manager
   - Navigate to `public_html/christianbryantrva.com/`
   - Upload `portfolio.zip`
   - Right-click → Extract

3. **Install dependencies via Terminal in cPanel:**
   - cPanel → Terminal
   - `cd public_html/christianbryantrva.com`
   - `npm install --production`
   - `pm2 start ecosystem.config.js`

---

## FTP Clients Comparison

### FileZilla (Free, Cross-platform)
- Download: https://filezilla-project.org/
- Best for: Bulk uploads
- Speed: Moderate
- Supports: FTP, SFTP, FTPS

### Cyberduck (Free, Mac/Windows)
- Download: https://cyberduck.io/
- Best for: Mac users
- Speed: Fast
- Supports: FTP, SFTP, WebDAV

### WinSCP (Free, Windows only)
- Download: https://winscp.net/
- Best for: Windows users
- Speed: Fast
- Supports: FTP, SFTP, SCP

### Built-in macOS Finder
```bash
# In Finder, press Cmd+K and enter:
sftp://xtian@weq.vvw.mybluehost.me

# Then drag and drop files
```

---

## Optimization Tips

### 1. Compress Before Upload
```bash
# Zip node_modules separately
cd node_modules
zip -r ../node_modules.zip . -q

# Upload node_modules.zip
# Extract on server via cPanel File Manager
```

### 2. Use SFTP Instead of FTP
- More secure (encrypted)
- Often faster
- Port 22 instead of Port 21

### 3. Exclude Cache Files
Don't upload:
- `.next/cache/`
- `node_modules/.cache/`
- Any `*.log` files

### 4. Upload During Off-Peak Hours
- Faster transfer speeds
- Less server load

---

## Troubleshooting

### "Connection Timeout"
- Check FTP credentials
- Try SFTP (port 22) instead of FTP (port 21)
- Disable firewall temporarily

### "Permission Denied"
- Check folder permissions (should be 755)
- Verify you're uploading to correct directory
- Contact Bluehost support to verify permissions

### "Site Not Working After Upload"
1. Check Node.js app is running in cPanel
2. Verify `.htaccess` is uploaded
3. Check application logs in cPanel Node.js interface
4. Ensure `server.js` has correct permissions (644)

### "Missing Dependencies"
- Re-upload entire `node_modules` folder
- Or use cPanel Terminal: `npm install --production`

---

## Quick Deployment Checklist

- [ ] Build locally: `npm run build`
- [ ] Connect to FTP/SFTP
- [ ] Upload all necessary files (see list above)
- [ ] Configure Node.js app in cPanel
- [ ] Start the application
- [ ] Test: visit christianbryantrva.com
- [ ] Check logs if issues occur

---

## Post-Deployment

### Monitor Your Application
- cPanel → Node.js App → View Logs
- PM2 (if using SSH): `pm2 logs portfolio`

### Update Process
1. Build locally: `npm run build`
2. Upload only `.next/` folder via FTP
3. Restart app in cPanel Node.js interface
4. Or via SSH: `pm2 restart portfolio`

---

## Need Help?
- Bluehost Support: https://my.bluehost.com/cgi/help
- cPanel Documentation: https://docs.cpanel.net/
- Node.js on Bluehost: https://www.bluehost.com/help/article/node-js
