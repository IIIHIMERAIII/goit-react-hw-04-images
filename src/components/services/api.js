import axios from "axios";


export const getDataByName = async (searchQ = "", page) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${searchQ}&page=${page}&key=31905644-34f0f3ee38c2737c3d7b24d16&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}

