# dataScrapingApp
<p>Build a simple web scraper that gets some general information</p> </br>

<p>Basic Setup</p>
<ul>
<li>node & npm</li>
<li>bower</li>
<li>grunt</li>
</ul>
Node & npm

Check nodejs.org for instructions on how to install on your OS.

Bower

<pre> npm install -g bower </pre>

Grunt

<pre> npm install -g grunt-cli </pre>

Install Nodemon

Either through forking or by using [npm](http://npmjs.org) (the recommended way):

    npm install -g nodemon

And nodemon will be installed in to your bin path. Note that as of npm v1, you must explicitly tell npm to install globally as nodemon is a command line utility.

# Usage

nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

    nodemon [your node app]

For CLI options, use the `-h` (or `--help`) argument:

    nodemon -h

Using nodemon is simple, if my application accepted a host and port as the arguments, I would start it as so:

    nodemon ./server.js localhost 8080
  
Important links:
<ul>
<li><a href="https://scotch.io/tutorials/scraping-the-web-with-node-js#making-the-request">Scraping the web using Node js </a></li>
<li><a href="https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js">Building a realtime twitter stream </a></li></ul>
