import './assets/main.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import Primevue from "primevue/config"
import Aura from "@primevue/themes/aura"
import App from './App.vue'
import router from './router'
import theme from 'tailwindcss-primeui/src/theme'
import preset from 'tailwindcss-primeui/src/utils/preset'

const app = createApp(App)

app.use(Primevue,{
    theme:{
        preset:Aura,
    }
})
app.use(router)

app.mount('#app')
