export const ContentData = {
  en: {
    nav: {
      explore: "Explore",
      stories: "Stories",
      categories: "Categories",
      timeline: "Timeline",
      whyEvolve: "Why Evolve",
      about: "About",
      searchPlaceholder: "Search how anything evolved...",
      randomEvolution: "Random Story",
      popularTitle: "POPULAR EVOLUTIONS",
    },
    hero: {
      tag: "HOW THINGS EVOLVED",
      title: "How did we get from that to this?",
      description: "Explore how everyday objects transformed across decades — from clunky mechanical beginnings to modern digital miracles.",
      cta: "Explore Stories →",
      thenLabel: "THEN",
      nowLabel: "NOW",
      readMore: "Read Full Story →",
      storyBadge: "FEATURED EVOLUTION",
    },
    featured: {
      tag: "FEATURED STORIES",
      title: "Things didn't change overnight.",
      subtitle: "Click 'Read Story' on any evolution to uncover its history, friction, timeline, and future.",
      readMore: "Read Story →",
    },
    categories: {
      tag: "DISCOVER BY TOPIC",
      title: "Explore by Category",
    },
    timeline: {
      tag: "CHRONOLOGY OF INNOVATION",
      title: "A timeline of change",
    },
    whyEvolve: {
      tag: "EDITORIAL PERSPECTIVE",
      title: "Every version solves a problem.",
      subtitle: "Behind every modern convenience lies a cycle of friction, breakthrough, and transformation.",
    },
    footer: {
      tagline: "Uncovering the journey from idea to today.",
      rights: "All rights reserved.",
    },
    modal: {
      close: "Close",
      journeyTitle: "Evolution Journey",
      beginningTitle: "THE BEGINNING (What existed before?)",
      problemTitle: "THE PROBLEM (Why a better solution was needed)",
      changeTitle: "THE CHANGE (The breakthrough invention)",
      journeyTimelineTitle: "THE JOURNEY (Key Milestones)",
      todayTitle: "TODAY (Current State)",
      whatsNextTitle: "WHAT'S NEXT? (Future Frontier)",
    }
  },
  hi: {
    nav: {
      explore: "खोजें (Explore)",
      stories: "कहानियाँ (Stories)",
      categories: "श्रेणियाँ (Categories)",
      timeline: "समय-चक्र (Timeline)",
      whyEvolve: "क्यों बदला (Why Evolve)",
      about: "हमारे बारे में",
      searchPlaceholder: "खोजें कि चीज़ें कैसे विकसित हुईं...",
      randomEvolution: "यादृच्छिक कहानी",
      popularTitle: "लोकप्रिय बदलाव",
    },
    hero: {
      tag: "चीज़ें कैसे बदलीं",
      title: "हम वहाँ से यहाँ तक कैसे पहुँचे?",
      description: "जानें कि हमारे रोज़मर्रा की वस्तुएं दशकों में कैसे बदलीं — भारी मैकेनिकल शुरुआत से लेकर आधुनिक डिजिटल चमत्कार तक।",
      cta: "कहानियाँ देखें →",
      thenLabel: "तब (THEN)",
      nowLabel: "अब (NOW)",
      readMore: "पूरी कहानी पढ़ें →",
      storyBadge: "मुख्य बदलाव",
    },
    featured: {
      tag: "प्रमुख कहानियाँ",
      title: "बदलाव रातों-रात नहीं आया।",
      subtitle: "इतिहास, असुविधा, समय-रेखा और भविष्य की संभावनाओं को जानने के लिए 'कहानी पढ़ें' पर क्लिक करें।",
      readMore: "कहानी पढ़ें →",
    },
    categories: {
      tag: "विषय के अनुसार खोजें",
      title: "श्रेणियों के आधार पर देखें",
    },
    timeline: {
      tag: "नवाचार का कालक्रम",
      title: "बदलाव का समय-चक्र (Timeline)",
    },
    whyEvolve: {
      tag: "संपादकीय दृष्टिकोण",
      title: "हर नया रूप एक समस्या का समाधान है।",
      subtitle: "हर आधुनिक सुविधा के पीछे असुविधा, तकनीकी खोज और रूपांतरण का एक चक्र होता है।",
    },
    footer: {
      tagline: "विचार से लेकर आज तक का सफ़र।",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    modal: {
      close: "बंद करें",
      journeyTitle: "विकास का सफ़र",
      beginningTitle: "शुरुआत (THE BEGINNING - पहले क्या था?)",
      problemTitle: "समस्या (THE PROBLEM - बेहतर विकल्प की ज़रूरत क्यों पड़ी?)",
      changeTitle: "बदलाव (THE CHANGE - कौन सा आविष्कार हुआ?)",
      journeyTimelineTitle: "यात्रा (THE JOURNEY - मुख्य पड़ाव)",
      todayTitle: "आज (TODAY - वर्तमान स्थिति)",
      whatsNextTitle: "आगे क्या? (WHAT'S NEXT? - भविष्य का रूप)",
    }
  }
};

export const storiesData = [
  {
    id: "telephone-smartphone",
    number: "01 / 10",
    heroCard: true,
    category: { en: "Communication", hi: "संचार (Communication)" },
    then: { en: "Telephone", hi: "लैंडलाइन टेलीफोन" },
    now: { en: "Smartphone", hi: "स्मार्टफोन" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "How Alexander Bell's voice wire transformed into a pocket supercomputer.",
      hi: "बेल के तारों वाले फोन से लेकर पॉकेट सुपरकंप्यूटर बनने की दास्तान।"
    },
    hook: {
      en: "Could your phone soon replace physical reality altogether with neural brain interfaces?",
      hi: "क्या भविष्य में आपका फोन स्क्रीन छोड़ सीधे दिमाग से कनेक्ट होगा?"
    },
    details: {
      en: {
        beginning: "In 1876, Alexander Graham Bell received a U.S. patent for his telephone. Early telephones made it possible to transmit human speech electrically over copper wires between fixed physical locations.",
        problem: "Early phones required physical copper wiring connected to fixed walls, manual operator switchboards, and expensive long-distance rates. Communication was tethered to a room.",
        change: "Radio cellular towers in the 1970s and microchip miniaturization in the 2000s broke the wire tether, allowing voice and data signals to travel wirelessly.",
        timeline: [
          { year: "1876", title: "Telephone Invention", desc: "Bell patents the first liquid speech transmitter." },
          { year: "1890s-1900s", title: "Telephone Networks", desc: "Commercial switchboards and copper wire grids span cities." },
          { year: "1940s-1960s", title: "Mobile & Car Phones", desc: "Radio-based car phones with heavy trunk transmitters." },
          { year: "1973", title: "Handheld Mobile Call", desc: "Motorola's Martin Cooper makes the first portable cellphone call." },
          { year: "1983", title: "DynaTAC 8000X", desc: "First commercial handheld cellular phone hits the market." },
          { year: "2000s", title: "Smartphone Revolution", desc: "Touchscreens, app stores, 3G internet, and cameras merge." },
          { year: "Today", title: "Modern Smartphone", desc: "AI-driven multi-lens computational pocket supercomputers." }
        ],
        today: "Today, the telephone has evolved into the smartphone — combining voice calling with messaging, photography, high-speed computing, navigation, entertainment, banking, and global internet.",
        whatsNext: "Neural brain-computer interfaces (BCIs), ambient AI wearables, and holographic projection glasses will make handheld glass screens obsolete."
      },
      hi: {
        beginning: "1876 में अलेक्जेंडर ग्राहम बेल को टेलीफोन का अमेरिकी पेटेंट मिला। शुरुआती टेलीफोन ने तांबे के तारों के जरिए इंसानी आवाज को एक जगह से दूसरी जगह बिजली के जरिए भेजना संभव बनाया।",
        problem: "शुरुआती फोन दीवार से बंधे रहते थे, स्विचबोर्ड ऑपरेटरों पर निर्भर थे और एसटीडी/आईएसडी कॉल बहुत महंगी थीं। बात करने के लिए कमरे में होना अनिवार्य था।",
        change: "1970 के दशक में सेल्यूलर रेडियो टावर और 2000 के दशक में माइक्रोचिप क्रांति ने तारों के बंधन को तोड़ दिया, जिससे आवाज और डेटा हवा के जरिए तैरने लगे।",
        timeline: [
          { year: "1876", title: "टेलीफोन का आविष्कार", desc: "बेल ने पहला वॉयस ट्रांसमीटर पेटेंट कराया।" },
          { year: "1890s-1900s", title: "टेलीफोन नेटवर्क", desc: "शहरों में तांबे के तारों का नेटवर्क फैला।" },
          { year: "1940s-1960s", title: "कार टेलीफोन", desc: "रेडियो आधारित कार फोन जो बहुत भारी होते थे।" },
          { year: "1973", title: "पहला पोर्टेबल कॉल", desc: "मोटोरोला के मार्टिन कूपर ने पहला मोबाइल कॉल किया।" },
          { year: "1983", title: "कमर्शियल सेल्यूलर फोन", desc: "DynaTAC 8000X बाजार में बिक्री के लिए आया।" },
          { year: "2000s", title: "स्मार्टफोन क्रांति", desc: "टचस्क्रीन, ऐप्स और इंटरनेट का संगम।" },
          { year: "आज", title: "आधुनिक स्मार्टफोन", desc: "AI, 5G और 4K कैमरे वाला पॉकेट सुपरकंप्यूटर।" }
        ],
        today: "आज टेलीफोन स्मार्टफोन बन चुका है — जो सिर्फ कॉल नहीं, बल्कि मेसेजिंग, फोटोग्राफी, नेविगेशन, बैंकिंग और इंटरनेट की रीढ़ है।",
        whatsNext: "न्यूरल ब्रेन-कंप्यूटर इंटरफेस (BCI) और AR स्मार्ट ग्लासेज आने वाले समय में जेब में रखे ग्लास स्क्रीन वाले स्मार्टफोन की जगह ले लेंगे।"
      }
    }
  },
  {
    id: "newspaper-digitalnews",
    number: "02 / 10",
    heroCard: false,
    category: { en: "Information", hi: "सूचना व समाचार (Information)" },
    then: { en: "Printed Newspaper", hi: "अख़बार (Printed Paper)" },
    now: { en: "Digital News", hi: "डिजिटल लाइव न्यूज़" },
    thenImage: "/images/newspaper_then.jpg",
    nowImage: "/images/digitalnews_now.jpg",
    tagline: {
      en: "From waiting for morning delivery to live 24/7 global breaking feeds.",
      hi: "सुबह की पेपर डिलीवरी के इंतज़ार से लेकर 24/7 लाइव अलर्ट्स तक।"
    },
    hook: {
      en: "Will hyper-personalized AI reporters write individualized news for each citizen?",
      hi: "क्या AI रिपोर्टर आने वाले समय में हर नागरिक के लिए व्यक्तिगत न्यूज़ फीड लिखेगा?"
    },
    details: {
      en: {
        beginning: "Newspapers grew from the development of printing and the need to distribute information to larger audiences. Early newspapers were printed on physical paper and distributed periodically.",
        problem: "Printed news suffered from a strict 24-hour delay — news happening yesterday afternoon couldn't be read until the next morning. Distribution was slow and wasted tons of paper.",
        change: "The global internet and mobile screens enabled journalists and automated feeds to publish and update breaking stories instantly without waiting for a printing press.",
        timeline: [
          { year: "1600s", title: "Early Printed Newspapers", desc: "Hand-operated printing presses produce periodic gazettes." },
          { year: "1700s-1800s", title: "Regular Dailies", desc: "Daily newspapers emerge in major trade cities." },
          { year: "1900s", title: "Mass Circulation", desc: "High-speed rotary presses distribute millions of copies." },
          { year: "Late 1900s", title: "Cable & Digital Publishing", desc: "24-hour cable news (CNN) and early web archives." },
          { year: "2000s", title: "Online News Portals", desc: "Web portals replace physical subscriptions." },
          { year: "Today", title: "Live News Apps", desc: "Real-time push notifications, live streams, and reader commentary." }
        ],
        today: "Today, news is accessed instantly on smartphones with live streaming video, interactive charts, continuous updates, and social discussion.",
        whatsNext: "Generative AI will deliver real-time multi-perspective journalism with instant translation and personalized fact-checking."
      },
      hi: {
        beginning: "अख़बारों का विकास छपाई तकनीक और बड़ी आबादी तक जानकारी पहुँचाने की ज़रूरत से हुआ। शुरुआती अख़बार कागज़ पर छपते थे और सुबह-सुबह बाँटे जाते थे।",
        problem: "प्रिंट न्यूज़ में 24 घंटे की देरी होती थी — कल दोपहर की घटना अगले दिन सुबह ही पढ़ने को मिलती थी। छपाई और परिवहन पर भारी खर्च और कागज़ की बर्बादी होती थी।",
        change: "इंटरनेट और स्मार्टफोन स्क्रीन ने प्रेस के छपने का इंतज़ार खत्म कर दिया। अब ताज़ा खबरें सेकंडों में लाइव पब्लिश हो जाती हैं।",
        timeline: [
          { year: "1600s", title: "शुरुआती प्रिंटेड गज़ट", desc: "हाथ से चलने वाली प्रेस से छपने वाले शुरुआती समाचार पत्र।" },
          { year: "1700s-1800s", title: "दैनिक समाचार पत्र", desc: "मुख्य शहरों में नियमित दैनिक अख़बार शुरू हुए।" },
          { year: "1900s", title: "मास सर्कुलेशन", desc: "हाई-स्पीड रोटरी प्रेस से लाखों प्रतियां छपने लगीं।" },
          { year: "Late 1900s", title: "केबल टीवी व वेब पोर्टल", desc: "24 घंटे टीवी न्यूज़ और शुरुआती डिजिटल वेब आर्काइव।" },
          { year: "2000s", title: "ऑनलाइन न्यूज़ पोर्टल्स", desc: "अख़बारों की जगह ऑनलाइन न्यूज़ वेबसाइट्स ने ली।" },
          { year: "आज", title: "लाइव न्यूज़ ऐप्स", desc: "पुश अलर्ट्स, लाइव वीडियो और रीयल-टाइम अपडेट्स।" }
        ],
        today: "आज समाचार स्मार्टफोन पर रीयल-टाइम अलर्ट, लाइव वीडियो और पाठकों की तुरंत प्रतिक्रिया के साथ पढ़े और देखे जाते हैं।",
        whatsNext: "AI पत्रकारिता लाइव फैक्ट-चेकिंग, तुरंत अनुवाद और आपकी पसंद के अनुसार कस्टमाइज्ड न्यूज कवरेज तैयार करेगी।"
      }
    }
  },
  {
    id: "camera-digitalcamera",
    number: "03 / 10",
    heroCard: false,
    category: { en: "Photography", hi: "फोटोग्राफी (Photography)" },
    then: { en: "Film Camera", hi: "फिल्म रील कैमरा" },
    now: { en: "Smartphone Camera", hi: "AI स्मार्टफोन कैमरा" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From darkroom chemical prints to instant 4K multi-lens computational capture.",
      hi: "केमिकल डार्कथरूम की रील से लेकर कंप्यूटेशनल 4K AI फोटो तक।"
    },
    hook: {
      en: "Will 3D Spatial Holographic Cameras record moments in full 3D volumetric space?",
      hi: "क्या 3D होलोग्राफिक कैमरे भविष्य में यादों को 3D स्पेस में रिकॉर्ड करेंगे?"
    },
    details: {
      en: {
        beginning: "Photography developed through 19th-century chemical light capture. In 1888, George Eastman introduced the Kodak camera using flexible roll film, making photo taking accessible to the public.",
        problem: "Film rolls only allowed 24 or 36 pictures. Photographers couldn't preview photos, and lab chemical development took days and cost significant money per roll.",
        change: "Solid-state digital image sensors (CCD/CMOS) replaced light-sensitive film with electronic pixels, storing photos directly to digital flash memory.",
        timeline: [
          { year: "1839", title: "Early Daguerreotype", desc: "First public photographic process on metal plates." },
          { year: "1888", name: "Kodak Roll-Film Camera", desc: "Eastman introduces consumer film photography." },
          { year: "1900s-1960s", title: "Popularization of SLR", desc: "35mm film cameras become standard household objects." },
          { year: "1975", title: "Kodak Digital Prototype", desc: "First 0.01MP electronic sensor camera." },
          { year: "1990s-2000s", title: "Standalone Digital Cameras", desc: "SD cards and LCD preview screens replace film labs." },
          { year: "Today", title: "Computational Smartphone Camera", desc: "Multi-lens AI sensors capturing 4K/8K video instantly." }
        ],
        today: "Today, cameras are built into the smartphones we carry everywhere — taking billions of computational HDR photos daily with zero marginal cost.",
        whatsNext: "Light-field cameras and 3D spatial volumetric sensors will allow you to re-focus, change lighting, and step inside captured 3D memories."
      },
      hi: {
        beginning: "19वीं सदी में केमिकल लाइट कैप्चर के जरिए फोटोग्राफी की शुरुआत हुई। 1888 में जॉर्ज ईस्टमैन ने कोडक फ्लेक्सिबल रील कैमरा पेश किया, जिससे आम लोग फोटो खींचने लगे।",
        problem: "फिल्म रील में केवल 24 या 36 फोटो की सीमा थी। फोटो कैसी आई है यह रील धुलवाने के बाद ही पता चलता था और लैब का खर्च काफी अधिक था।",
        change: "डिजिटल इमेज सेंसर (CCD/CMOS) ने केमिकल रील की जगह पिक्सल ले लिए, जिससे तस्वीरें बिना किसी लैब खर्च के सीधे फ्लैश मेमोरी में सेव होने लगीं।",
        timeline: [
          { year: "1839", title: "डेगुएरियोटाइप", desc: "धातु की प्लेटों पर शुरुआती फोटोग्राफी की प्रक्रिया।" },
          { year: "1888", title: "कोडक रील कैमरा", desc: "आम जनता के लिए फ्लेक्सिबल रील फोटोग्राफी शुरू हुई।" },
          { year: "1900s-1960s", title: "35mm SLR दौर", desc: "35mm फिल्म कैमरे हर घर का हिस्सा बने।" },
          { year: "1975", title: "डिजिटल प्रोटोटाइप", desc: "कोडक का 0.01MP का पहला डिजिटल सेंसर।" },
          { year: "1990s-2000s", title: "डिजिटल कैमरे", desc: "SD कार्ड और LCD प्रीव्यू स्क्रीन ने रील धुलवाने की झंझट खत्म की।" },
          { year: "आज", title: "AI स्मार्टफोन कैमरा", desc: "मल्टी-लेंस सेंसर और 4K/8K कंप्यूटेशनल फोटोग्राफी।" }
        ],
        today: "आज कैमरे हर जेब में रखे स्मार्टफोन में समा चुके हैं, जहाँ हर दिन बिना किसी अतिरिक्त खर्च के खरबों खूबसूरत तस्वीरें खींची जाती हैं।",
        whatsNext: "लाइट-फील्ड और 3D स्पेटियल कैमरे भविष्य की यादों को 3D स्पेस में रिकॉर्ड करेंगे, जहाँ आप फोटो के अंदर घूमकर दृश्य देख सकेंगे।"
      }
    }
  },
  {
    id: "map-gps",
    number: "04 / 10",
    heroCard: false,
    category: { en: "Navigation", hi: "नेविगेशन (Navigation)" },
    then: { en: "Paper Map", hi: "कागज़ी नक्शा" },
    now: { en: "GPS Navigation", hi: "जीपीएस सैटेलाइट नेविगेशन" },
    thenImage: "/images/map_then.jpg",
    nowImage: "/images/gps_now.jpg",
    tagline: {
      en: "From unfolding paper road atlases to live satellite turn-by-turn routing.",
      hi: "गाड़ी में बड़े कागजी नक्शे खोलने से लेकर रीयल-टाइम सैटेलाइट गाइडेंस तक।"
    },
    hook: {
      en: "Will autonomous AI vehicles navigate based on collective swarm intelligence without human input?",
      hi: "क्या भविष्य की गाड़ियां बिना चालक के सामूहिक AI नेटवर्क से रास्ता तय करेंगी?"
    },
    details: {
      en: {
        beginning: "For centuries, printed paper maps helped people understand geography and travel routes. Drivers carried heavy printed road atlases inside cars.",
        problem: "Printed maps couldn't show road closures, accidents, or live traffic jams. Unfolding giant maps while driving was hazardous and easy to get lost.",
        change: "A constellation of 31 US GPS satellites orbiting Earth combined with mobile digital maps to continuously calculate exact pin-point location coordinates.",
        timeline: [
          { year: "Centuries Ago", title: "Paper Maps & Nautical Charts", desc: "Hand-drawn maps using compass bearings." },
          { year: "1920s", title: "Road Atlases", desc: "Foldable state maps sold at gas stations." },
          { year: "1981", title: "Electronic Gyro Navigation", desc: "Honda's early inertial map film system." },
          { year: "1995", title: "Standalone GPS Devices", desc: "Garmin & TomTom dashboard satellite receivers." },
          { year: "2005", title: "Mobile Mapping Apps", desc: "Google Maps brings satellite maps to smartphones." },
          { year: "Today", title: "Real-Time Traffic GPS", desc: "Crowdsourced traffic, voice prompts, and AR turn guidance." }
        ],
        today: "Today, navigation systems calculate real-time traffic jams, offer turn-by-turn voice directions, and recalculate fastest routes automatically.",
        whatsNext: "Augmented reality windshield overlays and autonomous vehicle swarm intelligence will pilot vehicles hands-free."
      },
      hi: {
        summary: "अपरिचित शहरों में रास्ता खोजने के लिए कार में बड़े कागजी नक्शे खोलना पड़ता था। आज सैटेलाइट्स की मदद से लाइव ट्रैफिक के साथ सटीक रास्ता मिलता है।",
        beginning: "सदियों से छपे हुए कागज़ी नक्शे लोगों को दिशा बताने का एकमात्र साधन थे। गाड़ियों में बड़े-बड़े रोड एटलस रखे जाते थे।",
        problem: "कागज़ी नक्शों में रास्ते की स्थिति, दुर्घटना या ट्रैफिक जाम की जानकारी नहीं होती थी। गाड़ी चलाते समय नक्शा खोलना खतरनाक होता था।",
        change: "पृथ्वी की कक्षा में चक्कर काट रहे 31 सैटेलाइट्स (GPS) और स्मार्टफोन ऐप्स ने मिलकर रीयल-टाइम में सटीक लोकेशन बताना संभव किया।",
        timeline: [
          { year: "सदियों पहले", title: "कागज़ी नक्शे व कंपास", desc: "हाथ से बने समुद्री व भौगोलिक नक्शे।" },
          { year: "1920s", title: "रोड एटलस", desc: "पेट्रोल पंपों पर मिलने वाले फोल्डिंग रोड मैप।" },
          { year: "1981", title: "इलेक्ट्रॉनिक जाइरो नेविगेशन", desc: "हौंडा का पारदर्शी मैप फिल्म सिस्टम।" },
          { year: "1995", title: "स्टैंडअलोन GPS डिवाइस", desc: "गारमिन और टॉमटॉम के डैशबोर्ड रिसीवर।" },
          { year: "2005", title: "मोबाइल मैपिंग ऐप्स", desc: "गूगल मैप्स ने स्मार्टफोन पर सैटेलाइट मैप पहुँचाया।" },
          { year: "आज", title: "रीयल-टाइम ट्रैफिक GPS", desc: "लाइव ट्रैफिक, वॉयस गाइडेंस और एआई रूटिंग।" }
        ],
        today: "आज नेविगेशन सिस्टम रीयल-टाइम ट्रैफिक जाम की जानकारी देते हैं, वॉयस गाइडेंस देते हैं और रास्ता भटकने पर अपने आप नया रूट खोज लेते हैं।",
        whatsNext: "कार की विंडशील्ड पर ऑगमेंटेड रियल्टी (AR) एरो और स्व-चालित (Autonomous) कारें बिना किसी इंसानी मदद के मंजिल तक पहुँचेंगी।"
      }
    }
  },
  {
    id: "vinyl-streaming",
    number: "05 / 10",
    heroCard: false,
    category: { en: "Entertainment", hi: "मनोरंजन (Entertainment)" },
    then: { en: "Vinyl Record", hi: "विनाइल रिकॉर्ड" },
    now: { en: "Music Streaming", hi: "म्यूजिक स्ट्रीमिंग" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From delicate spinning vinyl discs to instant cloud access to 100M+ songs.",
      hi: "विनाइल डिस्क से लेकर क्लाउड पर 10 करोड़ से ज्यादा गानों की तुरंत पहुंच तक।"
    },
    hook: {
      en: "Will AI musicians compose real-time adaptive soundtracks matching your heart rate?",
      hi: "क्या AI भविष्य में आपकी दिल की धड़कन के अनुसार रियल-टाइम म्यूज़िक कंपोज़ करेगा?"
    },
    details: {
      en: {
        beginning: "Music once lived exclusively on physical formats. Vinyl records stored analog sound grooves played back via needle turntables in living rooms.",
        problem: "Vinyl discs were large, easily scratched, non-portable, and could only hold about 45 minutes of audio per disc.",
        change: "Digital compression formats (MP3) and high-speed broadband wireless networks decoupled recorded music from physical plastic media entirely.",
        timeline: [
          { year: "1948", title: "Vinyl LP Discs", desc: "Microgroove vinyl records become standard audio format." },
          { year: "1963", title: "Compact Cassette Tape", desc: "Philips introduces portable tape reels." },
          { year: "1982", title: "Compact Disc (CD)", desc: "Laser digital optical discs replace analog records." },
          { year: "1998", title: "MP3 Players", desc: "Portable digital flash memory players (iPod) hold 1,000 songs." },
          { year: "2008", title: "Music Streaming", desc: "Spotify launches subscription-based cloud music catalog." },
          { year: "Today", title: "Lossless Audio Streaming", desc: "Instant access to 100M+ tracks with Spatial Audio." }
        ],
        today: "Today, physical media ownership is optional — millions of songs across the world are available in high-definition spatial audio within seconds.",
        whatsNext: "Personalized AI adaptive music streams will generate infinite, dynamic soundtracks tailored to your real-time mood and biometric sensors."
      },
      hi: {
        beginning: "संगीत कभी केवल भौतिक रिकॉर्ड पर मौजूद था। विनाइल डिस्क सुई वाले टर्नटेबल पर एनालॉग साउंड वेव बजाती थीं।",
        problem: "विनाइल डिस्क बहुत बड़ी थीं, उन पर स्क्रैच लग जाते थे, उन्हें कहीं ले जाना नामुमकिन था और एक डिस्क में सिर्फ 45 मिनट का ऑडियो आता था।",
        change: "डिजिटल कम्प्रेशन (MP3) और हाई-स्पीड इंटरनेट ने संगीत को प्लास्टिक डिस्क के बंधन से पूरी तरह मुक्त कर दिया।",
        timeline: [
          { year: "1948", title: "विनाइल LP डिस्क", desc: "एनालॉग साउंड रिकॉर्ड का मानक रूप।" },
          { year: "1963", title: "कैसेट टेप", desc: "पोर्टेबल ऑडियो टेप की शुरुआत।" },
          { year: "1982", title: "कंपैक्ट डिस्क (CD)", desc: "डिजिटल लेज़र ऑप्टिकल डिस्क।" },
          { year: "1998", title: "MP3 प्लेयर्स (iPod)", desc: "जेब में 1,000 गाने रखने की क्षमता।" },
          { year: "2008", title: "म्यूजिक स्ट्रीमिंग", desc: "स्पॉटिफ़ाई ने क्लाउड म्यूज़िक मॉडल शुरू किया।" },
          { year: "आज", title: "हाई-डेफिनिशन स्ट्रीमिंग", desc: "10 करोड़ से ज्यादा गानों तक सेकंडों में पहुंच।" }
        ],
        today: "आज कोई भौतिक कैसेट या सीडी खरीदने की आवश्यकता नहीं है — दुनिया के 10 करोड़ से अधिक गाने सेकंडों में आपके फोन पर बजने के लिए उपलब्ध हैं।",
        whatsNext: "AI म्यूज़िक जनरेटर आपकी दिल की धड़कन और मूड के हिसाब से रीयल-टाइम में नए गाने कंपोज़ करेगा।"
      }
    }
  },
  {
    id: "letter-instantmessage",
    number: "06 / 10",
    heroCard: false,
    category: { en: "Communication", hi: "संचार (Communication)" },
    then: { en: "Written Letter", hi: "डाक चिट्ठी (Letter)" },
    now: { en: "Instant Messaging", hi: "इंस्टेंट मैसेजिंग" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From weeks of postal train delivery to instant encrypted global chat.",
      hi: "हफ़्तों तक चलने वाली डाक गाड़ी से लेकर सेकंडों में एन्क्रिप्टेड चैट तक।"
    },
    hook: {
      en: "Will real-time neural translation enable seamless cross-language brain thought sharing?",
      hi: "क्या न्यूरल ट्रांसलेशन से बिना टाइप किए विचार सीधे दूसरों तक पहुँचेंगे?"
    },
    details: {
      en: {
        beginning: "Written letters carried personal news across distances. The process depended on pen, paper, stamps, physical couriers, and weeks of waiting.",
        problem: "Physical mail took days or weeks to arrive. If a letter was lost, communication was broken with no read receipts or immediate reply ability.",
        change: "The ARPANET, internet protocols, SMS networks, and instant messaging apps turned text into instant light signals traveling across fiber optic lines.",
        timeline: [
          { year: "Centuries Ago", title: "Handwritten Letters", desc: "Postal couriers and horse-drawn mail delivery." },
          { year: "1840s", title: "Electric Telegraph", desc: "Morse code electrical wire pulses." },
          { year: "1971", title: "First Network Email", desc: "Ray Tomlinson sends first email over ARPANET." },
          { year: "1992", title: "First SMS Text", desc: "Neil Papworth sends 'Merry Christmas' text." },
          { year: "2009", title: "WhatsApp & Chat Apps", desc: "Data-based multimedia chat replaces SMS." },
          { year: "Today", title: "Encrypted Instant Messaging", desc: "Instant voice notes, 4K media, end-to-end encryption." }
        ],
        today: "Today, text messages, photos, videos, and voice notes travel across the world in milliseconds with read receipts and encryption.",
        whatsNext: "Neural intent interfaces and real-time AI cross-language translation will convey thoughts seamlessly across languages without typing."
      },
      hi: {
        beginning: "हस्तलिखित पत्र ही दूर बैठे परिजनों तक संदेश पहुँचाने का एकमात्र जरिया थे। यह प्रक्रिया कलम, कागज़, डाक टिकट और हफ़्तों के इंतज़ार पर टिकी थी।",
        problem: "डाक से भेजे गए पत्र पहुँचने में हफ़्तों लगते थे। अगर पत्र खो जाता था तो कोई सूचना नहीं मिलती थी और जवाब का इंतज़ार लंबा होता था।",
        change: "इंटरनेट और चैट ऐप्स ने टेक्स्ट को ऑप्टिकल फाइबर लाइनों पर तैरने वाले प्रकाश के सिग्नलों में बदल दिया।",
        timeline: [
          { year: "सदियों पहले", title: "हस्तलिखित डाक पत्र", desc: "डाकियों और घोड़ों से चलने वाली डाक सेवा।" },
          { year: "1840s", title: "टेलीग्राफ", desc: "मोर्स कोड इलेक्ट्रिकल पल्स।" },
          { year: "1971", title: "पहला नेटवर्क ईमेल", desc: "रे टॉमलिंसन ने पहला ईमेल भेजा।" },
          { year: "1992", title: "पहला SMS टेक्स्ट", desc: "पहला मोबाइल मैसेज भेजा गया।" },
          { year: "2009", title: "व्हाट्सएप व चैट ऐप्स", desc: "इंटरनेट डेटा आधारित फ्री मल्टीमीडिया चैट।" },
          { year: "आज", title: "एन्क्रिप्टेड मैसेजिंग", desc: "वॉयस नोट्स, वीडियो और एंड-टू-एंड एन्क्रिप्शन।" }
        ],
        today: "आज टेक्स्ट, फोटो, वीडियो और वॉयस मैसेज मिलीसेकंड में पूरी दुनिया में बिना किसी पोस्टल देरी के पहुँच जाते हैं।",
        whatsNext: "AI न्यूरल इंटरफेस बिना टाइप किए विचारों को दूसरी भाषाओं में तुरंत ट्रांसलेट करके सामने वाले तक पहुँचा देगा।"
      }
    }
  },
  {
    id: "carriage-electriccar",
    number: "07 / 10",
    heroCard: false,
    category: { en: "Transportation", hi: "परिवहन (Transportation)" },
    then: { en: "Horse Carriage", hi: "घोड़ा गाड़ी (Horse Carriage)" },
    now: { en: "Electric Vehicle", hi: "इलेक्ट्रिक वाहन (EV)" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From animal power to self-driving high-voltage battery powertrains.",
      hi: "जानवरों की ताक़त से लेकर सेल्फ-ड्राइविंग हाई-वोल्टेज बैटरी गाड़ियों तक।"
    },
    hook: {
      en: "Will electric flying eVTOL taxis turn city skies into 3D highway grids?",
      hi: "क्या इलेक्ट्रिक फ्लाइंग टैक्सी आने वाले समय में सड़कों की जगह आसमान में उड़ेंगी?"
    },
    details: {
      en: {
        beginning: "Before automobiles, horse-drawn carriages were the primary mode of personal road transport. Cities filled with horse feed, stable overheads, and waste.",
        problem: "Horse travel was slow, limited by animal fatigue, required constant feeding, and created massive sanitation issues in 19th-century cities.",
        change: "Internal combustion engines replaced animal power with gasoline, and lithium-ion battery technology now replaces gasoline with clean electric motors.",
        timeline: [
          { year: "1800s", title: "Horse-Drawn Carriages", desc: "Animal power drives urban passenger buggies." },
          { year: "1886", title: "Benz Patent-Motorwagen", desc: "First gasoline-powered automobile invented." },
          { year: "1908", title: "Ford Model T Assembly Line", desc: "Mass production makes cars accessible to millions." },
          { year: "1997", title: "Toyota Prius Hybrid", desc: "First mass-produced gasoline-electric hybrid." },
          { year: "2008", title: "Tesla Roadster", desc: "High-performance lithium-ion electric vehicle." },
          { year: "Today", title: "Autonomous Electric Vehicles", desc: "Over-the-air software updates, fast charging, autopilot AI." }
        ],
        today: "Today, electric vehicles deliver quiet, emission-free acceleration with advanced driver-assist computer vision.",
        whatsNext: "Autonomous electric vertical takeoff (eVTOL) flying taxis and solid-state batteries will expand transit into 3D airspace."
      },
      hi: {
        beginning: "गाड़ियों से पहले घोड़ा गाड़ियाँ ही सड़क पर यात्रा का मुख्य साधन थीं। शहरों में घोड़ों का दाना, अस्तबल और गंदगी मुख्य समस्या थी।",
        problem: "घोड़ों की यात्रा धीमी थी, जानवर थक जाते थे और 19वीं सदी के शहरों में गंदगी की बहुत बड़ी समस्या पैदा हो गई थी।",
        change: "कंबशन इंजन ने जानवरों की जगह पेट्रोल को दिया, और अब लिथियम-आयन बैटरी तकनीक पेट्रोल की जगह स्वच्छ इलेक्ट्रिक पावर दे रही है।",
        timeline: [
          { year: "1800s", title: "घोड़ा गाड़ी का दौर", desc: "शहरी यात्रा के लिए जानवरों की ताक़त पर निर्भरता।" },
          { year: "1886", title: "बेंज मोटरवागन", desc: "पेट्रोल से चलने वाली पहली कार का आविष्कार।" },
          { year: "1908", title: "फोर्ड मॉडल T असेंबली लाइन", desc: "मास प्रोडक्शन से कारें हर किसी के लिए सस्ती हुईं।" },
          { year: "1997", title: "टोयोटा प्रियस हाइब्रिड", desc: "पेट्रोल-इलेक्ट्रिक हाइब्रिड गाड़ी।" },
          { year: "2008", title: "टेस्ला रोस्टर", desc: "हाई-परफॉरमेंस लिथियम-आयन इलेक्ट्रिक कार।" },
          { year: "आज", title: "सेल्फ-ड्राइविंग EV", desc: "जीरो एमिशन, ऑटोपायलट AI और फास्ट चार्जिंग।" }
        ],
        today: "आज इलेक्ट्रिक गाड़ियाँ बिना किसी प्रदूषण और शोर के तेज़ एक्सीलरेशन और कंप्यूटर ऑटोपायलट सेफ्टी देती हैं।",
        whatsNext: "इलेक्ट्रिक फ्लाइंग टैक्सी (eVTOL) और सॉलिड-स्टेट बैटरियां सड़कों के बजाय आसमान को 3D ट्रैफिक ग्रिड में बदल देंगी।"
      }
    }
  },
  {
    id: "library-searchengine",
    number: "08 / 10",
    heroCard: false,
    category: { en: "Information", hi: "ज्ञान व सूचना (Information)" },
    then: { en: "Physical Library", hi: "भौतिक पुस्तकालय (Library)" },
    now: { en: "AI Search Engine", hi: "AI सर्च इंजन" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From searching wooden index card drawers to instant neural AI synthesis.",
      hi: "लकड़ी के कार्ड ड्रॉअर में ढूँढने से लेकर AI के तुरंत विस्तृत जवाबों तक।"
    },
    hook: {
      en: "Will direct neural knowledge retrieval stream answers into your thoughts instantly?",
      hi: "क्या भविष्य में आपके सोचते ही जवाब सीधे आपके मस्तिष्क में स्ट्रीम होंगे?"
    },
    details: {
      en: {
        beginning: "Finding factual information once required physically traveling to a library, sifting through wooden card catalogues, and searching through printed book shelves.",
        problem: "Access was limited by library opening hours, book availability, physical distance, and slow manual index searching.",
        change: "Hyperlinked internet indexing algorithms (PageRank) and neural large language models (LLMs) indexed all human knowledge into searchable digital databases.",
        timeline: [
          { year: "Centuries Ago", title: "Physical Libraries", desc: "Bound encyclopedias and physical book shelves." },
          { year: "1876", title: "Dewey Decimal System", desc: "Organized library card cataloguing." },
          { year: "1980s", title: "Computer Microfiche Archives", desc: "Digital catalogue terminals in universities." },
          { year: "1998", title: "Google Search Engine", desc: "PageRank algorithm indexes billions of web pages." },
          { year: "2010s", title: "Mobile Knowledge Graph", desc: "Instant voice search and direct answer boxes." },
          { year: "Today", title: "AI Conversational Search", desc: "Generative AI synthesizes answers across millions of sources." }
        ],
        today: "Today, asking a complex question yields synthesized direct answers, citations, code, and multimedia within milliseconds.",
        whatsNext: "Proactive AI knowledge agents will anticipate what information you need before you even ask, synthesizing direct insights in real time."
      },
      hi: {
        beginning: "किसी तथ्य या जानकारी को खोजने के लिए पुस्तकालय (Library) जाना पड़ता था, जहाँ लकड़ी के कार्ड ड्रॉअर और किताबों की अलमारियों को घंटों खंगालना पड़ता था।",
        problem: "जानकारी तक पहुँच लाइब्रेरी के खुलने के समय, किताबों की उपलब्धता और भौतिक दूरी पर निर्भर थी।",
        change: "वेब इंडेक्सिंग एल्गोरिदम (PageRank) और AI भाषा मॉडल ने पूरी दुनिया के ज्ञान को एक ही डिजिटल डेटाबेस में समेट दिया।",
        timeline: [
          { year: "सदियों पहले", title: "पुस्तकालय व इनसाइक्लोपीडिया", desc: "किताबों की अलमारियाँ और मैन्युअल खोज।" },
          { year: "1876", title: "डेवी डेसिमल सिस्टम", desc: "कार्ड कैटलॉग ऑर्गनाइजेशन सिस्टम।" },
          { year: "1980s", title: "कंप्यूटर कैटलॉग", desc: "विश्वविद्यालयों में डिजिटल कैटलॉग टर्मिनल।" },
          { year: "1998", title: "गूगल सर्च इंजन", desc: "पेजरैंक एल्गोरिदम ने अरबों वेब पेजों को इंडेक्स किया।" },
          { year: "2010s", title: "वॉयस व मोबाइल सर्च", desc: "स्मार्टफोन पर तुरंत सीधे उत्तर बॉक्स।" },
          { year: "आज", title: "AI कन्वर्सेशनल सर्च", desc: "जनरेटिव AI लाखों स्रोतों से तुरंत सार निकाल कर उत्तर देता है।" }
        ],
        today: "आज कोई भी जटिल सवाल पूछने पर AI मिलीसेकंड में लाखों किताबों और लेखों का सार निकालकर आपको सटीक जवाब दे देता है।",
        whatsNext: "प्रोएक्टिव AI नॉलेज एजेंट आपके पूछने से पहले ही यह समझ जाएँगे कि आपको किस जानकारी की ज़रूरत है।"
      }
    }
  },
  {
    id: "diary-cloudnotes",
    number: "09 / 10",
    heroCard: false,
    category: { en: "Everyday Life", hi: "दैनिक जीवन (Everyday Life)" },
    then: { en: "Paper Diary", hi: "कागज़ी डायरी (Diary)" },
    now: { en: "Cloud Synced Notes", hi: "क्लाउड सिंक डिजिटल नोट्स" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From ink on leather-bound paper to instant multi-device synced AI notes.",
      hi: "कागज़ी डायरी पर स्याही से लिखने से लेकर सभी डिवाइसों में सिंक होने वाले डिजिटल नोट्स तक।"
    },
    hook: {
      en: "Will ambient AI continuously log and summarize your life thoughts automatically?",
      hi: "क्या एम्बिएंट AI आपके विचारों को स्वचालित रूप से लाइफ-लॉग और समराइज़ करेगा?"
    },
    details: {
      en: {
        beginning: "Personal thoughts, recipes, reminders, and daily logs lived on paper notebooks and physical leather-bound diaries.",
        problem: "Paper diaries could be mislaid, lost in fires, couldn't be searched by keywords, and were restricted to one physical location.",
        change: "Cloud database synchronization and encryption allowed text notes, voice memos, and images to sync instantly across phone, laptop, and tablet.",
        timeline: [
          { year: "Centuries Ago", title: "Paper Notebooks", desc: "Handwritten personal journals and paper memos." },
          { year: "1980s", title: "Word Processors", desc: "Desktop text files saved to floppy disks." },
          { year: "2000s", title: "Digital Note Apps", desc: "Desktop and mobile standalone note applications." },
          { year: "2008", title: "Evernote & Cloud Sync", desc: "Syncing notes automatically across internet devices." },
          { year: "Today", title: "AI Cloud Knowledge Base", desc: "Instant searching, automatic audio transcription, AI summaries." }
        ],
        today: "Today, notes typed or spoken on your phone appear instantly on your computer, searchable by keyword with automatic AI summaries.",
        whatsNext: "Ambient AI memory assistants will capture voice conversations, meetings, and ideas automatically — creating a searchable personal second brain."
      },
      hi: {
        beginning: "व्यक्तिगत विचार, रेसिपी, रिमाइंडर्स और दैनिक हिसाब-किताब कागज़ी डायरियों और कॉपियों पर लिखे जाते थे।",
        problem: "कागज़ी डायरी खो सकती थी, जल सकती थी, उसमें कीवर्ड से खोजना असंभव था और उसे हर समय साथ रखना मुश्किल था।",
        change: "क्लाउड डेटाबेस और सिंक तकनीक ने नोट्स, वॉयस रिकॉर्डिंग और तस्वीरों को तुरंत फोन, लैपटॉप और टैबलेट पर उपलब्ध कराया।",
        timeline: [
          { year: "सदियों पहले", title: "कागज़ी डायरी", desc: "हाथ से लिखी जाने वाली कॉपियां और जर्नल।" },
          { year: "1980s", title: "वर्ड प्रोसेसर", desc: "कंप्यूटर की फ्लॉपी डिस्क में सेव होने वाली फाइलें।" },
          { year: "2000s", title: "डिजिटल नोट ऐप्स", desc: "स्मार्टफोन पर शुरुआती नोट ऐप्स।" },
          { year: "2008", title: "एवरनोट व क्लाउड सिंक", desc: "इंटरनेट के जरिए सभी डिवाइसों में नोट्स का सिंक होना।" },
          { year: "आज", title: "AI क्लाउड नोट्स", desc: "वॉयस ट्रांसक्रिप्शन, कीवर्ड सर्च और AI समरी।" }
        ],
        today: "आज फोन पर लिखा या बोला गया कोई भी नोट कंप्यूटर पर तुरंत मिल जाता है, जिसे कीवर्ड टाइप करके सेकंडों में खोजा जा सकता है।",
        whatsNext: "एम्बिएंट AI असिस्टेंट आपकी बैठकों और विचारों को अपने आप समराइज़ करके आपका डिजिटल 'सेकंड ब्रेन' तैयार करेगा।"
      }
    }
  },
  {
    id: "alarmclock-smartassistant",
    number: "10 / 10",
    heroCard: false,
    category: { en: "Everyday Life", hi: "दैनिक जीवन (Everyday Life)" },
    then: { en: "Mechanical Alarm", hi: "मैकेनिकल अलार्म घड़ी" },
    now: { en: "Smart AI Assistant", hi: "स्मार्ट AI असिस्टेंट" },
    thenImage: "/images/telephone_then.jpg",
    nowImage: "/images/smartphone_now.jpg",
    tagline: {
      en: "From wind-up mechanical bells to voice-controlled smart home automation.",
      hi: "चाबी वाली अलार्म घड़ियों से लेकर वॉयस-कंट्रोल स्मार्ट होम ऑटोमेशन तक।"
    },
    hook: {
      en: "Will smart environments wake you up dynamically based on optimal REM sleep cycles?",
      hi: "क्या स्मार्ट होम आपकी नींद के REM साइकिल का विश्लेषण कर आपको सही समय पर जगाएगा?"
    },
    details: {
      en: {
        beginning: "An alarm clock once did one simple job: ring a loud mechanical metal bell at a preset physical dial time.",
        problem: "Mechanical alarms were loud, disruptive, required physical winding, offered no smart routines, and couldn't adjust to calendar changes.",
        change: "Microprocessors, smart home wireless IoT sensors, and voice-recognition AI transformed alarms into complete morning routine orchestrators.",
        timeline: [
          { year: "1876", title: "Wind-Up Mechanical Alarm", desc: "Seth Thomas patents wind-up bedside alarm clock." },
          { year: "1940s", title: "Digital Clock Radio", desc: "AM/FM radios integrated with wake-up buzzers." },
          { year: "2000s", title: "Mobile Phone Alarms", desc: "Custom ringtones and recurring weekly schedules." },
          { year: "2014", title: "Smart Speakers (Alexa/Siri)", desc: "Voice-activated morning wake-up routines." },
          { year: "Today", title: "Smart AI Assistant Routines", desc: "Waking you up with weather, news, smart lights, and calendar briefings." }
        ],
        today: "Today, voice smart assistants don't just wake you up — they adjust smart lighting, read your daily schedule, turn on coffee machines, and brief you on weather.",
        whatsNext: "Sleep-stage biometric sensors will dynamically wake you up at your lightest REM sleep phase while adjusting room temperature and natural light."
      },
      hi: {
        beginning: "अलार्म घड़ी का काम केवल एक था: डायल पर सेट किए गए समय पर ज़ोर से चाबी वाली घंटी बजाना।",
        problem: "मैकेनिकल अलार्म बहुत कड़वे बजते थे, उन्हें चाबी देनी पड़ती थी और उनमें कैलेंडर या मौसम के अनुसार बदलने की कोई क्षमता नहीं थी।",
        change: "माइक्रोप्रोसेसर, स्मार्ट होम IoT सेंसर और वॉयस AI ने अलार्म को सुबह की पूरी रूटीन मैनेज करने वाले असिस्टेंट में बदल दिया।",
        timeline: [
          { year: "1876", title: "चाबी वाली मैकेनिकल घड़ी", desc: "घंटी बजाने वाली पहली चाबी अलार्म घड़ी।" },
          { year: "1940s", title: "डिजिटल क्लॉक रेडियो", desc: "रेडियो के साथ बजने वाली अलार्म घड़ियाँ।" },
          { year: "2000s", title: "मोबाइल फोन अलार्म", desc: "कस्टम रिंगटोन और साप्ताहिक शेड्यूलिंग।" },
          { year: "2014", title: "स्मार्ट स्पीकर्स (Alexa/Siri)", desc: "वॉयस-कंट्रोल अलार्म और रूटीन।" },
          { year: "आज", title: "स्मार्ट AI असिस्टेंट रूटीन", desc: "लाइट्स ऑन करना, मौसम और कैलेंडर ब्रीफिंग देना।" }
        ],
        today: "आज वॉयस असिस्टेंट केवल अलार्म नहीं बजाते — वे कमरे की लाइट जलाते हैं, मौसम का हाल बताते हैं, कैलेंडर ब्रीफ करते हैं और आपकी सुबह आसान बनाते हैं।",
        whatsNext: "बायोमेट्रिक नींद सेंसर आपकी गहरी नींद (REM Cycle) का विश्लेषण करके आपको उस समय जगाएँगे जब आप सबसे ताज़ा महसूस करेंगे।"
      }
    }
  }
];
