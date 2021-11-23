import { api } from 'boot/axios'
import f from "../../functions/index"

// ROTAS NÃO AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO COM A IMPORTAÇÃO DA VARIAVEL api
export function createUser ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
        api.post('/authentication/registration', data).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function loginUser ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
        api.post('/authentication/login', data).then((res) => {
            window.localStorage.setItem('marketplace_token', res.data.token)
            commit('SET_TOKEN', res.data.token)
            commit('SET_USER_DATA', res.data.user)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS NÃO AUTENTICADAS

// ROTAS AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO COM A IMPORTAÇÃO DA VARIAVEL f
export function getUser ({ commit }, { id }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get(`/users/${id}`).then((res) => {
            commit('SET_USER_DATA', res.data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function getUsers ({ commit }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get('/users/list').then((res) => {
            commit('SET_LIST_USERS', res.data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS AUTENTICADAS