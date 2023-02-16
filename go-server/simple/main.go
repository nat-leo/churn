package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"sync"
	"strconv"
)

var counter int
var mutex = &sync.Mutex{}

func incrementCounter(w http.ResponseWriter, h *http.Request) {
	mutex.Lock()
	counter ++
	fmt.Fprintf(w, strconv.Itoa(counter))
	mutex.Unlock()
}

func main() {
	// simple
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello Webserver!")
	})
	// getting request data
	http.HandleFunc("/corn", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "corn is %q", html.EscapeString(r.URL.Path))
	})
	// mutex
	http.HandleFunc("/increment", incrementCounter)
	// serving static files
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
	})

	log.Fatal(http.ListenAndServe(":8888", nil))
}