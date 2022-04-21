import { request } from './request.js'

export function detailRequest(iid) {
    return request({
        url: '/detail',
        params: {
            iid: iid
        }
    })
}