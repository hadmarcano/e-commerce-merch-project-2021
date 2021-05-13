import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleaddress = (address) => {
  const [map, setMap] = usestate({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=[YOUR_API_KEY]
`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
    return map;
  }, []);

  return map;
};

export default useGoogleaddress;
