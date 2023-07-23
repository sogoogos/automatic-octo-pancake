import csv
import os

from sqlalchemy.orm import Session

from backend.crud import create_user
from backend.database import SessionLocal, engine
from backend.models import Base
from backend.schemas import UserCreate

current_dir = os.path.dirname(os.path.abspath(__file__))
# Create tables
Base.metadata.create_all(bind=engine)


def create_data(db: Session):
    with open(os.path.join(current_dir, "MOCK_DATA.csv"), "r") as f:
        f.readline()
        data = csv.reader(f)
        for (first_name, last_name, email, username, password,
             manager_id) in data:
            user = UserCreate(
                username=username,
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name,

            )
            db_user = create_user(
                db, user, manager_id=int(manager_id) if manager_id else None
            )
            print(db_user)


# def select_data():
#     session = Session(engine)
#
#     users = select(User)
#     for user in session.scalars(users):
#         print(user.first_name, user.last_name)


if __name__ == "__main__":
    session = SessionLocal()
    create_data(session)
    session.close()
    # select_data()

    # Base.metadata.drop_all(bind=engine)
