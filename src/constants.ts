import { Content, Language } from './types';

export const DICTIONARY: Record<Language, Content> = {
  [Language.DE]: {
    nav: {
      home: "Start",
      about: "Über mich",
      workshops: "Workshops",
      varieties: "Sorten & Regionen",
      knowledge: "Wissen",
      recipes: "Rezepte",
      contact: "Kontakt",
    },
    hero: {
      title: "Die Essenz Andalusiens.",
      subtitle: "Entdecke die Welt des nativen Olivenöls extra. Von den Hainen Granadas bis zu exklusiven Verkostungen auf Mallorca.",
      ctaWorkshop: "Workshop buchen",
      ctaDiscover: "Olivenöl entdecken",
    },
    pillars: {
      title: "Was ich biete",
      p1_title: "Workshops & Tastings",
      p1_desc: "Lerne, Qualität zu schmecken. Erlebe geführte Verkostungen in einer echten Ölmühle auf Mallorca.",
      p2_title: "Olivenöl aus Granada",
      p2_desc: "Tiefes Wissen über die Sorten Picual, Hojiblanca und Lucio aus dem Herzen Andalusiens.",
      p3_title: "Wissen & Genuss",
      p3_desc: "Vom Anbau bis zum Teller: Alles über Herstellung, Gesundheit und mediterrane Rezepte.",
      learnMore: "Mehr erfahren",
    },
    about: {
      title: "Eine Reise voller Leidenschaft",
      intro: "Hinter der Oliven Werkstatt stehe ich – ein Enthusiast, der sein Herz an die Olivenhaine Spaniens verloren hat.",
      story: "Meine Reise begann vor über 15 Jahren in den rauen Bergen nordöstlich von Granada. Dort, im 'Montes de Granada', lernte ich den Unterschied zwischen einem gewöhnlichen Öl und einem echten 'Virgen Extra' kennen. Diese Faszination hat mich nie wieder losgelassen. Heute lebe ich zwischen Granada und Mallorca und teile mein Wissen, um die harte Arbeit der Kleinbauern zu würdigen und Genießern neue Geschmackswelten zu eröffnen.",
      timeline: [
        { year: "2008", event: "Erste Reise nach Andalusien und Entdeckung der Picual-Olive." },
        { year: "2012", event: "Beginn der Zusammenarbeit mit kleinen Mühlen in Priego de Córdoba." },
        { year: "2019", event: "Gründung der 'Oliven Werkstatt' auf Mallorca." },
        { year: "Heute", event: "Regelmäßige Workshops und kulinarische Events." },
      ]
    },
    workshops: {
      title: "Erlebe Olivenöl mit allen Sinnen",
      description: "Unsere Workshops finden in Kooperation mit traditionellen Ölmühlen (z.B. Son Catiu) auf Mallorca. Tauche ein in die Produktion und lerne, wie ein Profi zu verkosten.",
      locationLabel: "Ort",
      locationValue: "Son Catiu, Mallorca (oder auf Anfrage)",
      durationLabel: "Dauer",
      durationValue: "ca. 2,5 Stunden",
      details: [
        "Führung durch die Mühle und Erklärung der Extraktion.",
        "Geführte Verkostung von 3-4 hochwertigen Ölen.",
        "Erkennung von Qualitätsmerkmalen und Fehlaromen.",
        "Inklusive kleiner Tapas und Getränke."
      ],
      cta: "Jetzt Platz sichern",
      privateCta: "Private Gruppe anfragen"
    },
    varieties: {
      title: "Sorten & Regionen",
      intro: "Andalusien ist der größte Olivenölproduzent der Welt. Doch es ist die Vielfalt in Regionen wie Granada, die echte Schätze hervorbringt.",
      items: [
        {
          name: "Picual",
          aroma: "Tomatenstrauch, Feigenblatt, frisch geschnittenes Gras.",
          taste: "Kräftig, mit präsenter Bitterkeit und Schärfe. Ein Öl mit Charakter.",
          usage: "Perfekt für Salate, zum Dippen oder für kräftige Eintöpfe."
        },
        {
          name: "Hojiblanca",
          aroma: "Mandeln, Artischocke, Wildkräuter.",
          taste: "Ausgewogen, leicht süßlich im Auftakt, mit pfeffrigem Abgang.",
          usage: "Ideal für Gazpacho, Fischgerichte und Mayonnaise."
        },
        {
          name: "Lucio",
          aroma: "Reife Früchte, Banane.",
          taste: "Sehr mild, kaum bitter, süßlich und zart.",
          usage: "Wunderbar für Desserts, Gebäck oder feinen Fisch."
        }
      ],
      regionsTitle: "Schlüsselregionen",
      regions: [
        { name: "D.O. Montes de Granada", desc: "Hochlandöle, reich an Antioxidantien, oft intensiv und stabil." },
        { name: "D.O. Priego de Córdoba", desc: "Weltbekannt für preisgekrönte, extrem fruchtige Öle." },
        { name: "Mallorca (D.O. Oli de Mallorca)", desc: "Insel-Öle, oft aus der Sorte Arbequina oder Mallorquina, meist mild und fruchtig." }
      ]
    },
    knowledge: {
      title: "Wissensthek",
      articles: [
        {
          title: "Wie verkostet man richtig?",
          summary: "Das offizielle Glas ist blau, damit die Farbe nicht täuscht. Zuerst wärmen, dann riechen, dann schlürfen.",
          content: "Gutes Olivenöl erkennt man nicht an der Farbe. Bei der professionellen Verkostung (Cata) wird das Öl im Glas auf ca. 28°C erwärmt, um die Aromen freizusetzen. Riechen Sie tief: Bemerken Sie grüne Noten? Dann nehmen Sie einen Schluck und ziehen Sie Luft durch den Mund ein ('Stripping'). Bitterkeit und Schärfe im Hals sind Qualitätsmerkmale!"
        },
        {
          title: "Nativ Extra vs. Nativ",
          summary: "Der Unterschied liegt im Säuregehalt und der Fehlerfreiheit.",
          content: "'Natives Olivenöl Extra' (Virgen Extra) ist die höchste Güteklasse: Kaltgepresst, Säuregehalt unter 0,8% und absolut fehlerfrei im Geschmack. 'Natives Olivenöl' darf leichte Fehler haben. Alles andere ('Lampante') muss raffiniert werden und ist nicht für den direkten Verzehr geeignet."
        }
      ]
    },
    recipes: {
      title: "Mediterrane Küche",
      items: [
        {
          name: "Klassisches Pan con Tomate",
          desc: "Geröstetes Brot, reife Ramallet-Tomaten, Meersalz.",
          oilTip: "Verwenden Sie ein kräftiges Picual für den ultimativen Kick."
        },
        {
          name: "Orangensalat 'Remojón Granadino'",
          desc: "Orangen, Kabeljau, schwarze Oliven, Frühlingszwiebeln.",
          oilTip: "Ein fruchtiges Hojiblanca verbindet die Säure der Orange mit dem Fisch."
        },
        {
          name: "Ziegenkäse mit Honig & Öl",
          desc: "Warmer Ziegenkäse, Thymianhonig.",
          oilTip: "Ein mildes Lucio oder Arbequina rundet das Gericht samtig ab."
        }
      ]
    },
    contact: {
      title: "Kontakt aufnehmen",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      sendButton: "Absenden",
      successMessage: "Vielen Dank! Ich melde mich in Kürze."
    },
    footer: {
      tagline: "Qualität, die man schmeckt. Wissen, das bleibt.",
      legal: "Impressum",
      privacy: "Datenschutz"
    }
  },
  [Language.ES]: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      workshops: "Talleres",
      varieties: "Variedades",
      knowledge: "Conocimiento",
      recipes: "Recetas",
      contact: "Contacto",
    },
    hero: {
      title: "La esencia de Andalucía.",
      subtitle: "Descubre el mundo del Aceite de Oliva Virgen Extra. Desde los olivares de Granada hasta catas exclusivas en Mallorca.",
      ctaWorkshop: "Reservar taller",
      ctaDiscover: "Descubrir el aceite",
    },
    pillars: {
      title: "Lo que ofrezco",
      p1_title: "Talleres y Catas",
      p1_desc: "Aprende a saborear la calidad. Disfruta de catas guiadas en una almazara real en Mallorca.",
      p2_title: "Aceite de Granada",
      p2_desc: "Conocimiento profundo sobre Picual, Hojiblanca y Lucio del corazón de Andalucía.",
      p3_title: "Saber y Sabor",
      p3_desc: "Del cultivo al plato: todo sobre producción, salud y recetas mediterráneas.",
      learnMore: "Saber más",
    },
    about: {
      title: "Un viaje de pasión",
      intro: "Detrás de Oliven Werkstatt estoy yo, un entusiasta que perdió su corazón en los olivares de España.",
      story: "Mi viaje comenzó hace más de 15 años en las escarpadas montañas al noreste de Granada. Allí, en los Montes de Granada, aprendí la diferencia entre un aceite común y un verdadero Virgen Extra. Esta fascinación nunca me abandonó. Hoy vivo entre Granada y Mallorca, compartiendo mi conocimiento para honrar el trabajo de los pequeños agricultores y abrir nuevos mundos de sabor.",
      timeline: [
        { year: "2008", event: "Primer viaje a Andalucía y descubrimiento de la aceituna Picual." },
        { year: "2012", event: "Inicio de colaboración con pequeñas almazaras en Priego de Córdoba." },
        { year: "2019", event: "Fundación de 'Oliven Werkstatt' en Mallorca." },
        { year: "Hoy", event: "Talleres regulares y eventos culinarios." },
      ]
    },
    workshops: {
      title: "Vive el aceite con todos los sentidos",
      description: "Nuestros talleres se realizan en colaboración con almazaras tradicionales (como Son Catiu) en Mallorca. Sumérgete en la producción y aprende a catar como un profesional.",
      locationLabel: "Lugar",
      locationValue: "Son Catiu, Mallorca (o bajo petición)",
      durationLabel: "Duración",
      durationValue: "aprox. 2,5 horas",
      details: [
        "Visita guiada a la almazara y explicación de la extracción.",
        "Cata guiada de 3-4 aceites de alta gama.",
        "Identificación de atributos de calidad y defectos.",
        "Incluye tapas ligeras y bebidas."
      ],
      cta: "Reservar plaza",
      privateCta: "Solicitar grupo privado"
    },
    varieties: {
      title: "Variedades y Regiones",
      intro: "Andalucía es el mayor productor de aceite de oliva del mundo. Pero es la diversidad en regiones como Granada lo que crea verdaderos tesoros.",
      items: [
        {
          name: "Picual",
          aroma: "Tomatera, hoja de higuera, hierba recién cortada.",
          taste: "Potente, con amargor y picor presentes. Un aceite con carácter.",
          usage: "Perfecto para ensaladas, tostadas o guisos contundentes."
        },
        {
          name: "Hojiblanca",
          aroma: "Almendras, alcachofa, hierbas silvestres.",
          taste: "Equilibrado, entrada dulce y final picante.",
          usage: "Ideal para gazpacho, pescados y mayonesas."
        },
        {
          name: "Lucio",
          aroma: "Frutas maduras, plátano.",
          taste: "Muy suave, apenas amargo, dulce y delicado.",
          usage: "Maravilloso para postres, repostería o pescados finos."
        }
      ],
      regionsTitle: "Regiones Clave",
      regions: [
        { name: "D.O. Montes de Granada", desc: "Aceites de sierra, ricos en antioxidantes, a menudo intensos y estables." },
        { name: "D.O. Priego de Córdoba", desc: "Mundialmente famosa por aceites premiados y extremadamente frutados." },
        { name: "Mallorca (D.O. Oli de Mallorca)", desc: "Aceites isleños, a menudo Arbequina o Mallorquina, generalmente suaves y frutados." }
      ]
    },
    knowledge: {
      title: "Biblioteca del Aceite",
      articles: [
        {
          title: "¿Cómo se cata correctamente?",
          summary: "La copa oficial es azul para no juzgar el color. Primero calentar, luego oler, después sorber.",
          content: "Un buen aceite no se reconoce por el color. En la cata profesional, el aceite se calienta a unos 28°C. Huela profundamente: ¿Nota notas verdes? Luego tome un sorbo y aspire aire por la boca ('stripping'). ¡El amargor y el picor en la garganta son signos de calidad!"
        },
        {
          title: "Virgen Extra vs. Virgen",
          summary: "La diferencia radica en la acidez y la ausencia de defectos.",
          content: "El 'Aceite de Oliva Virgen Extra' (AOVE) es la categoría superior: zumo de aceituna, acidez inferior a 0,8% y sabor impecable. El 'Virgen' puede tener defectos leves. Todo lo demás ('Lampante') debe ser refinado."
        }
      ]
    },
    recipes: {
      title: "Cocina Mediterránea",
      items: [
        {
          name: "Pan con Tomate Clásico",
          desc: "Pan tostado, tomates de ramallet maduros, sal marina.",
          oilTip: "Usa un Picual intenso para darle el toque definitivo."
        },
        {
          name: "Remojón Granadino",
          desc: "Naranjas, bacalao, aceitunas negras, cebolleta.",
          oilTip: "Un Hojiblanca afrutado une la acidez de la naranja con el pescado."
        },
        {
          name: "Queso de cabra con miel y aceite",
          desc: "Queso de cabra templado, miel de tomillo.",
          oilTip: "Un Lucio o Arbequina suave redondea el plato con sedosidad."
        }
      ]
    },
    contact: {
      title: "Contactar",
      nameLabel: "Nombre",
      emailLabel: "Correo",
      messageLabel: "Mensaje",
      sendButton: "Enviar",
      successMessage: "¡Gracias! Me pondré en contacto pronto."
    },
    footer: {
      tagline: "Calidad que se saborea. Conocimiento que perdura.",
      legal: "Aviso Legal",
      privacy: "Privacidad"
    }
  },
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About",
      workshops: "Workshops",
      varieties: "Varieties",
      knowledge: "Knowledge",
      recipes: "Recipes",
      contact: "Contact",
    },
    hero: {
      title: "The Essence of Andalusia.",
      subtitle: "Discover the world of Extra Virgin Olive Oil. From the groves of Granada to exclusive tastings in Mallorca.",
      ctaWorkshop: "Book Workshop",
      ctaDiscover: "Discover Olive Oil",
    },
    pillars: {
      title: "What I Offer",
      p1_title: "Workshops & Tastings",
      p1_desc: "Learn to taste quality. Experience guided tastings in a real oil mill in Mallorca.",
      p2_title: "Olive Oil from Granada",
      p2_desc: "Deep knowledge about Picual, Hojiblanca, and Lucio varieties from the heart of Andalusia.",
      p3_title: "Knowledge & Flavor",
      p3_desc: "From grove to plate: everything about production, health, and Mediterranean recipes.",
      learnMore: "Learn more",
    },
    about: {
      title: "A Journey of Passion",
      intro: "Behind Oliven Werkstatt is me—an enthusiast who lost his heart to the olive groves of Spain.",
      story: "My journey began over 15 years ago in the rugged mountains northeast of Granada. There, in 'Montes de Granada', I learned the difference between ordinary oil and true 'Extra Virgin'. This fascination never left me. Today, I live between Granada and Mallorca, sharing my knowledge to honor the hard work of small farmers and open up new worlds of flavor for food lovers.",
      timeline: [
        { year: "2008", event: "First trip to Andalusia and discovery of the Picual olive." },
        { year: "2012", event: "Start of collaboration with small mills in Priego de Córdoba." },
        { year: "2019", event: "Founding of 'Oliven Werkstatt' in Mallorca." },
        { year: "Today", event: "Regular workshops and culinary events." },
      ]
    },
    workshops: {
      title: "Experience Olive Oil with All Senses",
      description: "Our workshops take place in cooperation with traditional oil mills (e.g., Son Catiu) in Mallorca. Dive into production and learn to taste like a pro.",
      locationLabel: "Location",
      locationValue: "Son Catiu, Mallorca (or on request)",
      durationLabel: "Duration",
      durationValue: "approx. 2.5 hours",
      details: [
        "Guided tour of the mill and explanation of extraction.",
        "Guided tasting of 3-4 high-quality oils.",
        "Identification of quality attributes and defects.",
        "Includes light tapas and drinks."
      ],
      cta: "Secure your spot",
      privateCta: "Request private group"
    },
    varieties: {
      title: "Varieties & Regions",
      intro: "Andalusia is the world's largest olive oil producer. But it is the diversity in regions like Granada that creates true treasures.",
      items: [
        {
          name: "Picual",
          aroma: "Tomato plant, fig leaf, freshly cut grass.",
          taste: "Robust, with present bitterness and pungency. An oil with character.",
          usage: "Perfect for salads, dipping, or hearty stews."
        },
        {
          name: "Hojiblanca",
          aroma: "Almonds, artichoke, wild herbs.",
          taste: "Balanced, sweet entry with a peppery finish.",
          usage: "Ideal for gazpacho, fish dishes, and mayonnaise."
        },
        {
          name: "Lucio",
          aroma: "Ripe fruits, banana.",
          taste: "Very mild, barely bitter, sweet and delicate.",
          usage: "Wonderful for desserts, baking, or delicate fish."
        }
      ],
      regionsTitle: "Key Regions",
      regions: [
        { name: "D.O. Montes de Granada", desc: "Highland oils, rich in antioxidants, often intense and stable." },
        { name: "D.O. Priego de Córdoba", desc: "World-renowned for award-winning, extremely fruity oils." },
        { name: "Mallorca (D.O. Oli de Mallorca)", desc: "Island oils, often Arbequina or Mallorquina, usually mild and fruity." }
      ]
    },
    knowledge: {
      title: "Knowledge Hub",
      articles: [
        {
          title: "How to Taste Correctly?",
          summary: "The official glass is blue so color doesn't deceive. First warm, then smell, then sip.",
          content: "Good olive oil is not recognized by color. In professional tasting, the oil is warmed to approx. 28°C. Smell deeply: Do you notice green notes? Then take a sip and pull air through your mouth ('stripping'). Bitterness and pungency in the throat are signs of quality!"
        },
        {
          title: "Extra Virgin vs. Virgin",
          summary: "The difference lies in acidity and freedom from defects.",
          content: "'Extra Virgin Olive Oil' (EVOO) is the highest grade: cold-pressed, acidity under 0.8%, and absolutely flawless in taste. 'Virgin' oil may have slight defects. Everything else ('Lampante') must be refined."
        }
      ]
    },
    recipes: {
      title: "Mediterranean Kitchen",
      items: [
        {
          name: "Classic Pan con Tomate",
          desc: "Toasted bread, ripe Ramallet tomatoes, sea salt.",
          oilTip: "Use a robust Picual for the ultimate kick."
        },
        {
          name: "Remojón Granadino",
          desc: "Oranges, cod, black olives, spring onions.",
          oilTip: "A fruity Hojiblanca bridges the acidity of the orange with the fish."
        },
        {
          name: "Goat Cheese with Honey & Oil",
          desc: "Warm goat cheese, thyme honey.",
          oilTip: "A mild Lucio or Arbequina rounds off the dish with silkiness."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send",
      successMessage: "Thank you! I will be in touch shortly."
    },
    footer: {
      tagline: "Quality you can taste. Knowledge that stays.",
      legal: "Imprint",
      privacy: "Privacy"
    }
  }
};