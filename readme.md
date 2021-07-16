# Custom BC Draft App Installer

Use this to install draft (unapproved) apps within a BC store.

1. Log into https://devtools.bigcommerce.com/my/apps as the store owner
2. Create an app w/ a load URL pointed to the permanent location of your FE app. (This should recieve the auth token and validate it on the BE)
3. Start this project `npm start`
4. In a separate terminal, start ngrok on port 3000 `npx ngrok http 3000`
5. Place the https URL that ngrok outputs into the auth field of the developer portal app
6. Logged into the BC store admin (as the store owner) go to /manage/marketplace/apps/my-apps/drafts and click install
7. If no errors are displayed, your app should now be available in the apps section (Individual users will have to be added in Accounts section)