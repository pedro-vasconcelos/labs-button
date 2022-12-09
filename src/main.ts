import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'
import './style.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

import App from './App.vue'

const app = createApp(App)
app.component("vue-fontawesome", FontAwesomeIcon);
app.use(Oruga, {
    iconPack: "fas",
    iconComponent: "vue-fontawesome",
    button: {
        override: true,
        rootClass: 'btn',
        variantClass: 'btn-',
        outlinedClass: 'btn-outlined-',
        invertedClass: 'btn-inverted-',
        disabledClass: 'btn-disable',
        labelClass: 'btn-label',
        sizeClass: 'btn-',
    },
    icon: {
        override: true,
    }
}).mount('#app')
