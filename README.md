# Highcharts
Example mini project with React Redux TypeScript and Highcharts


## Process of creating :
 
### 1. Create app with npx create-react-app with --template typescript

### 2. Installing Redux with npm install redux react-redux redux-thunk @types/react-redux

### 3. Creating a reducer

### 4. Using separation of Concerns create a separate file with Actions that contains Interfaces in order to clearly define our Actions and format of payload

### 5. Further more we are creating a new file that contains Action Types in order declare them "globaly" and to keep track of them

### 6. Creating a index.ts in reducers in which we are going to combine our reducers and define a type to our state that is going to actually be the type of the reducers

### 7. Now that we have that in place we are going to create our Action Creators that represent our functions that dispatch actions

### 7a. While we create our Action Creators we define what we actually dispatch in a form of action type and payload with help from Actions and Action types files

### 8. We have everything in place now, so we can go on and create our STORE where we add our reducers and ApplyMiddleware with thunk

### 9. Now inside the index.tsx file we need to wrapp our React App in a provider from Redux with our Store

### 10. We test our App with running npm run start and make sure we did not made a WRONG turn :)

### 11. We can go now in our App.tsx file and start to make our UI

### 12. First of all, not to forget everything we have done, we import our useDispatch hook from redux as well as BindActionCreators to our homemade ones (depositMoney etc..)

### 13. We do the same think and add our State that we select with the help of UseSelector from redux

### 14. Now we create a simple UI and add eventListeners to our UI and see the magic work. 

### 15. Now that we have that in place, let us demonstrate the history of transactions with Highcharts as we install them with npm install highcharts --save
