# Intelly - General Overview and Current State

Intelly is a platform being built to help small-to-medium-sized food and beverage brands manage various aspects of their business. The project is divided into separate repos to allow independent development. Below, you can find a list of the specific front and back ends that make up this project, links to their individual repos, as well as whether or not they have been deployed for public demo.

The public demos should be accessed thought this link: https://gallant-wing-415919.netlify.app/
This will bring you to a login page, which you can enter with the following credentials:

email: guest@intelly.test
password: guest

Once logged in, you will be brough to a dashboard that allows you to navigate the project in its current form. The guest account will have access to all services currently deployed for public demo, with only certain subservices being excluded to prevent any possible interference with sensitive data.

# This Specific Repo - Overview

As mentioned above, Intelly is split into several independent repos in order to facilitate different timelines for development, and thus make it possible to demonstrate those services that have reached an appropriate stage of devlopment.

The repo you are currently visiting is the front end for the Schedule app. Its purpose is to allow team managers to schedule events, and for field reps to view their schedules. It will also serve as a workflow center for field reps as they complete their events, and will link to the Field Reporting app when it comes time to submit an event report. It will likely connect to the same server as the Field Reporting app, although this has not yet been finalized. This app is in extremely early stages of development, and will likely be built out significantly during Q1 2022.

# Additional Goals for Development

As mentioned, this app is in very early stages of production. Even so, it is at this point likely that its scope will remain limited to admin CRUD operations related to scheduling events, and as a workflow cneter for field reps. In the meantime, the next stage will be focused on building a custom dynamic table component (which will be used to replace MUI tables in other Intelly apps) for admin and field rep views, build CRUD routes, and getting the layout and styling to be consistent with other Intelly projects.

# Installation and Contribution

If you wish to test this project locally, you may clone the repo to a directory on your machine. Navigate to the new directory using your terminal, and install all necessary dependencies by running the command 'npm i'.

To start the app, simply run 'npm start' and navigating to localhost:3012 in your browser. As the server is not yet deployed, you will need to clone that repo as well (link below) and run it on a separate port (default=3013)

At this time, I am not inviting individual contribution, unless there has been a specific conversation around it. If you come across something in the code that you wish to share, by all means message me and we can speak about it.

# All Repos Related to the Intelly Project

The following is a list of all related projects that have entered some stage of development. It will be updated as work begins on new services.

<a href="https://github.com/tomekregulski/intelly-auth-client">Authorization - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-auth-service">Authorization - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly">Retail Data Dashboard - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-server">Retail Data Dashboard - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-rep-web-client">Field Reporting - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-rep-react-native">Field Reporting - React Native Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-back-end">Field Events - Back End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/fieldist-admin-web-client">Field Events Administration - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-admin-tasks-client">Administrative Tasks - Front End</a> - Deployed as part of the Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-admin-task-server">Administrative Tasks - Back End</a> - Deployed as part of the Public Demo<br>
<a href="https://github.com/tomekregulski/intelly-payments-client">Payments - Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-payments-server">Payments - Back End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-form-builder-client">Form Builder - Front End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-form-builder-server">Form Builder - Back End</a> - Early Stage, Not Deployed for Public Demo <br>
<a href="https://github.com/tomekregulski/intelly-schedule-client">Schedule - Client</a> - Early Stage, Not Deployed for Public Demo <br>
