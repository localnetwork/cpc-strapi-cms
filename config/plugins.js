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
  menus: {
    enabled: true,
    config: {
      policies: ["admin::isAuthenticatedAdmin"], // Restricts to authenticated admin users
      maxDepth: 3,
    },
  },
});
