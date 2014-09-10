(defproject notifier "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.4"]
                 [ring/ring-core "1.2.0"]
                 [ring/ring-json "0.2.0"]
                 [compojure "1.1.6"]
                 [org.clojure/clojurescript "0.0-2307"]
                 [org.clojure/core.async "0.1.319.0-6b1aca-alpha"]
                 [cljs-http "0.1.9"]
                 [om "0.7.1"]
                 [prismatic/om-tools "0.3.3"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "notifier-standalone.jar"

  :ring {:handler notifier.core/app
         :init notifier.core/init}

  :source-paths ["src/clj"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
