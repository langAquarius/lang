/**
 * 请求数据并返回数据
 */
//import axios from 'axios';   
export const getCarBrandData = () => {
    return fetch('https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1530691504150').then(res => res.json())
}

export const getMasterBrandData = (id) => {
    return fetch('https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=' + id).then(res => res.json())
}

export const getCarDetailData = (id) => {
    return fetch("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=" + id).then(res => res.json())
}

export const getPictureData = (id) => {
    return fetch(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&_1531531624062`).then(res => res.json())
}

export const getPictureAllData = (id, page) => {
    return fetch(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=${id}&Page=${page}&PageSize=30&_1531053990902`).then(res => res.json())
}

export const getPictureColorData = (id) => {
    return fetch(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}&_1531378798780`).then(res => res.json())
}

export const getPriceData = (id) => {
    return fetch(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${id}&cityId=201&_1531122335819`).then(res => res.json())
}

export const getProvinceData = () => {
    return fetch('https://baojia.chelun.com/v1-city-alllist.html?_1531363507147').then(res => res.json())
}

export const getCityData = (id) => {
    return fetch(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${id}&_1531373699623`).then(res => res.json())
}