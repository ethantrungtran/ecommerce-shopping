import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

//element-ui
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//fortawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faTshirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

//use element-ui
Vue.use(ElementUi);

//config fort awesome
library.add(faUserSecret, faTshirt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
