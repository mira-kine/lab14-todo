https://miro.com/app/board/o9J_lnW4wbo=/

# To Do List

## Login Page
### HTML
- [ ] Username input (user-name), password (user-password) input potentially add asterisk to hide password, submit button (submit)
- [ ] h1 Login

### Events
* upon click, we want the username and password to be set to local storage
* if statement to check if the password is correct, give error alert to the user that the password is incorrect
* if password is correct then redirect to the "To Do List" html page
- [ ] DOM the html IDs of userName, userPassword, and submit
- [ ] Import getUser, setUser, findById


## To Do List
### HTML
- [ ] Input radio buttons inside a single div (radio-button), remove button (remove-button), complete task button (complete-button)
* Event listener on the remove button 

### Events
* Make each radio button clickable just to select them, and then we can decide which event can be completed or removed
* On the right section we have a form with an input and an addButton that 
* When item is completed, update the user status in local stoage
* For loop to render HTML elements from renderList, and addItem will add to the list 
* Log out button sends user back to login page
- [ ] DOM the html IDs of radioButton, removeButton, and completeButton 
- [ ] Create event listener for completeButton, removeButton, and addButton


### Utils 
* getUser from local storage
* setUser to local storage
* renderList renders the to do list 
* addItem adds new items to the to do list 
* removeItem removes items from the local storage as well as the HTML list
* findById will grab unique users by their login ID

* TDD all functions 