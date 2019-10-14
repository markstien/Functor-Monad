const trace=R.curry(function (tag,x) {
    console.log(tag,x);
    return x;
});
const id=function (x) {
    return x;
};

const Container=function (x) {
    this.value=x;
};
Container.of=function (x) {
    return new Container(x);
};
//(a->b)->Container a -> Container b
Container.prototype.map=function (f) {
    return Container.of(f(this.value));
};
Container.prototype.isNothing=function () {
    return (this.value===null||this.value===undefined);
};
Container.prototype.join=function () {
    return this.isNothing()?Maybe.of(null):this.value;
};
Container.prototype.chain=function (f) {
    return this.map(f).join();
};
Container.prototype.ap=function (otherContainer) {
    return otherContainer.map(this.value);
};

const Maybe=function (x) {
    this.value=x;
};
Maybe.of=function (x) {
    return new Maybe(x);
};
Maybe.prototype.isNothing=function () {
    return (this.value===null||this.value===undefined);
};
Maybe.prototype.map=function (f) {
    return this.isNothing()
        ?Maybe.of(null)
        :Maybe.of(f(this.value));
};
Maybe.prototype.join=function () {
    return this.isNothing()?Maybe.of(null):this.value;
};
Maybe.prototype.ap=function (otherContainer) {
    return otherContainer.map(this.value);
};
/*const map=R.curry(function (f,functor) {
    return functor.map(f);
});*/
const maybe=R.curry(function (x,f,m) {
    return m.isNothing()?x:f(m.value);
});

const Left=function (x) {
    this.value=x;
};
Left.of=function (x) {
    return new Left(x);
};
Left.prototype.map=function (f) {
    return this;
};
Left.prototype.ap=function (otherContainer) {
    return otherContainer.map(this.value);
};
const Right=function (x) {
    this.value=x;
};
Right.of=function (x) {
    return new Right(x);
};
Right.prototype.map=function (f) {
    return Right.of(f(this.value));
};
Right.prototype.ap=function (otherContainer) {
    return otherContainer.map(this.value);
};
const Either=R.curry(function (f,g,e) {
    switch (e.constructor) {
        case Left:return f(e.value);
        case Right:return g(e.value);
    }
});

const IO=function (f) {
    this.value=f;
};
IO.of=function (x) {
    return new IO(function () {
        return x;
    })
};
IO.prototype.map=function (f) {
    return new IO(R.compose(f,this.value));
};
IO.prototype.join = function() {
    return this.value();
};
IO.prototype.ap=function (otherContainer) {
    return otherContainer.map(this.value());
};

const join=function (mma) {
    return mma.join();
};
const chain=R.curry(function (f,m) {
    return m.map(f).join();
});

export {trace};