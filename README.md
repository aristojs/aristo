# classlayer
HTML class name attribute joining on steroids 

# How to use it / examples
You can do whatever you want :P

```js
console.log(cl({ class1: true, class2: true, class3: false, class4: true }))
// > "class1 class2 class4"

var myClass2 = 'class2';
console.log(cl('class1', true, myClass2, true, 'class3', false ))
// > "class1 class2"

var myClass1 = 'class1'
var myClass3 = 'class3'
var result = cl('.',
  'class5', true, 
  [{ 
    class1: true, 
    class2: true, 
    class3: false, 
    class4: true 
  }, myClass3, true], 
   myClass1, false)
console.log(result)
// > ".class5.class2.class4.class3"
```

# Demo environment
[jsbin](http://jsbin.com/gukanamode/edit?js,console)
