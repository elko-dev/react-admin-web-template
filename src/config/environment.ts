const key: string | undefined = process.env.REACT_APP_ENV;

type urlOptions = {
    [key: string]: string
}
const urlMap: urlOptions = {
    'local': 'https://freethrow-api-dev.herokuapp.com',
    'dev': 'https://isolation-pool-api-dev.herokuapp.com/',
    'stage': 'https://isolation-pool-api-stage.herokuapp.com/',
    'prod': 'https://isolation-pool-api-prod.herokuapp.com/'
}


export const environment = {

    apiBase: getUrl(),
};

function getUrl(): string{
    if(!key){
        console.error('REACT_APP_ENV variable was undefined.  We need this to select the correct environment specific variables');
        process.exit(1);
    }
    console.log(key);
    return urlMap[key];
}
