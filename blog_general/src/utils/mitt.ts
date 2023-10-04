//引入全局组件通讯插件mitt并封装
import mitt from "mitt";
const $bus=mitt();
export default $bus;
