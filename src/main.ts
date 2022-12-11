import { createApp } from 'vue'
import { OButton, OIcon, Config } from '@oruga-ui/oruga-next'
import './style.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'

import XButton from './components/XButton.vue'
import { Plugin as XConfig } from './components/config'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

import App from './App.vue'

const app = createApp(App)
app.component("vue-fontawesome", FontAwesomeIcon);
app.component("XButton", XButton)
app.use(XConfig, {
    iconPack: "fas",
    iconComponent: "vue-fontawesome",
    button: {
        override: true,
        transformClasses: (appliedClasses) => {
            return appliedClasses.replace(/--/g, '-')
        },
        rootClass: {
            override: true,
            class: 'btn',
        },
        variantClass: 'btn-',
        // For example using Bootstrap you may want to apply
        // variants to buttons only when the element is not outlined
        // variantClass: (variant, context) => {
        //     if (!context.props.outlined) {
        //        return `btn-${variant}`
        //     }
        // },
        outlinedClass: 'btn-{variant}-outlined',
        invertedClass: 'btn-{variant}-inverted',
        disabledClass: 'btn-disable',
        labelClass: 'btn-label',
        sizeClass: 'btn-',
    },
    icon: {
        override: true,
    }
})
app.component("o-icon", OIcon)
app.use(Config, {
    iconPack: "fas",
    iconComponent: "vue-fontawesome",
    icon: {
        override: true,
    }
})
app.mount('#app')
