//import getAgePluguin from 'get-age';

export const getAge = (birthday: string) => {
    if (!birthday) return null;
    
    return new Date().getFullYear() - new Date(birthday).getFullYear();
    //return getAgePluguin(birthday); 
}

