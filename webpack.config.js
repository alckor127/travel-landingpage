const Encore = require("@symfony/webpack-encore");
const dotenv = require("dotenv");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

// Define website configuration
Encore.setOutputPath("public/build/website")
  .setPublicPath("/build/website")
  .addEntry("bundle", "./assets/website/js/bundle.js")
  .copyFiles({
    from: "./assets/website/images",
    to: "images/[path][name].[ext]",
    pattern: /\.(png|jpg|jpeg|mp4)$/,
  })
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel((config) => {
    config.plugins.push("@babel/plugin-proposal-class-properties");
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = 3;
  })
  .enableSassLoader();

// Build the website configuration
const websiteConfig = Encore.getWebpackConfig();

// Set a unique name for the website configuration
websiteConfig.name = "websiteConfig";

// Resert Encore to build the admin configuration
Encore.reset();

// Define admin configuration
Encore.setOutputPath("public/build/admin")
  .setPublicPath("/build/admin")
  .addEntry("bundle", "./assets/admin/js/bundle.js")
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureDefinePlugin((config) => {
    const env = dotenv.config();
    if (env.error) throw env.error;
    config["process.env"].BASE_NAME = JSON.stringify("admin");
    config["process.env"].API_URL = JSON.stringify(
      "http://travel-demo.devfran.com/api"
    );
  })
  .configureBabel((config) => {
    config.plugins.push("@babel/plugin-proposal-class-properties");
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = 3;
  })
  .enableSassLoader()
  .enableReactPreset();

// Build the admin configuration
const adminConfig = Encore.getWebpackConfig();

// Set a unique name for the admin configuration
adminConfig.name = "adminConfig";

// Export the final configuration as an array of multiple configurations
module.exports = [websiteConfig, adminConfig];
