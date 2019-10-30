# Functor and Monad



### 它是什么?

这是一个封装了几个基本的函数式容器的库。

1. 使用本库，必须了解JavaScript的函数式编程范式
2. 使用本库，必须了解函数式编程的functor与monand等概念。

### 如何使用 ?



引入打包好的文件：

```html
<script src="dist/fm.js"></script>
```

导入变量：
```javascript
const [Container, Maybe, Left, Right, IO, untils]=fmDeconstruction;
```
或者直接使用fm,：
```javascript
fm.Container.of(2)
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

#####  of
用于初始化一个容器
```javascript
    Container.of(2)
```

#### map(f)

·f{_function_} 对容器值进行操作的函数

调用容器的值
```javascript
Container.of(2).map(function(e) {
  console.log(e);
})
//2
```

#### join
剥离一层容器

```javascript
    const mmo = Maybe.of(Maybe.of("nunchucks"));
    // Maybe(Maybe("nunchucks"))
    mmo.join();
    // Maybe("nunchucks")
```

### maybe(x,f,m)
<span id="maybe"></span>

    这样就可以要么返回一个静态值,要么继续愉快地在没有 Maybe 的情况下完成交易。 maybe 使我们得以避
    免普通 map 那种命令式的 if/else 语句： if(x !== null) { return f(x)
    } 。
    
参数：

·x{_string_} 容器值是null时的返回值
    
·f{_function_} 要对容器进行的操作
    
·m{_functor_}  容器 
    
    
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
### either
<span id="either"></span>

### join
<span id="join"></span>

### chain
<span id="chain"></span>

### id
<span id="id"></span>

### trace
<span id="trace"></span>

### liftA2
<span id="liftA2"></span>

### liftA3
<span id="liftA3"></span>


<font color=gray size=5>color=gray</font>