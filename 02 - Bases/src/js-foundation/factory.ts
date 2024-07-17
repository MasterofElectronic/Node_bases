
interface BuildMakerPersonOptions {
    uuid: () => string;
    getAge: (birthday: string) => number;
}

interface PersonOptions {
    name: string,
    birthday: string
}

export const buildMakePerson = ({uuid, getAge}: BuildMakerPersonOptions) => {
    return ({name, birthday}: PersonOptions) => {

    

        return {
            id: uuid(),
            name: name,
            birthday: birthday,
            age: getAge(birthday)
        }
    
        
    
    }
}
