import express from "express";
import {TodoHandler} from "./todo.handler.js";

export const todoRouter = express.Router();

// app.get('/todos'...) -> 이게 tododata 에 있는 모든 내용 들고옴
todoRouter
    .get("/", (req, res) => {
    const todos = TodoHandler.findAll();
    res.send(todos);
})
    .post("/",(req, res) => {
        const body = req.body;
        TodoHandler.add(body);
        res.send(201);
    })
    .delete("/:id", (req, res) => {
        const id = req.params.id;
        TodoHandler.remove(id);
        res.send(200);
    })


// app.get('/todos/:id', (req, res) => {
//     res.send(todo);
// })