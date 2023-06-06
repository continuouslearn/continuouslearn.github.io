1: prepare all PVs

2: Create loki namespace

3: customize value.yaml 

4: Install loki 

helm -n loki install --values values.yaml loki grafana/loki

5: How to remove loki

helm -n loki uninstall loki
