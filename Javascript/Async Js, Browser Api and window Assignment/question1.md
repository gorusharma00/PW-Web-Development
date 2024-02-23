### XMLHttpRequest

- XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript. 
- Despite of having XML in its name, it can operate on any data, not only in XML format.
-  We can upload/download files, track progress and much more with XMLHttpRequest.


```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(this.responseText)
            console.log(data);
        }
    }
    xhr.send();
```

- In the above code:
    - The open method initializes a request. The first argument is the HTTP method, the second one is the URL (or the path) of the requested resource, and the third one is a boolean that specifies whether the request should be made asynchronously or not.

    - The onreadystatechange property defines a function to be executed when the readyState changes.
    
    - The readyState property holds the status of the XMLHttpRequest. A readyState of 4 means the operation is complete, and a status of 200 means it was a successful request.
    - The send method sends the request to the server.