from typing import Optional

from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship, validates

from backend.database import Base


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(30))
    email: Mapped[str]
    password: Mapped[str]
    first_name: Mapped[str]
    last_name: Mapped[str]
    manager_id: Mapped[Optional[int]] = mapped_column(ForeignKey("user.id"))

    # sent_recognitions: Mapped[List["Recognition"]] = relationship(
    #     back_populates="sender"
    # )
    # received_recognitions: Mapped[List["Recognition"]] = relationship(
    #     back_populates="receiver"
    # )
    @validates("email")
    def validate_email(self, _, address):
        assert '@' in address
        return address

    def __eq__(self, other):
        return isinstance(other, User) and other.id == self.id

    def __repr__(self):
        return f"User(id={self.id}, username={self.username}," \
               f" email={self.email})"


class Recognition(Base):
    __tablename__ = "recognition"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    body: Mapped[str]
    sender_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    receiver_id: Mapped[int] = mapped_column(ForeignKey("user.id"))

    sender: Mapped["User"] = relationship(
        # back_populates="sent_recognitions",
        foreign_keys=[sender_id]

    )
    receiver: Mapped["User"] = relationship(
        # back_populates="received_recognitions",
        foreign_keys=[receiver_id]
    )

    def __repr__(self):
        return f"Recognition(id={self.id}, username={self.title}," \
               f" sender_id={self.sender_id}, receiver_id={self.receiver_id})"




