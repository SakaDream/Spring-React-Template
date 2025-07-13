export const authConfig = {
    clientId: 'react-client',
    authorizationEndpoint: 'http://localhost:9000/oauth2/authorize',
    tokenEndpoint: 'http://localhost:9000/oauth2/token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid',
};
