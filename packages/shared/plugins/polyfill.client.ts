import 'whatwg-fetch';
import 'abortcontroller-polyfill';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

import 'intersection-observer';
import 'focus-options-polyfill';
import 'element-polyfill';
import 'url-search-params-polyfill';

export default defineNuxtPlugin(() => {
  import('smoothscroll-polyfill').then((smoothscroll) => smoothscroll.default.polyfill());
  import('focus-within').then((focus) => focus.default(document));
});
