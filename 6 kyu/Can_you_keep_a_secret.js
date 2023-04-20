function createSecretHolder(secret) {
    let _secret = secret;

    return {
        setSecret: (secret) => { _secret = secret },
        getSecret: () => _secret
    }
}