import type { Decorator, Preview } from "@storybook/react";
import { initialize } from "msw-storybook-addon";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import messagesEn from "../messages/en.json";

initialize({
  onUnhandledRequest: "bypass",
});

const staticDate = new Date("2023-06-05T00:00:00Z");

const I18nextStoryDecorator: Decorator = (Story, context) => {
  const locale = "en"; // Set your locale here
  const messages = {
    en: messagesEn,
  };
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]} // Select the messages for the current locale
      now={staticDate}
    >
      {Story(context)}
    </NextIntlClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
  decorators: [I18nextStoryDecorator],
};

export default preview;
