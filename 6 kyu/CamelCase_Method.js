String.prototype.camelCase=function(){
    let words = this.split(" ");
    words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return words.join("");
}