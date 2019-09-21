import Instafeed from 'instafeed.js';

if (module.hot) {
  module.hot.accept();
}

const TOKEN = '208129664.1677ed0.d63699afca764b468bdee5e7cb21f467';
const API_KEY = '895c7f8d8cbe46b3871664e796234d73';
const feed = new Instafeed({
  get: 'user',
  userId: 208129664,
  clientId: API_KEY,
  resolution: 'standard_resolution',
  accessToken: TOKEN,
  limit: 9,
  sortBy: 'most-liked',
  template: '<div class="img-container"><a href="{{link}}"><div class="img-display" style="background-image:url({{image}})"></div></a></div>',
});
feed.run();
