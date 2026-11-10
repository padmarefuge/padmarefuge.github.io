# padmarefuge.org

Static website for Padma Refuge Foundation (registered Canadian charity 797418225 RR 0001).
Plain HTML + CSS, no build step. Hosted on GitHub Pages.

## Structure

```
index.html          Home
support.html        Support & Participate
governance.html     Governance & Transparency
404.html
assets/css/styles.css   All styles. Palette + fonts match bhantebo.com
assets/js/main.js       Mobile menu + footer year
assets/img/             Logo, photos (add hero.jpg, portraits here)
assets/docs/            Corporate PDFs (bylaws, registrations, annual reports)
CNAME                   Custom domain for GitHub Pages
```

## Edit locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploy (GitHub Pages)

1. Push this repo to the Padma Refuge GitHub organization (e.g. `padmarefuge/padmarefuge.org`).
2. Repo **Settings > Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. Test at the `https://<org>.github.io/<repo>/` preview URL first. (Remove `CNAME` while previewing if you don't want the domain claimed yet.)
4. When approved, at the domain registrar point padmarefuge.org to GitHub Pages:
   - `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` record for `www`: `<org>.github.io`
5. Back in Settings > Pages, confirm the custom domain and tick **Enforce HTTPS**.

## Still to do

- [ ] Hero photo and teacher portraits (`assets/img/`)
- [ ] Confirm board list and officer titles
- [ ] Confirm charitable purposes wording against incorporation documents
- [ ] Padma Circle: monthly Stripe Payment Links + amounts
- [ ] Social media URLs (footer)
- [ ] Copy corporate PDFs into `assets/docs/` and repoint links
- [ ] Annual reports and policies
- [ ] About, Our Teachers and Connect pages (currently sections on Home)
- [ ] Confirm Bodhicitta's site URL (bodhicitta.ca vs bhantebo.com)
