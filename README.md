This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## See the frontend live

You have two quick ways to view and share a live build:

1. **Local dev server (fastest preview)**
   ```bash
   npm install
   npm run dev
   ```
   Then open [http://localhost:3000](http://localhost:3000). This hot-reloads as you edit files.

2. **Hosted preview link (shareable)**
   - **Vercel:**
     ```bash
     npm run build
     npx vercel --prebuilt --yes       # creates a preview deploy URL
     ```
     Vercel prints a Preview URL you can share. Use `vercel --prod` when ready for production.
   - **Netlify:**
     ```bash
     npm run build
     npx netlify-cli deploy --build --alias preview
     ```
     Netlify returns a unique preview URL; swap `--alias preview` with `--prod` for production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Install the Vercel CLI (optional but handy):
   ```bash
   npm i -g vercel
   ```
2. Create a project from this directory and link it to your Vercel account:
   ```bash
   vercel
   ```
   - Answer the prompts to create/link a project and set the framework to **Next.js**.
   - Vercel will automatically detect `npm run build` for production builds.
3. To deploy new changes, run:
   ```bash
   vercel --prod
   ```
4. If you use environment variables, add them in **Vercel Project Settings → Environment Variables** and redeploy.

## Deploy on Netlify

1. Install the Netlify CLI (optional but useful for previews):
   ```bash
   npm i -g netlify-cli
   ```
2. Create a production build locally to confirm everything works:
   ```bash
   npm run build
   ```
3. Deploy with the CLI:
   ```bash
   netlify init       # link to a new or existing Netlify site
   netlify deploy     # preview deploy
   netlify deploy --prod
   ```
4. In the Netlify UI, set the build command to `npm run build` and the publish directory to `.next`.
5. Add any required environment variables in **Site settings → Environment variables** and trigger a new deploy.

## Optional CI (GitHub Actions)

Use the included workflow in `.github/workflows/ci.yml` to lint and build on pushes/PRs:

- It installs Node.js 20, restores npm cache, runs `npm ci`, then executes `npm run lint` and `npm run build`.
- Set `NODE_OPTIONS=--max_old_space_size=4096` in the workflow if you hit memory limits on larger builds.
- To enable deployment previews with Vercel or Netlify, add their official GitHub Apps/integrations and follow their setup wizards.
