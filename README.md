https://user-images.githubusercontent.com/98120553/174451601-99fa0b00-0c88-49c8-a164-3f9f63f871ab.mp4 

https://user-images.githubusercontent.com/98120553/174451603-ad0329fe-9ac6-47d0-8dfa-5189d3218284.mp4

https://user-images.githubusercontent.com/98120553/174451968-65e8a0c0-3216-4364-a444-a4f0521203e7.mp4

https://user-images.githubusercontent.com/98120553/174495911-cae7ccf2-2c15-4d1d-981f-eeae67e56d93.mp4

https://user-images.githubusercontent.com/98120553/174496727-e5d92daf-0faa-461d-bd87-d17c8944fcbd.mp4




# NoSQL-Social-Network-API-Project-18

Social Network API is an important project which explores many technologies and implements MongoDB database, and the Mongoose ODM. On addition this API for social network is using Express.js for routing.</br>
MongoDB is a source-available cross-platform document-oriented database program which was introduced to the developers in 2009. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. In the last decade MongoDB becames a popular choice for many websites including social network Applications. MongoDB offers fast connectivity and processing of large amounts of data as well as the flexibility with unstructured data. 

[Express](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose)

 </br>
https://user-images.githubusercontent.com/98120553/174451603-ad0329fe-9ac6-47d0-8dfa-5189d3218284.mp4

## User Story

```
Many social media apllications use dynamicly upaded pages. New Social Media startup is looking for the solution to develop an application capable of handling large number data which is dynamicaly updated on the multiple pages accros the platform. The projects requires a use of a data base with Express.js. Express.js is a back end web application framework for Node.js. It was released in 2010 as free and open-source software under the MIT License. This framework would be a great combination with the MongoDB to develop this social media apllications.
```


## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Mock-Up

The following video examples show the application's API POST and DELETE routes for reactions to thoughts being tested in Insomnia.

### Models

**User**

* `username`
    * String
    * Unique
    * Required
    * Trimmed

* `email`
    * String
    * Required
    * Unique
    * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
    * Array of `_id` values referencing the `Thought` model

* `friends`
    * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**

**Thought**

* `thoughtText`
    * String
    * Required
    * Must be between 1 and 280 characters

* `createdAt`
    * Date
    * Set default value to the current timestamp
    * Use a getter method to format the timestamp on query

* `username` - Which user created this thought
    * String
    * Required

* `reactions` (like replies)
    * Array of nested documents created with the `reactionSchema`

**Schema Settings**

**Reaction** (SCHEMA ONLY)

**Schema Settings**

### API Routes

**`/api/users`**

**`/api/users/:userId/friends/:friendId`**

**`/api/thoughts`**

**`/api/thoughts/:thoughtId/reactions`**

## Sources
Google Search </br>
Screencastify Chrome Browser Extension </br>
