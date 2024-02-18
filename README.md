# Synonym test project

I have created a simple react app that uses the Blocktank API client to manage lightning channels.

While trying to create an order using the Blocktank API I ran into an error:

```
BlocktankClientError: Failed to create order. undefined
    at BlocktankClient.<anonymous> (BlocktankClient.ts:73:1)
    at Generator.throw (<anonymous>)
    at rejected (RefreshUtils.js:286:1)
```

Not knowing how to fix this error and having time constraints I decided to just use some mock data based on the response it should have given.

I used my usual setup for a react app, using typescript and components following an atomic design pattern. Normally I would use redux for state management but for this simple app I decided it was not necessary.

- Components (simple components like Button and Input)
- Compositions (composed components like NumberInput and SelectExpiry)
- Containers (gathering of all components and compositions)
- Connectors (connecting the containers to the api)

There's still a lot to do. Like actually make it work with the API. I also have not made the components for paying by invoice.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
