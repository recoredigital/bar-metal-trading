---
name: Vercel redeploy pitfall
description: Why Vercel keeps building old commits when user clicks Redeploy
---

## Rule
Clicking "Redeploy" on a Vercel deployment rebuilds that **specific commit SHA**, not the latest GitHub HEAD.

**Why:** Vercel deployments are immutable snapshots tied to a commit. Redeploy = rebuild exact same commit.

**How to apply:** When a Vercel build is failing from an old commit, instruct the user to:
1. Go to Vercel project Overview → deploy from the latest commit shown there, OR
2. Go to Deployments → pick the NEWEST one in the list → Redeploy that one, OR
3. Push a new commit to GitHub — if auto-deploy is enabled, Vercel picks it up automatically.

Never tell a user "trigger a new deployment" without this specific guidance — they will click Redeploy on the old failing deployment.
