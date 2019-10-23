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
const [Container, Maybe, Left, Right, either, IO, untils]=fmDeconstruction;
```
或者直接使用fm,：
```javascript
fm.Container.of(2)
```

### 文档：

###### 声明：笔者把存放值的概念（比如态射）统统称为容器（这不一定正确，只是为了好理解）。

容器：

[Container](#Container)

Maybe

Left

Right

IO

可用的函数式方法：

either

join

chain

id

trace

liftA2

liftA3



### Container
<span id="Container"></span>

定义一个值：

```javascript
Container.of(2)
```

使用一个值：

```
Container.of(2).map();
```

