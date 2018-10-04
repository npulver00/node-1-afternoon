 const express = require ("express");
 const bodyParser = require ("body-parser");
 const messages_controller = require ("./controllers/messages_controller");
 const app = express();

 app.use(bodyParser.json());

 app.use( express.static(__dirname + '/../public/build'));


const port= 3001;
 app.listen(port, () => {console.log(`Server listening on port ${port}`); }); 


app.post("/api/messages/", messages_controller.createMessage)

app.get("/api/messages/", messages_controller.getMessage)

app.put("/api/messages/:id", messages_controller.updateMessage)

app.delete("/api/message/:id",messages_controller.deleteMessage)