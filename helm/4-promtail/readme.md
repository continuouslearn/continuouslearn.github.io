helm -n promtail install --values values.yaml promtail grafana/promtail

helm -n promtail uninstall promtail
