const path = require('path')
const fs = require('fs')
module.exports = (app) => {
  const exports = {}

  exports.view = {
    cache: false,
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

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(
      path.join(app.baseDir, 'app/web/asset/images/favicon.ico')
    ),
  }

  exports.fleet_url = 'http://fleet.api.niu.local'

  exports.keys = [
    'qmPsBMa4wTbjzZSGn8ZEiNyaKtSx1RB0',
    'Asm3d5a8FuZytMv73C7unPimXLF2AwAF',
  ].join()

  exports.proxy = [
    {
      host: 'http://fleet.api.niu.local',
      match: /\/api/,
    },
    {
      host: 'http://iot-pi.api.niu.local',
      match: /\/bcm\/sys/,
    },
  ]

  exports.bodyParser = {
    jsonLimit: '50mb',
    formLimit: '60mb',
  }

  return exports
}
