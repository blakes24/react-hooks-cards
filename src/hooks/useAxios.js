import { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const useAxios = (baseUrl) => {
	const [ items, setItems ] = useState([]);

	async function addItem(appendUrl) {
		const addUrl = typeof appendUrl !== 'object' ? appendUrl : '';
		const response = await axios.get(baseUrl + addUrl);
		setItems((items) => [ ...items, { ...response.data, id: uuid() } ]);
	}
	return [ items, addItem ];
};

export default useAxios;
