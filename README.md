<link rel="stylesheet" type="text/css" media="all" href="https://raw.githubusercontent.com/TopiaryCareTaker/LightSoilPot/master/dist/index.css" />
<body class="topiary">
<h1>chuck tester</h1>

*Garden Bed*

-REPO
https://github.com/TopiaryCareTaker/gardenbed.git

Simple front end focused web app development stack.

Install all dependencies

- npm install

Run Webpack Dev Server

- npm run dev

Output Topiary (index.html, csS/js file)

- npm run deploy


If you would like to include a simple style and component library:

- npm install gardentools

***REPO for Garden Tools***
https://www.github.com/TopiaryCareTaker/gardentools.git


***Github actions***

On git push to your configured repo Garden Bed will build a new DIST folder.

.github/workflow/nodejs.yml


***Godaddy Pipeline deploy***

.cpaney.yml
Garden bed can be connected to Godaddy repo deploy throught their cpanel. Configure this for deployemnt. The DIST folder that was built in the github actions will be deployed through the cpanel.

</body>