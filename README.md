<h1 align="center">
  Recipe Server
</h1>

<p align="center">
  Based on Sail.js
</p>

## Start Guide

1.  **Installation**

    ```sh
    npm install
    ```

2.  **Development**

    ```sh
    sails lift
    ```

    Site is now running at `http://localhost:1337`!

3)  **Rebase and merge the version update to master**

    Git add, commit and push updated source code to master branch

    ```sh
    git add -A
    git commit -m 'commit-note'
    git pull origin master
    git push origin master
    ```

4)  **Deployment to Heroku**

    Deploy web app running at http://order.thyhive.com

    ```sh
    npm test
    npm run build
    npm run deploy
    ```

## What's inside?

Top-level files and directories in the project.

    .
    ├── ...
    ├── ...
    ├── ...
    ├── .gitignore
    ├── ...
    ├── ...
    ├── ...
    ├── ...
    ├── ...
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── ...

    *Note: Update file and directories information.*

1.  **`...`**: ...

2.  **`...`**: ...

3.  **`...`**: ...

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`...`**: ...

6.  **`...`**: ...

7.  **`...`**: ...

8.  **`...`**: ...

9.  **`...`**: ...

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`...`**: ...

## This project is migrated and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
