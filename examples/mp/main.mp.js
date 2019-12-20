import Vue from "vue";
import App from "../App.vue";
import store from "../store";
import KBoneUI from "../../src/";
import { sync } from "vuex-router-sync";
import Home from "../view/homepage/Index.vue";
import Button from "../view/components/button/button.vue";
import Flex from "../view/components/flex/flex.vue";
import Form from "../view/components/form/form.vue";
import Slider from "../view/components/form/slider.vue";
import ActionSheet from "../view/components/actionsheet/actionsheet.vue";
import Dialog from "../view/components/dialog/dialog.vue";
import Toast from '../view/components/toast/toast.vue'
import Progress from '../view/components/progress/progress.vue'
import Picker from '../view/components/picker/picker.vue'
import Toptips from '../view/components/toptips/toptips.vue'
import Swiper from '../view/components/swiper/swiper.vue'

import Router from "vue-router";
import routeConfig from "../router/routeConfig";

Vue.use(Router);
Vue.use(KBoneUI);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/(home|index)?",
      name: "Index",
      component: Home
    },
    {
      path: routeConfig.pages.button,
      name: "Button",
      component: Button
    },
    {
      path: routeConfig.pages.flex,
      name: "Flex",
      component: Flex
    },
    {
      path: routeConfig.pages.form,
      name: "Form",
      component: Form
    },
    {
      path: routeConfig.pages.slider,
      name: "Slider",
      component: Slider
    },
    {
      path: routeConfig.pages.actionsheet,
      name: "ActionSheet",
      component: ActionSheet
    },
    {
      path: routeConfig.pages.dialog,
      name: "Dialog",
      component: Dialog
    },
    {
        path: routeConfig.pages.toast,
        name: "Toast",
        component: Toast
    },
    {
        path: routeConfig.pages.progress,
        name: "Progress",
        component: Progress
    },
    {
      path: routeConfig.pages.picker,
      name: "Picker",
      component: Picker
    },
    {
      path: routeConfig.pages.toptips,
      name: "Toptips",
      component: Toptips
    },
    {
      path: routeConfig.pages.swiper,
      name:"Swiper",
      component: Swiper
    }
  ]
});

export default function createApp() {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);

  sync(store, router);

  return new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
  });
}