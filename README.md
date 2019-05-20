# Course-Search

This project is the solution for front-end code test of [udacity](https://github.com/udacity/cn-interview/blob/master/front-end-position.md).

## Skills

1. React.js, React Router, React Rudux,
2. Axios,
3. Javascript ES6, HTML5 and CSS,
4. Enzyme,
5. bootstrap or material UI,

## Time Spent and log

start: 8:00 pm, 5 May 2019

|#| time | hours | comments|
|----|----|----|----|
|1| 8:30pm, 5/5/2019| 0.5 | setup server, design |
|2| 11:12pm, 13/5/2019| 2 | initial components and ui, modify backend|
|3| 1:35am, 15/5/2019| 5 | apply redux, and implement filter, search and pagination |
|4| 0:15am, 19/5/2019| 2 | working on ui |

## To-dos

1. Implement UI and draft components, states and actions,
2. search courses(need to modify the api first or doing this at frontend),
3. filter by types and difficulties,
4. persistence while refreshing page,
5. pagination(need to modify the api firstor or doing this at frontend),
6. testing

## Implemented

## Sample page

![image](https://cloud.githubusercontent.com/assets/914595/24827854/437d0a5e-1c95-11e7-92c0-830301e2b572.png)

## Design

Based on the sample, this page can be divided into these components:

1. Sidebar,
   1. Page Title
   2. Type
   3. Difficulty
2. Content
   1. Search
   2. Banner (the blue information)
   3. Courses
      1. Course (image, title, difficulty, introduction)
      2. Pagination (number, size)

And the state and relative actions are:

|#|Component|state|action|
|----|----|----|----|
|1.2|Type|selectedType| onSelect|
|1.3|Difficulty|selectedDifficulty| onSelect|
|2.1|Search|inputTitle| onChange, onClick|
|2.3|Courses|courses| |
|2.3.1|Course|image, title, difficulty, introduction, numberOfProjects ||
|2.3.2|Pagination|number, size| onNumberChange, onSizeChange |

## About Me

checkout my github user page [here](https://shn2016.github.io/)

```javascript
const kai = {
  name: "Kai GAO",
  email: "kaigaoinau@gmail.com",
  profession: "Junior Web Developer",
  location: "Melbourne, VIC, Australia",
}
```