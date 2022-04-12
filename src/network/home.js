import { request } from './request.js'

export function homeRequest() {
    return request({
        url: '/home/multidata'
    })
}