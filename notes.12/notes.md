.env file is always created in the root of the project (not inside any folder)

if you have created project using REACT_APP
then variables in env are created as REACT_APP_XYZ
and are accessed using process.env.REACT_APP_XYZ

if you have created usimg vite 
then variables are created as VITE_XYZ
and are accessed as import.meta.env.VITE_XYZ 

It is a good practice to make a config file so that every environment variable are accessed as string and no errors are made 

Read the documentation of appwrite for authentication services.

New Appwrite 
Collections:tables,
documents:rows,
Attributes:columns
Database:TablesDB

Container is used define all the styling properties 

In map,keys are put on those html elements which are repeated like li(list item).

{authStatus&&()} in this code , if authStatus is true then only code inside paranthesis will work.

In JavaScript, regex must be wrapped in / /

React Hook Form is a popular, high-performance, and lightweight library for managing form state and validation in React and React Native applications. It leverages React Hooks and embraces native HTML form validation, minimizing re-renders and simplifying form management. 

register: A function to register an input field with React Hook Form, making its value trackable for validation and submission.
handleSubmit: A wrapper function that receives your form data when validation is successful.

register() → collect fields
handleSubmit() → validate + build object
login(data) → receive form values

handleSubmit does this:

Validates the form
Collects all registered inputs
Builds an object
Passes that object to login

The Link component is used when you want a clickable link rendered directly in your component's JSX. 
The useNavigate hook is used when you need to trigger navigation in response to some JavaScript logic or an event that isn't a simple link click. 

AuthLayout is for protection.

Controller is used to connect controlled components (like React-Select, MUI, custom inputs) with react-hook-form.

👉 react-hook-form works best with uncontrolled inputs,
👉 but some components are controlled (they manage their own value & onChange).

Controller acts as a bridge between them.

TinyMCE’s <Editor /> is a controlled component:
It manages its own value
It does not work with register

So Controller:
Listens to changes from TinyMCE
Updates react-hook-form state using onChange

