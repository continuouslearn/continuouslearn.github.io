# introduction 

helm link: https://artifacthub.io/packages/helm/prometheus-community/prometheus

Get Repository Info
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
See  for command documentation.

Install Chart
Start from Version 16.0, Prometheus chart required Helm 3.7+ in order to install successfully. Please check your Helm chart version before installation.

helm install [RELEASE_NAME] prometheus-community/prometheus

helm -n prometheus install --values values.yaml prometheus prometheus-community/prometheus

helm -n prometheus  uninstall prometheus

# how to enable https

1: Generate Key and Certificate

Step 1 – Create an SSL Certificate

openssl genrsa -out prometheus.key 2048

Step 2 – Generate a certificate signing request

openssl req -new -key prometheus.key -out prometheus.csr

Step 3 – Output the certificate

openssl x509 -req -days 365 -in prometheus.csr -signkey prometheus.key -out prometheus.crt

2: Create K8S Secret TLS YAML

➜  k create secret tls prometheus.tls --key prometheus.key --cert prometheus.crt --namespace monitoring -o yaml --dry-run=client > 0-TLS.yaml

➜  Prometheus cat 0-TLS.yaml
apiVersion: v1
data:
  tls.crt: LS0tLS1CRXXXkQgQ0VSVElGSUNBVEUtLS0tLQo=
  tls.key: LS0tLS1XXXXXXXXXXXXXXXXXXXXXXXXLS0tLQo=
kind: Secret
metadata:
  creationTimestamp: null
  name: prometheus.tls
  namespace: monitoring
type: kubernetes.io/tls

3: Apply it

k apply -f 0-TLS.yaml

k -n monitoring get secrets
NAME                               TYPE                 DATA   AGE
prometheus.tls                     kubernetes.io/tls    2      56m

# create values.yaml
cat values.yaml
server:
  persistentVolume:
    enabled: false
  extraVolumeMounts:
  - name: prometheus-tls
    mountPath: /etc/prometheus/tls
  extraVolumes:
  - name: prometheus-tls
    secret:
      secretName: prometheus.tls
  extraArgs:
    web.config.file: /etc/config/web_config.yml
serverFiles:
  web_config.yml:
    basic_auth_users:
      bob: $2a$12$P550Bw15maKEZBKeCsMGPO2WGWniHRnZTe3dtFv/pJNAmYeAhJyp2
      alice: $2a$12$P550Bw15maKEZBKeCsMGPO2WGWniHRnZTe3dtFv/pJNAmYeAhJyp2
    tls_server_config:
      cert_file: /etc/prometheus/tls/tls.crt
      key_file: /etc/prometheus/tls/tls.key

# disable readness health probe from deployment

➜  k -n monitoring edit deployments.apps prometheus-server

# change service to 443 and https

➜   k -n monitoring edit service prometheus-server

  ports:
  - name: https
    nodePort: xxxxx
    port: 443
    protocol: TCP
    targetPort: 9090
