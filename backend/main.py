from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

from fastapi import Body

@app.post('/pipelines/parse')
def parse_pipeline(data: dict = Body(...)):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": True
    }