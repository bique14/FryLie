# FryLie
Connect Line bot with firebase.

![intro](doc/intro.png)

### How to setup

1. Create [Line developer provider](https://developers.line.biz/console/register/messaging-api/provider/)

2. Create __Channel access token__

3. Disable __Auto-reply messages__ and Enable __Use webhooks__

4. Login in [Heroku](https://dashboard.heroku.com/apps) and __create new app__

5. Open project folder and install heroku
``` 
  npm i -g heroku 
```

6. Login Heroku with commandline
``` 
heroku login 
```

7. Creat Git repository
``` 
git init
heroku git: remote -a app_name
```

8. Create __Procfile__ in your project
```js
// Procfile
web: node app.js
```

9. Push git to Heroku
```
git add .
git commit -m 'Init'
git push heroku master
```

10. Go to Heroku and press __Open app__ button and copy link to paste in __Webhook URL__ in Line developer.

Example:
```
  https://app_name.herokuapp.com/webhook
```
11. Press verify webhook 

12. Open firebase console, create new project

13. Press Gear button ![gear button](doc/firebase-setting.png) and click Project settings

14. Select Service Account and Generate new private key

15. After you click the Generate new private key button, a JSON file containing your service account’s credentials will be downloaded

16. Putting the service key(JSON) on the right path and Setting up firebase-admin in your project
```
  npm i firebase-admin --save
```

17. DONE!