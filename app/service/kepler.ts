import { Service } from 'egg';

export default class EggService extends Service {
  // 首页
  public async homeTopSellList() {
    const { data } = await this.ctx.apiCourseClient.get('/course/top-sell');
    return data.items || [];
  }
}
