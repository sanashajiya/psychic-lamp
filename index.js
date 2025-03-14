const app = require('./app');

const port =  3000;

app.get('/', (req, res) =>{
    res.send('Hello World.!!!...');  // Send a response with the message "Hello World!" when the root URL is accessed
}
);
app.listen(port,()=>{
    console.log(`Server listenning on port http://localhost:${port}`);  // Log message when server is running
});