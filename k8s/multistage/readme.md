## 1: Create a simple go web app

```
cat app.go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Simple Go Web Server!")
    })

    log.Fatal(http.ListenAndServe(":8888", nil))
}
```

## 2: Build  docker image

```
docker build -t test-go1 . -f Dockerfile
```

# check image size

```
docker images | grep test-go
test-go1             latest                      cb34e2486a5c   10 days ago     674MB
```

## 3: Build multi-stage docker image

```
docker build -t test-go2 . -f Dockerfile1
```

# check image size
```
docker images | grep test-go
test-go2             latest                      31e265ca3236   10 days ago     12.4MB
test-go1             latest                      cb34e2486a5c   10 days ago     674MB
```

New image is 12.4M, 1.84% of old image: 674M

## 4: Run multi-stage image

```
docker run -d -p 28888:8888 --name test-go2 test-go2
7c533ff947815fb9c8e9bb45703242b5c6080e123b5519356472979547e30efe

#verify if it works
curl http://localhost:28888
Simple Go Web Server!%
```
