I <3 this
================

This app is live on [link](http://iheartthis.club/)

This app was made for [Adobe Creative SDK Hackathon](http://creativesdk.devpost.com/) by Ankur Singh

## Inspiration
We all love to keep a track of all good things in life, be in form of photographs, or after the internet, bookmarks, or in these days Pocket. I wanted to build something to keep track of all "cool stuff" I find online, be it a very funny image on imgur or this awesome tee I found on Amazon.

## What it does
If you want to save a <3 (heart, a "cool stuff"), you can just right click on the image and save it to your iheartthis account. You can preprocess the image using Adobe Creative SDK or upload it locally or from a URL in the webapp as well.
Later, you can view all the images you <3'ed, or you can view what others are <3'ing.

## How I built it
I built the right click to add functionality using Chrome extension and its contextMenus. For the webapp I used Ruby on Rails with carrierwave to handle the images. The app is open source and built with many open source tools and "gems".
The app is currently hosted on http://iheartthis.club on a DigitalOcean VM using nginx+passenger server.

## Challenges I ran into
Integrating Adobe SDK and backend to preview, edit and save images on the fly.

## Accomplishments that I'm proud of
This whole app took less than 24 hours to built with a single team member, and has a chrome extension to enhance its functionality.

## What I learned
A lot of JS wizardry relating to handling images, and some new concepts in chrome extensions.

## What's next for I love this
Add option to share the <3's in one click to social media
Better ways to explore other's <3s
More features :D

Ruby on Rails
-------------

This application requires:

- Ruby 2.2.1
- Rails 4.2.4

Issues
-------------

Report them to issue tracker

Contributing
------------

Fork and PR! Thanks in advance!

License
-------

Copyright (c) 2015 Ankur Singh(ankur13019@iiitd.ac.in)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

