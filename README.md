# Workflow Builder (React Flow + FastAPI)

A visual workflow builder built using React Flow and FastAPI.

## Features

* Reusable BaseNode abstraction
* Dynamic TextNode variable parsing
* Dynamic handle generation
* Drag-and-drop workflow creation
* Node and edge counting
* DAG validation
* FastAPI backend integration

## Project Structure

frontend/

* React frontend
* React Flow workflow editor

backend/

* FastAPI backend
* Pipeline parsing and DAG validation

## Run Frontend

npm install

npm start

## Run Backend

pip install fastapi uvicorn python-multipart

uvicorn main:app --reload
