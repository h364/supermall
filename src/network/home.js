import { request } from './request.js'

export function homeRequest() {
    return request({
        url: '/home/multidata'
    })
}

export function homeGoods(type,page){
    return request({
        url: '/home/data',
        params: {
            type: type,
            page: page
        }
    })
}