import Geolocation from '@react-native-community/geolocation';
export const currentLocation = () => {
    Geolocation.getCurrentPosition(info => {
        return info
        
    
        
    });
}