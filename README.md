# AI Showcase and Comparison Tool

A simple AI tool

## How to Run

- install frontend `npm i`
- run locally `npm start`
- frontend will be found at `http://localhost:3000/`

## Requirements

- node v12.13.1 (npm v6.12.1)

## User Stories

- Given a working api, when the users accesses the website, then the user can see a list with 1) the name of ai 2) a short description
- Given a working API, When the user accesses the website then the user can see the average task score for each category of tasks (e.g. memory, logic, planning).
- Given the api throws an error message, when the user visits the page, then the user can see an error message.
- Given two or more AIs are available from the api, when the user selects two AIs then a comparison is shown.

## Components

- Simple App bar
- List Item
- Simple List
- Comparison Card
- Table for Comparison
- Graph for comparison

## Requirements

- You are expected to spend about 2 hours or less on this project.
- The solution must be a single​ page web application. That means one index.html file.
- The solution must be written in TypeScript, JavaScript or Flow (not Elm, PureScript or others).
- The solution may use any framework (we mainly use Angular/TypeScript).
- The solution should run on modern browsers.
- The solution should reasonably respond to different desktop/laptop window sizes, but doesn’t need to be optimised for tablet or mobile.
- The code written should be written with scalability in mind (e.g. will you be able to add new requirements later on without difficulty, etc.)
- The solution should look good. You do not need to be an artist or graphic designer, but your design skills should be good enough to ensure the site has a consistent look with some degree of imagination involved.
- Unit tests are not required but the solution should be testable & code should be easily readable / documented

## Next Steps

If I had more time I would do the following:

1. Allow the table to be sorted
1. Add different visualisations for example bar graphs and radar charts.
1. Add more thorough testing
1. Sort out the parts where I added a ts-ignore or TODO or FIXME. I feel that technical debt is OK sometimes, so long as it is documented.
1. Add a loading spinner when the data is loading.
1. instead of having an alert make the errors popup as a toast or add a React Error Boundary.
1. Make the list show the performance indicators more clearly.
1. allow multiple models to be compared

## Design Philosophy
