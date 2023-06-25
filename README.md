# The DiscJourney App
### Promineo Tech Front End Software Development Bootcamp Final Project


## Description

##### The Disc Journey app allows users to post reviews of their favorite music albums.

The user inputs the album metadata as well as their review on the "New Entry" page. Once the review is posted, it will appear in two places:

1. The **My Collection** page displays a grid of all of each album cover, along with its title, artist name, and release year.
2. The **My Journey** page displays each review with all of the album metadata and tags.

On the **My Journey** page, the user has options to edit and/or delete each posted review.

####### User Login:

In this iteration, the user can update the user information by clicking the **Account** dropdown in the navigation bar and navigating to **Update Profile**. Here, the user can enter their first and last name, as well as a url for a profile photo. The user can also indicate that they are a New User, which will update their join date. All of these user data items are displayed on the **My Collection** and **My Journey** pages.

##### This app was created with React as a final project for the Front End Software Developer bootcamp program at [Promineo Tech](https://promineotech.com/). This assignment had the following requirements:

* Utilizes an API or an array for in-memory storage
* Uses React Router and has at least 3 pages
* Styled using React Bootstrap or an alternative styling library
* Contain at least 10 components
* Allow for all CRUD operations

## Features

##### Collection
* The **My Collection** page displays a grid which lists each album's art, title, artist name, and release year
* The collection size is displayed which shows the number of albums in the collection. This number is kept up-to-date with each addition or subtraction of reviewed albums.

##### My Journey Page
* Each review is displayed on a card which contains the album art, title, artist name, release year, and tags for the genre.
* Each card has a **DELETE** button which allows for the review to be deleted.
* Once clicked, the **EDIT** button will open the Edit modal.

##### Offcanvas Menu
* Show/Hide of offcanvas menus is handled by a hamburger menu button in the upper left corner.
* Menu displays user data and collection size as well as navigation.

##### Update Profile Modal
* Show/hide is handled by the **Update Profile** option in the navigation bar and the offcanvas menu.
* A toggle allows the user to indicate whether this is a new user or not.

##### Edit Modal
* Show/Hide is handled by the **EDIT** button on each of the reviews displayed on the **My Journey** page.
* The modal displays a form which fills in the inputs with the current state of the review object.

## How to Use

### Demo

Access a demo of this app [here](https://main.d1e8p8piktoztz.amplifyapp.com/).

### `npm start`

If running on your local host, run `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technologies
This app was created using React. This is a single-page application which uses React Router to allow for navigation to each route. The app also makes use of Redux Toolkit for global state management. Bootstrap, React-Bootstrap, and Material UI were used as syling libraries. This app was deployed using AWS Amplify.



