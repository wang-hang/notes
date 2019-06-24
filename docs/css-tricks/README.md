# css tricks  

## 水平居中  

### 子元素是是非block元素

```css{4,10}
.container{
   width: 500px;
   height: 500px;
   text-align:center;
}

.box{
  width:100px;
  height:100px;
  display:inline-block
}
```

### 子元素是block元素  

```css{9}
.container{
   width: 500px;
   height: 500px;
}

.box{
  width:100px;
  height:100px;
  margin: 0 auto;
}
```

### 通用  

```css{4,5}
.container{
   width: 500px;
   height: 500px;
   display: flex;
   justify-content: center;
}

.box{
  width:100px;
  height:100px;
}
```

## 垂直居中  

### 通用  

```css{4,5}
.container{
   width: 500px;
   height: 500px;
   display: flex;
   align-items: cetner;
}

.box{
  width:100px;
  height:100px;
}
```

## 垂直水平居中  

### 容器元素和子元素宽高不确定  

```css {4,5}
.container{
   display: flex;
   align-items: cetner;
   justify-content: cetner;
}

.box{
}

```

### 子元素宽高确定  

```css {}
// 方案1
.container{
  width: 500px;
  height: 500px;
  position: relative;
}

.box{
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
// 方案2
.container{
  width: 500px;
  height: 500px;
  position: relative;
}

.box{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50px, -50px)
}
```
