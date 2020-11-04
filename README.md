# GearWE
### Make fascinating webs with only functions.
Gear Web Engine: An open source JS project.

## Changelog
| Version | Stage | Result           |
|---------|--------------------|------------------|
| 1.0.0   | Beta  | v1 is now usable |

## Docs
To start, let's make a simple header.
We need the ```element``` function.
```javascript
  element("Hello GearWE!", "h1")
```
This would output:
# ```Hello GearWE!```
We can also use the ```<p>```. But there's a problem with that. 
```Hello GearWE!Hello GearWE!Hello GearWE!```
There are no newlines! We need the ```newline``` function now.
```javascript
  element("Hello GearWE!", "p")
  newline()
  element("Hello GearWE!", "p")
  nnewline()
  element("Hello GearWE!", "p")
```
But this is awfully long. And there's an easier way:
```javascript
  element(`Hello GearWE!${newline}Hello GearWE!${newline}Hello GearWE!`)
```
This embeds newlines in between the ```"Hello GearWE!"```s.
Great! But you may have noticed: How do you put images? Well, because there are no attribute setting function, there's a different function for img:
```javascript
  let src = "https://i2.wp.com/repl.it/public/images/evalbot/evalbot_39.png?ssl=1"
  let alt = "Bot from repl.it"
  let width = 400, height = 300;
  img(src, alt, width, height)
```
or for short:
```javascript
  img("https://i2.wp.com/repl.it/public/images/evalbot/evalbot_39.png?ssl=1", "Bot from repl.it", 400, 300)
```
Let me explain. The first argument is the source, or in html:
```<img ```**```src```**```="path/to/file">```
The second argument is the alt, which is the text to show if it can't find the image.
```img src="path/to/file" ```**```alt```**```="Bot from repl.it">```
The third and fourth are the width and height of the image.
```img src="path/to/file" alt="Bot from repl.it" ```**```width```**```="400" ```**```height```**```="300">
Great! We made an image! ...But wouldn't it be cool to make the image when we press a button? Luckily, there's a function for that!
```javascript
  button("Insert picture", function(){
    let src = prompt("Source:")
    let width = prompt("Width:")
    let height = prompt("Height:")
    img(src,width,height)
  })
```
This prompts the user to enter the source url, the width, the height, and then draws the image. And that's all for 1.0.0! Check the [Changelog](https://github.com/Eitantan/GearWE/new/master?readme=1#changelog) for updates.
