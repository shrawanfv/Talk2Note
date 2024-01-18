/*
 * ************************************************************************************************
 * ************************************************************************************************
 * Project: talk2notes
 * File Name: babel.config.js
 * Created Date: Wednesday, January 17th 2024, 1:37:40 pm
 * Author: Shrawan Shinde
 * -----
 * Last Modified: Wednesday, January 17th 2024, 1:37:40 pm
 * Modified By:  Shrawan Shinde
 * -----
 * Copyright (c) 2024 RajeAi
 * ************************************************************************************************
 * ************************************************************************************************
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
