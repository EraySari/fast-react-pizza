import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcomeLine1: "The best pizza",
      welcomeLine2: "Straight out of the oven, straight to you.",
      usernameLine: "👋 Welcome! Please start by telling us your name",
      fullNamePh: "Your full name",
      startButton: "Start Ordering",
      continue: "Continue Ordering",
      nameError: "Name must be longer than 2 characters",
      searchOrder: "Search Order #",
      back: "Back to home",
      add: "add to cart",
      soldout: "Sold out",
      delete: "Delete",
      openCart: "Open Cart",
      backMenu: "Back to menu",
      empty: "Your cart is still empty. Start adding some pizzas",
      order: "Order Pizzas",
      yourCart: "Your cart",
      ready: "Ready to order? Lets go!",
      firstName: "First Name",
      phone: " Phone Number",
      address: "Address",
      priority: "Want to yo give your order priority?",
      validNumber:
        "Please give us your correct number. We might need it to contact you.",
      pricePizza: "Price Pizza",
      pricePriority: "Price Priortiy",
      priceDelivery: "To pay on delivery",
      newOrder: "New Order",
    },
  },
  de: {
    translation: {
      welcomeLine1: "Die beste pizza",
      welcomeLine2: "Direkt aus dem Ofen, direkt zu Ihnen.",
      usernameLine:
        "👋 Willkommen! Bitte teilen Sie uns zunächst Ihren Namen mit",
      fullNamePh: "Ihr vollständiger Name",
      startButton: "Bestellung starten",
      continue: "Bestellung fortsetzen",
      nameError: "Der Name muss länger als 2 Zeichen sein",
      searchOrder: "Suchen Bestellung #",
      back: "Zurück nach startseite",
      add: "in den warenkorb legen",
      soldout: "Ausverkauft",
      delete: "Löschen",
      openCart: "Warenkorb",
      backMenu: "Zurück nach menu",

      empty:
        "Ihr Warenkorb ist noch leer. Fangen Sie an, einige Pizzen hinzuzufügen",
      order: "Bestellung Pizzas",
      yourCart: "Ihr warenkorb",
      ready: "Bereit zur Bestellung? Lass uns gehen!",
      firstName: "Vorname",
      phone: " Telefonnummer",
      address: "Addresse",
      priority: "Möchten Sie Ihrer Bestellung Priorität einräumen?",
      validNumber:
        "Bitte geben Sie uns Ihre korrekte Nummer an. Möglicherweise benötigen wir diese, um Sie zu kontaktieren.",

      pricePizza: "Preis Pizza",
      pricePriority: "Preispriorität",
      priceDelivery: "per Nachnahme bezahlen",
      newOrder: "Neue Bestellung",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
