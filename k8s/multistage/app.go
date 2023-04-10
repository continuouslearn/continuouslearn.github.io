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
