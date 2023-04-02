import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  mounted() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      });
    });
  },
  data() {
    return {
      name: "Ryan Meneses",
      title: "Software Engineer",
      tagline: "Passionate about solving problems that lead to a better world.",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.",
      portfolio: [
        {
          name: "SIMOC SAM",
          thumbnail: "project-1-thumbnail.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."
        },
        {
          name: "QCS Quantum Circuits",
          thumbnail: "project-2-thumbnail.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."
        },
        {
          name: "ryanmeneses.com",
          thumbnail: "project-3-thumbnail.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."
        }
      ],
      contact: "Find me on ",
      linkedin: "https://www.linkedin.com/in/ryan-meneses-5b1b4b1b3/"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "landing-page",
    id: "home"
  }, _attrs))}><nav class="navbar"><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Portfolio</a></li><li><a href="#contact">Contact</a></li></ul></nav><div class="header"><h1>${ssrInterpolate($data.name)}</h1><h2>${ssrInterpolate($data.title)}</h2><p>${ssrInterpolate($data.tagline)}</p></div><div class="section" id="about"><h2>About Me</h2><p>${ssrInterpolate($data.about)}</p></div><div class="section" id="projects"><h2>Portfolio</h2><div class="portfolio"><!--[-->`);
  ssrRenderList($data.portfolio, (project) => {
    _push(`<div><img${ssrRenderAttr("src", `@/assets/img/${project.thumbnail}`)}${ssrRenderAttr("alt", project.thumbnail)}><h3>${ssrInterpolate(project.name)}</h3><p>${ssrInterpolate(project.description)}</p></div>`);
  });
  _push(`<!--]--></div></div><div class="footer" id="contact"><h2>Contact</h2><p>${ssrInterpolate($data.contact)} <a href="{{" linkedin }}>LinkedIn</a>.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c61c764b.mjs.map
