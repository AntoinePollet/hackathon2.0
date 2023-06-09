
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#EAEAEA',
        surface: '#F2F2F2',
        primary: '#E53F49',
        contrast: '#FFFF00',
        'primary-darken-1': '#CC0029',
        secondary: '#5B98D2',
        'secondary-darken-1': '#2D344D',
        lightgray: '#213547',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify({
    components,
    directives,
    defaults: {
        VBtn: {
            color: 'primary',
            variant: 'flat',
            rounded: 'xl'
        },
        VSelect: {
            color: 'primary',
            variant: 'flat',
            rounded: 'xl',
            bgColor: 'transparent',
        }
    },
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
})
