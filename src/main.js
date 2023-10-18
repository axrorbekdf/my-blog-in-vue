import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import uiComponents from '@/ui-components'

const app = createApp(App)

app.use(router)
uiComponents.map((component) => {
    app.component(component.name, component);
})

app.mount('#app')
