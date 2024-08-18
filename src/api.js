import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID hzXaat3vbwQU5JiZa-BdqITfZ02gZXTiBb-htMoKmz4',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;