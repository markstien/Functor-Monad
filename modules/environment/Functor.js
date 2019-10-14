const of=function (x) {
    return new this(x);
};
const map=function (f) {
    return  this.isNothing()
        ?this.constructor.of(null)
        :this.constructor.of(f(this.value));
};
const isNothing=function () {
    return (this.value===null||this.value===undefined);
};
const join=function () {
    return this.isNothing()?this.constructor.of(null):this.value;
};
const chain=function (f) {
    return this.map(f).join();
};
const ap=function (otherContainer) {
    return otherContainer.map(this.value);
};

export {of,map,join,chain,ap,isNothing};