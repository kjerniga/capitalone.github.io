---
layout: post
title: "Twelve ES6 Features for Enterprise JavaScript Developers"
date: 2016-04-18 13:00:00
author: Azat Mardan
tags: [ES6, JavaScript]
category: blog
excerpt: Do you know what ES6 is yet? It's a new JavaScript standard! If you're an enterprise JavaScript developer who hasn't used ES6 yet (officially called ES2015 or ECMAScript 2015), then proceed to upgrade your skills with the first significant update to the language since 2009. This essay will give you a quick introduction to twelve ES6 features, the standard that is changing the most popular programming language in the world—JavaScript.
images:
  malaysia: /assets/posts/es6-enterprise-features/malaysia.jpeg
  es6-1: /assets/posts/es6-enterprise-features/es6-1.png
  es6-2: /assets/posts/es6-enterprise-features/es6-2.png
  babel: /assets/posts/es6-enterprise-features/babel.png
---

[![Balok, Malaysia]({{ site.baseurl | append: page.images.malaysia }})](https://unsplash.com/photos/OWwK_0_EnxY)
Image from [https://unsplash.com/eutahm](https://unsplash.com/eutahm)

Do you know what ES6 is yet? It's a new JavaScript standard! If you're an enterprise JavaScript developer who hasn't used ES6 yet (officially called ES2015 or ECMAScript 2015), then proceed to upgrade your skills with the first significant update to the language since 2009. This essay will give you a quick introduction to twelve ES6 features, the standard that is changing the most popular programming language in the world—JavaScript.

<!--more-->

In no particular order, here's the list of my top twelve favorite ES6 features:

1. Default Parameters
2. Rest and Spread Parameters
3. Template Literals
4. Multi-line Strings
5. Destructuring Assignment
6. Enhanced Object Literals
7. Arrow Functions
8. Promises
9. Block-Scoped Constructs: Let and Const
10. Classes
11. Modules
12. For of Comprehensions

In the past, many enterprise developers have doubted whether JavaScript could serve as a workable programming language; instead favoring languages such as Java, Python or C++. It’s fair to say, early JavaScript had its [quirks](http://archive.oreilly.com/pub/a/javascript/excerpts/javascript-good-parts/bad-parts.html), but ES6 represents a significant move forward for JavaScript.

Let’s look at the history of the language - those who don't know the history can't make it. A brief JavaScript timeline:

* **1995**: JavaScript is born as LiveScript at Netscape
* **1997**: ECMAScript standard is established by European Computer Manufacturers Association (ECMA)
* **1999**: ES3 comes out and IE5 is all the rage; the most popular debugging method is `alert(error);`
* **2000-2005**: `XMLHttpRequest`, a.k.a. AJAX, gains popularity in app such as Outlook Web Access (2000) and Oddpost (2002), Gmail (2004) and Google Maps (2005)
* **2009**: ES5 comes out (this is what most of us use now) with `forEach`, `Object.keys`, `Object.create` (specially for [Douglas Crockford](http://www.crockford.com)), and standard JSON
* **2015**: ES6/ECMAScript2015 comes out fixing a lot of bad parts
* **2016**: ES7 is on the [horizon](http://www.2ality.com/2015/11/tc39-process.html)

## 1. Default Parameters in ES6

When we write modules, we need to account for cases when the arguments will be omitted. In other words, good modules must be smart enough to have default values for parameters. In ES5, you would write something like the code below, which uses the logical OR (`||`):

```js
var getAccounts = function(limit) {
  var limit = limit || 10
  ...
}

var link = function (height, color, url) {
	var height = height || 50
	var color = color || 'red'
	var url = url || 'http://capitalone.io'
	...
}
```

These statements work well except for the edge cases. For example, if the value is 0 - and because 0 is falsy in JavaScript - the condition defaults to the hard-coded value instead of becoming the value itself, as you might want in some cases. Of course, who needs 0 as a value (#sarcasmfont), so we just ignored this flaw and used the logic OR anyway...

Or maybe event an if/else condition to check for the undefined value:

```js
var getAccounts = function(limit) {
  if (typeof limit == 'undefined')  limit = 10
  ...
}
```

No more! In ES6, we can put the default values right in the signature of the functions like so:

```js
var getAccounts = function(limit = 10) {
  ...
}
var link = function(height = 50, color = 'red', url = 'http://capitalone.io') {
  ...
}
```

This is not only uses fewer lines of code, but has increased readability as well. By the way, this syntax is similar to Ruby and Python!

## 2. Rest and Spread Parameters in ES6

If you have ever used or written a JavaScript function with a variable or even unlimited number of arguments you know the `argument` object. This object contains all parameters passed to the function. The problem is that this `arguments` object is not a real array. You have to convert it to an array if you want to use functions like `sort` or `map` explicitly. For example, this request function converts arguments using `call()`:

```js
function request(url, options, callback){
  var args = Array.prototype.slice.call(arguments, f.length);
  var url = args[0]
  var callback = args[2]
  // …
}
```

So is there a better way in ES6 to access an indefinite number of arguments as an array? Yes! It's rest parameters syntax and it's defined with ellipses .... For example, this is ES6 function signature with the rest parameter callbacks which become an array with the rest of the parameters:

```js
function(url, options, ...callbacks) {
  var callback1 = callbacks[0]
    var callback2 = callbacks[2]
  // ...
}
```

Note: In the rest array, the first parameter is the one that doesn't have a name, e.g., the callback is at index 0, not 2 as in ES5's `arguments`. Also, putting other named arguments after the rest parameter will cause a **syntax error**. The rest parameter is a great sugarcoating addition to JavaScript since it replaces the `arguments` object, which wasn't a real array.

In ES5, if you wanted to use an array as an argument to a function, you would have to use the `apply()` function:

```js
function request(url, options, callback) {
  // ...
}
var requestArgs = ['http://capitalone.io', {...}, function(){...}]
request.apply(null, requestArgs)
```

Now in ES6, we can use the spread parameters which look similar to the rest parameters in syntax as they use ellipses...:

```js
function request(url, options, callback) {
  // ...
}
var requestArgs = ['http://capitalone.io', {...}, function(){...}]
request(...requestArgs)
```

ES6 Developers can use the spread operator in the following cases:

* Function calls as seen above
* Array literals, e.g., `array2 = [...array1, x, y, z]`
* Destructuring (section 5 of this essay)
* `new` function calls (constructors), e.g., `var d = new Date(...dates)`
* `push()` calls, e.g., `arr1.push(...arr2)`

The spread operator has a similar syntax to the rest parameters, but rest is used in the function definition/declaration and spread is used in the calls and literals. They save developers from typing extra lines of imperative code, so knowing and using them is a good skill.

## 3. Template Literals in ES6

Template literals (or interpolation as they’re known in other languages) are a way to output variables in the string mixed with some text, typically in user interfaces. In ES5, we had to break the string like this.

```js
var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id
```

Luckily, in ES6 we can use a new syntax ${NAME} inside of the back-ticked string:

```js
var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`
```

This is neat and allows developers to see the end result of the strings at one glance instead of trying to evaluate the concatenation expression.

ES6 string templates are good, but the syntax will cause conflicts in the Markdown documentation if you use string templates and inline code markup, (because in Markdown inline code is marked by back-ticks as well). By the way, CoffeeScript has what I think a better solution when it interpolates double-quoted strings (similar to Ruby):

```js
var name = "Your name is #{first} #{last}."
var url = "http://localhost:3000/api/messages/#{id}"
```

Interpolation is good, but how do you work with multi-line text in JavaScript?

## 4. Multi-line Strings in ES6

Another yummy syntactic sugarcoating is multi-line string. In ES5, we had to use one of these approaches and it was ugly. With concatenation:

```js
var roadPoem = 'Then took the other, as just as fair,\n\t'
	+ 'And having perhaps the better claim\n\t'
	+ 'Because it was grassy and wanted wear,\n\t'
	+ 'Though as for that the passing there\n\t'
	+ 'Had worn them really about the same,\n\t'
```

Or with escape slash:

```js
var fourAgreements = 'You have the right to be you.\n\
	You can only be you when you do your best.'
```

While in ES6, we simply utilize the backticks as follows:

```js
var roadPoem = `Then took the other, as just as fair,
	And having perhaps the better claim
	Because it was grassy and wanted wear,
	Though as for that the passing there
	Had worn them really about the same,`

var fourAgreements = `You have the right to be you.
	You can only be you when you do your best.`
```

Multi-line strings are a useful addition if you have to use a lot of text in your JavaScript code.

## 5. Destructuring Assignment in ES6

Destructuring can be a harder concept to grasp than multi-line strings because there's some magic going on behind the scene... Let's say you have simple assignments where keys `userId` and `accountNumber` are variables `userId` and `accountNumber`:

```js
var data = $('body').data(), // data has properties userId and accountNumber
  userId = data.userId,
  accountNumber = data.accountNumber
```

Other examples of assignments where names of the variables and object properties are the same:

```js
var json = require('body-parser').json

var body = req.body, // body has username and password
  username = body.username,
  password = body.password  
```

In ES6, we can replace the ES5 code above with these statements:

```js
var { userId, accountNumber} = $('body').data()

var {json} = require('body-parser')

var {username, password} = req.body
```

This also works with arrays. Crazy!

```js
var [col1, col2]  = $('.column'),
  [line1, line2, line3, , line5] = file.split('\n')
```

It might take some time to get used to [the destructuring assignment syntax](http://www.2ality.com/2015/01/es6-destructuring.html), but it's a sweet sugarcoating nevertheless.

## 6. Enhanced Object Literals in ES6

What you can do with object literals in ES6 is mind blowing! We went from a glorified version of JSON in ES5 to something closely resembling classes in ES6.

In enterprise development, code modularization is important because projects are larger and have a greater number of moving parts. With enhanced object literals, you can create really strong objects loaded with functionality.

Here's a typical ES5 object literal with some methods and attributes/properties:

```js
var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]}

var accountServiceES5 = {
  port: serviceBase.port,
  url: serviceBase.url,
  getAccounts: getAccounts,
  toString: function() {
    return JSON.stringify(this.valueOf())
  },
  getUrl: function() {return "http://" + this.url + ':' + this.port},
  valueOf_1_2_3: getAccounts()
}
```

If we want to be fancy, we can inherit from `serviceBase` by making it the prototype with the `Object.create` method:

```js
var accountServiceES5ObjectCreate = Object.create(serviceBase)
var accountServiceES5ObjectCreate = {
  getAccounts: getAccounts,
  toString: function() {
    return JSON.stringify(this.valueOf())
  },
  getUrl: function() {return "http://" + this.url + ':' + this.port},
  valueOf_1_2_3: getAccounts()
}
```

I know, `accountServiceES5ObjectCreate` and `accountServiceES5` are NOT totally identical, because one object (`accountServiceES5`) will have the properties in the `__proto__` object as shown in the illustration below:

[![Prototype Illustration]({{ site.baseurl | append: page.images.es6-1 }})]({{ site.baseurl | append: page.images.es6-1 }})

But for the sake of this example, let's consider them similar. In ES6 object literals, we can use shorthands for assignment. For example, `getAccounts: getAccounts`, becomes just `getAccounts,`.

We can also set the prototype right there in the `__proto__` property (not '`__proto__`' though). For example, `serviceBase` is a prototype:

```js
var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]}
var accountService = {
    __proto__: serviceBase,
    getAccounts,
```

Also, we can invoke `super` and have dynamic keys. For example, `toString()` method returns a JSON object as a string by calling `super.valueOf()`, and `valueOf_1_2_3` is a dynamic property name:

```    
    toString() {
     return JSON.stringify((super.valueOf()))
    },
	getUrl() {return "http://" + this.url + ':' + this.port},
    [ 'valueOf_' + getAccounts().join('_') ]: getAccounts()
};
console.log(accountService)
```

[![Prototype Illustration]({{ site.baseurl | append: page.images.es6-2 }})]({{ site.baseurl | append: page.images.es6-2 }})

This is a great enhancement to good old object literals because developers can pack more logic and do more things than with ES5 objects!

## 7. Arrow Functions in ES6

This is probably the feature I waited for the most. I loved CoffeeScript for its fat arrows. Now we have them in ES6. The fat arrows are amazing because they would make your `this` behave properly, i.e., `this` will have the same value as in the context of the function—it won't mutate as typically happens each time you create a closure. This behavior was one of the worse parts of JavaScript and often caused a lot of confusion with developers new to the language. Using arrows functions in ES6 allows us to stop using `that = this` or `self = this` or `_this = this` or `.bind(this)`.

For example, this code in ES5 is ugly because you can forget to transfer the context to the closure with `_this`:

```js
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})
```

The `bind()` or `call()` approaches are not much better because of their verbosity. But take a look at this pretty ES6 code:

```js
$('.btn').click((event) =>{
  this.sendData()
})
```

Sadly, the ES6 committee decided that borrowing skinny arrows from CoffeeScript was too much of a good thing and left us with a lengthy old `function` instead. ([Skinny arrow in CoffeeScript](https://www.udemy.com/coffeescript/?couponCode=a) works like regular `function` in ES5 and ES6).

Here's another example in which we use call to pass the context to the `logUpperCase()` function in ES5:

```js
var logUpperCase = function() {
  var _this = this

  this.string = this.string.toUpperCase()
  return function () {
    return console.log(_this.string)
  }
}

logUpperCase.call({ string: 'es6 rocks' })()
```

While in ES6, we don't need to mess around with `_this`:

```js
var logUpperCase = function() {
  this.string = this.string.toUpperCase()
  return () => console.log(this.string)
}

logUpperCase.call({ string: 'es6 rocks' })()
```

Note that you can mix and match old `function` with `=>` in ES6 as you see fit. And when an arrow function is used with a one line statement, it becomes an expression; i.e,. it will implicitly return the result of that single statement. If you have more than one line, then you'll need to use `return` explicitly.

This ES5 code is creating an array from the `messages` array:

```js
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
});
```

Will become this in ES6:

```js
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(value => `ID is ${value}`) // implicit return
```

Notice that I used the string templates? Another feature from CoffeeScript... I love them!

The parenthesis `()` are optional for single params in an arrow function signature. However, you'll need them when using more than one param.

In ES5 the code has `function` with explicit return:

```js
var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
var messages = ids.map(function (value, index, list) {
  return 'ID of ' + index + ' element is ' + value + ' ' // explicit return
});
```

Now here's a more eloquent version of the code in ES6 with parenthesis around params and implicit return:

```js
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map((value, index, list) => `ID of ${index} element is ${value} `) // implicit return
```

Aren't fat arrows great? Use them.

## 8. Promises in ES6

Promises have been a controversial development topic, especially in larger organizations where it can be harder to agree on a common approach. One reason for this is the number of promise implementations using slightly different syntaxes—Q, bluebird, deferred.js, vow, avow, and jquery deferred to name just a few. Another reason is that some software engineers say, "We don't need promises and can just use async, generators, callbacks, etc."

Fortunately, there's a chance the debates will quiet down with the standard `Promise` implementation added to ES6!

Let's consider a rather trivial example of a delayed asynchronous execution with `setTimeout()`:

```js
setTimeout(function(){
  console.log('Yay!')
}, 1000)
```

We can re-write this code in ES6 with Promise:

```js
var wait1000 =  new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000)
}).then(function() {
  console.log('Yay!')
})
```

Or with ES6 arrow functions:

```js
var wait1000 =  new Promise((resolve, reject)=> {
  setTimeout(resolve, 1000)
}).then(()=> {
  console.log('Yay!')
})
```

So far, we've increased the number of lines of code from three to five without any obvious benefit. That's right, it does seem counterintuitive. The benefit will come if we have more nested logic inside of the `setTimeout()` callback. For example, this ES5 code has two nested callbacks:

```js
setTimeout(function(){
  console.log('Yay!')
  setTimeout(function(){
    console.log('Wheeyee!')
  }, 1000)
}, 1000)
```

It can be re-written with ES6 promises like so:

```js
var wait1000 =  ()=>
  new Promise((resolve, reject)=> {
    setTimeout(resolve, 1000)
  })

wait1000()
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });
```

As you can observe, the code organization changed when we refactored callbacks-only code into code with promises.

Another benefit not covered in this essay — promises also have a fail-and-catch-all callback which is a nice feature. Take a look at this post for more info on promises: [*Introduction to ES6 Promises*](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell).

## 9. Block-Scoped Constructs: Let and Const

You may have already seen the weird sounding `let` in ES6 code. This is not simply a sugarcoating feature. It's more intricate and adds more logic to your variable declarations.

`let` is a new `var` which allows developers to scope the variable to the blocks. We define blocks by the curly braces. In ES5, the blocks did NOTHING to the vars as seen here:

```js
function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    var amount = 1
  }
  { // more crazy blocks!
    var amount = 100
    {
      var amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))
```

In the code above, the result will be 1000. Wow! That's a really bad bug. In ES6, we use `let` to restrict the scope to the blocks. Vars are then function scoped.

```js
function calculateTotalAmount (vip) {
  var amount = 0 // probably should also be let, but you can mix var and let
  if (vip) {
    let amount = 1 // first amount is still 0
  }
  { // more crazy blocks!
    let amount = 100 // first amount is still 0
    {
      let amount = 1000 // first amount is still 0
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))
```

In this code, the value is 0 because the `if` block also has the `let` declaration. If it had nothing (`amount=1`), then the expression would have been 1.

When it comes to `const`, things are easier; it just prevents re-assigning, and it's also block-scoped like `let`. Just to demonstrate, here are a multiple constants and the code works fine because the `const` statements belong to different blocks:

```js
function calculateTotalAmount (vip) {
  const amount = 0  
  if (vip) {
    const amount = 1
  }
  { // more crazy blocks!
    const amount = 100
    {
      const amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))
```

In my humble opinion, `let` and `const` overcomplicate the language. Without them we had only one behavior, now there are multiple scenarios to consider. ;-( For people new to JavaScript, who are coming from languages like Java, `const` and `let` offer a new layer of built-in protection against some unpredictable behavior.

## 10. Classes in ES6

If you love object-oriented programming (OOP), then you'll love this feature. It makes writing classes in ES6, and inheriting from them, as easy as liking a comment on Facebook.

In ES5, classes creation and usage was difficult to say the least. There wasn't a keyword `class` (it was reserved, but did nothing). In addition to that, lots of inheritance patterns like pseudo [pseudo classical](http://javascript.info/tutorial/pseudo-classical-pattern), [classical](http://www.crockford.com/javascript/inheritance.html), [functional](http://javascript.info/tutorial/factory-constructor-pattern) added to the confusion, pouring gasoline on the fiery divisions between JavaScript developers.

I won't show you how to write a class in ES5, because there are many patterns. Let's take a look at the ES6 example right away. I can tell you that the ES6 class will use prototypes, not the function factory approach. We have a class `baseModel` in which we can define a `constructor` and a `getName()` method:

```js
class baseModel {
  constructor(options = {}, data = []) { // class constructor
		this.name = 'Base'
    this.url = 'http://azat.co/api'
		this.data = data
    this.options = options
	}

	getName() { // class method
		console.log(`Class name: ${this.name}`)
	}
}
```

Notice that I'm using default parameter values for options and data. Also, method names don't need to have the word `function` or the colon (`:`) anymore. The other big difference is that you can't assign properties `this.NAME` the same way as methods, i.e., you can't say `name` at the same indentation level as a method. To set the value of a property, simply assign a value in the constructor.

The `AccountModel` will inherit from `baseModel` with `class NAME extends PARENT_NAME`:

```js
class AccountModel extends baseModel {
	constructor(options, data) {
```

To call the parent constructor, effortlessly invoke `super()` with params:

```js
    super({private: true}, ['32113123123', '524214691']) // Call the parent method with super
    this.name = 'Account Model'
    this.url +='/accounts/'
  }
```

If you want to be really fancy, you can also set up a getter like this with `accountsData` as a property:

```js
	get accountsData() { // Calculated attribute getter
      // ... make XHR
     return this.data
	}
}
```

So after *all this work*, how do you actually use this class abracadabra? It's as easy as tricking a three-year old into believing in Santa Claus. Use `new` operand:

```js
let accounts = new AccountModel(5)
accounts.getName()
console.log('Data is %s', accounts.accountsData)
```

In case you're wondering, the output is:

```
Class name: Account Model
Data is %s 32113123123,524214691
```

Of course, [classes existed in CoffeeScript ](http://webapplog.com/coffeescript-fundamentals-the-better-javascript/) and older JavaScript standards so they are not completely new. However, in ES6 using classes has been made easier, which is especially important for enterprise developers because they typically work on larger projects spanning multiple teams (so the code requires modularization).

## 11. Modules in ES6

As you might know, there was no native modules support in JavaScript before ES6. People came up with AMD, RequireJS, CommonJS and other workarounds but they were just that—workaround and hacks. With ES6 there are now built-in modules with `import` and `export` operands.

In ES5, you would use `<script>` tags with IIFE, or a library like AMD, while in ES6 you can expose your class with `export`. Since I'm a Node.js guy so I'll use CommonJS, which is also a Node.js syntax, to solve this problem. It's fairly straightforward to use CommonJS on the browser with the [Browserify](http://browserify.org) bundler. Let's say we have `port` variable and `getAccounts` method in ES5 `module.js`:

```js
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}
```

In ES5 `main.js`, we would `require('module')` that dependency:

```js
var service = require('module.js')
console.log(service.port) // 3000
```

In ES6, we would use `export` and `import`. For example, this is our library in the ES6 `module.js` file:

```js
export var port = 3000
export function getAccounts(url) {
  ...
}
```

In the importer ES6 file `main.js`, we use `import {name} from 'my-module'` syntax. For example, we can import objects/methods `port`, and `getAccounts` from the module called module:

```js
import {port, getAccounts} from 'module'
console.log(port) // 3000
```

Or we can import everything as a variable `service` in `main.js`:

```js
import * as service from 'module'
console.log(service.port) // 3000
```

Note, that native support for ES6 modules in browsers is not coming any time soon (as of this writing at least), so you'll need something like [jspm](http://jspm.io) to utilize ES6 modules.

For more information and examples on ES6 modules, take a look at [this text](http://exploringjs.com/es6/ch_modules.html). And remember, —no matter what, write modular JavaScript!

## 12. For...of Comprehensions in ES6

Here is a problem with ES5: when we want to iterate over objects using its keys, we need to extract those keys first with `Object.keys()`. For example,

```js
var books = ['Pro Express.js', 'React Quickly', 'Full Stack JavaScript']
books.author = 'Azat'
Object.keys(books).forEach(function (element, index) {
    console.log(books[element], element); // prints 'Pro Express.js', 'React Quickly', 'Full Stack JavaScript', 'Azat'
    console.log(books[index], index);   // prints 'Pro Express.js', 'React Quickly', 'Full Stack JavaScript', undefined
});
```

Another issue with `forEach` is that you need to write the word `function`. But there's a better statement in ES6! The `for...of` statement replaces standard `for` and `forEach`, and is similar to `for...in` except that that `for...in` iterates over keys and `for...of` over values.

Using the previous code snippet's data (`books`), we can iterate using `for...in` and keys or using `for...of`:

```
for (let key in books){
  console.log(books[key])
}
```

Outputs the keys:

```
Pro Express.js
React Quickly
Full Stack JavaScript
Azat
```

While the `for...of` will work with values:

```js
for (let book of books){
  console.log(book)
}
```

The output of `for...of`:

```
Pro Express.js
React Quickly
Full Stack JavaScript
```

Notice that the output of `for...of` ignores the value with key `author` as would `forEach` on an array:

```js
books.forEach(function (element, index) {
    console.log(element); // Pro Express.js, React Quickly, Full Stack JavaScript
    console.log(index);   // 0, 1, 2
});
```

My personal experience working with comprehensions is that they increase the code readability. This is paramount for code maintenance enterprise applications.

## How to Use ES6 Today (Babel)

ES6 is finalized but not fully supported by all browsers (e.g., [ES6 Firefox support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)). To use ES6 today, get a compiler like [Babel](https://babeljs.io/). You can run it as a standalone tool or use it with your build system. There are Babel [plugins](http://babeljs.io/docs/setup) for Grunt, Gulp, and Webpack.

[![Babel]({{ site.baseurl | append: page.images.babel }})]({{ site.baseurl | append: page.images.babel }})

Here's a Gulp example. Install the plugin:

```
$ npm install --save-dev gulp-babel
```

In `gulpfile.js`, define a task `build` that takes `src/app.js` and compiles it into the `build` folder:

```js
var gulp = require('gulp'),
  babel = require('gulp-babel')

gulp.task('build', function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
})
```

## Node.js and ES6

For Node.js, you can compile your Node.js files with a build tool like Gulp or Webpack, or use a standalone Babel module `babel-cli`. To install it, create a brand new folder and a `package.json` file in it:

```
$ mkdir babel-test
$ cd babel-test
$ npm init
```

Then use npm v3.x to install the Babel v6.6.5 CLI tool and [the ES2015 plugin](https://babeljs.io/docs/plugins/preset-es2015):

```
$ npm install --save-dev babel-cli@6.6.5
$ npm install --save-dev babel-preset-es2015@6.6.0
```

Create a configuration file `.babelrc` with the ES2015 preset (this is different in v6.x compare to v5.x):

```
$ echo '{ "presets": ["es2015"] }' > .babelrc
```

Now you can compile the files in `src` folder by running local Babel module. The output will be in the `lib` folder:

```
$ ./node_modules/.bin/babel src -d lib
```

## Additional ES6 Features and Resources

There are many other noteworthy ES6 features that you probably may or may not use (at least won't use right away) and were not covered in this article, in no particular order:

1. New Math, Number, String, Array and Object methods
2. Binary and Octal number types
3. Symbols
4. Tail calls
5. Generators
6. New data structures like Map and Set

For overachievers who can't stop learning about ES6—like some people who can't stop after the first potato chip (just one more!)— here's a list for further reading:

1. [ES6/ES2015 Cheatsheet](https://github.com/azat-co/cheatsheets/tree/master/es6)
2. [*Understanding ECMAScript 6* by Nicolas Zakas book](https://leanpub.com/understandinges6)
3. [*Exploring ES6* by Dr. Axel Rauschmayer](https://leanpub.com/exploring-es6)
