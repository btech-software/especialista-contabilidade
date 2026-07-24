lint:
	uv run ruff check especialista_contabilidade tests
	uv run ruff format --check especialista_contabilidade tests

test_unit:
	uv run --group test pytest tests/unit --cov=especialista_contabilidade --cov-report=xml --cov-report=term

test_integration:
	uv run --group test pytest tests/integration --cov=especialista_contabilidade --cov-report=xml --cov-report=term

test: test_unit test_integration
