module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',
              'module:metro-react-native-babel-preset',
              // 'react-native-reanimated/plugin',
            ],
    Plugins: ['react-nativereanimated/plugin'],
  };
};


module.exports = {
  presets: [
  'module:metro-react-native-babel-preset'
  ],
  plugins: [
  'react-native-reanimated/plugin',
  ],
};