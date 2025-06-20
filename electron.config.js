module.exports = {
  // Configurações do Electron
  packagerConfig: {
    name: 'Seu Post Meu Like',
    executableName: 'seu-post-meu-like',
    icon: './assets/icon',
    ignore: [
      /^\/src\//,
      /^\/\.vscode\//,
      /^\/\.git\//,
      /^\/node_modules\/(?!.*\.(node|dll|dylib|so)$)/
    ]
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'SeuPostMeuLike'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    },
    {
      name: '@electron-forge/maker-deb',
      config: {}
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {}
    }
  ]
};