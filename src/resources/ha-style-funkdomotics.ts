import "@polymer/paper-styles/paper-styles";
import "@polymer/polymer/lib/elements/custom-style";
import { derivedStyles } from "./styles-funkdomotics";

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");

documentContainer.innerHTML = `<custom-style>
  <style>
    html {
      /* main interface colors */
      --primary-color: #2B3AD9;
      --dark-primary-color: #070F6B;
      --light-primary-color: #949BDF;
      --accent-color: #FFEB0C;
      --divider-color: #d3d3d3;

      ${Object.entries(derivedStyles)
        .map(([key, value]) => `--${key}: ${value};`)
        .join("")}
    }

    #drawer {

    }
  </style>
</custom-style>`;

document.head.appendChild(documentContainer.content);
