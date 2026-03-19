import asyncio
import httpx
from typing import Any, Optional, TypeVar, Generic
from dataclasses import dataclass
import random

BASE_URL = "https://api.example.com/v1"
MAX_RETRIES = 3
BASE_DELAY = 0.3

T = TypeVar("T")

@dataclass
class ApiResponse(Generic[T]):
    data: T
    meta: Optional[dict] = None

@dataclass
class Todo:
    id: str
    title: str
    completed: bool
    created_at: str
    updated_at: str
    user_id: str

class ApiError(Exception):
    def __init__(self, status: int, message: str, body: Any = None):
        super().__init__(f"[{status}] {message}")
        self.status = status
        self.body = body

class AsyncTodoClient:
    def __init__(self, base_url: str = BASE_URL, token: Optional[str] = None):
        headers = {"Content-Type": "application/json"}
        if token:
            headers["Authorization"] = f"Bearer {token}"
        self._client = httpx.AsyncClient(base_url=base_url, headers=headers)

    async def _request(self, method: str, path: str, retries: int = 0, **kwargs) -> Any:
        try:
            response = await self._client.request(method, path, **kwargs)
        except httpx.NetworkError as e:
            if retries < MAX_RETRIES:
                delay = BASE_DELAY * (2 ** retries) + random.random() * 0.1
                await asyncio.sleep(delay)
                return await self._request(method, path, retries + 1, **kwargs)
            raise

        if not response.is_success:
            body = response.json() if response.content else {}
            raise ApiError(response.status_code, body.get("message", response.reason_phrase), body)

        return response.json()

    async def get_all(self) -> list[Todo]:
        data = await self._request("GET", "/todos")
        return [Todo(**item) for item in data["data"]]

    async def create(self, title: str, user_id: str) -> Todo:
        data = await self._request("POST", "/todos", json={"title": title, "userId": user_id})
        return Todo(**data["data"])

    async def __aenter__(self): return self
    async def __aexit__(self, *args): await self._client.aclose()
