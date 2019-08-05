import Axios   from 'axios';
import $store  from '@/store';
import $router from '@/router';


const $http = Axios.create({
	baseURL: process.env.API_URL
});

// Before request
$http.interceptors.request.use(
    config => {
        $store.commit('loading', true);
        var token = window.localStorage.getItem('token');
        if (token)
        {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        $store.commit('loading', false);
        return Promise.reject(error);
    }
);

// After request
$http.interceptors.response.use(
    response => {
        $store.commit('loading', false);

        let data = response.data;
        console.log(data)
        switch (data.status_code)
        {
			// Success
			case 200:
				return data;

			// Error
			case 400:
				return new Promise(() => {});
            // No access
            case 401:
                $store.dispatch('logout');
                $router.replace('/login?redirect=' + $router.currentRoute.fullPath);
                return new Promise(() => {});
			// 404
			case 404:
			// Fail
            case 500:

			// not logged
            case 100:
                // data.message !== '' && iView.Message.error({ content: data.message, duration: 3 });
                // $store.dispatch('logout');
                // $router.replace('/login?redirect=' + $router.currentRoute.fullPath);
				// return new Promise(() => {});
            default:
				return new Promise(() => {});
        }
    },
    error => {
       let data = error.response
       alert(data.data.message?data.data.message:"系统异常");
        //$store.commit('loading', false);
        return Promise.reject(error);
    }
);

export default $http;