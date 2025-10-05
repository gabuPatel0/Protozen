# GitHub Pages Custom Domain Setup

This guide will help you deploy your Protozen project to GitHub Pages with your custom domain `protozenai.com`.

## Prerequisites

- A GitHub repository for your project
- Your custom domain: `protozenai.com`
- Access to your domain's DNS settings

## Step 1: CNAME File Updated

The `public/CNAME` file has been configured with your domain:
```
protozenai.com
```

## Step 2: Configure DNS Settings

### For Root Domain (protozenai.com)

Add these A records to your DNS:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### For Subdomain (www.protozenai.com)

Add a CNAME record:
```
CNAME: www -> yourusername.github.io
```

### For Both Root and WWW

If you want both `protozenai.com` and `www.protozenai.com` to work:
1. Set up A records for the root domain (as above)
2. Add a CNAME record: `www -> protozenai.com`

## Step 3: GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Under **Custom domain**, enter your domain: `protozenai.com`
5. Check **Enforce HTTPS** (recommended)

## Step 4: Deploy Your Site

### Option 1: Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy when you push to the main branch.

### Option 2: Manual Deployment

Run the deployment command locally:
```bash
npm run deploy:custom-domain
```

## Step 5: Verify Deployment

1. Wait for the GitHub Actions workflow to complete (check the **Actions** tab)
2. Visit `https://protozenai.com` to see your deployed site
3. Check that HTTPS is working properly

## Troubleshooting

### Common Issues

1. **DNS propagation**: DNS changes can take up to 48 hours to propagate globally
2. **HTTPS certificate**: GitHub may take a few minutes to provision the SSL certificate for `protozenai.com`
3. **404 errors**: Ensure the CNAME file contains only `protozenai.com`

### Checking DNS

Use these tools to verify your DNS configuration:
- `nslookup protozenai.com`
- `dig protozenai.com`
- Online DNS checker tools

### GitHub Pages Status

Check the deployment status in:
- Repository **Settings** → **Pages**
- Repository **Actions** tab for workflow logs

## Build Scripts

The project includes these build scripts:

- `npm run build:gh-pages` - Build for GitHub Pages with repository path
- `npm run build:gh-pages-custom` - Build for custom domain (no repository path)
- `npm run deploy:custom-domain` - Build and deploy to custom domain

## Environment Variables

The build process uses these environment variables:
- `GITHUB_PAGES=true` - Enables GitHub Pages mode
- `CUSTOM_DOMAIN=true` - Uses root path instead of repository path
- `GITHUB_REPOSITORY` - Automatically set by GitHub Actions

## Security Considerations

- Always use HTTPS for your custom domain `protozenai.com`
- Keep your DNS records up to date
- Monitor your GitHub Pages usage and limits

## Support

If you encounter issues:
1. Check the GitHub Actions workflow logs
2. Verify your DNS settings
3. Ensure the CNAME file contains exactly `protozenai.com`
4. Check GitHub Pages documentation for updates
