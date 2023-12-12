# Template Render App

## Render

Render is replacing Heroku as the go-to source to deploy free web applications. The only adverse effect is that postgres
services are only free for 90 days.

## Account Creation

I suggest using your GitHub credentials for login as you will need to link your account anyhow in order to deploy.

## How to setup to deploys to Render

1. Create a repo with an appropriate name, copy this template (the files!), push to main
2. On Render click the + and select Postgresql
3. Give the database a name. (I would suggest adding "-db" to the end of your repo name).
4. Set "Instance Type" to free
5. You can choose user and database name if you'd like, but I would let it generate.
6. Click "Create Database" button 
7. Wait for the database to be created and then copy the "Internal Database URL" (we will set this as an env var later).
8. In the nav bar click the + again, and then select "Web Service"
9. Link to your GitHub repository (select the github option click next and then add the repo to Render).
10. Click "Connect"
11. Choose a name (maybe your repo name)
12. Runtime should be "Node"
13. Build command should be "npm install"
14. Start command should be "node server.js" (change this to meet your needs if you changed something from this template)
15. Set "Instance Type" to free
16. Click "Advanced"
17. Click "Add Environment Variable"
18. Add DB_STRING as the key and then paste that "Internal Database URL" from when we copied it before
19. Scroll to the bottom and click the "Create Web Service" button.

Going forward when you merge to main it will deploy your app on Render!

