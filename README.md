# Christopher

> ![](http://i.guim.co.uk/static/w-620/h--/q-95/sys-images/Guardian/Pix/pictures/2014/11/18/1416312708018/2a7ceb88-1896-4034-98d6-ca013d3aa6cd-620x372.jpeg)  
> **“What if only a machine can defeat another machine?”**  
> \- Alan Turing, _The Imitation Game_

### Purpose
Book a seat at [RAW Restaurant](http://www.raw.com.tw/indexContent.aspx?Language=ch#5thPage) automatically, with *style*

### Prepare environment
- [Git](http://www.git-scm.com/)
- [NodeJS & NPM](https://nodejs.org/download/)
- [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Selenium](http://docs.seleniumhq.org/download/)
- [Selenium ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)

### Start selenium server
First you have to put the ChromeDriver executable to your $PATH `/usr/local/bin`
```bash
$ java -jar SELENIUM_STAND_ALONE.jar
```

### Clone and run the scripts
```bash
$ git clone git@github.com:boczeratul/Christopher.git && cd Christopher
$ npm install
$ npm run booking
```

### Dependencies
- [protractor](http://angular.github.io/protractor/#/)  
an end-to-end functional test framework
- [selenium](http://docs.seleniumhq.org/)  
web-driver for browser manipulation
