### Same-Origin Policy

- The same-origin policy is a security measure implemented in web browsers to prevent interactions between resources from different origins.

-  In the context of AJAX requests, this policy allows scripts running on pages originating from the same site – a combination of scheme, hostname, and port number – to access each other's DOM with JavaScript, but not to access each other's DOM if they are not from the same site.

- This policy can pose a problem when you want to make AJAX requests to a different domain, because the browser will block the request due to the same-origin policy.