/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module "react-materialize";
declare module "react-router";
declare module "flux";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
