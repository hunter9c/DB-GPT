from dataclasses import dataclass
from typing import Dict, List

from pilot.model.base import WorkerApplyType
from pilot.model.parameter import WorkerType
from pilot.scene.base_message import ModelMessage
from pydantic import BaseModel

WORKER_MANAGER_SERVICE_TYPE = "service"
WORKER_MANAGER_SERVICE_NAME = "WorkerManager"


class PromptRequest(BaseModel):
    messages: List[ModelMessage]
    model: str
    prompt: str = None
    temperature: float = None
    max_new_tokens: int = None
    stop: str = None
    stop_token_ids: List[int] = []
    context_len: int = None
    echo: bool = True
    span_id: str = None
    metrics: bool = False
    """Whether to return metrics of inference"""


class EmbeddingsRequest(BaseModel):
    model: str
    input: List[str]
    span_id: str = None


class WorkerApplyRequest(BaseModel):
    model: str
    apply_type: WorkerApplyType
    worker_type: WorkerType = WorkerType.LLM
    params: Dict = None
    apply_user: str = None


class WorkerParameterRequest(BaseModel):
    model: str
    worker_type: WorkerType = WorkerType.LLM


class WorkerStartupRequest(BaseModel):
    host: str
    port: int
    model: str
    worker_type: WorkerType
    params: Dict
