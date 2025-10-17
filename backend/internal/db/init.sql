CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE algorithm_type AS ENUM ('TOKEN_BUCKET', 'SLIDING_WINDOW', 'FIXED_WINDOW');
CREATE TYPE decision_type AS ENUM ('ALLOWED', 'THROTTLED');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE endpoints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  api_path TEXT NOT NULL,
  algorithm algorithm_type NOT NULL,
  limit INTEGER NOT NULL CHECK (limit > 0),
  window_seconds INTEGER NOT NULL CHECK (window_seconds > 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE request_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint_id UUID NOT NULL REFERENCES endpoints(id) ON DELETE CASCADE,
  request_id UUID NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  decision decision_type NOT NULL,
  tokens_remaining INTEGER,
  response_time_ms INTEGER,
  UNIQUE (endpoint_id, request_id)
);

CREATE INDEX idx_request_logs_endpoint_id ON request_logs(endpoint_id);
CREATE INDEX idx_request_logs_timestamp ON request_logs(timestamp);

