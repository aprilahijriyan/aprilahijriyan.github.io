import VueGoodLinks from 'vue-good-links';
import 'vue-good-links/dist/vue-good-links.css';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ Vue }) => {
  Vue.use(VueGoodLinks);
}
