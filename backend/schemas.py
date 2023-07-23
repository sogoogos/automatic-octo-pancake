from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    username: str
    first_name: str
    last_name: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    manager_id: int


class RecognitionBase(BaseModel):
    title: str
    body: str


class RecognitionCreate(RecognitionBase):
    pass


class Recognition(RecognitionBase):
    id: int
    sender_id: int
    receiver_id: int

    class Config:
        orm_mode = True


