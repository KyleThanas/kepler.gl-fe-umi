
exports.keys = ['qmPsBMa4wTbjzZSGn8ZEiNyaKtSx1RB0', 'Asm3d5a8FuZytMv73C7unPimXLF2AwAF'].join();

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.hybrid = {
  debug: false,
  manifest: {},
  devServer: {
    port: 5000,
    command: 'node -v',
    environment: {},
  },
};
