import {of} from "./environment/Functor";

const Container=function (x) {
    this.value=x;
};
Container.of=function (x) {
    return of.call(this,x);
};
Container.prototype.map=function(f){
    return Container.of(f(this.value));
};
/*Container.prototype.isNothing=function(){
    return isNothing.call(this);
};
Container.prototype.join=function(){
    return join.call(this);
};
Container.prototype.chain=function(f){
    return chain.call(this,f);
};
Container.prototype.ap=function (otherContainer) {
    return ap.call(this,otherContainer);
};*/

export {Container};