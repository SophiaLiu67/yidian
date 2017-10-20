
import axios from 'axios'
import { Toast } from 'mint-ui';

const actions = {
	login({commit},params){
		console.log(params)
		abc.open('客官请稍等')
		axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
			params:{
				userID:params.username,
				password:params.password,
				status:'login'
			}
		}).then((res)=>{
			if(res.data.userID){
				
				commit('changeUsername',res.data.userID)
				
			}else{
				setTimeout(()=>{
					Toast({
					  message: '登陆失败',
					  position: 'center',
					  duration: 2000
					});
				},300)
				
			}
		})
	}
}

export default actions