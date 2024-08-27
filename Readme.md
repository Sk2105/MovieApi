# Movie Backend Application
To retrieve the list of movies, you can make a GET request to the following endpoint: 
GET http://localhost:5000/api/movie

## Expected Result

Upon making the GET request, you should receive a JSON array containing the details of the movies stored in the database. The response will look like this:

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "actors": "Marlon Brando, Al Pacino, James Caan, Robert Duvall"
  },
  {
    "id": 3,
    "title": "The Godfather: Part III",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro"
  }
]
```

## Post Movie Request

To add a new movie to the database, you can make a POST request to the following endpoint:
POST http://localhost:5000/api/add_movie

### Request Body

The body of the POST request should be in JSON format and include all necessary information about the movie you wish to add. The structure of the request body will look like this:

```json
{
  "id": 3,
  "title": "The Godfather: Part III",
  "year": 1974,
  "director": "Francis Ford Coppola",
  "actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro"
}
```

## Put Movie Request

If you need to update the details of an existing movie, you can achieve this by making a PUT request. The endpoint for this request will be:
PUT http://localhost:5000/api/update_movie/:id

### Request Body

In this case, the body of the request should also be in JSON format and should contain the updated details of the movie. Here’s an example of the expected body for this request:

```json
{
    "id": 3,
    "title": "The Godfather: Part III",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro"
}
```

## Delete Movie Request

To remove a movie from the database, you would use a DELETE request targeted at the appropriate endpoint. The request would look like this:
DELETE http://localhost:5000/api/delete_movie/:id

This request will remove the specified movie based on its unique identifier provided in the URL. Make sure to replace `:id` with the actual id of the movie you wish to delete from the system.
