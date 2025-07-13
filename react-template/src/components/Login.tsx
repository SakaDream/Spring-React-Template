import { authConfig } from '../authConfig';
import { generatePkceChallenge } from '../utils/pkce';

export const Login = () => {
    const login = async () => {
        const { code_verifier, code_challenge } = await generatePkceChallenge();

        const state = crypto.randomUUID();
        sessionStorage.setItem('oauth2_state', state);
        sessionStorage.setItem('pkce_verifier', code_verifier);

        const params = new URLSearchParams({
            response_type: 'code',
            client_id: authConfig.clientId,
            redirect_uri: authConfig.redirectUri,
            scope: authConfig.scope,
            state,
            code_challenge_method: 'S256',
            code_challenge,
        });

        window.location.href = `${authConfig.authorizationEndpoint}?${params.toString()}`;
    };

    return <button onClick={login}>Login with Spring</button>;
};
