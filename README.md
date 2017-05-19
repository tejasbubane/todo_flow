# React Todo application using Flow

Clone this repo.

Install all dependencies:
```
npm install
```

Start the webpack-dev-server:
```
npm run watch
```
This will start server on [http://localhost:9000/](http://localhost:9000/).
You files will be compiled in memory and webpack-dev-server will keep listening
to any filechanges. When any file changes, it will recompile that file
and refresh the browser.

#### Flow

Run the command `flow` to validate code for type errors.
This will run a [flow background process](https://flow.org/en/docs/usage/#toc-run-the-flow-background-process)
and keep checking your code as it is being changed. Mulitple editor integrations
are [available](https://flow.org/en/docs/editors/) to take advantage of this.

For more detailed instructions refer the [official flow docs](https://flow.org/en/docs/).
