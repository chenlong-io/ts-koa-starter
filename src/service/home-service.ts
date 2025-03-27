/**
 * Service用来处理逻辑，返回结果给Controller
 */
class HomeService {
  hello() {
    return new Promise((resolve) => resolve('hello world'));
  }

  helloName(name) {
    return Promise.resolve({
      data: `你好，${name}!`,
    });
  }

  getPersonInfo(params) {
    return Promise.resolve({
      data: params,
    });
  }

  postTest(params) {
    return Promise.resolve({
      data: params,
    });
  }
}

const homeService = new HomeService();

export default homeService;
