import requests
from dataclasses import dataclass
from typing import Optional

BASE_URL = "https://api.example.com/v1"

@dataclass
class Todo:
    id: str
    title: str
    completed: bool
    created_at: str
    updated_at: str
    user_id: str

class TodoClient:
    def __init__(self, base_url: str = BASE_URL):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})

    def get_all(self) -> list[Todo]:
        response = self.session.get(f"{self.base_url}/todos")
        response.raise_for_status()
        return [Todo(**item) for item in response.json()["data"]]

    def get_by_id(self, todo_id: str) -> Todo:
        response = self.session.get(f"{self.base_url}/todos/{todo_id}")
        response.raise_for_status()
        return Todo(**response.json()["data"])

    def create(self, title: str, user_id: str) -> Todo:
        response = self.session.post(
            f"{self.base_url}/todos",
            json={"title": title, "userId": user_id}
        )
        response.raise_for_status()
        return Todo(**response.json()["data"])

    def update(self, todo_id: str, title: Optional[str] = None, completed: Optional[bool] = None) -> Todo:
        payload = {k: v for k, v in {"title": title, "completed": completed}.items() if v is not None}
        response = self.session.patch(f"{self.base_url}/todos/{todo_id}", json=payload)
        response.raise_for_status()
        return Todo(**response.json()["data"])

    def delete(self, todo_id: str) -> None:
        response = self.session.delete(f"{self.base_url}/todos/{todo_id}")
        response.raise_for_status()
