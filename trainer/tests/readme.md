To run the unit test follow these steps (Run them from command line, from `tests` parent folder):

 1. Install karma `npm install karma --save-dev`. (The Karma version against which the code was tested is `0.12.31`)
 2. Install karma CLI `npm install -g karma-cli`. (The karma-cli version was `0.0.4`)
 3. Install bower `npm install -g bower`.
 4. Install app libraries with bower `bower update`.
 5. Run karma wizard `karma init` and use the default options. This should install the necessary dependencies and create a new config file in the parent folder. *DELETE IT*. The config file in this folder needs to be used.
 6. To run the test do `karma start tests/karma.config.js`
 
