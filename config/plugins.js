module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
    },
  },
  "cloudflare-pages": {
    enabled: true,
    config: {
      instances: [
        {
          name: "production",
          hook_url:
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/49625115-c3cc-489f-a3ca-a85cf36c0fdf",
        },
        // {
        //   name: "preview website",
        //   hook_url: "https://...",
        // },
      ],
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  menus: {
    enabled: true,
    config: {
      policies: ["admin::isAuthenticatedAdmin"], // Restricts to authenticated admin users
      maxDepth: 3,
    },
  },
});
