import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8520/api/'
})
export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,params){
    return instance.post(url,params,{
        transformRequest:[
            function (data){
                let str = '';
                for (let key in data)
                {
                    str += encodeURIComponent(key) + '='
                        + encodeURIComponent(data[key])
                }
                return str;
            }
        ]
    })
}