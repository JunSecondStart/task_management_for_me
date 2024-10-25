import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://127.0.0.1:8001',  // FastAPIのURL
    baseURL: "http://127.0.0.1:8888/fastAPI_sample/items/",  // FastAPIのURL
});

export const read_items = () => api.get('/items/');
// export const getItem = (id) => api.get(`/items/${id}`);
export const create_item = (item) => api.post('/items/', item);
export const update_item = (id, item) => api.put(`/items/${id}`, item);
export const delete_item = (id) => api.delete(`/items/${id}`);
