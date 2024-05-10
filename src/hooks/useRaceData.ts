import { useQuery } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';

// fetch data from API and return it to the component
const useRacesData = () => {
    return useQuery('races', fetchRacesData);
};

export default useRacesData;
