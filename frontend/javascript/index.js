import "$styles/index.css";
import "$styles/pico.css";
import * as Turbo from "@hotwired/turbo";
import { Application } from "@hotwired/stimulus";

/**
 * Adds support for declarative shadow DOM. Requires your HTML <head> to include:
 * `<meta name="turbo-cache-control" content="no-cache" />`
 */
import * as TurboShadow from "turbo-shadow";

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";

console.info("Bridgetown is loaded!");

window.Stimulus = Application.start();

import controllers from "./controllers/**/*.{js,js.rb}";
Object.entries(controllers).forEach(([filename, controller]) => {
    if (
        filename.includes("_controller.") ||
        filename.includes("-controller.")
    ) {
        const identifier = filename
            .replace("./controllers/", "")
            .replace(/[_-]controller\..*$/, "")
            .replace(/_/g, "-")
            .replace(/\//g, "--");

        Stimulus.register(identifier, controller.default);
    }
});
