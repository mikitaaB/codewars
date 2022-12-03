function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, sym) => sym.toUpperCase());
}