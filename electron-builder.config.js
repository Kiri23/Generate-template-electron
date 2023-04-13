module.exports = {
    appId: 'com.example.generate-template',
    productName: 'GenerateTemplate',
    directories: {
      output: 'dist',
      buildResources: 'build',
    },
    files: ['!**/*', 'build/**/*', 'public/**/*', 'node_modules/**/*', 'package.json'],
    extraMetadata: {
      main: 'build/electron.js',
    },
    asar: true,
    win: {
      target: ['nsis'],
    },
    mac: {
      target: ['dmg'],
    },
    linux: {
      target: ['AppImage'],
    },
  };
  