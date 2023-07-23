from sqlalchemy.orm import Session

from backend import models
from backend import schemas

# TODO: add unit tests here


def create_user(db: Session, user: schemas.UserCreate, manager_id: int = None):
    db_user = models.User(**user.dict(), manager_id=manager_id)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_users(db: Session, skip: int = 0, limit: int = 50):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_recognition(
        db: Session,
        recognition: schemas.RecognitionCreate,
        sender_id: int,
        receiver_id: int
):
    db_recognition = models.Recognition(
        **recognition.dict(),
        sender_id=sender_id,
        receiver_id=receiver_id
    )
    db.add(db_recognition)
    db.commit()
    db.refresh(db_recognition)
    return db_recognition
