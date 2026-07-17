from agent_lab import create_app

from especialista_ia_contabilidade.core.container import Container

# An explicit scan_packages list replaces agent_lab's DEFAULT_SCAN_PACKAGES:
# only this project's agents, MCP tools, and prompts are discovered — none of
# the framework's built-in examples. Add "agent_lab.services.agent_types" or
# "agent_lab.interface.mcp" here if you want the built-ins back.
app = create_app(
    container=Container(),
    scan_packages=[
        "especialista_ia_contabilidade.agents",
        "especialista_ia_contabilidade.mcp",
    ],
)
