from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud
import models
from database import SessionLocal, engine
import schemas

# What is this for?
models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=List[schemas.User])
def read_users(user_id: int, db: Session = Depends(get_db)):
    user = crud.get_user(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/recognitions/", response_model=schemas.Recognition)
def create_recognition(
        recognition: schemas.RecognitionCreate,
        sender_id: int,
        receiver_id: int,
        db: Session = Depends(get_db)
):
    crud.create_recognition(db, recognition, sender_id, receiver_id)
