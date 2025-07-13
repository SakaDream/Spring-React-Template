import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authConfig } from '../authConfig';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export const Callback: React.FC = () => {
  const [token, setToken] = useState<TokenResponse | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const storedState = sessionStorage.getItem('oauth2_state');

    if (code && state === storedState) {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: authConfig.redirectUri,
        client_id: authConfig.clientId,
        code_verifier: sessionStorage.getItem('pkce_verifier') || '',
      });

      axios
        .post<TokenResponse>(authConfig.tokenEndpoint, body, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          setToken(res.data);
          console.log('Access token:', res.data.access_token);
        })
        .catch((err) => {
          console.error('Token error:', err);
        });
    }
  }, []);

  return (
    <div>
      <h2>OAuth2 Callback</h2>
      {token ? <pre>{JSON.stringify(token, null, 2)}</pre> : <p>Retrieving token...</p>}
    </div>
  );
};
