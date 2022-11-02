# Tennis Server Kata

The purpose of this kata is to allow you to demonstrate skills that will hopefully be relevant to your role at Truepill.

Things we like to see:

- Test Driven Development or similar evidence of testing
- Good API design principles
- Ability to follow a specification
- Ability to expand upon a specification if it makes sense to do so
- Knowledge of Javascript / Typescript
- Knowledge of HTTP server architectures such as use of appropriate status codes

This list is not meant to be exhaustive, nor is it meant to be a checklist which you need to try to complete. This list is here to give you an idea of the kinds of skills you may wish to demonstrate.

## The Task

Imagine you have been asked to create an API to track tennis games at a local club. The client would like a prototype for a demo this afternoon. They are expecting to see the following functionality as a minimum:

1. The ability to start a new game
2. The ability to increment the score of the game as points are played, following the standard rules of tennis\*
3. The ability to retrieve the score of a game

There is additional extension functionality the client would like if time allows but the client will be happy with the above as a minimum

The client has specified they need the data for the game in the following format:

```json
{
  "winner": null,
  "scores": [
    { "player": "Alice", "score": "15" },
    { "player": "Bob", "score": "40" }
  ]
}
```

A completed game should be signified by recording the winner as follows:

```json
{
  "winner": "Alice",
  "scores": [
    { "player": "Alice", "score": "A" },
    { "player": "Bob", "score": "40" }
  ]
}
```

\*_The rules for scoring tennis are provided [here](/TENNIS_RULES.md)_
