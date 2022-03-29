const projects = [

  {
    // POKEDEX
    "id": "pokedex",
    "title": "Pokedex",
    "information": {
      overview: "This Pokedex App is a simple Javascript application that loads data from an external API. When the user clicks on a Pokemon's name, a modal is displayed with details on the Pokemon.",
      description: "While building this application, I greatly expanded my understanding of APIs. This project helped me understand how important it is for an API to have a thourough documentation and the importance of using documentation.",
      userStories: [],
    },
    "features": [
      "External API", "Responsive Design"
    ],
    "imageURL": "https://res.cloudinary.com/c21h30/image/upload/v1642195827/portfolio/pokedex.png",
    "videoURL": "",
    "productionURL": "https://lainamae.github.io/Pokedex/",
    "githubURL": "https://github.com/lainamae/Pokedex",
    "tools": [
      "HTML", "CSS", "Javascript", "Bootstrap"
    ]
  },

  //  MYFLIX API
  {
    "id": "myflix-api",
    "title": "myFlix API",
    "information": {
      overview: "A RESTful API that interacts with a non-relational database that stores data on different movies. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
      description: "This is the complete server-side to my myFlix application, including the server, business logic and business layers of the application. The API and architected database is built using JavaScript, Node.js, Express, and MongoDB. HTTP CRUD methods are used to retreive data from the database and sotre that data in a non-relational way. Middleware nodules: body-parser and morgan. Implements HTTP authentication and JWT authentication. Business logic modeled with Mongoose. Deployed on Heroku. Documentation below under 'Production Link'",
      userStories: ["As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I have watched or am interested in.", "As a user, I want to be able to create a profile so I can save data about my favorite movies"],
      testing: "Tested with Postman",
    },
    "features": [
      "REST API", "NoSQL database"
    ],
    "imageURL": "https://res.cloudinary.com/c21h30/image/upload/c_pad,h_600,w_1067/v1648163173/portfolio/api_cl0kdz.png",
    "videoURL": "",
    "productionURL": "https://myflix-0501.herokuapp.com/documentation.html",
    "githubURL": "https://github.com/lainamae/movie_api",
    "tools": ["Node.js", "Express", "MongoDB", "Mongoose", "Postman", "Heroku"]
  },



  // MYFLIX WEB APP
  {
    "id": "myflix-webapp",
    "title": "myFlix Web App",
    "information": {
      overview: "The server-side component of my myFlix web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
      description: "",
      userStories: [],
    },
    "features": [
      "API", "API", "React"
    ],
    "imageURL": "https://res.cloudinary.com/c21h30/image/upload/v1641581453/portfolio/placeholder.png",
    "videoURL": "",
    "productionURL": "",
    "githubURL": "",
    "tools": ""
  },



  // MEETAPP
  {
    "id": "meetapp",
    "title": "meetApp",
    "information": {
      overview: "The server-side component of my myFlix web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
      description: "",
      userStories: [],
    },
    "features": [
      "PWA", "API", "React"
    ],
    "imageURL": "https://res.cloudinary.com/c21h30/image/upload/v1642197175/portfolio/meetapp.png",
    "videoURL": "",
    "productionURL": "",
    "githubURL": "",
    "tools": ""
  },



  // WENDYS BOATS
  {
    "id": "wendys-boats",
    "title": "Wendy's Boats",
    "information": {
      overview: "The server-side component of my myFlix web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
      description: "",
      userStories: [],
    },
    "features": [
      "React", "Sass", "Responsive Design"
    ],
    "imageURL": "https://res.cloudinary.com/c21h30/image/upload/v1648165602/portfolio/wendysboats-trans_w2gifo.png",
    "videoURL": "",
    "productionURL": "https://wendysboats.com",
    "githubURL": "https://github.com/lainamae/Pokedex",
    "tools": [
      "HTML", "CSS", "Javascript", "Bootstrap"
    ]
  }
]

export function getProjects() {
  return projects;
}