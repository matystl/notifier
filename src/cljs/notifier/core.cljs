(ns notifier.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [cljs-http.client :as http])
   (:import goog.History))

(enable-console-print!)

(def history (History.))
(defn navigate [url]
  (println "Navigate" url)
  (set! (.-location js/window) url))

(declare rIncidents)
(declare rIncident)
(declare rMessages)

(def app-state
  (atom {:widgets []
         :route ""}))

(defn fetch-widgets
  [url]
    (go (let [{widgets :body} (<! (http/get url))]
          (vec widgets))))


(defcomponent widget [{:keys [name id]} owner opts]
  (render [_]
   (dom/li
    (dom/a {:href (rIncident {:id id})} (str "name:" name "id:" id)))))

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
                      (println widgets)
                      (om/update! app [:widgets] widgets))
                    (<! (timeout (:poll-interval opts))))))
  (will-unmount [_] (om/set-state! owner :mounted false))
  (render [_]
     (om/build widget-box app))
  )



(defcomponent drawNav [{view :view}]
  (render [_]
    (dom/div
        (dom/button
          {:on-click #(navigate (rIncidents))
           :style {:color (if (= view :incidents) "black" "white")}}
          "First route")
        (dom/button
          {:on-click #(navigate (rMessages))
           :style {:color (if (= view :messages) "black" "white")}}
          "Second route"))))

(defcomponent om-incidents [app owner]
  (render [_]
    (dom/div
      (om/build drawNav app)
      (om/build widgetpolling app
        {:opts {:url "/widgets"
                :poll-interval 2000}}))))




(defcomponent om-inc-detail [{id :id :as app} owner]
  (render [_]
          (dom/div
            (om/build drawNav app)
           (let [incident (first (filter #(= (:id %) 1) (:widgets app)))]
            (dom/div (str "Incident" (:name incident) (:id incident)))))))




;: form unmounting components just evaluate component inside comment

(defcomponent om-messages [app owner opts]
  (render [_]
   (dom/div
     (om/build drawNav app)
     (dom/h1 "Messages"))))



(defcomponent mainView [{view :view :as app} owner]
  (render [_]
     (condp = view
       :incidents (om/build om-incidents app)
       :incident (om/build om-inc-detail app)
       :messages (om/build om-messages app)
       (dom/div (str "Nothing loaded" view (:view app))))))

(om/root mainView app-state {:target (. js/document (getElementById "content"))})

;; ----------------------  routing ------------------------------
(secretary/set-config! :prefix "#")

(defroute rIncidents "/incidents/" []
  (do
    (println "first route")
    (swap! app-state assoc :view :incidents)))

(defroute rIncident "/incident/:id" {:as params}
    (swap! app-state assoc :view :incident :id (:id params)))



(defroute rMessages "/messages/" []
  (do
    (println "second route")
    (swap! app-state assoc :view :messages)))

(defroute "*" []
   (navigate (rIncidents))
)


;; Quick and dirty history configuration.

(defn on-navigate [event]
  (println "Token" ">" (.getToken history) "<")
  (secretary/dispatch! (.-token event)))

(doto history
  (goog.events/listen EventType/NAVIGATE on-navigate)
  (.setEnabled true))
