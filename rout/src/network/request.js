import axios from "axios";
import {toRaw} from "@vue/reactivity";

const instance = axios.create({
    baseURL:'http://localhost:8520/api/'
})
export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,params){
    params=toRaw(params)
    return instance.post(url,params,{
        transformRequest:[
            function (data){
                let str = '';
                for (let key in data)
                {
                    str += encodeURIComponent(key) + '='
                        + encodeURIComponent(data[key]) + '&'
                }
                console.log(str);
                return str;
            }
        ],
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
}