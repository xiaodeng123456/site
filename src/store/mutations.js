export default {
	loading(state, status)
	{
		state.loading = status;
	},

	logged(state, status)
	{
		state.logged = status;
	},

	user(state, data)
	{
		state.user = data;
	},

	breadcrumb(state, data)
	{
		state.breadcrumb = data;
	},

	selection(state, obj)
	{	
		if (obj) {
			state.selection[obj.page]= obj.data;
		}else{

			state.selection = [];
		}
		
	},

	setCgoods(state, obj)
	{	
		for(var x in obj){
			state.cgoods.push(obj[x]);
		
		}
		
	},

	cleanCgoods(state,data){
		state.cgoods = [];
	},

	cityData(state, data)
	{
		state.cityData = data;
	}

}