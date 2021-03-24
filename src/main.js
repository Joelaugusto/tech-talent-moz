import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarker,
  faEnvelope,
  faWindowClose,
  faArrowLeft,
  faHome,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
/*import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'*/

library.add(
  faMapMarker,
  faEnvelope,
  faWindowClose,
  faArrowLeft,
  faHome,
  faUser,
  faPlus,
);

/*Vue.component('font-awesome-icon', FontAwesomeIcon)*/

createApp(App)
  .use(router)
  .mount("#app");
