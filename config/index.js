module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Snake Socks! ', // Navigation and Site Title
  siteTitleAlt: 'Jonathan Brockman | Snake Socks', // Alternative Site title for SEO
  siteTitleManifest: 'SnakeSocks',
  siteUrl: 'https://snakesocks.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.', // Your site description
  author: 'megatimes', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@minimal', // Twitter Username - Optional
  ogSiteName: 'Snake Socks!', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
