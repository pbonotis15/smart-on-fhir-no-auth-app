# Svelte FHIR App with no authentication, connecting to an open FHIR server

## Overview

This project is a Svelte application that interfaces with a FHIR server to manage patient data. It leverages the Medblocks UI components and Svelte Routing for building a responsive and interactive UI. The app follows a tutorial by Sidharth Ramesh from MedBlocks on YouTube.

## Features

- List and display patients from a FHIR server.
- Register new patients and update existing patient information.
- Responsive design using Tailwind CSS.
- Easy navigation with Svelte Routing.

## Project Structure

- `App.svelte`: Main entry point of the application, sets up routing.
- `list.svelte`: Component to fetch and display a list of patients.
- `PatientRegistration.svelte`: Component to handle patient registration and updates.
- `Layout.svelte`: Layout component providing a container for other components.
- `fhir.ts`: Configuration of the Axios instance to interact with the FHIR server.

## Dependencies

- `svelte`: Core framework for building the app.
- `svelte-routing`: For handling routing within the application.
- `medblocks-ui`: UI components for building forms and other UI elements.
- `axios`: For making HTTP requests to the FHIR server.
- `tailwindcss`: For responsive and utility-first CSS styling.

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm run dev
    ```

## Usage

- Navigate to the root URL to see the list of patients.
- Click on "New Patient" to register a new patient.
- Click on a patient’s name to view and update their information.

## Configuration

- The FHIR server base URL is configured in `fhir.ts` file. Change this URL if your FHIR server is hosted at a different location.

    ```javascript
    export const fhir = axios.create({
        baseURL: "http://your-fhir-server-url"
    });
    ```
