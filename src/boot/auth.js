import f from '../functions/index'

export default ({ router }) => {
    router.beforeEach(async (to, from, next) => {
        let isValidToken

        await f().axiosToken().get('/users/whoami').then((res) => {
            isValidToken = res.status
        }).catch((error) => {
            isValidToken = error.response.status
        })


        if (to.matched.some(rota => rota.meta.authRequired)) {
            if (isValidToken !== 401 && isValidToken === 200) {
                next()
            }
        } else {
            if (isValidToken === 200 && to.path !== '/') {
                next()
            } else if (isValidToken === 200 && to.path === '/') {
                next()
            } else if (isValidToken !== 200 && to.path === '/') {
                window.localStorage.removeItem('marketplace_token')
                window.localStorage.removeItem('marketplace-vuex')
                next()
            } else {
                window.localStorage.removeItem('marketplace_token')
                window.localStorage.removeItem('marketplace-vuex')
                next({
                    name: 'landingPage'
                })
            }
        }
    })
}