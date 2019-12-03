import request from '../utils/request.js'


/**
 * 获取全部依赖安装工具
 * @param params
 * @returns {AxiosPromise}
 */
export function dependentSupport(params) {
    return request({
        url:  '/dependent_support',
        method: 'get',
        params: params
    })
}


/**
 * 获取全部仓库
 * @param params
 * @returns {AxiosPromise}
 */
export function repositories(params) {
    return request({
        url:  '/repositories',
        method: 'get',
        params: params
    })
}


/**
 * 删除仓库
 * @param params
 * @returns {AxiosPromise}
 */
export function destroy(params) {
    return request({
        url:  '/repository/delete',
        method: 'get',
        params: params
    })
}



/**
 * 编辑
 * @param params
 * @returns {AxiosPromise}
 */
export function create(params) {
    return request({
        url:  '/repository/create',
        method: 'post',
        data: params
    })
}
