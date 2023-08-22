# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Wine Data Set Statistics

This project calculates and displays statistical measures for the Wine Data Set using React. It includes functionality to calculate class-wise mean, median, and mode for both the "Flavanoids" and "Gamma" properties of the dataset.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install Dependencies:
	
	Yarn install

3. Run the application:

	Yarn Start

4. Open your browser and navigate to http://localhost:3000 to see the calculated statistics.


ABOUT TASK

Components

WineStatistics

The WineStatistics component fetches the wine data and calculates class-wise statistics for both "Flavanoids" and "Gamma" properties. It displays the statistics in tables.

calculateStatistics(property): Calculates class-wise statistics for the specified property ("Flavanoids" or "Gamma").

calculateMean(data): Calculates the mean value of an array of data.

calculateMedian(data): Calculates the median value of an array of data.

calculateMode(data): Calculates the mode value of an array of data.

renderTable(property): Renders a table displaying the calculated statistics for the specified property.

Styling

The tables are styled using CSS to provide a clean and organized appearance.

Data Source

The wine dataset is provided in the myoutput.js file, containing the required properties for calculations.

Libraries Used

React: Used for building the user interface components.

Papaparse: Used to parse CSV data into JavaScript objects.

Folder Structure

src: Contains React components and data files.

public: Contains the HTML file and data files.

Author

Washim Akram

Screenshots of the both table

![Tables](myimage/D:\Reactjs\mynewtask\src\myimage\Tables.PNG)




