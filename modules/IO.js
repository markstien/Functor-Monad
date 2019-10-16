import {compose} from "./environment/environment";
import {chain} from "./environment/Functor";

const IO=function (f) {
    this.do=f;
};
IO.of=function (x) {
    return new IO(function () {
        return x;
    })
};
IO.prototype.map=function (f) {
    return new IO(compose(f,this.do));
};
IO.prototype.join=function () {
  return this.do();
};
IO.prototype.chain=function (f) {
    return chain.call(this,f);
};

export {IO};
