import axios from 'axios'

const CONFIG = {
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  /*headers: {
		'Authorization': import.meta.env.VITE_API_KEY
	}*/
}

export const api = axios.create(CONFIG)
