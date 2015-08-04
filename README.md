Angular Controller Datasharing
==============================

Demo using services to share data between controllers in AngualrJS

This consists of an index.html file, two JavaScript files (one for the controllers and one for the service), and a basic CSS file. You can just open the index.html file in a browser (I use Chrome. I have not tested this in IE) to see it work. The page consists of 3 divs, each controlled by its own controller, with all controllers sharing data via the service.

This pattern can be useful when you have multiple controllers on a page, some of which need to know when data managed by another controller has been changed.

  
