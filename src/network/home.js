import { request, apiTest } from "./request";

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(){
    // return request({
    //     url:'/home/data',
    //     params:{
    //         type,
    //         page
    //     }
    // })
    return apiTest({
        url:'/student/all'
    })
}