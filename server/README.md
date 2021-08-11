# p2-cms-customer-server
API for cms and customer websites. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### GET /movies

> Get all movies

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 12,
        "title": "Doraemon: Nobita's Dinosaur - 2006",
        "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
        "rating": 5,
        "authorId": 2,
        "genreId": 7,
        "createdAt": "2021-06-10T16:08:17.076Z",
        "updatedAt": "2021-06-11T12:31:17.535Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 7,
            "name": "Comedy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 6,
        "title": "Harry Potter",
        "synopsis": "A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery.",
        "trailerUrl": "https://www.youtube.com/embed/VyHV0BRtdxo",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/HP.jpg",
        "rating": 4,
        "authorId": 1,
        "genreId": 9,
        "createdAt": "2021-06-10T11:18:00.805Z",
        "updatedAt": "2021-06-10T15:30:58.974Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 9,
            "name": "Fantasy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-10T15:47:12.235Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 19,
        "title": "Narnia Trial",
        "synopsis": "asdasdasd",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 2,
        "genreId": 5,
        "createdAt": "2021-06-11T12:18:55.726Z",
        "updatedAt": "2021-06-11T12:18:55.726Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-10T15:30:56.826Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /movies?authorid=<authorId>

> Get all movies by author id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 12,
        "title": "Doraemon: Nobita's Dinosaur - 2006",
        "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
        "rating": 5,
        "authorId": 2,
        "genreId": 7,
        "createdAt": "2021-06-10T16:08:17.076Z",
        "updatedAt": "2021-06-11T12:31:17.535Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 7,
            "name": "Comedy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 19,
        "title": "Narnia Trial",
        "synopsis": "asdasdasd",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 2,
        "genreId": 5,
        "createdAt": "2021-06-11T12:18:55.726Z",
        "updatedAt": "2021-06-11T12:18:55.726Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /movies?genreid=<genreId>

> Get all movies by genre id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-10T15:47:12.235Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 19,
        "title": "Narnia Trial",
        "synopsis": "asdasdasd",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 2,
        "genreId": 5,
        "createdAt": "2021-06-11T12:18:55.726Z",
        "updatedAt": "2021-06-11T12:18:55.726Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-10T15:30:56.826Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /movies/:id

> Get movies by Id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "title": "Love Story (1970)",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://www.flixwatch.co/wp-content/uploads/60020297.jpg",
    "rating": 4,
    "authorId": null,
    "genreId": null,
    "createdAt": "2021-06-07T12:29:22.433Z",
    "updatedAt": "2021-06-07T13:25:08.791Z"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /movies

> Create new movie

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
{
    "title": "Titanic (1997)",
    "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
    "trailerUrl": "https://www.youtube.com/watch?v=cIJ8ma0kKtY",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
    "rating": 5
}
```

_Response (201 - Created)_
```
{
    "id": 2,
    "title": "Titanic (1997)",
    "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
    "trailerUrl": "https://www.youtube.com/watch?v=cIJ8ma0kKtY",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
    "rating": 5,
    "createdAt": "2021-06-07T13:13:05.395Z",
    "updatedAt": "2021-06-07T13:13:05.397Z",
    "authorId": null,
    "genreId": null
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```
```
{
    "error": "Input Error",
    "message": "Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PUT /movies/:id

> Update movie data

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "title": "Love Story",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
    "rating": 2
}
```

_Response (200)_
```
{
    "title": "Love Story",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
    "rating": "2",
    "updatedAt": "2021-06-07T13:25:08.785Z"
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```
```
{
    "error": "Input Error",
    "message": "Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden Access",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### DELETE /movies/:id

> Delete movie

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "Titanic (1997) successfully deleted"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden Access",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /register

> Register new user (admin)

_Request Header_
```
not needed
```

_Request Body_
```
{
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",   
    "email": "ik@pouchnation@.com",
    "password": "Kravtsov85",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic: <file_upload>,
    "region": "Southeast Asia",
    "company_name": "PouchNATION",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/"
}
```

_Response (201)_
```
{
    "message": "Success registering a new founder",
    "id": 2,
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",
    "email": "ik@pouchnation.com",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
    "region": "Southeast Asia",
    "company_name": "PouchNation",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
    "admin_status": false,
    "active_status": false
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /login

> Login user

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "test@aaa.com",
    "password": "password123"
}
```

_Response (200)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAYWFhLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyMzQ3Mjg1N30.8utHA631PVg6X-TvvAoYqqhFhhF37XGnkt7-5u_Uej0",
    "name": "Test",
    "role": "admin",
    "id": 7
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Invalid username/password"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /googlelogin

> Login user from Google OAuth

_Request Header_
```
not needed
```

_Request Body_
```
{
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhMWQyNmQ5OTJiZTdhNGI2ODliZGNlMTkxMWY0ZTlhZGM3NWQ5ZjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTAyMzEzNDk1NDczMjU5NDIwIiwiZW1haWwiOiJnYWx1aGFkaWthYWxpZmFuaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkNYOWVOc1F3MXE1ZDRnbC1PNDRMcEEiLCJuYW1lIjoiQWxpZmFuaSBHLiBBLiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4RkozaHMwTzB0YVdpeEREaVRMWm5RYTBVenZkQmJ5bG1kSW9ESz1zOTYtYyIsImdpdmVuX25hbWUiOiJBbGlmYW5pIiwiZmFtaWx5X25hbWUiOiJHLiBBLiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIzNDczMTc5LCJleHAiOjE2MjM0NzY3NzksImp0aSI6IjMzMjFmMGUyZThhNDlhOGM3NTdiZWUwMTE2Mjk5NTRhYWRlYTQ3NjUifQ.CCTMDk38O-zNkOWQvnZDOCs_xxlfRJJHNHACB5FfB18APd1gCxrm6teHyH6YgLnei69IWvj5cp0n509yGNhAyCwYZKgZMhzxyJk_-l3FgEIzOJdqqxG1KMKutzoJC7ks-nHl_SPpnPlBjxn4L1lTCEC0jGkiWLHdpn8pZBiBvOrhbr9S7kkK19wVEVO_tyVGSZ_TOK6oiw0ldm1ePpw8qSYtKHT2nEbpVXrAfDr5IIyUWPmpDo5aTKfkCRgG0qjaUGs6SdostOcvHt9KBjlD7GztruSNDKGz5D-nPQQBjpRYd46mR1VHYwBjhS565RapaE-BPntihJasasdasdasdasdasd'
}
```

_Response (200)_
```
{
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IkFsaWZhbmkgRy4gQS4iLCJ1c2VybmFtZSI6ImdhbHVoYWRpa2FhbGlmYW5pQGdtYWlsLmNvbSIsImVtYWlsIjoiZ2FsdWhhZGlrYWFsaWZhbmlAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjIzNDczMzIxfQ.BpzPHMHcRcaIJL1FLwZEdVg_fasdasdasdasdasdasdasdasd',
  name: 'Alifani G. A.',
  role: 'staff',
  id: 6
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /users/:id

> Get user by id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 2,
    "name": "Ilya Kravtsov",
    "username": "ilyakrav",
    "email": "ik@pouchnation.com",
    "role": "staff",
    "phoneNumber": "081319023264",
    "address": "",
    "Movies": [
        {
            "id": 19,
            "title": "Narnia Trial",
            "synopsis": "asdasdasd",
            "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
            "rating": 1,
            "authorId": 2,
            "genreId": 5,
            "createdAt": "2021-06-11T12:18:55.726Z",
            "updatedAt": "2021-06-11T12:18:55.726Z"
        },
        {
            "id": 12,
            "title": "Doraemon: Nobita's Dinosaur - 2006",
            "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
            "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
            "rating": 5,
            "authorId": 2,
            "genreId": 7,
            "createdAt": "2021-06-10T16:08:17.076Z",
            "updatedAt": "2021-06-11T12:31:17.535Z"
        }
    ]
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PUT /users/:id

> Update user data

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "name": "Galuh Adika Alifani",
    "username": "galuhalifani",
    "phoneNumber": "081319023264",
    "address": "Jalan Jalan"
}
```

_Response (200)_
```
{
    "id": 1,
    "name": "galuhalifani",
    "username": "galuhalifani",
    "email": "galuh.adika@gmail.com",
    "role": "admin",
    "phoneNumber": "081319023264",
    "address": "Jalan Jalan",
    "createdAt": "2021-06-10T09:44:38.163Z",
    "updatedAt": "2021-06-12T05:10:07.521Z"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /movies/:id

> Update movie status

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "status": "active"
}
```

_Response (200)_
```
{
    "message": "Success! Movie Harry Potter and the Sorcerer's Stone's status is now active"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /movies/history

> See all movie history

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "movieId": 19,
        "title": "Test",
        "description": "Movie with id 19 permanently deleted",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T16:18:57.880Z",
        "updatedAt": "2021-06-14T16:18:57.880Z"
    },
    {
        "id": 2,
        "movieId": 21,
        "title": "Testing",
        "description": "Movie with id 21 permanently deleted",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T16:19:14.727Z",
        "updatedAt": "2021-06-14T16:19:14.727Z"
    },
    {
        "id": 3,
        "movieId": 6,
        "title": "Harry Potter and the Sorcerer's Stone",
        "description": "Movie with id 6 updated",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T16:19:36.151Z",
        "updatedAt": "2021-06-14T16:19:36.151Z"
    },
    {
        "id": 4,
        "movieId": 22,
        "title": "Narnia",
        "description": "Movie with id 22 created",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T16:21:23.455Z",
        "updatedAt": "2021-06-14T16:21:23.455Z"
    },
    {
        "id": 5,
        "movieId": 12,
        "title": "Doraemon: Nobita's Dinosaur - 2006",
        "description": "Movie with id 12 status has been updated from active to inactive",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T17:27:21.312Z",
        "updatedAt": "2021-06-14T17:27:21.312Z"
    },
    {
        "id": 6,
        "movieId": 12,
        "title": "Doraemon: Nobita's Dinosaur - 2006",
        "description": "Movie with id 12 status has been updated from inactive to active",
        "updatedBy": "galuh.adika@gmail.com",
        "createdAt": "2021-06-14T17:29:09.340Z",
        "updatedAt": "2021-06-14T17:29:09.340Z"
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /platform/register

> Register new user (customer) in customer web app

_Request Header_
```
not needed
```

_Request Body_
```
{
    "name": "Test",
    "username": "test",
    "email": "test@aaa.com",
    "password": "password123",
    "phoneNumber": "081319023264",
    "address": ""
}
```

_Response (201)_
```
{
    "message": "Success creating new user",
    "id": 7,
    "name": "Test",
    "username": "test",
    "email": "test@aaa.com",
    "role": "customer",
    "phoneNumber": "081319023264",
    "address": ""
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /platform/login

> Login customers

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "test@aaa.com",
    "password": "password123"
}
```

_Response (200)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAYWFhLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyMzQ3Mjg1N30.8utHA631PVg6X-TvvAoYqqhFhhF37XGnkt7-5u_Uej0",
    "name": "Test",
    "role": "admin",
    "id": 7
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Invalid username/password"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /platform/googlelogin

> Login customers from Google OAuth

_Request Header_
```
not needed
```

_Request Body_
```
{
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhMWQyNmQ5OTJiZTdhNGI2ODliZGNlMTkxMWY0ZTlhZGM3NWQ5ZjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTAyMzEzNDk1NDczMjU5NDIwIiwiZW1haWwiOiJnYWx1aGFkaWthYWxpZmFuaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkNYOWVOc1F3MXE1ZDRnbC1PNDRMcEEiLCJuYW1lIjoiQWxpZmFuaSBHLiBBLiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4RkozaHMwTzB0YVdpeEREaVRMWm5RYTBVenZkQmJ5bG1kSW9ESz1zOTYtYyIsImdpdmVuX25hbWUiOiJBbGlmYW5pIiwiZmFtaWx5X25hbWUiOiJHLiBBLiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIzNDczMTc5LCJleHAiOjE2MjM0NzY3NzksImp0aSI6IjMzMjFmMGUyZThhNDlhOGM3NTdiZWUwMTE2Mjk5NTRhYWRlYTQ3NjUifQ.CCTMDk38O-zNkOWQvnZDOCs_xxlfRJJHNHACB5FfB18APd1gCxrm6teHyH6YgLnei69IWvj5cp0n509yGNhAyCwYZKgZMhzxyJk_-l3FgEIzOJdqqxG1KMKutzoJC7ks-nHl_SPpnPlBjxn4L1lTCEC0jGkiWLHdpn8pZBiBvOrhbr9S7kkK19wVEVO_tyVGSZ_TOK6oiw0ldm1ePpw8qSYtKHT2nEbpVXrAfDr5IIyUWPmpDo5aTKfkCRgG0qjaUGs6SdostOcvHt9KBjlD7GztruSNDKGz5D-nPQQBjpRYd46mR1VHYwBjhS565RapaE-BPntihJasasdasdasdasdasd'
}
```

_Response (200)_
```
{
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IkFsaWZhbmkgRy4gQS4iLCJ1c2VybmFtZSI6ImdhbHVoYWRpa2FhbGlmYW5pQGdtYWlsLmNvbSIsImVtYWlsIjoiZ2FsdWhhZGlrYWFsaWZhbmlAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjIzNDczMzIxfQ.BpzPHMHcRcaIJL1FLwZEdVg_fasdasdasdasdasdasdasdasd',
  name: 'Alifani G. A.',
  role: 'customer',
  id: 6
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /platform/movies

> Get all movies from customer web app (without pagination)

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 35,
        "title": "ALOLALOLALOLALOL",
        "synopsis": "asdas",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 1,
        "genreId": 8,
        "status": "inactive",
        "createdAt": "2021-06-17T13:32:23.838Z",
        "updatedAt": "2021-06-18T14:51:02.625Z",
        "User": {
            "id": 1,
            "name": "Galuh Adika Alifani",
            "username": "galuh.adika@gmail.com",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan Yuks",
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-18T15:48:59.711Z"
        },
        "Genre": {
            "id": 8,
            "name": "Science Fiction",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 12,
        "title": "Doraemon: Nobita's Dinosaur 2006 yeheehheh",
        "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
        "rating": 5,
        "authorId": 2,
        "genreId": 7,
        "status": "active",
        "createdAt": "2021-06-10T16:08:17.076Z",
        "updatedAt": "2021-06-18T15:07:34.312Z",
        "User": {
            "id": 2,
            "name": "Ilya K",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-19T11:51:35.517Z"
        },
        "Genre": {
            "id": 7,
            "name": "Comedy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 6,
        "title": "Harry Potter and the Sorcerer's Stone",
        "synopsis": "A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery.",
        "trailerUrl": "https://www.youtube.com/embed/VyHV0BRtdxo",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/HP.jpg",
        "rating": 4,
        "authorId": 1,
        "genreId": 9,
        "status": "active",
        "createdAt": "2021-06-10T11:18:00.805Z",
        "updatedAt": "2021-06-18T14:51:06.299Z",
        "User": {
            "id": 1,
            "name": "Galuh Adika Alifani",
            "username": "galuh.adika@gmail.com",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan Yuks",
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-18T15:48:59.711Z"
        },
        "Genre": {
            "id": 9,
            "name": "Fantasy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "status": "archived",
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-18T14:51:08.106Z",
        "User": {
            "id": 1,
            "name": "Galuh Adika Alifani",
            "username": "galuh.adika@gmail.com",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan Yuks",
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-18T15:48:59.711Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 22,
        "title": "Narnia",
        "synopsis": "The Chronicles of Narnia series of films is based on The Chronicles of Narnia, a series of novels by C. S. Lewis.",
        "trailerUrl": "https://www.youtube.com/embed/Bqu1vZvdbFI",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/Narnia.jpg",
        "rating": 3,
        "authorId": 1,
        "genreId": 9,
        "status": "active",
        "createdAt": "2021-06-14T16:21:23.434Z",
        "updatedAt": "2021-06-17T15:08:40.367Z",
        "User": {
            "id": 1,
            "name": "Galuh Adika Alifani",
            "username": "galuh.adika@gmail.com",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan Yuks",
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-18T15:48:59.711Z"
        },
        "Genre": {
            "id": 9,
            "name": "Fantasy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "status": "inactive",
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-17T15:23:57.162Z",
        "User": {
            "id": 1,
            "name": "Galuh Adika Alifani",
            "username": "galuh.adika@gmail.com",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": "081319023264",
            "address": "Jalan Jalan Yuks",
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-18T15:48:59.711Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /platform/movies?page=<page>
### GET /platform/movies?size=<size>

> Get all movies from customer web app defaulting 3 items per page and page number 0

_Request Header_
```
not needed
```

_Request Query Params_
```
{
    "page": integer (optional, if size is defined)
    "size": integer (optional, if page is defined)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "totalItems": 6,
    "movies": [
        {
            "id": 11,
            "title": "Love Story (1970)",
            "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
            "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
            "rating": 4,
            "authorId": 1,
            "genreId": 5,
            "status": "archived",
            "createdAt": "2021-06-10T15:47:12.235Z",
            "updatedAt": "2021-06-18T14:51:08.106Z",
            "User": {
                "id": 1,
                "name": "Galuh Adika Alifani",
                "username": "galuh.adika@gmail.com",
                "email": "galuh.adika@gmail.com",
                "password": "$2a$05$EPiNUUF8hfhpE18/cU7YdeEH15vsEbHuRPgOhMIN7DRrY272xuIE6",
                "role": "admin",
                "phoneNumber": "081319023264",
                "address": "Jalan Jalan Yuks",
                "createdAt": "2021-06-10T09:44:38.163Z",
                "updatedAt": "2021-06-18T15:48:59.711Z"
            },
            "Genre": {
                "id": 5,
                "name": "Romance",
                "createdAt": "2021-06-10T09:38:12.199Z",
                "updatedAt": "2021-06-10T09:38:12.199Z"
            }
        },
        {
            "id": 22,
            "title": "Narnia",
            "synopsis": "The Chronicles of Narnia series of films is based on The Chronicles of Narnia, a series of novels by C. S. Lewis.",
            "trailerUrl": "https://www.youtube.com/embed/Bqu1vZvdbFI",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/Narnia.jpg",
            "rating": 3,
            "authorId": 1,
            "genreId": 9,
            "status": "active",
            "createdAt": "2021-06-14T16:21:23.434Z",
            "updatedAt": "2021-06-17T15:08:40.367Z",
            "User": {
                "id": 1,
                "name": "Galuh Adika Alifani",
                "username": "galuh.adika@gmail.com",
                "email": "galuh.adika@gmail.com",
                "password": "$2a$05$EPiNUUF8hfhpE18/cU7YdeEH15vsEbHuRPgOhMIN7DRrY272xuIE6",
                "role": "admin",
                "phoneNumber": "081319023264",
                "address": "Jalan Jalan Yuks",
                "createdAt": "2021-06-10T09:44:38.163Z",
                "updatedAt": "2021-06-18T15:48:59.711Z"
            },
            "Genre": {
                "id": 9,
                "name": "Fantasy",
                "createdAt": "2021-06-10T09:38:12.199Z",
                "updatedAt": "2021-06-10T09:38:12.199Z"
            }
        },
        {
            "id": 2,
            "title": "Titanic",
            "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
            "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
            "rating": 5,
            "authorId": 1,
            "genreId": 5,
            "status": "inactive",
            "createdAt": "2021-06-10T09:50:32.119Z",
            "updatedAt": "2021-06-17T15:23:57.162Z",
            "User": {
                "id": 1,
                "name": "Galuh Adika Alifani",
                "username": "galuh.adika@gmail.com",
                "email": "galuh.adika@gmail.com",
                "password": "$2a$05$EPiNUUF8hfhpE18/cU7YdeEH15vsEbHuRPgOhMIN7DRrY272xuIE6",
                "role": "admin",
                "phoneNumber": "081319023264",
                "address": "Jalan Jalan Yuks",
                "createdAt": "2021-06-10T09:44:38.163Z",
                "updatedAt": "2021-06-18T15:48:59.711Z"
            },
            "Genre": {
                "id": 5,
                "name": "Romance",
                "createdAt": "2021-06-10T09:38:12.199Z",
                "updatedAt": "2021-06-10T09:38:12.199Z"
            }
        }
    ],
    "totalPages": 2,
    "currentPage": 1
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /platform/movies?authorid=<authorId>&genreid=<genreId>&rating=<rating>

> Get all movies in customer web app filtered by author id and/or genre id and/or and rating

_Request Header_
```
not needed
```

_Request Query Params (select at least one)_
```
{
    "authorid": integer
    "genreid": integer
    "rating": integer
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "totalItems": 1,
    "movies": [
        {
            "id": 2,
            "title": "Titanic",
            "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
            "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
            "rating": 5,
            "authorId": 1,
            "genreId": 5,
            "status": "inactive",
            "createdAt": "2021-06-10T09:50:32.119Z",
            "updatedAt": "2021-06-17T15:23:57.162Z",
            "User": {
                "id": 1,
                "name": "Galuh Adika Alifani",
                "username": "galuh.adika@gmail.com",
                "email": "galuh.adika@gmail.com",
                "password": "$2a$05$EPiNUUF8hfhpE18/cU7YdeEH15vsEbHuRPgOhMIN7DRrY272xuIE6",
                "role": "admin",
                "phoneNumber": "081319023264",
                "address": "Jalan Jalan Yuks",
                "createdAt": "2021-06-10T09:44:38.163Z",
                "updatedAt": "2021-06-18T15:48:59.711Z"
            },
            "Genre": {
                "id": 5,
                "name": "Romance",
                "createdAt": "2021-06-10T09:38:12.199Z",
                "updatedAt": "2021-06-10T09:38:12.199Z"
            }
        }
    ],
    "totalPages": 1,
    "currentPage": 0
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /platform/movies/:id

> Get movies by Id in customer web app

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 2,
    "title": "Titanic",
    "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
    "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
    "rating": 5,
    "authorId": 1,
    "genreId": 5,
    "status": "inactive",
    "createdAt": "2021-06-10T09:50:32.119Z",
    "updatedAt": "2021-06-17T15:23:57.162Z"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /platform/mybookmark

> See logged-in customer's bookmark

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```
_Request Params_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "status": "archived",
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-18T14:51:08.106Z"
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "status": "inactive",
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-17T15:23:57.162Z"
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "Only customers can see or perform bookmark actions"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /platform/bookmark/:movieId

> Add new customer bookmark

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```
_Request Params_
```
{
    "movieId": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (201 - Created)_
```
{
    "message": "Success adding new bookmark",
    "id": 4,
    "userId": 12,
    "movieId": 2,
    "movieTitle": "Titanic"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "Only customers can see or perform bookmark actions"
}
```

_Response (404 - Bad Request)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```