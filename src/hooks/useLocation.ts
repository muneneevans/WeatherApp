import Geolocation from '@react-native-community/geolocation';
import {useState, useEffect} from 'react';
import {LocationInfo} from 'src/types/locationTypes';

type LocationReturnType = {
  location: LocationInfo | null;
};
const useLocation = (): LocationReturnType => {
  const [location, setLocation] = useState<LocationInfo | null>(null);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(info =>
      setLocation(info as unknown as LocationInfo),
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {location};
};

export default useLocation;
