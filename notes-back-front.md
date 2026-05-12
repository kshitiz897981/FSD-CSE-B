The npm init command is used to initialize a new Node.js project in the current directory. It is an interactive command-line utility that creates a package.json file, which is essential for managing project metadata, scripts, and dependencies. 

npm init --yes (or npm init -y): This command instantly generates a package.json file with all default values, skipping the interactive prompts. This is a time-saver for simple projects or experiments.

In node you run a file with node file-name(ex.  node index.js).

In scripts inside package .json , you can create your own script as start(any name you want) and write node index.js(main file name) inside it and now you can run "npm run start" at the terminal.
"scripts": {
    "start": "node index.js"
  },

process.env: In Node.js, all environment variables are accessible through the global process.env object.

https://api.github.com/users/kshitiz897981 //github api

If you acquire express using the statement import express from 'express' and you get any error , just type "type":"module" in package.json

You can properly read the json data at the json formatter website(just paste the data there).

Instead of writing the whole url inside the axios.get(),just write the main route(for ex'/api/jokes') and the preceding part inside the proxy in the vite.config file.It is written depending on how you created the react app(using vite or create react).
server:{
    proxy:{
      '/api':'http://localhost:3000'
    }
This means whenever a request is made with '/api', 'http://localhost3000' is always appended to it.     

You can't directly access data from the different places,to access the data you must have the same port and same url.

So by using proxy it makes sure that the request is made from the same url , so therebySo by removing the problem of having diff url.So it means on whatever port(or url) your vite app is running , the server will think that it is running on the same server bez of the proxy.(Another method is by whitelisting the url inside the server)