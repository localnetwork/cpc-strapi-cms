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
      roles: ["strapi-super-admin"],
    },
  },
  elasticsearch: {
    enabled: true,
    config: {
      indexingCronSchedule: "00 23 * * *", //run daily at 11:00 PM
      searchConnector: {
        host: process.env.ELASTIC_HOST,
        username: process.env.ELASTIC_USERNAME,
        password: process.env.ELASTIC_PASSWORD,
      },
      indexAliasName: process.env.ELASTIC_ALIAS_NAME,
    },
  },
});
