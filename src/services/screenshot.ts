import { apiRequest } from '@/utils/axios';

export default {
  async screenshot(targetUrl: string): Promise<string> {
    const {
      data: { imageUrl },
    } = await apiRequest.post('/puppeteer/screenshot/create', {
      targetUrl,
    });
    return imageUrl;
  },
};
