import Singleton from "./designPatterns/Singleton";

(() => {
  const singleton = Singleton.getInstance("Gio", 20);
  const singleton2 = Singleton.getInstance("Jaz", 40);

  console.log(singleton === singleton2);
  console.log({
    singleton,
    singleton2
  })
})();