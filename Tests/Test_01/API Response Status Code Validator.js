
/*As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.

- 200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"*/


let statusCode = 401

switch (statusCode) {
    case 200:
        console.log("PASS - OK: Request successful");
        break;

    case 201:
        console.log("PASS - Created: Resource created successfully");
        break;
    case 301:
        console.log("WARNING - Moved Permanently: URL has changed");
        break;

    case 400:
        console.log("FAIL - Bad Request: Check request payload");
        break;

    case 401:
        console.log("FAIL - Unauthorized: Check auth token");
        break;

    case 403:
        console.log("FAIL - Forbidden: Insufficient permissions");
        break;

    case 404:
        console.log("FAIL - Not Found: Check endpoint URL");
        break;

    case 500:
        console.log("FAIL - Internal Server Error: Backend issue");
        break;


    default:
        console.log("UNKNOWN - Unhandled status code")
        break;




}


