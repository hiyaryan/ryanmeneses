export default {
    target: 'static',
    router: {
        base: '/ryanmeneses/pages/'
    },
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'G-KHZ0ESCDDJ'
        }]
    ],
    head: {
        title: 'Ryan Meneses',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
    },
    css: [
        '~/assets/css/global.css'
    ]
}
