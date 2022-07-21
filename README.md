## Installation and run

    npm install

 Set up bot token in config file 

    npm run start
    
## API usage

## Broadcast message to all users

`POST /message`

    curl -i -X POST http://localhost:8000/message -H "Content-Type: application/json" -d '{"msg": "Hello world"}'

## Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 2
    ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
    Date: Thu, 21 Jul 2022 00:55:52 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

## Broadcast message to a single user by Telegram @id (ex. @telegram)

`POST /message/:tgAtId`

    curl -i -X POST http://localhost:8000/message/confleux -H "Content-Type: application/json" -d '{"msg": "Hello @confleux"}'

## Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 2
    ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
    Date: Thu, 21 Jul 2022 00:59:13 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
