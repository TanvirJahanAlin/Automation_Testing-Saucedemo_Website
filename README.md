# 🧪 Automation Testing: SauceDemo Website

This project is an automation testing suite built for the [SauceDemo website](https://www.saucedemo.com/). It demonstrates WebDriverIO automation capabilities including login scenarios, cart functionality, order verification, and Allure report integration.

---

## 🚀 Tech Stack

- **Test Framework**: WebDriverIO
- **Language**: JavaScript (Node.js)
- **Test Runner**: Mocha
- **Assertion Library**: Chai
- **Reporting Tool**: Allure Reporter
- **Execution Mode**: Parallel and Sequential

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

    git clone https://github.com/TanvirJahanAlin/Automation_Testing-Saucedemo_Website.git
    cd Automation_Testing-Saucedemo_Website
    
### 2. Install Dependencies

    npm install
---

## ▶️ Running the Tests

### 🔁 Run Tests in Parallel

    npm run wdio

### 🔂 Run Tests Sequentially

    npm run saucedemo
---
## 📊 Generate and View Allure Report

    npm run getReport

This will generate the Allure report and automatically open it in your default browser.

---

## 📁 Project Structure

    ├── allure-report/            # Auto generated Allure HTML report
    ├── locators/                 # Element locators for the site
    ├── pages/                    # Page Object Models (POM)
    ├── specs/                    # Test scenarios
    ├── wdio.conf.js              # WebDriverIO configuration
    ├── README.md                 # Project documentation
    └── package.json              # NPM script and dependency config
  
---
  

## 📝 Notes

-   All scenarios can be executed both independently and in sequence.
    
-   Allure reports are generated after each run for result analysis.
    
-   The project is structured using the Page Object Model for better maintainability.
    
-   Ensure Chrome browser is installed for the execution.
    
  ---


## ##👩‍💻Author

-   **Name**: Tanvir Jahan Alin
-   **LinkedIn**: [TanvirJahanAlin](https://www.linkedin.com/in/tanvir-jahan-alin/)
----------

Thank you for reviewing this project!
    
