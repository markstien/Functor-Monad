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

####容器：

[Container](#Container)

[Maybe](#Maybe)

[Left](#Left)

[Right](#Right)

[IO](#IO)




#### untils：


[maybe](#maybe)

[either](#either)

[join](#join)

[chain](#chain)

[id](#id)

[trace](#trace)

[liftA2](#liftA2)

[liftA3](#liftA3)



### Container
<span id="Container"></span>


使用一个值：

```javascript
Container.of(2).map(function(e) {
  console.log(e);
});
```

在Container中使用别的容器：

```javascript
Container.of(2).map(R.add).ap(Container.of(3));
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

### Left
<span id="Left"></span>


### Right
<span id="Right"></span>

### IO
<span id="IO"></span>


### maybe
<span id="maybe"></span>

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