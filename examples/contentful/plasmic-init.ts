import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ContentfulFetcher, ContentfulField } from "./components/contentful";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "KvH4HMs91XCoTmeRY5e5v",
      token:
        "aQEcbzwgh3BpvfS6IULjKn5FexhwqLtXyrTMbeV9P2Mv8Tv0uyfN4pDuwlbEAHvcKmiU0aJQP7hVDHDayAGA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(ContentfulFetcher, {
  name: "ContentfulFetcher",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [
          {
            type: "component",
            name: "ContentfulField",
          },
        ],
      },
    },
  },
});

PLASMIC.registerComponent(ContentfulField, {
  name: "ContentfulField",
  props: {
    path: {
      type: "choice",
      options: (props, ctx) => ctx.fields,
    },
  },
});
