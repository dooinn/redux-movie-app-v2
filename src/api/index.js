import { useEffect, useState } from 'react'

import Axios from 'axios';

let url = '';
const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';

const getRequest = async (url) => {
	return await Axios.get(`${url}`);
};


export const GetActor = async (id) => {
	url = `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`;
	return await getRequest(url);
};


export const GetPopularAll = async (page) => {
	url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
	return await getRequest(url)
}

