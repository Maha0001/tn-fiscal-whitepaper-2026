# TN Fiscal White Paper 2026

[![Deploy to GitHub Pages](https://github.com/yourusername/tn-fiscal-whitepaper-2026/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/tn-fiscal-whitepaper-2026/actions/workflows/deploy.yml)

**Live site:** https://yourusername.github.io/tn-fiscal-whitepaper-2026/

An interactive, SEO-optimised web presentation of the **Tamil Nadu White Paper on Fiscal Management (June 2026)** published by the Finance Department, Government of Tamil Nadu.

## About

This site presents the six key findings of the 121-page White Paper in an accessible format for citizens, researchers, journalists, and policymakers:

1. Outstanding debt has near-doubled (₹5.1L cr → ₹10L cr)
2. Interest payments now exceed capital expenditure
3. Revenue deficit is structural and at a historic high (₹78,324 crore)
4. State's own-tax effort has collapsed to its lowest historical level
5. Committed expenditure squeezes out development spending
6. Contingent liabilities take real fiscal exposure to ₹13.18 lakh crore

## Tech stack

- Pure HTML, CSS, JavaScript — no build tools needed
- Chart.js for data visualisations
- Google Fonts (Playfair Display + Inter)
- GitHub Pages for hosting
- GitHub Actions for CI/CD deployment

## Repository name

`tn-fiscal-whitepaper-2026`

## Deployment

### Automatic (recommended)

1. Fork/clone this repository
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the site deploys automatically

### Manual

```bash
git clone https://github.com/yourusername/tn-fiscal-whitepaper-2026.git
cd tn-fiscal-whitepaper-2026
# Open index.html in a browser — no build step needed
```

## SEO Features

- Full meta tags (title, description, keywords, author)
- Open Graph / Twitter Card for social sharing
- Schema.org structured data (GovernmentDocument)
- Canonical URL
- Semantic HTML5 structure
- Accessible charts with aria-label and fallback text

## Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://yourusername.github.io/tn-fiscal-whitepaper-2026/`
3. Verify via HTML tag — add the `<meta name="google-site-verification" ...>` tag to `<head>` in `index.html`
4. Submit sitemap: `https://yourusername.github.io/tn-fiscal-whitepaper-2026/sitemap.xml`

## Data sources

All figures are from publicly verifiable sources:
- Tamil Nadu Budget Documents (2021-22 to 2025-26)
- Comptroller and Auditor General of India (CAG) reports
- Reserve Bank of India State Finances publications
- Ministry of Statistics and Programme Implementation (MoSPI) GSDP data

## License

Content from the White Paper: Government of Tamil Nadu, Finance Department.  
Website code: MIT License.
