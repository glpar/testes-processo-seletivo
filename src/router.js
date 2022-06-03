import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/operators",
      name: "operators",
      component: () => import("./components/OperatorList")
    },
    {
      path: "/operators/:id",
      name: "operator-details",
      component: () => import("./components/Operator")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddOperator")
    }
  ]
});