const Singleton = function() {
    if (typeof Singleton.instance === 'object') {
        return Singleton.instance;
    }
    Singleton.instance = this;
    return this;
};