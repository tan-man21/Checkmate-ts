# Checkmate
Milestone Project 2 - PERN stack 

A To-Do list for multiple users allowing each user to be able to create multiple lists with tasks and sub-tasks.

<br>
Name - Checkmate
Edward G, Mark L, Nathan B, Tanner, Josh

<hr>
## Instructions


## Parts:

### PostgreSQL Database ![Alt text](images/postgres.png)

 - List table
    - list_id integer, primary key
    - list_name string
 - Task table
    - task_id integer, primary key
    - completed boolean
    - date_created datetime
    - date_started datetime
    - date_due datetime
    - date_completed datetime
    - list_id integer, many-to-one(List table)
 - Subtasks table
    - sub_task_id integer, primary key
    - list_id integer, many-to-one(List table)
    - task_id integer, many-to-many(Task table)
    - sub_task_name string
    - completed boolean
    - date_created datetime
    - date_started datetime
    - date_due datetime
    - date_completed datetime

### Backend API with Express and Node.js ![Alt text](images/icons8-nodejs-48.png) ![Alt text](images/icons8-express-js-50.png)
#### Mark, Tanner
 - Express server
 - CRUD routes
 - Sequelize to interact with db

### React Frontend ![Alt text](images/icons8-react-40.png)
#### Nathon, Josh
 - Components
 - Axios or Fetch API to make HTTP requests

### Functionality 
 - Form component
 - Show active lists
 - Button to show completed list
 - Button to create new list
 - Show list items (expand/collapse)
 - Add/Remove/Edit items
 - Checkmark for completion
 - Add subtasks
 - Clone history (optional)
 - Personalized login (optional)

### Style UI
 - Chess theme

### Test

### Deploy