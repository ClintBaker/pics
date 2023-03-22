import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Ufwa0DSF7kgTgtq1zYksHmuxw5_pYcQi7P_7Kcnxft4'
        },
        params: {
            query: 'cars'
        },
    });

    console.log(response);
    return response;
};

export default searchImages;