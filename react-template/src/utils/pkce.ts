export async function generatePkceChallenge() {
    const code_verifier = base64UrlEncode(crypto.getRandomValues(new Uint8Array(32)));
    const code_challenge = await sha256(code_verifier);
    return { code_verifier, code_challenge };
}

function base64UrlEncode(array: Uint8Array) {
    let binary = '';
    for (let i = 0; i < array.length; i++) {
        binary += String.fromCharCode(array[i]);
    }
    return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

async function sha256(verifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return base64UrlEncode(new Uint8Array(hashBuffer));
}
