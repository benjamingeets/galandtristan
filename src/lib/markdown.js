
import marked from "marked"

const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      return link.replace("<a","<a target='_blank' ");
  };
  marked.setOptions({
    baseUrl:"https://cms.galandtristan.be",
    renderer: renderer
  })

export const displayMd = (md) =>{
    return marked(md)
}