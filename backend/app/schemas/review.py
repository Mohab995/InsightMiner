from datetime import datetime

from pydantic import BaseModel


class Review(BaseModel):
    author: str
    rating: int
    title: str | None = None
    content: str
    likes: int
    version: str | None = None
    date: datetime