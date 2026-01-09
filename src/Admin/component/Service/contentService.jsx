let content = {
  hero: {
    title: "Find Your Dream Property",
    subtitle: "Buy, Rent & Invest with confidence",
  },
  about: {
    text: "Elite Space is a premium real estate platform helping people find perfect homes.",
  },
  contact: {
    phone: "+91 98765 43210",
    email: "info@elitespace.com",
  },
  footer: {
    copyright: "© 2026 Elite Space. All rights reserved.",
  },
};

export const getContent = () => Promise.resolve(content);

export const updateContent = (section, data) => {
  content = { ...content, [section]: data };
  return Promise.resolve();
};
