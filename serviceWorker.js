const staticDevCoffee = "dev-blog-app-js"
const assets = [
  "/",
  "/index.html",
  "/homepage.html",
  "/style.css",
  "/homepage.css",
  "/app.js",
  "/homepage.js",
  "/imgs/icons/icon72.jpg",
  "/imgs/icons/icon96.jpg",
  "/imgs/icons/icon144.jpg",
  "/imgs/icons/icon192.jpg",
  "/imgs/icons/icon512.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})