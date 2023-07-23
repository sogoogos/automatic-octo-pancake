import csv
import os
import unittest

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from backend.main import app, get_db
from backend.models import Base, User

current_dir = os.path.dirname(os.path.abspath(__file__))
engine = create_engine(
    'sqlite:///:memory:',
    connect_args={"check_same_thread": False},
    poolclass=StaticPool
)
TestingSessionLocal = sessionmaker(bind=engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


class TestEndpoints(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        Base.metadata.create_all(engine)
        session = TestingSessionLocal()

        with open(os.path.join(current_dir, "TEST_DATA.csv"), "r") as f:
            f.readline()
            data = csv.reader(f)
            for (first_name, last_name, email, username, password,
                 manager_id) in data:
                user = User(
                    username=username,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    password=password,
                    manager_id=int(manager_id) if manager_id else None
                )
                session.add(user)
        session.commit()

    @classmethod
    def tearDownClass(cls):
        Base.metadata.drop_all(engine)

    def test_get_users(self):
        response = client.get("/users/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 6)
        print(response.json())
