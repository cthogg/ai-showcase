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
- Given the api throws error message, when the user visits the page, then the user can see an error message.
- Given two or more AIs are available from the api, when the user selects two AIs then a comparison is shown. This is only on the table and not with the graphs at the moment.

## Next Steps

If I had more time I would do the following:

1. I feel that the "Agent Overview" and "Agent Comparison" sections have been merged into the same view. This works for now, but as the complexity of the application grows, this may have to be split apart.
1. Sort out the parts where I added a ts-ignore or TODO or FIXME. These moslty involve catching errors when things are not found, and it assumes that there are only three categories (these three categories are hard coded at the moment). I feel that technical debt is OK sometimes, so long as it is documented.
1. Connect the data in the ShowcaseGrid to the Charts component since at the moment the data is currently hard coded.
1. Add a loading spinner when the data is loading.
1. instead of having an alert make the errors popup as a toast or add a React Error Boundary.
1. Make the list show the performance indicators more clearly (similar to Excel's conditional formatting)

## Design Philosophy

- Testing. I find snapshot testing and easy and quick way to spot visual regressions. Also code which is easy to test is often better designed code. So it adding tests raises the bar in coding standards.
- Automation: Can spot regressions especially when working across the team. Husky: so you are not committing or pushing code which fails tests. This set up has large benefits going on later in the project.
- component design: much of the components were created following the examples of material-ui official documention. This allowed a rapid prototype to be developed whilst also comforming to the design standards.
- Design System: It is good to develop and document a design system to ensure consistencies across teams. I used Material UI since Material Design is developed by Google, and hence the engineers and users will have some familiarity with it.
- Documentation: If I had more time I would add some architectural decision records within the repository. ADRs. To save you looking back and asking, why do we use this library? Why was it made like this? This would have been done for the material ui library decision.
- Deployment. I would have liked to have deployed the app, in order to check that the whole development process works (development, testing, deploy). I have found Netlify very good for small frontend projects.
- Much of this design philosophy was based on an earlier project from myself: https://github.com/cthogg/todo-app-frontend

Total time Spent 4.5 hours
