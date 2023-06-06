https://artifacthub.io/packages/helm/prometheus-community/prometheus

Get Repository Info
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
See  for command documentation.

Install Chart
Start from Version 16.0, Prometheus chart required Helm 3.7+ in order to install successfully. Please check your Helm chart version before installation.

helm install [RELEASE_NAME] prometheus-community/prometheus



helm -n prometheus install --values values.yaml prometheus prometheus-community/prometheus

helm -n prometheus  uninstall prometheus

