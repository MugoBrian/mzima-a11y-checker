# Mzima A11y Checker

Web accessibility checker tool that allows you to check for web accessibility issues in your code or website url.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Support and Contact](#support-and-contact)
- [Acknowledgments](#acknowledgments)

## Overview
A web accessibility checker is a vital tool that helps developers and website owners identify and fix accessibility issues in their code or website URL. 
This tool scans and analyzes content, highlighting potential accessibility challenges such as image descriptions, HTML structure, navigation compatibility, and more. By doing so, it ensures digital content is accessible to everyone, regardless of their abilities. This tool empowers users to improve user experience for all visitors, fostering inclusivity in the online space. It's a valuable asset in creating functional and welcoming digital environments, promoting a more equitable online landscape.

## Installation

Instructions on how to install the project. 

### Requirements
Node version > 18.x.x
Latest version of NPM

To run the a11y-checker-api locally, follow these steps:

Clone the repository:

`git clone https://github.com/MugoBrian/mzima-a11y-checker.git`

Navigate to the server directory:

`cd a11y-checker-api`

Install dependencies:

`npm install`

Start the server:

`npm run web:serve`

Running
Open the browser and navigate to : http://localhost:4200

## Usage
Examples and instructions on how to use the project.

1. **Prepare Backend Server:**
   - Before you begin, ensure that the [backend server](https://github.com/MugoBrian/a11y-checker-api/) is up and running. This is a prerequisite for running the accessibility checks.

2. **Select Input Mode:**
   - Navigate between the "Code" and "URL" Tab buttons based on your input preference. This allows you to switch between providing code snippets and website URLs.

3. **Input Website URL:**
   - Once you've chosen the appropriate tab, such as the "URL Tab," input the website URL that you want to run accessibility checks on. For instance, you can use `https://example.com` as the URL placeholder.

4. **Choose Accessibility Engine:**
   - Select the accessibility engine you want to utilize for running the accessibility checks. You have the option to choose from various engines such as Axe, Pa11y, or Axe Dev Core.

By following these structured steps, you can efficiently initiate and manage accessibility checks for your code or website. This approach ensures a clear and organized process, making it easier to perform thorough accessibility assessments.

![Mzima A11y Checker Interface](https://github.com/MugoBrian/mzima-a11y-checker/blob/main/src/assets/images/usage.png)

## Features
List of key features:

1. It has the capability to conduct accessibility checks on both HTML code and website URLs.
2. Additionally, it offers support for executing accessibility assessments using prominent libraries such as pa11y, axe-dev core, and the IBM Accessibility Checker. 
   This functionality empowers the project to comprehensively evaluate and ensure accessibility standards across different dimensions.

## Support and Contact
How users can seek support or contact you for assistance. Incase of any issues raising it in the Github Issues tab or contact [me](brianmuchirimugo@gmail.com)

## Acknowledgments
Credits to pa11y, axe-dev core and IBM Accessibility Checker libraries.
Big Thanks To [@ifycode](https://github.com/ifycode) and [Ushahidi](https://github.com/ushahidi)

