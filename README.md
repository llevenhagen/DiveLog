# DiveLog
Dive Log


Live site link: https://sleepy-escarpment-62758.herokuapp.com/


## Technologies used:
  HTML, CSS, Node.JS, Mongo, MongoD, Mongoose

## Approach Taken:

## EJS
My first move was to quickly draw up how I wanted the website to function and how I wanted the pages to interact. With this as a guideline, I then created all the directories for Models, Controllers, Views, and my Public directory for css/images.

## MongoDB / Mongoose
Once I had the basic setup of my website outlined, I created the data Schemas and the seed files. My next move was to create the routes in my server.js file one at a time, making sure to establish the necessary variables to call in each EJS file. I filled out the HTML/JS in the EJS files as I went.

### Difficulties:
I quickly realized that I had to take only one step at a time, because if you call out a controller that hasn't been filled out yet, or variable that hasn't been defined yet, everything will break. I wanted to create all my pages and work on one file at a time, but because of the way the routes work, you have to skip around with them, or everything will break.

## Adding Log-in/Sign-up, Log-out routes
When we first learned bcrypt and the users/sessions controllers, I found it confusing and overwhelming. When I went through the steps for my project, however, I was able to take the time to really understand why every step was necessary, and I gained a much stronger grasp on the concept.

## Adding separate routes for USA / Honduras dives
I decided since I had some extra time to make two separate log pages for the two different countries included in the dive log. Since my understanding was still a bit shaky on the CRUD routes, I thought I might have to make a new logbook EJS page for the different countries, but soon realized that all I really had to do was reuse the logbook.ejs template but access it from two new routes (for the two countries). It felt really good to figure that out on my own, as simple as it was.

### Further Difficulties:
I had a difficult time moving my routes from the server.js file to a separate controller, but the experience taught me much more about how the routes function, and I was able to figure it out after re-watching some of the class lectures.

## CSS
I spent a lot of time on the CSS for this project, working on the color combinations/fonts. I am pretty proud of how my website looks, since I didn't have any previous experience with CSS before the course.

**Things I learned:**
- This project gave me much further understanding about CRUD apps and Mongo.
- I was able to refine my css skills as well.
- I taught myself how to make new routes.

**technical challenges**
- Node modules were not very cooperative, especially when uploading to Heroku.

**Desired improvements**
- I tried pretty hard to make the website responsive to resizing, but unfortunately couldn't get the header and container on each page to coordinate when changing sizes. I would love to focus more in the future on mobile responsive sizing etc.


### Further development:
I would like to refine this website and make it specific to my Aunt and Uncle's dive travel business. The website would be repurposed to only allow them to log in and record dives their group does on the trips they've led, so that prospective clients can peruse photos and details etc to see if this trip is for them. Rather than US/Honduras dive sites, the website would feature Honduras and Bali (their two destinations). I would like to add an image carousel to each dive so that my aunt can upload all the images from that specific dive.
