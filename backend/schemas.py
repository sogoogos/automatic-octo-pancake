from typing import Optional

from pydantic import ConfigDict, BaseModel


class UserBase(BaseModel):
    email: str
    username: str
    first_name: str
    last_name: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    manager_id: Optional[int] = None


class RecognitionBase(BaseModel):
    title: str
    body: str


class RecognitionCreate(RecognitionBase):
    pass


class Recognition(RecognitionBase):
    id: int
    sender_id: int
    receiver_id: int
    model_config = ConfigDict(from_attributes=True)
