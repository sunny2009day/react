import  actionTypes from '../constants/store'
//import * 导出的是module类型，不是想要导出的对象
export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

 

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function rm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}