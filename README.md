# W3school jQuery Quiz
<code>$(document).ready(function(){});</code>와
<code>window.onload = function(){};</code>와
<code>$(function(){});</code>는 같다

## jquery 최신으로 사용하기
<code><script src="https://code.jquery.com/jquery-latest.min.js"></script></code>

### jQuery Library
> jquery Library is Javascript.

### jQuery uses CSS selectors to select elements?
> False ()
> True  (O)

### Which sign does jQuery use as a shortcut for jQuery?
> the $ sign

### Look at the following selector: $("div"). What does it select?
> All div elements

### Is jQuery a library for client scripting or server scripting?
> Client Scripting

### Is it possible to use jQuery together with AJAX?
> NO ()
> Yes (O)

### The jQuery html() method works for both HTML and XML documents
> False (O)
> True ()

### What is the correct jQuery code to set the background color of all p elements to red?
> $("p").css("background-color","red");

### With jQuery, look at the following selector: $("div.intro"). What does it select?
> All div elements with class="intro"

### Which jQuery method is used to hide selected elements?
> hide()

### Which jQuery method is used to set one or more style properties for selected elements?
> css()

### Which jQuery method is used to perform an asynchronous HTTP request?
> jQuery.ajax()

### What is the correct jQuery code for making all div elements 100 pixels high?
> $("div").height(100)

### Which statement is true?
> To use jQuery, you can refer to a hosted jQuery library at Google

### What scripting language is jQuery written in?
> JavaScript

### Which jQuery function is used to prevent code from running, before the document is finished loading?
> $(document).ready()


### Which jQuery method should be used
 to deal with name conflicts?
> noConflict()

### Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?
> toggleClass()

### Look at the following selector: $("div p"). What does it select?
> All p elements inside a div element

### Is jQuery a W3C standard?
> No

### Look at the following selector: $("p#intro"). What does it select?
> the p element with id = "intro"

### Which jQuery method is used to remove selected elements?
> Both methods can be used()

### Look at the following selector: $(":disabled"). What does it select?
> All disabled input elements

### Which jQuery method returns the direct parent element of the selected element?
> parent()

### The jQuery animate() method can be used to animate ANY CSS property?
> Only properties containing numeric values

## W3School javascript 기본 문제 풀기

### Inside which HTML element do we put the JavaScript?
> <script>

### What is the correct JavaScript syntax to change the content of the HTML element below?
<p id="demo">This is a demonstration.</p>  

> document.getElementById("demo").innerHTML="Hello World!";

### Where is the correct place to insert a JavaScript?
> Both the <head> section and the <body> section are correct 

### What is the correct syntax for referring to an external script called "xxx.js"?
> <script src="xxx.js">

### The external JavaScript file must contain the <script> tag.
> False (O)
> True ()

### How do you write "Hello World" in an alert box?
> alert("Hello World");

### How do you create a function in JavaScript?
> function myFunction()  

### How do you call a function named "myFunction"?
> myFunction()  

### How to write an IF statement in JavaScript?
> if (i == 5)  

### How to write an IF statement for executing some code if "i" is NOT equal to 5?
> if (i != 5)  

### How does a WHILE loop start?
> while (i <= 10)  

### How does a FOR loop start?
> for (i = 0; i <= 5; i++)  

### How can you add a comment in a JavaScript?
> //This is a comment

### How to insert a comment that has more than one line?
> /*This comment has<br>more than one line*/
> /와 *(별)을 사용

### What is the correct way to write a JavaScript array?
> var colors = ["red", "green", "blue"]  

### How do you round the number 7.25, to the nearest integer?
> Math.round(7.25)  

### How do you find the number with the highest value of x and y?
> Math.max(x, y)  

### What is the correct JavaScript syntax for opening a new window called "w2" ?
> w2 = window.open("http://www.w3schools.com");  

### JavaScript is the same as Java.
> False (O)
> True ()

### How can you detect the client's browser name?
> navigator.appName  

### Which event occurs when the user clicks on an HTML element?
> onClick

### How do you declare a JavaScript variable?
> var carName;  

### Which operator is used to assign a value to a variable?
> =

### What will the following code return: Boolean(10 > 9)
> true  

### Is JavaScript case-sensitive?
> Yes

============
  
## jQuery Selectors
- $("태그").메소드()
- $("#아이디").메소드()
- $(".클래스").메소드()
- $(this).메소드()

## jQuery Event
- jQuery click()
- jQuery dbclick()
- jQuery mouseenter()
- jQuery mouseleave()
- jQuery mousedown
- jQuery mouseup
- jQuery hover
- jQuery focus() and blur()

## jQuery Hide/Show
- jQuery hide()
- jQuery hide() and show()
- jQuery toggle
- jQuery hide()

## jQuery Fade
- jQuery fadeIn()
- jQuery fadeOut()
- jQuery fadeToggle()
- jQuery fadeTo()

## jQuery Slide
- jQuery slideDown()
- jQuery slideUp()
- jQuery slideToggle()

## jQuery Animate
- jQuery animate()

## jQuery Stop Animations
- jQuery stop() sliding
- jQuery stop() animation (with parameters)

## jQuery HTML Get Content and Attributes
- jQuery text(), html(), and val()
- jQuery text() and html()
- jQuery attr()

## jQuery HTML Add Elements/Content
- jQuery append()
- jQuery prepend()
- jQuery after() and before()
- jQuery after()

## jQuery HTML Remove Elements/Content
- jQuery remove()
- jQuery empty()

## jQuery Get and Set CSS Classes
- jQuery addClass()
- jQuery removeClass()
- jQuery toggleClass()

## jQuery css() Method
- jQuery css()

## jQuery Dimensions
- jQuery - return width() and height()
- jQuery - return innerWidth() and innerHeight()
- jQuery - return outerWidth() and outerHeight()
- jQuery - return outerWidth(true) and OuterHeight(true)
- jQuery - return width() and height() of document and window
- jQuery - set width() and height()

## jQuery Traversing Ancestors
- jQuery parent()
- jQuery parents()
- jQuery parentsUntil()

## jQuery Traversing Siblings
- jQuery siblings()
- jQuery next()
- jQuery nextAll()
- jQuery nextUntil()

## jQuery Traversing Filtering
- jQuery first()
- jQuery last()
- jQuery eq()
- jQuery filter()
- jQuery not()

## jQuery Filters
- Filter table
- Filter list
- Filter anything

## jQuery AJAX load() Method
- jQuery load()

## jQuery AJAX get() and post() Methods
- jQuery get()
- jQuery post()