(ns notifier.core
  (:use ring.util.response)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.middleware.json :as middleware]))

(def incidents (atom [{:name "Widget 1" :id 1} {:name "Widget 2" :id 5}]))

(defroutes app-routes
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  (GET  "/first" [] (resource-response "index.html" {:root "public"}))
  (GET  "/second" [] (resource-response "index.html" {:root "public"}))
  (GET  "/widgets" [] (response @incidents))
  (route/resources "/")
  (route/not-found "Page not found1"))

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))


(swap! incidents conj {:name "Incident 5" :id 5})
