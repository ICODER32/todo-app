from fastapi import FastAPI, Request, Depends, Form
from pydantic import BaseModel
from typing import Union
from . import models
from .database import engine
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)


from sqlalchemy.orm import Session
from .database import SessionLocal, engine







app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()

# Rest of the code...
app = FastAPI()


def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()


# get all todos
        
@app.get("/todos/")
async def get_todos(db: Session = Depends(get_db)):
    todos = db.query(models.Todo).all()
    return todos
    


@app.post("/add/")
async def post_todo(req: Request, title: str = Form(...), db: Session = Depends(get_db)):
    new_todo = models.Todo(title=title)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo


# update todo
@app.put("/update/")

async def update_todo(req: Request, id: int = Form(...), title: str = Form(...),completed:bool=Form(...), db: Session = Depends(get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == id).first()
    todo.title = title
    todo.complete = completed
    db.commit()
    db.refresh(todo)
    return todo




# delete todo   
@app.delete("/delete/")
async def delete_todo(req: Request, id: int = Form(...), db: Session = Depends(get_db)):
    todo=db.query(models.Todo).filter(models.Todo.id == id).first()
    db.delete(todo)
    db.commit()
    return {"message": "Todo has been deleted successfully!"}

