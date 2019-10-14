import {curry} from "./environment/environment";
import {of,map,isNothing} from "./environment/Functor";
const Maybe=function (x) {
    this.value=x;
};
Maybe.of=function (x) {
    return of.call(this,x);
};
Maybe.prototype.isNothing=function () {
    return isNothing.call(this);
};
Maybe.prototype.map=function (f) {
    return map.call(this,f);
};
Maybe.prototype.maybe=curry(function (x,f,m) {
    return m.isNothing()?x:f(m.value);
});
export {Maybe};