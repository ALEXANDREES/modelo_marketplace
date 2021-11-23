import axios from 'axios'

const f = () => {
  const axiosToken = () => {
    let headers = { 'Content-Type': 'application/json' }
    const tokenUser = window.localStorage.getItem('marketplace_token')
    let token = ''
    if (tokenUser) {
      token = 'Bearer ' + tokenUser
      headers = { 'Authorization': token, 'Content-Type': 'application/json' }
    }
    axios.create({
      baseURL: 'http://localhost:3000/',
      headers: headers
    })
    axios.defaults.baseURL = 'http://localhost:3000/'
    axios.defaults.headers.common['Authorization'] = token
    axios.defaults.headers.post['Content-Type'] = 'application/json'

    return axios
  }

  return { axiosToken }
}

export default f