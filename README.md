# React Code Refactor Spend Analyzer
Any application development required refactoring or revisiting the code to break down it into further logical components in order to make sense with other teammates.

Here our previous **React Spend Analyzer app** required code refactoring with advanced hooks that allow us to scale up an application in a useful manner. In order to achieve this required to visualize first the tree structure of any app which segregates the logical piece of code into different components. 

As we can see in below image how root app further breakdown into 3 different level of component hierarchy in order to distribute UI portion.

![Snap of React Tree](/ReactAppComponentTreeFlow.jpg "Snap of React App Tree")

The **naming convention of components** is important to understand what action will perform by each component. While splitting code into logical order one has to keep in mind the states **(useState hook)** that are been shared across the components and are component-specific. 

Listing those states will help to create **context (useContext hook)** and **Provider (BudgetProvider)** if need to shared in deep level of tree component. However, common functions required to separate out and create a **custom hook (useBudgetCalc)** will help in the future from a scalability perspective.

Creating a draft tree of an app will always help to make things correct in advance before they go in the wrong direction.

Below is the React Spend Analyzer app UI component breakdown so it's easy to compare tree structure and visualize the final UI of App. Logical file name and folder structure will allow the app to scale further.

![Snap of React App UI component structure](/ReactAppComponentTree.jpg "Snap of React App UI component structure")

Check out the code [previously written](https://codesandbox.io/embed/react-spend-analyzer-7i2b09?fontsize=14&hidenavigation=1&theme=dark) and now  [refactored code](https://codesandbox.io/embed/react-customhook-useref-usecontext-provider-fyw9zf?fontsize=14&hidenavigation=1&theme=dark).

Play around codesandbox and check the live preview of how code is written for better understanding.
