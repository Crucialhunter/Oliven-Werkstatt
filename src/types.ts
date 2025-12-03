export enum Language {
  DE = 'DE',
  ES = 'ES',
  EN = 'EN',
}

export interface Content {
  nav: {
    home: string;
    about: string;
    workshops: string;
    varieties: string;
    knowledge: string;
    recipes: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaWorkshop: string;
    ctaDiscover: string;
  };
  pillars: {
    title: string;
    p1_title: string;
    p1_desc: string;
    p2_title: string;
    p2_desc: string;
    p3_title: string;
    p3_desc: string;
    learnMore: string;
  };
  about: {
    title: string;
    intro: string;
    story: string;
    timeline: { year: string; event: string }[];
  };
  workshops: {
    title: string;
    description: string;
    locationLabel: string;
    locationValue: string;
    durationLabel: string;
    durationValue: string;
    details: string[];
    cta: string;
    privateCta: string;
  };
  varieties: {
    title: string;
    intro: string;
    items: {
      name: string;
      aroma: string;
      taste: string;
      usage: string;
    }[];
    regionsTitle: string;
    regions: { name: string; desc: string }[];
  };
  knowledge: {
    title: string;
    articles: {
      title: string;
      summary: string;
      content: string; // Simplified for this demo
    }[];
  };
  recipes: {
    title: string;
    items: {
      name: string;
      desc: string;
      oilTip: string;
    }[];
  };
  contact: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    successMessage: string;
  };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
  };
}