const Controller = require('egg').Controller;
class HomeController extends Controller {
  async homepage () {
    const payload = {};
    const html = await this.ctx.renderView('homepage.njk', payload);
    this.ctx.type = 'text/html';
    console.log('this.ctx.helper: ', this.ctx.helper);
    this.ctx.body = this.ctx.helper.htmlFormat(html);
  }

  async app() {
    await this.ctx.renderClient('system_status/system_status.js', {
      locale: language,
    });
  }
}

module.exports = HomeController;
