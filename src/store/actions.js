export default {
	/**
	 * 登录
	 */
	login({ commit, state }, data)
	{
		window.localStorage.setItem('token', data.token);
		commit('logged', true);
		commit('user', data.user);
	},

	/**
	 * 退出登录
	 */
	logout({ commit, state })
	{
		window.localStorage.removeItem('token');
		commit('logged', false);
		commit('user', null);
	},
	/**
	* 赋值selecttion
	*/

	selection({commit, state}, obj)
	{
		commit('selection',obj);
	},

	/**
	* 赋值cgoods
	*/

	setCgoods({commit, state}, obj)
	{
		commit('setCgoods',obj);
	},

	cleanCgoods({commit,state}){
		commit('cleanCgoods', false);
	}

}