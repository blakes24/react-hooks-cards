import { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const useAxios = (url) => {
	const [ items, setItems ] = useState([]);

	async function addItem() {
		const response = await axios.get(url);
		setItems((items) => [ ...items, { ...response.data, id: uuid() } ]);
	}
	return [ items, addItem ];
};

export default useAxios;
