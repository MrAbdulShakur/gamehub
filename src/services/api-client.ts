import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ec98e946bd2e4a80ae85fb07ca917ebf'
	}
});