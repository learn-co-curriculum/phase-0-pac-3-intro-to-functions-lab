# Introduction to Functions Lab

## Learning Goals

- Practice reading tests and test errors
- Practice writing functions
- Learn how to use JavaScript's `toUpperCase()` and `toLowerCase()` methods
- Practice using `return` and `console.log()`
- Practice creating conditional statements

## Introduction

Welcome to the JavaScript functions lab! You'll notice a few new things in this
lesson that we haven't encountered before. Don't worry, we'll walk you through
them.

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code. (If you are using a different text editor, the command
will be different.) Finally, run `npm install` to install the lab's
dependencies.

### Code-Along

To start, open up `index.js` in your text editor. You should see, well, nothing.
We'll fix that soon.

Now open up `test/root.js`. Hey, there's something! What's all of this stuff
doing?

At the very top of the file, you'll see

```js
global.expect = require("expect");

const babel = require("babel-core");
const jsdom = require("jsdom");
const path = require("path");
```

This might be a bit bewildering, but all we're doing is referencing different
_libraries_ that help us run the tests. You may recall that we talked about
_packages_ in an earlier lesson. A library is similar: it's code that someone
else (usually multiple someones) wrote for our use. The code above makes the
libraries available inside our test environment, which enables us to run the
tests.

If you go to `test/index-test.js`, you'll see

```js
describe("shout(string)", function () {
  // there's stuff in here, too
});
```

`describe` is a function provided by our test runner (in this case, we're using
[Mocha](https://mochajs.org/)) — it's basically a container for our tests.

Let's take a closer look at that `describe()`:

```js
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    // we'll get to this in a sec
  });
});
```

These internal `describe()` calls are used for _describing_ the functions that
you're going to write. In this case, the test is saying, "Okay, I think there's
going to be a function called `shout`, and it should take one argument (it
doesn't actually matter what the argument is called, but `string`, is nice and
specific, don't you think?). It should _return_ that argument in all caps.

Finally, we have

```js
expect(shout("hello")).toEqual("HELLO");
```

which says that it _expects_ a call to `shout()` with the string `'hello'` will
`equal` the string `'HELLO'`. This is the actual test — otherwise called a spec,
expectation, or assertion — for this function. We can have more than one test
per function, but let's start with this one.

### Running the Tests

To run the tests, run `npm test` in the terminal. The first output you'll see
will look like this:

```console
$ npm test
java-script-intro-to-functions-lab@0.1.0 test /Users/mbenton/Desktop/curriculum-team/junk/javascript-intro-to-functions-lab
mocha -R mocha-multi --reporter-options spec=-,json=.results.json --timeout 10000



  shout(string)
    1) receives one argument and returns it in all caps

  whisper(string)
    2) receives one argument and returns it in all lowercase

  logShout(string)
    3) calls console.log() its one argument in all caps

  logWhisper(string)
    4) calls console.log() its one argument in all lowercase

  sayHiToGrandma(string)
    5) returns "I can't hear you!" if `string` is lowercase
    6) returns "YES INDEED!" if `string` is uppercase
    7) returns "I love you, too." if `string` is "I love you, Grandma."`


  0 passing (99ms)
  7 failing

  1) shout(string)
       receives one argument and returns it in all caps:
     ReferenceError: shout is not defined
      at Context.<anonymous> (test/index-test.js:4:5)
      at processImmediate (internal/timers.js:456:21)

  2) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)

  3) logShout(string)
       calls console.log() its one argument in all caps:
     ReferenceError: logShout is not defined
      at Context.<anonymous> (test/index-test.js:18:5)
      at processImmediate (internal/timers.js:456:21)

  4) logWhisper(string)
       calls console.log() its one argument in all lowercase:
     ReferenceError: logWhisper is not defined
      at Context.<anonymous> (test/index-test.js:30:5)
      at processImmediate (internal/timers.js:456:21)

  5) sayHiToGrandma(string)
       returns "I can't hear you!" if `string` is lowercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:40:5)
      at processImmediate (internal/timers.js:456:21)

  6) sayHiToGrandma(string)
       returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:44:5)
      at processImmediate (internal/timers.js:456:21)

  7) sayHiToGrandma(string)
       returns "I love you, too." if `string` is "I love you, Grandma."`:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:48:5)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.
```

Hm, seven failed tests. Let's see if we can get that _first_ test to
pass. Open up `index.js`.

When we write our code, we follow the guidance of the tests. Let's take a look at that first error:

```console
  1) shout(string)
       receives one argument and returns it in all caps:
     ReferenceError: shout is not defined
      at Context.<anonymous> (test/index-test.js:4:5)
      at processImmediate (internal/timers.js:461:21)
```

The output above comes from this test in `index-test.js`:

```js
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});
```

We know that the test is expecting a function called `shout` that accepts an
argument. The error tells us that `shout` isn't defined. So let's start by
declaring our function in `index.js`:

```js
function shout(string) {}
```

We know we won't pass the test yet because our function doesn't do anything yet.
However, if we rerun the test, it should now give us more information about what
we need to do:

```console
  1) shout(string)
       receives one argument and returns it in all caps:
     Error: Expected undefined to equal 'HELLO'
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:4:28)
      at processImmediate (internal/timers.js:461:21)
```

Anytime you see `Error: Expected undefined to equal [something]`, that means
that the test is looking for a `return` value. We can also see the description
of what the function should do: it `receives one argument and returns it in all caps`.

Okay, so with that information, we know that our function should return whatever
string is passed in as an argument:

```js
function shout(string) {
  return string;
}
```

But we're still missing one piece: how do we make `string` all caps? JavaScript
has a built-in method for that! It's called `toUpperCase()`. We can call it on
any string:

```js
"Hello!".toUpperCase(); // 'HELLO!'
```

Above, we've called it directly on a literal string but, of course, we can also
call it on a variable. So let's try it with our `shout()` function:

```js
function shout(string) {
  return string.toUpperCase();
}
```

and run our tests again. We get:

```console
shout(string)
    ✓ receives one argument and returns it in all caps

  whisper(string)
    1) receives one argument and returns it in all lowercase

  logShout(string)
    2) calls console.log() its one argument in all caps

  logWhisper(string)
    3) calls console.log() its one argument in all lowercase

  sayHiToGrandma(string)
    4) returns "I can't hear you!" if `string` is lowercase
    5) returns "YES INDEED!" if `string` is uppercase
    6) returns "I love you, too." if `string` is "I love you, Grandma."`


  1 passing (108ms)
  6 failing

  1) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)

  2) logShout(string)
       calls console.log() its one argument in all caps:
     ReferenceError: logShout is not defined
      at Context.<anonymous> (test/index-test.js:18:5)
      at processImmediate (internal/timers.js:456:21)

  3) logWhisper(string)
       calls console.log() its one argument in all lowercase:
     ReferenceError: logWhisper is not defined
      at Context.<anonymous> (test/index-test.js:30:5)
      at processImmediate (internal/timers.js:456:21)

  4) sayHiToGrandma(string)
       returns "I can't hear you!" if `string` is lowercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:40:5)
      at processImmediate (internal/timers.js:456:21)

  5) sayHiToGrandma(string)
       returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:44:5)
      at processImmediate (internal/timers.js:456:21)

  6) sayHiToGrandma(string)
       returns "I love you, too." if `string` is "I love you, Grandma."`:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:48:5)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.
```

Hey! We got one to pass! Six left.

## Your Turn

Now it's your turn to get the rest of the tests to pass. Note that some of them
require you to use `console.log()` instead of `return` — follow the guidance of
the tests!

### Instructions

In this lab, we're writing functions that "speak" at different volumes — they
whisper or they shout. The next test is similar to the first:

```console
1) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)
```

This test is telling us that `whisper(string)` receives one argument and returns
it in all lowercase. At the moment, the test is failing because whisper is not
defined.

> **Note:** Just like `.toUpperCase()` changes any string to all uppercase in
> JavaScript, `.toLowerCase()` (e.g., `'HELLO'.toLowerCase()`) changes any
> string to all lowercase.

The next two tests are checking to see if a specific string is logged when a
function is called. You will still need to use the `.toUpperCase()` and
`.toLowerCase()` methods for `logShout(string)` and `logWhisper(string)`. Keep
in mind, though, that these tests are not looking for return values, only logs.

The final function you need to create is `sayHiToGrandma()`. Grandma is a bit
hard of hearing, so whispering can be a bit difficult, but she'll always hear
you if you say, "I love you, Grandma." This time, you will need to return
different strings depending on the string passed into the function.

**Note:** Although there are 3 tests for `sayHiToGrandma()`, you only need to
write **one** function. This function should be able to handle all three test
conditions:

- If the string that is passed into the function is all lowercase, the function
  should return "I can't hear you!"
- If the string that is passed into the function is all uppercase, the function
  should return "YES INDEED!"
- If the string that is passed into the function is equal to "I love you,
  Grandma.", the function should return "I love you, too."

How do we check if a string is all lowercase or all uppercase? Let's take a look using a REPL:

<iframe height="400px" width="100%" src="https://repl.it/@LizBurton/InsubstantialTanInternet?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

In the first line we're defining a string variable. In the next two lines we log
the original variable, then the variable after calling `toUpperCase()` on it.
Finally, we're checking to see whether those two values are equal. If you click
the Run button, you'll see that the original string is mixed case and the upper
cased version of it is (not surprisingly) uppercase. It should not come as a
surprise, therefore, that comparing them with the equality operator (`===`)
returns false. What do you think will happen if we initialize `string` to
"HELLO!" instead? Play around with different values for `string` and see what
happens. Also try doing the same thing with `toLowerCase()` and make sure you
understand what's happening.

Basically, if we compare a string to its uppercased (or lowercased) version and
the two values are equal, then we know that the original string is uppercase (or
lowercase). So now that we know how to make these comparisons, how can we use
them to conditionally return different strings? If you need a refresher, go back
and review the lesson on Selection with Conditionals.

Remember that punctuation is important! Humans might be able to understand that
"I love you Grandma" is close enough to "I love you, Grandma." and means the
same thing but JavaScript will not consider these equal!

**Reminder:** As you're working through the tests, you can run your code by
running `node index.js` in the terminal. If you want to do this, remember that
you'll need to _call_ the function inside `index.js`. If you are just running
tests, however, you don't need to include a function call — the tests will
handle that for you.

Good luck!

## Saving Your Work Remotely

Currently, the work you've done on this assignment is only on your local
machine. To preserve your solution on your GitHub fork, you will need to stage
the changes you've made, commit them, and push the commit up to GitHub. Use the
following commands to do this:

```console
$ git add .
$ git commit -m "Completed assignment"
$ git push
```

If you visit your fork on GitHub, you should now see that _you've_ made the most
recent commit, and your code will be present in the files.
