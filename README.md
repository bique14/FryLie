# FryLie
Connect Line bot with firebase.

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

8. Push git to Heroku
```
git add .
git commit -m 'Init'
git push heroku master
```

9. Go to Heroku and press __Open app__ button and copy link to paste in __Webhook URL__ in Line developer.

Example:
```
  https://app_name.herokuapp.com/webhook
```
10. Press verify webhook 

11. Open firebase console, create new project

12. Press Gear button ![gear button](doc/firebase-setting.png) and click Project settings

13. Select Service Account and Generate new private key

14. After you click the Generate new private key button, a JSON file containing your service account’s credentials will be downloaded

15. Putting the service key(JSON) on the right path and Setting up firebase-admin in your project
```
  npm i firebase-admin --save
```

16. DONE!