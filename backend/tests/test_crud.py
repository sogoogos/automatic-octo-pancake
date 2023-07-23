import unittest

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from backend.models import Base, User
from backend.crud import create_recognition, create_user, get_user, get_users
from backend.schemas import RecognitionCreate, UserCreate


class TestQuery(unittest.TestCase):

    engine = create_engine('sqlite:///:memory:')
    Session = sessionmaker(bind=engine)
    session = Session()

    def setUp(self):
        Base.metadata.create_all(self.engine)
        self.user1 = User(
            username="sogoogos",
            first_name="Sogo",
            last_name="Shiozawa",
            email="sogoogos@gmail.com",
            password="password"
            )
        self.user2 = User(
            username="sshiozawa",
            first_name="S",
            last_name="Shiozawa",
            email="ssihozawa@gmail.com",
            password="password"
        )
        self.session.add(self.user1)
        self.session.add(self.user2)
        self.session.commit()
        self.session.refresh(self.user1)
        self.session.refresh(self.user2)

    def tearDown(self):
        Base.metadata.drop_all(self.engine)

    def test_create_user(self):
        user = UserCreate(
            username="sogoogos",
            first_name="Sogo",
            last_name="Shiozawa",
            email="sogoogos@gmail.com",
            password="password"
            )
        db_user = create_user(self.session, user)
        self.assertEqual(db_user.id, 3)

    def test_get_users(self):
        expected = [self.user1, self.user2]
        result = get_users(self.session)
        self.assertEqual(result, expected)

    def test_get_user(self):
        with self.subTest("User exists"):
            user_id = 1
            result = get_user(self.session, user_id)
            self.assertEqual(result.id, user_id)
        with self.subTest("User does not exist"):
            user_id = 10000
            result = get_user(self.session, user_id)
            self.assertIs(result, None)

    def test_create_recognition(self):
        recognition = RecognitionCreate(title="my recognition", body="Awesome")
        result = create_recognition(
            self.session, recognition, self.user1.id, self.user2.id
        )
        print(result)
        self.assertEqual(result.id, 1)
