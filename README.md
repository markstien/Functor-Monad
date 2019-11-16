# Functor and Monad


[一个小例子](./src/index.html)

### 它是什么?

这是一个封装了几个基本的函数式容器的库。

1. 使用本库，必须了解JavaScript的函数式编程范式
2. 使用本库，必须了解函数式编程的functor与monand等概念。

### 如何使用?

```node
npm install --save fm-markstien
```
导入变量：
```javascript
const{fm}=require("fm-markstien/use");
const {Container, Maybe, Left, Right, IO, untils}=fm;
```
### 文档：

###### 声明：笔者把存放值的概念（比如态射）统统称为容器（这不一定正确，只是为了好理解）。
######       以下例子使用了ramda.js的函数式方法。（比如R.add()）

#### 容器：

[Container](#Container)

[Maybe](#Maybe)

[Left](#Left)

[Right](#Left)

[IO](#IO)




#### 函数式方法：


[maybe](#maybe)

[either](#either)


[join](#join)

[chain](#chain)



[liftA2](#liftA2)

[liftA3](#liftA3)


[id](#id)

[trace](#trace)

### Container
<span id="Container"></span>

```javascript
Container.of(2).map(function(e) {
  console.log(e);
});
```



### Maybe
<span id="Maybe"></span>


```javascript
     Maybe.of("Malkovich Malkovich").map(R.match(/a/ig));
        //=> Maybe(['a', 'a'])
     Maybe.of(null).map(R.match(/a/ig));
     //=> Maybe(null)
     Maybe.of({name: "Boris"}).map(R.prop("age")).map(R.add(10));
     //=> Maybe(null)
     Maybe.of({name: "Dinah", age: 14}).map(R.prop("age")).map(R.add(10));
     //=> Maybe(24)   
```

### Left  &&  Right
<span id="Left"></span>


```javascript
    Right.of("rain").map(function(str){ return "b"+str; });
    // Right("brain")
    Left.of("rain").map(function(str){ return "b"+str; });
    // Left("rain")
    Right.of({host: 'localhost', port: 80}).map(R.prop('host'));
    // Right('localhost')
    Left.of("rolls eyes...").map(R.prop("host"));
    // Left('rolls eyes...')
```

### IO
<span id="IO"></span>

```javascript
    // io_window_ :: IO Window
    const io_window = new IO(function(){ return window; });
    const action=io_window.map(function(win){ return win.innerWidth });
    //执行容器存储的函数
    action.do();
    // 1080  宽度
```

#### 容器的几个方法

#####  of()
用于初始化一个容器
```javascript
    Container.of(2)
```

##### map(f)

+ **f** {_function_} 对容器值进行操作的函数

调用容器的值
```javascript
Container.of(2).map(function(e) {
  console.log(e);
})
//2
```

##### join()
剥离一层容器

```javascript
    const mmo = Maybe.of(Maybe.of("nunchucks"));
    // Maybe(Maybe("nunchucks"))
    mmo.join();
    // Maybe("nunchucks")
```

##### chain()

相当于在map 后,紧跟着调用 join



##### ap(otherContainer)

这个我也讲不明白....23333

```javascript
Container.of(R.add)
        .ap(Container.of(2))
        .ap(Container.of(2));
//Container {value: 4}
```


### maybe(x,f,m)
<span id="maybe"></span>

    这样就可以要么返回一个静态值,要么继续愉快地在没有 Maybe 的情况下完成交易。 maybe 使我们得以避
    免普通 map 那种命令式的 if/else 语句： if(x !== null) { return f(x)
    } 。
    
参数：

+ **x** {_string_} 容器值是null时的返回值
    
+ **f** {_function_} 要对容器进行的操作
    
+ **m** {_functor_}  容器 
    
    
```javascript
    
    untils.maybe(
            "Nothing!",
            function (e) {console.log(e);}
            ,Maybe.of(null)
        );
    //"Nothing!"
    untils.maybe(
            "This will not be shown",
            function (e) {console.log(e);}
            ,Maybe.of("I am the thing to be shown.")
        );
    //"I am the thing to be shown."
```
### either(f,g,e)
<span id="either"></span>


用于错误处理

参数：

+ **f** {_function_} 程序出错时的处理
+ **g** {_function_} 正常的处理
+ **e** {_object_}  容器 

```javascript
untils.either(
        function (e) {console.log("Wrong",e)},
        function (e) {console.log("Normal",e)},
        Right.of("Normal.")
    );
//Normal Normal

untils.either(
        function (e) {console.log("Wrong",e)},
        function (e) {console.log("Normal",e)},
        Left.of("Wrong!")
    );

//Wrong Wrong!
```
### join
<span id="join"></span>
剥离一层容器

容器方法join的函数式写法

参数：
+ **mma** {_容器_} 
```javascript
    const safeProp=R.curry(function (x,obj) {
        return new Maybe(obj[x]);
    });
    const getName=R.compose(console.log, untils.join, safeProp("name"));
    getName({name:"Tom"});
    // Tom
```


### chain
<span id="chain"></span>

容器方法chain 的函数式写法

```javascript
const safeProp=R.curry(function (x,obj) {
        return new Maybe(obj[x]);
    });
    const safeHead=safeProp(0);
    const firstAddressStreet =R.compose(
        console.log,
        untils.join,
        R.map(safeProp('street')),
        untils.join,
        R.map(safeHead),
        safeProp('addresses')
    );
    firstAddressStreet({addresses: [{street: {name: 'Mulburry', number: 8402}, postcode: "WC2N" }]});
    // Maybe({name: 'Mulburry', number: 8402})
    
    const firstAddressStreet2 =R.compose(
            console.log,
            untils.chain(safeProp('street')),
            untils.chain(safeHead),
            safeProp('addresses')
        );
    
    firstAddressStreet2({addresses: [{street: {name: 'Mulburry', number: 8402}, postcode: "WC2N" }]});
    //Maybe({name: 'Mulburry', number: 8402})
```

### id(x)
<span id="id"></span>

原封不动返回参数x


### trace
<span id="trace"></span>

用于编程时排错，相当于“断点”。

```javascript
const toLower=function (str) {
        return str.toLowerCase();
    };
    const toUpper=function (str) {
        return str.toUpperCase();
    };

    const mix=R.compose(
        untils.trace("After toUpper:"),
        R.map(toUpper),
        untils.trace("After split:"),
        R.split("_"),
        untils.trace("After toLower:"),
        toLower
    );
    mix("World_Wide");
    
    //After toLower: world_wide
    //After split: (2) ["world", "wide"]
    //After toUpper: (2) ["WORLD", "WIDE"]
```


### liftA2(f,functor1,functor2)
<span id="liftA2"></span>

容器方法ap的函数式写法

参数：
+ f {function} 处理容器值的方法

+ functor1 {function} 一个容器

+ functor2 {function} 另一个容器

```javascript
untils.liftA2(R.add,Container.of(2),Container.of(2));

//Container {value: 4}
```
### liftA3
<span id="liftA3"></span>

容器方法ap的函数式写法

参数：
+ f {function} 处理容器值的方法

+ functor1 {function} 一个容器

+ functor2 {function} 另一个容器

+ functor3 {function} 第三个容器

````javascript
    const signIn=R.curry(function (username,password,rememberMe) {
        //do something...
        console.log(username,password,rememberMe);
    });

    untils.liftA3(signIn,Container.of("Tom"),Container.of("123"),Container.of(false));
    // Tom 123 false
````


### 开源协议  

---

MIT