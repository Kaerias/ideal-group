import { RouteConfig } from "vue-router";

const Test = (resolve: any) => require(["@/modules/Test.vue"], (m: any) => resolve(m.default));


const module: RouteConfig = {
    path: '/test',
    component: Test,
};

export default module;
