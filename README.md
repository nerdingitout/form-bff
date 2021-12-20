# node-hello-world

This is an example Express server, which serves an API.

Express is the "fast, unopinionated, minimalist web framework for Node.js".

To run:

    npm install
    npm start

The app will now start on <http://localhost:3000>

If you hit <http://localhost:3000/greeting> you'll get a greeting:

    $ curl localhost:3000/greeting
    {"greeting":"Hello, world!"}

## Put it in a container

Build a Docker image:

    docker build -t node-hello-world .

Now start a container from the image:

    docker run --network=host node-hello-world

You'll be able to access the API at <http://localhost:3000/greeting>.

## Run on OpenShift environement
- you can create the application on Red Hat OpenShift using ```oc new-app``` command, YAML deployments that reside in ```k8s``` folder, or using OpenShift Pipelines.
- Once deployed, make sure to connect to your postgreSQL database by creating a secret in each environment using the following command. Make sure to replace the values with the right credentials for each variable. Leave port 8080 as is.<br>
```
oc create secret generic postgredb-secret --from-literal=DB_USER=<add-db-user-here> --from-literal=DB_PASSWORD=<add-db-password-here> --from-literal=DB_HOST=<add-db-host-here> --from-literal=DB_PORT=<add-db-port-here> --from-literal=DB_NAME=<add-db-name-here> --from-literal=PORT=8080
```
- Then set the secret you create as environment variable for your application<br>
```
oc set env --from=secret/postgredb-secret deployment/form-bff
```

## Acknowledgements

This app was created using the [Express application generator][expressgen].

[express]: https://expressjs.com/
[expressgen]: https://expressjs.com/en/starter/generator.html

