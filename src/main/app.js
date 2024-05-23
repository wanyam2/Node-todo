import express from "express";
import dotenv from "dotenv";
import {TodoData} from "./todo/todo.data.js";
import {todoRouter} from "./todo/todo.router.js";

dotenv.config();

TodoData.initialize();

const app = express();
app.set('port', process.env.PORT || 3000);

app.use("/todos",todoRouter);
// app.get('/abc',(req,res)=>{
//     res.send('Hello Nodejs');
// });


app.listen(app.get("port"), () => {
    console.log( `3000 번에서 대기중`);
});


// https 의존성으로 certificate와 private key로 새로운 서버를 시작
// https.createServer(httpsOptions, app).listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 HTTPS 서버 대기중');
// });


// app.listen(app.get('port'),()=>{
//     console.log(app.get('port'),'번 포트에서 대기중');
// });

/*
// TLS 설정을 위한 옵션
const expressOption = {
    key: fs.readFileSync(path.join(process.cwd(), '/resource/cert/privkey.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), '/resource/cert/fullchain.pem')),
};

https.createServer(expressOption, app).listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 HTTPS 서버 대기중');
});
*/