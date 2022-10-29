# Application Name

Currency Exchanger

#### Brief Description

Currency Exchanger converts US dollars to another currency using the exchange rate provided by ExchangeRate-API. 

#### Contributor

By Bai Jaitrong with help Devistry YouTube video on Autocomplete Input

## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * JavaScript
  * Node v18.7.0
  * Node Package manager (npm) 8.15.0
  * package.json
  * webpack 4.46.0
  * webpack-cli 3.3.12
  * style-loader 1.3.0
  * htmlWebpackPlugin 4.5.2
  * cleanWebpackPlugin 3.0.0
  * webpack Developement Server 3.11.3
  * ESLint 8.18.0
  * eslint webpack plugin 2.7.0
  * Jest 24.9.0
  * ExchangeRate-API
  * google fonts
  
## Description

User enters a dollar amount in US currency and enter the ISO 4217 three letter currency code for the target country currency or select the code from the drop down menu of the search box. After the user submit the information, the application will show the dollar amount they entered and how much it is worth in the target country currency they entered.

## Setup/Installation Requirements

  1. Create a repository in your GitHub account for this project by selecting the green New button on the upper left side of the screen and follow the instruction. The button is across from Recent Repositories. You will need the URL in step in step 7.

  2. Clone the currency-exchanger repository to your desktop or a subdirectory in your desktop by running the command: 
  
    git clone https://github.com/bjaitrong22/currency-exchanger.git

    * Be careful not to clone the repository inside a local repository. Otherwise, you will have a nested git respository.

### Removing the original remote repository and adding your remote repository

  3. Navigate to the top level/root of the currency-exchanger directory using your command line.

  4. Run the following command to find out the name of the remote repository attached to this project so that it can be removed before adding your remote repository:

    git remote -v

    bj	https://github.com/bjaitrong22/currency-exchanger.git (fetch)
    bj	https://github.com/bjaitrong22/currency-exchanger.git (push)

    * you will get a response above, and the remote repository's nick name/identifier is bj or you may see it as origin.

 5. Enter the command: 
 
    git remote rm origin 
    
    If the identifier is origin. Replace origin if the identifier is something else. So if the identifier is bj, you would enter git remote rm bj. 
      
6. Confirm that the prior remote repository has been removed by running the command below:

    git remote -v  
      
    * Nothing should show up. That means the remote has been removed. If it hasn't been removed correctly, return to step 4. & 5. 
      
7. Enter 

    git remote add origin [your-project-url-here]. 
      
    * You can use an identifier other than origin. Copy the URL from your GitHub project repository by clicking the green CODE drop down menu on your GitHub repository and put it at the end of the command above.
      
8. You can confirm that the new remote is correctly linked by running the command: 

    git remote -v

### Pushing .gitignore file from the clone Currency Exchanger
    
9. Before pushing any changes to your remote repository,run the command 

    git add .gitignore 
    git commit -m "Add .gitignore file."
    git push [your-remote-Identifier] main
    
  This will let GitHub know what files not to upload to GitHub from your local repository.

### Creating .env file to store sensitive information/data

10. Next, create a .env file in your root directory of your project to store sensitive information/data such as your API Keys. Be sure to add this file, .env, to the .gitignore file so that it is not uploaded to GitHub.

### Creating a key for the ExchangeRate-API

11. Go to https://www.exchangerate-api.com to obtain a key. Find the blue Free Key button on the home page, click it, and follow the instruction to sign up for the free key option. Review the API documentation to get familiar with the API call.

12. Copy the Key you created and save it in the .env on your local drive as follows:

    API_KEY = [your-key]

    API_KEY is the variable holding the information. Be sure to leave out the brackets when you save your key in the .env file.

13. The url for your API call will be as follows:

    `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`

    The ticks before and after the url are back ticks (below the tilde symbol on the keyboard) so that template literals can be use to pass information/data via variables to keep the informaion/data secure. The two template literals above are ${process.env.API_KEY} and ${baseCurrency}.

### You are now ready to work on the project

14. Open the project using your text editor of your choosing.
  
  4. To start a development server and view the project in your browser:

     * Navigate to the top level/root of the galactic-age-calculator directory using your command line.
     * Run the command "npm install" to install the dependencies.
     * Run the command "npm run build" to bundle the files.
     * To start a development server, run the command "npm run start".
    
# Showing your work on GitHub pages

  * Use this link to view this web page on **GitHub Pages**: https://bjaitrong22.github.io/currency-exchanger.git/
  * To create gitHub Pages for your portfolio, type **git branch gh-pages**
  * Switch over to your gh-pages branch, type **git checkout gh-pages**
  * Push your gh-pages branch to GitHub, type **git push origin gh-pages**
  * If you have a nickname for your remote, you can use it in place of **origin** in the above push command.
  * You can view your webpage at **my-github-username.github.io/repository-name**

## Known Bugs

  * No know bugs

# License
 * Portfolio is licensed under the terms of GNU AFFERO GENERAL PUBLIC LICENS Version 3, 19 November 2007 ( change if you are using a different license)


 