# SVBB.sg — GitHub Actions Deploy to A2 Hosting Setup Guide

## What You're Setting Up

Automatic deployment: every time you push to `main` in the svbb-website repo,
GitHub Actions will build the site and upload it to your A2 Hosting account.

Two workflow files are included:
- **build-and-deploy.yml** — FTPS version (matches your MetaSkills setup exactly)
- **build-and-deploy-sftp.yml** — SFTP fallback (use if FTPS hits the 530 error)

---

## Step 1: Get Your SVBB A2 Hosting FTP Credentials

Since SVBB has its own separate A2 account, log into that account's cPanel.

1. Go to your SVBB A2 cPanel (the URL will be something like
   `https://sgX-tsXXX.a2hosting.com:2083` — check your A2 welcome email)
2. Note the **Current User** shown on the right panel (e.g., `svbbsg` or similar)
3. Note the **Home Directory** (e.g., `/home/svbbsg`)
4. Go to **FTP Accounts** and either:
   - Use the main cPanel account (same username/password as cPanel login), OR
   - Create a dedicated FTP account for deployments
5. **Reset/set the password** — write it down, you'll need it in Step 2

**Also note the server hostname:**
- Check the **Shared IP Address** in cPanel's right sidebar
- Or use the hostname from your A2 welcome email (e.g., `sgX-tsXXX.a2hosting.com`)

---

## Step 2: Add GitHub Secrets to the svbb-website Repo

1. Go to: https://github.com/metaskillsit/svbb-website/settings/secrets/actions
2. Click **"New repository secret"** for each of these three:

| Secret Name    | Value                                                    |
|----------------|----------------------------------------------------------|
| FTP_SERVER     | Your A2 server hostname (e.g., `sg1-ts103.a2hosting.com`) or try `ftp.svbb.sg` |
| FTP_USERNAME   | The exact cPanel/FTP username (e.g., `svbbsg`)           |
| FTP_PASSWORD   | The password you set/reset in Step 1                     |

**IMPORTANT:** The username must be EXACTLY what cPanel shows. Common formats:
- `svbbsg` (short form)
- `svbbsg@svbb.sg` (full form for addon FTP accounts)
- Check cPanel → FTP Accounts for the exact string

---

## Step 3: Add the Workflow File

1. In the svbb-website repo, create the folder structure:
   ```
   .github/
     workflows/
       build-and-deploy.yml
   ```

2. Start with the **FTPS version** (build-and-deploy.yml). Copy the contents of
   the provided `svbb-build-and-deploy.yml` file.

3. Commit and push to `main`:
   ```bash
   git add .github/workflows/build-and-deploy.yml
   git commit -m "Add A2 Hosting deploy workflow"
   git push origin main
   ```

4. Go to https://github.com/metaskillsit/svbb-website/actions to watch it run.

---

## Step 4: If FTPS Fails (530 Error — Same Issue as MetaSkills)

If you get the same `530 Login authentication failed` error:

### Option A: Try different server values
Sometimes the FTP hostname is tricky. Try updating `FTP_SERVER` to:
- The server's IP address (from cPanel → Shared IP Address)
- `ftp.svbb.sg`
- The full A2 hostname like `sgX-tsXXX.a2hosting.com`

### Option B: Switch to SFTP
Replace the workflow file contents with the provided
`svbb-build-and-deploy-sftp.yml` file instead.

This uses SSH (port 22) instead of FTPS (port 21), which is more reliable
on A2 Hosting. The `remote_path` uses your username dynamically:
```
/home/${{ secrets.FTP_USERNAME }}/public_html/
```

### Option C: Contact A2 Support
Ask them:
- "Is FTP/FTPS enabled on my account, or only SFTP?"
- "What is the correct FTP hostname and port for my account?"
- "Is there a firewall blocking GitHub Actions IP ranges?"

---

## Differences from MetaSkills Workflow

| Setting             | MetaSkills                    | SVBB                           |
|---------------------|-------------------------------|--------------------------------|
| Concurrency group   | `deploy-metaskills`           | `deploy-svbb`                  |
| GitHub Secrets      | MetaSkills A2 credentials     | SVBB A2 credentials (separate) |
| server-dir          | `public_html/`                | `public_html/`                 |
| Everything else     | Identical                     | Identical                      |

The workflow logic is the same — checkout → Node setup → npm install → build → FTP deploy.
The only differences are the concurrency group name and the credentials (which come from
each repo's own GitHub Secrets).

---

## Also: Fixing the MetaSkills 530 Error

Since MetaSkills is STILL failing with 530, here's what to do for THAT repo too:

1. Log into the **MetaSkills** A2 cPanel
2. Go to FTP Accounts → find or reset the password for the deploy account
3. Go to GitHub → metaskillsit/metaskills-website → Settings → Secrets → Actions
4. Update `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` with confirmed-correct values
5. If it STILL fails → swap the deploy step to the SFTP version (same as svbb-build-and-deploy-sftp.yml but with `deploy-metaskills` concurrency group)
6. Re-run the workflow

---

## Quick Checklist

### For SVBB:
- [ ] Log into SVBB's A2 cPanel
- [ ] Note exact username and server hostname
- [ ] Reset FTP password
- [ ] Add 3 secrets to svbb-website repo on GitHub
- [ ] Create `.github/workflows/build-and-deploy.yml` with FTPS version
- [ ] Push to main → watch Actions tab
- [ ] If 530 error → switch to SFTP version
- [ ] Verify svbb.sg loads correctly

### For MetaSkills (fix the existing issue):
- [ ] Log into MetaSkills A2 cPanel
- [ ] Confirm exact FTP username (is it `metaskil1`?)
- [ ] Reset FTP password
- [ ] Update 3 secrets in metaskills-website repo
- [ ] Re-run workflow
- [ ] If still 530 → switch to SFTP version
- [ ] Verify metaskills.sg loads correctly
