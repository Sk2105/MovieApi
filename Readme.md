# Movie Backend App

This movie backend rest full api is create by using `nodejs`

## Follow These Steps to use it

## Get Movie Request

```markdown
GET http://localhost:5000/api/movie
```

## Result

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

## Post movie Request

```markdown
POST http://localhost:5000/api/add_movie
```

### Body

```json
{
  "id": 3,
  "title": "The Godfather: Part III",
  "year": 1974,
  "director": "Francis Ford Coppola",
  "actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro"
}
```

## Put movie Request

```markdown
PUT http://localhost:5000/api/update_movie/:id
```

## Body

```json
{
    "id": id,
    "title": "The Godfather: Part III",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro"
  }
```

## Delete Movie Request

```markdown
DELETE http://localhost:5000/api/delete_movie/:id
```
