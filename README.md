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
2. The ability to increment the score of the game as points are played, following the standard [rules of tennis](/TENNIS_RULES.md)
3. The ability to retrieve the score of a game

There is additional extension functionality the client would like if time allows but the client will be happy with the above as a minimum

The client has specified they need the data for the game in the following format:

```jsonc
{
  "id": 0, // NB: Does not need to be an integer but should uniquely identify the game
  "winner": null,
  "scores": [
    { "player": "Alice", "points": "15" },
    { "player": "Bob", "points": "40" }
  ]
}
```

A completed game should be signified by recording the winner as follows:

```jsonc
{
  "id": 1,
  "winner": "Alice",
  "scores": [
    { "player": "Alice", "points": "A" },
    { "player": "Bob", "points": "40" }
  ]
}
```

### Extension ideas

If you complete the above features with time to spare, some additional features you may wish to have a go at implementing might be:

- Validating request bodies
- Counting the number of completed rallies in a game
- Persistent data storage
- Scoring across games & sets

---

## Useful commands

The project has been configured with a couple of useful commands to help get you started:

### `test`

This will run the tests in watch mode using the [jest](https://jestjs.io/docs/getting-started) testing framework.

Feel free to install & use an alternative framework if you wish but note that depending on the framework this may break the existing tests.

### `start:dev`

This will run the HTTP server locally on port `3000`. You may wish to use this with a tool such as Postman to debug issues.

> NB: The project has been configured using [Yarn](https://classic.yarnpkg.com/lang/en/) but should work equally fine with [npm](https://docs.npmjs.com/cli/v7/commands/npm) however YMMV.
