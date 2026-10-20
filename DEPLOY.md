# Deploy

heykler.com is served by nginx on commsk-server from `/var/www/kler-web` (vhost `/etc/nginx/sites-enabled/heykler.com`).

CI/CD: `.github/workflows/deploy.yml` runs on every push to `main` on a self-hosted runner and rsyncs the repo to `/var/www/kler-web` (excluding `.git`, `.github`).

Runner (set up 2026-10-20):
- Dir `/opt/actions-runner-kler-web`, name `kler-web-vps`, labels `self-hosted,kler-web`, registered to `commsk-workspace/kler-web`
- systemd unit `actions.runner.commsk-workspace-kler-web.kler-web-vps.service` (starts on boot)
- Re-register: `./config.sh remove`, then `./config.sh --url https://github.com/commsk-workspace/kler-web --token <registration token>`

Note: `/var/www/kler-web` is also the target of `deploy-web.yml` in the `kler` monorepo (apps/web), which would overwrite this site if it runs.
