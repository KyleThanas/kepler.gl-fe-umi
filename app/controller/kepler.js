const Controller = require('egg').Controller;
class HomeController extends Controller {
  async homepage () {
    const payload = {};
    const html = await this.ctx.renderView('homepage.njk', payload);
    console.log('this.ctx: ', this.ctx);

    this.ctx.type = 'text/html';
    this.ctx.body = this.ctx.helper.htmlFormat(html);
  }

  async app() {
    await this.ctx.renderClient('system_status/system_status.js', {
      locale: language,
    });
  }
}

module.exports = HomeController;
