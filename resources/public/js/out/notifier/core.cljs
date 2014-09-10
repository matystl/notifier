(ns notifier.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

(defn fetch-widgets
  [url]
    (go (let [{widgets :body} (<! (http/get url))]
          (vec widgets))))

(def app-state
  (atom {:widgets []}))

(defcomponent widget [{:keys [name]} owner opts]
  (render [_]
   (dom/li name)))

(defcomponent widget-list [{:keys [widgets]}]
  (render [_]
   (dom/ul
    (om/build-all widget widgets))))

(defcomponent widget-box [app owner]
  (render [_]
          (dom/div
           (dom/h1 "Widgets1")
           (om/build widget-list app))))



(defcomponent widgetpolling [app owner opts]
  (init-state [_] {:mounted true})
  (will-mount [_]
              (go (while (om/get-state owner :mounted)
                    (let [widgets (<! (fetch-widgets (:url opts)))]
                      (.log js/console (pr-str widgets))
                      (om/update! app [:widgets] widgets))
                    (<! (timeout (:poll-interval opts))))))
  (will-unmount [_] (om/set-state! owner :mounted false))
  (render [_]
     (om/build widget-box app))
  )



(defcomponent om-app [app owner]
  (render [_]
    (dom/div
      (om/build widgetpolling app
        {:opts {:url "/widgets"
                :poll-interval 2000}})))
  )

(om/root om-app app-state
         {:target (. js/document (getElementById "content"))})

;: form unmounting components just evaluate component inside comment

(defcomponent om-nothing [app owner opts]
  (render [_]
   (dom/h1 "Nothing")))

(comment
  (om/root om-nothing app-state {:target (. js/document (getElementById "content"))})
  )
