import React from "react";
import AddTask from "./AddTask";
import TasksContainer from "./TasksContainer";
import Nav from "../Nav";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:5000");

const Task = () => {
  return (
    <>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </>
  );
};

export default Task;
