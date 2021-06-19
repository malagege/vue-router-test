import axios from 'axios';

function getUser( param,callback){
    axios.get('https://randomuser.me/api/').then((result)=>{
        console.log(result.data.results[0])
        callback('',result.data.results[0])
    }).catch((error)=> callback(error,null) )
}


export {
    getUser
}