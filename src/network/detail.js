import { request } from './request.js'

export function detailRequest(iid) {
    return request({
        url: '/detail',
        params: {
            iid: iid
        }
    })
}

export class detailGoods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class detailShop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

export class detailParam {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}

export function detailRecommend() {
    return request({
        url: '/recommend'
    })
}