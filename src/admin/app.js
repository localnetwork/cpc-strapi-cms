import React from "react";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import HelloWorldButton from "./extensions/components/HelloWorldButton";
export default {
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "HelloWorldButton",
      Component: () => {
        // Access the current entry data using the hook
        const { modifiedData } = useCMEditViewDataManager();

        // Retrieve the 'slug' value from the modifiedData (current entry being edited)
        const slug = modifiedData?.slug; // Set default if no value is available

        return <HelloWorldButton slug={slug} />;
      },
    });
  },
};
