marketplace-dev
===============

Marketplace dev environment.

Usage
-----

To start the dev proxy:

```
git clone git@github.com:mstriemer/marketplace-dev.git
cd marketplace-dev
node index.js
```

Go to `http://localhost:8678` and you'll get fireplace, `/developers`
will give zamboni and `operators` will give the operators dashboard.
This server will proxy to different apps, but it won't start them. So
you'll need to start the other apps manually.
