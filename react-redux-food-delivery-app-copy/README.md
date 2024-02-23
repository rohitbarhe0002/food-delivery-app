## Install the yarn package manager

Install the `yarn` package manager as a global installation and use `yarn` instead of `npm` as `yarn` installs packages faster than npm and works really well:

```
npm install yarn -g
```

If you're running on Linux/macOS, add a sudo in front of the command:

```
sudo npm install yarn -g
```

## Create Stripe Account and Get Test API Keys

To integrate the stripe payment into the application, you will need a stripe account.

You don't need to enter any business details to test the payment in this application.

Navigate to [Stripe website](https://stripe.com/) and register for a new account If you don't have any account. The registration process is really simple.

Once registered, verify your email address and log in to your stripe account.

Once logged in, you can click on the "Developers" tab displayed in the navigation, enable `Test mode` by clicking on the switch and then click on the `API Keys` menu on the left side.

**Check out [this youtube video](https://youtu.be/nJWO2XG8qdI) to see it in detail.**

The publishable key is the public key you'll use in the front-end.

The secret key is the one you should never share with anyone and we'll use it in the backend code to process the payment.

Open the `.env` file in the project folder and add your copied publishable API key in the file like this:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_kjdhajdflakjdfTghPx00TKW1dkdhkjd
```

Now, open the `server/.env` file and add the Stripe secret API key inside it like this:

```
STRIPE_SECRET_KEY=sk_test_hdkhkajdLC009Kxb5idkj
```

The code in the project will work the same for accepting live payments.

For accepting the live payments, you need to use live/standard API keys instead of test API keys.

## Setup MongoDB Atlas account

We'll be using MongoDB Atlas as our online MongoDB database.

If you want to install and use MongoDB locally, check out my [this article](https://levelup.gitconnected.com/how-to-install-mongodb-database-on-local-environment-19a8a76f1b92?source=friends_link&sk=416b443bad1f86b292e4b72602cf5c9b) to understand how to do it.

I will be using MongoDB Atlas so it will be accessible over the internet once we deploy the app to production.

Check out [this video](https://www.youtube.com/watch?v=esKNjzDZItQ) which explains how to create an account and create a cluster and user to access the database.

Once you log in to your MongoDB Atlas account, click on the `COLLECTIONS` button as shown below.

![Collections](https://i.imgur.com/fQcEqn3.png)

Next, click on the `Create Database` button.

![Create Database](https://i.imgur.com/70vwe2U.png)

Enter `food-delivery-app` as the database name and also as the collection name and click on the Create button.

Next, Go back to your cluster and click on the `CONNECT` button which is displayed before the `COLLECTIONS` button.

You will see a connection string as shown in the below screenshot:

![Connection String](https://i.imgur.com/kQFn1gz.png)

Copy the connection string and add it to your `server/.env` file as shown below:

```
DB_CONNECTION_URL=mongodb+srv://your_databse_username:your_databse_password@cluster0.ltzir.mongodb.net/your_dabase_name?retryWrites=true&w=majority
```

Make sure to replace the values with your database name, username, password.

Check out the above [youtube video](https://www.youtube.com/watch?v=esKNjzDZItQ) to understand how to do this.

## Setup SendGrid account for sending email

We'll be using SendGrid which is a very popular email service for sending emails.

Using the free plan you can send 100 emails/per day from your account so its perfect for our application for now.

If you don't have a SendGrid account, navigate to [this page](https://signup.sendgrid.com/) and create a new SendGrid account.

Check out [this video](https://youtu.be/MyxKjixqw3g) which explains how to do it.

You can enter any value for the company website and name if don't have any website.

Once the account is created, check your email account to confirm the email.

Once confirmed, navigate to the dashboard page of SendGrid and create a single sender which is mandatory before sending any email.

Check out [this video](https://youtu.be/kNPY05POciA) which explains how to do it.

If you've your custom email domain then it's better but you can even use your personal email address as shown in the above video.

Once you added the single sender, you will receive an email from SendGrid to confirm the sender and once confirmed, you're ready to send an email from our application.

## Create SendGrid API Key

To send an email you need to create an API key in SendGrid.

Navigate to the `Settings -> API Keys` menu to create an API key.

Check out [this video](https://youtu.be/9PkbQ08WKtI) which explains how to do it.

Make sure to copy the generated API key as it will not be displayed again.

Here, I've selected the `Full Access` radio button for the API key but you can select Restricted Access If you want.

Now, open the `server/.env` file and add a new environment variable for the SendGrid API key.

```
SENDGRID_API_KEY=SG.kajhdflkjakjdfhalkdfj-adfjlfdk
```

Also, add the environment variable with the name `EMAIL` and provide the value as your SendGrid email address like this:

```
EMAIL=myogeshchavan97@gmail.com
```

Now, your `server/.env` file will have 4 environment variables as shown below:

```
DB_CONNECTION_URL=mongodb+srv://your_databse_username:your_databse_password@cluster0.ltzir.mongodb.net/your_dabase_name?retryWrites=true&w=majority
STRIPE_SECRET_KEY=sk_test_hdkhkajdLC009Kxb5idkj
EMAIL=myogeshchavan97@gmail.com
SENDGRID_API_KEY=SG.kajhdflkjakjdfhalkdfj-adfjlfdk
```

Now, we've setup the keys for SendGrid. Later in this course, you will see how to use Stripe Webhooks to actually send email using SendGrid once the order is successful.

But with the provided source code, you'll be able to successfully run the application and place order with all the above changes even If you've not setup Stripe Webhooks.

## Run the application

To run the application, first install the packages mentioned in package.json file.

So execute the following command from the terminal of project folder:

```
yarn install
```

Now, as we will be using Sass(Scss) for writing CSS, we also need to install the `sass` npm package.

So execute the following command from the terminal from inside the project folder:

```
yarn add sass@1.58.3
```

Here, we're installing latest and exact version of sass so the application code will always work even in future.

So we're done installing sass npm package now.

Now, Execute the following commands in sequence from the project folder.

```
1. yarn build
2. yarn start
```

and access your application on http://localhost:3030/.
