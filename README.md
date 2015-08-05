Angular Controller data sharing service
=======================================

Demo using services to share data between controllers in AngularJS

This consists of:
 - index.html
 - two JavaScript files (one for the controllers and one for the service)
 - CSS file.

You can just open the index.html file in a browser.

The page consists of 4 divs, each controlled by its own controller, with all controllers sharing data via the service.
The middle div contains a nested controller. 

This pattern can be useful when you have multiple controllers on a page, some of which need to know when data managed by another controller has been changed.

