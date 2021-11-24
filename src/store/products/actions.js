import f from "../../functions/index"

// ROTAS AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO COM A IMPORTAÇÃO DA VARIAVEL f
export function createProduct ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().post('/products', data).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function getProduct ({ commit }, { id }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get(`/products/${id}/details`).then((res) => {

            const data = {
                id: res.data.user.id,
                name: res.data.user.name,
                description: res.data.user.description,
                price: res.data.user.price,
                createdAt: res.data.user.createdAt,
                updatedAt: res.data.user.updatedAt
            }

            commit('SET_PRODUCT_DATA', data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function getProducts ({ commit }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get('/products/list').then((res) => {
            commit('SET_LIST_PRODUCTS', res.data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

// export function patchProduct ({ dispatch }, { id, data }) {
//     return new Promise((resolve, reject) => {
//         f().axiosToken().patch(`/users/${id}`, data).then((res) => {
//             resolve(res)    
//         }).catch((error) => {
//             reject(error.response)
//         })
//     })
// }
// FIM ROTAS AUTENTICADAS