import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
    Prism,
});

createApp(App).use(router).use(ElementPlus).use(VMdPreview).mount('#app')
