import axios from 'axios'
import * as config from 'config'

const buildUrl = uri => `${config.baseURL}${uri}`

const get = (uri, config) => axios.get(buildUrl(uri), config)
const put = (uri, data, config) => axios.put(buildUrl(uri), data, config)
const deleteRequest = (uri, config) => axios.delete(buildUrl(uri), config)
const post = (uri, data, config) => axios.post(buildUrl(uri), data, config)

const Http = { get, put, post, deleteRequest }

export default Http
