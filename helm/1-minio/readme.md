REF:

helm show values bitnami/minio

helm -n minio install minio --values values.yaml bitnami/minio

kubectl get secret --namespace minio minio -o jsonpath="{.data.root-user}" | base64 -d

kubectl get secret --namespace minio minio -o jsonpath="{.data.root-password}" | base64 -d

helm -n minio uninstall minio

Sync files:

mc mirror  /var/log/  myminio/mac-logs/ --overwrite
