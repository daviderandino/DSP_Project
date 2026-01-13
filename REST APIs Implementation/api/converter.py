import json
import yaml
from pathlib import Path

script_dir = Path(__file__).parent
json_file = script_dir / 'openapi.json'
with open(json_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

yaml_file = script_dir / 'openapi.yaml'
with open(yaml_file, 'w', encoding='utf-8') as f:
    yaml.dump(data, f, sort_keys=False, default_flow_style=False, allow_unicode=True)

print("Conversione completata: openapi.yaml è identico a openapi.json")