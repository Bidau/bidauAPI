The BIDAU RESTful API provides with resources to the BIDAU app. The goal of this API is to serve as the window to all the organization resources, from authetication to database queries.

## Features
 - JSON responses
 - Sign up and sign in
 - Access to database resources
## Next features
 - JWT authentication
 - SSL ciphered connection

## Examples
In your frontend code you might want to access the user `srd@bidau.com` data:
```JavaScript
fetch("api.bidau.com/getuser/srd_bidau_com")
    .then(response => {
        if(response.ok) {
            response.json();
        } else {
            throw new Error("Error requesting data");
    })
    .then(data => ... )
    .catch(error => ...)
```
