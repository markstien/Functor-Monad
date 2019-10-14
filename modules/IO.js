import {compose} from "./environment/environment";

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

export {IO};
