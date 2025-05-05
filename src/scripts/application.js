// src/javascript/application.js
import { Application } from "@hotwired/stimulus";

// Initialize Stimulus application
const application = Application.start();

window.Stimulus = application;

window.Stimulus.debug = true;

// Automatically register controllers
const modules = import.meta.glob("./controllers/*_controller.js", {
  eager: true,
});

for (const path in modules) {
  const controllerModule = modules[path];
  const name = path
    .match(/\/([^/]+)_controller\.js$/)[1]
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  console.log("name", name);
  application.register(name, controllerModule.default);
}

console.log("Hello world!");
