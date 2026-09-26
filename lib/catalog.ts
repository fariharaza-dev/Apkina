export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || "https://apkina-creative.rabiajamal760.chatgpt.site").replace(/\/$/, "");
export const WHATSAPP_NUMBER = "923252849975";
export const whatsapp = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const assetImage = (image: string) => `/assets/${image}.${image.startsWith("products/") ? "webp" : "png"}`;
export type Product = {slug:string;name:string;category:string;image:string;tag:string;summary:string;benefits:string[];overviewTitle:string;overview:string;specs:[string,string][];kit:string[]};
export const categories = [
 {slug:"lighting",name:"Lighting",image:"product",description:"Shape the scene. Set the mood.",copy:"From your first home studio to your next production, find the light that works with your ideas."},
 {slug:"tripods",name:"Tripods",image:"tripods",description:"A steady foundation for every frame.",copy:"Keep your composition consistent with support for interviews, product shoots and everyday content."},
 {slug:"modifiers",name:"Modifiers",image:"lighting",description:"Make your light work beautifully.",copy:"Soften, shape and direct your lighting for portraits, products and more natural-looking scenes."},
 {slug:"speedlights",name:"Speedlights",image:"speedlights",description:"Bring your own light, wherever you go.",copy:"Explore compact flash options for portraits, events and creative photography."},
 {slug:"accessories",name:"Accessories",image:"accessories",description:"Small details. A better setup.",copy:"Complete your kit with practical tools for a more comfortable and flexible shooting experience."},
 {slug:"audio",name:"Audio",image:"audio",description:"Give your story a clearer voice.",copy:"Discover microphones for dialogue, interviews and content that sounds as considered as it looks."},
];
export const products: Product[] = [
  {
    "slug": "tm264a-lp36",
    "name": "TM264A + LP36",
    "category": "tripods",
    "image": "products/tm264a-lp36",
    "tag": "Flexible framing",
    "summary": "Set your frame with a tripod and ball head combination that adapts to changing camera angles. The TM264A with LP36 brings tripod and monopod shooting into one camera support setup.",
    "benefits": [
      "Adjust your camera angle with the LP36 ball head.",
      "Use tripod or monopod configurations to suit the shoot.",
      "Keep framing consistent for portraits and product photography."
    ],
    "overviewTitle": "One support for different shooting styles",
    "overview": "Build a composed shot on the tripod, then switch to monopod support when movement matters more. This combination suits photographers who alternate between fixed compositions and more mobile work. Tell us your camera and lens combination so we can help check the fit.",
    "specs": [
      [
        "Model",
        "TM264A + LP36"
      ],
      [
        "Type",
        "Tripod and monopod combination"
      ],
      [
        "Head",
        "LP36 ball head"
      ]
    ],
    "kit": [
      "Ask us to confirm the supplied plate, carry bag and mounting accessories with the tripod and head package."
    ]
  },
  {
    "slug": "sab264-a",
    "name": "SAB264-A",
    "category": "tripods",
    "image": "products/sab264-a",
    "tag": "Overhead control",
    "summary": "Bring your camera above the action with the SAB264-A. Its overhead positioning makes it a practical choice for tabletop demonstrations, product photography and creative camera angles.",
    "benefits": [
      "Position the camera above a tabletop subject.",
      "Adjust the pan and tilt head to refine your composition.",
      "Use one support for overhead and conventional framing."
    ],
    "overviewTitle": "A clearer view from above",
    "overview": "Keep your subject in view while you arrange products, demonstrate a process or record hands at work. The overhead configuration helps open up shooting angles that are awkward with a straight upright support. Share your equipment weight and intended setup before ordering.",
    "specs": [
      [
        "Model",
        "SAB264-A"
      ],
      [
        "Type",
        "Camera tripod with overhead positioning"
      ],
      [
        "Head style",
        "Pan and tilt"
      ]
    ],
    "kit": [
      "Ask us to confirm the plate, phone holder and carry bag supplied with the selected package."
    ]
  },
  {
    "slug": "ap205",
    "name": "AP205",
    "category": "tripods",
    "image": "products/ap205",
    "tag": "Tabletop angles",
    "summary": "Create overhead and front-facing compositions with the AP205 camera tripod. Its horizontal arm gives you more freedom to position your camera around a tabletop workspace.",
    "benefits": [
      "Move your camera over products or a work surface.",
      "Adjust the head using its pan handle.",
      "Fold the support for storage between shoots."
    ],
    "overviewTitle": "Put the camera where the story happens",
    "overview": "The AP205 suits demonstrations, product details and filming from above. Its arm provides space between the camera and the tripod centre, helping you frame the working area. Let us know whether you plan to use a camera or phone so we can check the mounting arrangement.",
    "specs": [
      [
        "Model",
        "AP205"
      ],
      [
        "Type",
        "Camera tripod"
      ],
      [
        "Configuration",
        "Horizontal arm with pan handle"
      ]
    ],
    "kit": [
      "Confirm the included mounting plate, phone holder and other accessories before ordering. Cameras and phones shown in reference photos are separate items."
    ]
  },
  {
    "slug": "mas324",
    "name": "MAS324",
    "category": "tripods",
    "image": "products/mas324",
    "tag": "Mobile support",
    "summary": "Add support without setting up a full tripod. The MAS324 monopod is a practical companion for photographers and videographers who need to move between positions during a shoot.",
    "benefits": [
      "Support your camera with a single upright leg.",
      "Reposition between shots with less setup.",
      "Use a compact support in busy shooting spaces."
    ],
    "overviewTitle": "Support that moves with you",
    "overview": "For events and changing compositions, a monopod offers a convenient way to support your camera while staying mobile. Keep a hand on the setup while shooting and match the head and mounting arrangement to your camera. Ask us about the appropriate configuration for your equipment.",
    "specs": [
      [
        "Model",
        "MAS324"
      ],
      [
        "Type",
        "Camera monopod"
      ],
      [
        "Use",
        "Photography and video support"
      ]
    ],
    "kit": [
      "Ask us to confirm whether a head, foot assembly and carry bag are included in your selected package."
    ]
  },
  {
    "slug": "tl283",
    "name": "TL283",
    "category": "tripods",
    "image": "products/tl283",
    "tag": "Desk space saved",
    "summary": "Bring your equipment onto a desk-mounted support with the TL283. It helps organise a compact recording area without adding another floor stand around your workspace.",
    "benefits": [
      "Mount compatible equipment at your desk.",
      "Keep floor space clear around a recording setup.",
      "Position gear for desk-based filming and content creation."
    ],
    "overviewTitle": "Make room for your next recording",
    "overview": "A desk mount is useful when the same workspace needs to support filming, calls and everyday work. The TL283 provides a dedicated mounting position close to your subject. Share your desk thickness and equipment details so we can confirm a suitable fit.",
    "specs": [
      [
        "Model",
        "TL283"
      ],
      [
        "Type",
        "Desk mount stand"
      ],
      [
        "Installation",
        "Desk-mounted support"
      ]
    ],
    "kit": [
      "Confirm the supplied clamp, head and adapters for the chosen TL283 package before ordering."
    ]
  },
  {
    "slug": "ap204",
    "name": "AP204",
    "category": "tripods",
    "image": "products/ap204",
    "tag": "Top down framing",
    "summary": "Frame tabletop work and everyday video with the AP204 overhead tripod. Its adjustable arm helps place the camera above or beside your subject for a more useful shooting angle.",
    "benefits": [
      "Explore overhead views for demonstrations and product shots.",
      "Reposition the arm to change the shooting angle.",
      "Use the tripod for a dedicated vlogging setup."
    ],
    "overviewTitle": "Give your audience a better view",
    "overview": "Show the details that matter, from a product surface to a step-by-step demonstration. The AP204 lets you work with an overhead arrangement while keeping the support beside the subject. We can help check the mount and suitable equipment combination before you order.",
    "specs": [
      [
        "Model",
        "AP204"
      ],
      [
        "Type",
        "Overhead and vlogging tripod"
      ],
      [
        "Configuration",
        "Adjustable support arm"
      ]
    ],
    "kit": [
      "Ask us to confirm the supplied head, holders and mounting accessories. Camera and phone equipment are sold separately unless explicitly included."
    ]
  },
  {
    "slug": "65-cm-octa-softbox",
    "name": "65 cm Octa Softbox",
    "category": "modifiers",
    "image": "products/65-cm-octa-softbox",
    "tag": "Compact softness",
    "summary": "Soften a direct light source for portraits, product details and compact shooting spaces. The 65 cm octa offers a smaller modifier format for close lighting setups.",
    "benefits": [
      "Create gentler transitions between highlights and shadows.",
      "Place a compact octagonal source close to your subject.",
      "Match the modifier mount to your light before ordering."
    ],
    "overviewTitle": "Soft light for smaller setups",
    "overview": "The 65 cm size is useful when you want a soft source near your subject without filling the workspace with a large modifier. Adjust its distance and angle to shape the light across faces or product surfaces. Tell us your light model so we can check compatibility.",
    "specs": [
      [
        "Type",
        "Octagonal softbox"
      ],
      [
        "Nominal size",
        "65 cm"
      ],
      [
        "Function",
        "Light diffusion and shaping"
      ]
    ],
    "kit": [
      "Confirm the supplied diffusion panels, mounting ring, grid and carry bag. Included accessories depend on the selected package."
    ]
  },
  {
    "slug": "90-cm-octa-softbox",
    "name": "90 cm Octa Softbox",
    "category": "modifiers",
    "image": "products/90-cm-octa-softbox",
    "tag": "Portrait softness",
    "summary": "Shape a broader, softer source for portraits and product photography. The 90 cm octa helps spread light over your subject for smoother shadow transitions.",
    "benefits": [
      "Soften facial shadows in close portrait setups.",
      "Shape a broad source around products and still life.",
      "Match the modifier mount to your light before ordering."
    ],
    "overviewTitle": "More room to shape the light",
    "overview": "Use the 90 cm octa to bring a broad source close to a face or product. Moving it closer increases its apparent size, while changing the angle helps define texture and shape without relying on a small, direct light. Tell us your light model so we can check compatibility.",
    "specs": [
      [
        "Type",
        "Octagonal softbox"
      ],
      [
        "Nominal size",
        "90 cm"
      ],
      [
        "Function",
        "Light diffusion and shaping"
      ]
    ],
    "kit": [
      "Confirm the supplied diffusion panels, mounting ring, grid and carry bag. Included accessories depend on the selected package."
    ]
  },
  {
    "slug": "120-cm-octa-softbox",
    "name": "120 cm Octa Softbox",
    "category": "modifiers",
    "image": "products/120-cm-octa-softbox",
    "tag": "Broad soft light",
    "summary": "Create a large, soft source for portraits and studio subjects. The 120 cm octa offers a broad diffusion surface for setups with room to position a larger modifier.",
    "benefits": [
      "Build a large source for gentle shadow transitions.",
      "Cover a wider subject area at close working distances.",
      "Match the modifier mount to your light before ordering."
    ],
    "overviewTitle": "A broader source for studio work",
    "overview": "The 120 cm octa suits shooting spaces where a larger modifier can be positioned and supported comfortably. Work with its distance and angle to balance softness, coverage and contrast across your subject. Tell us your light model so we can check compatibility.",
    "specs": [
      [
        "Type",
        "Octagonal softbox"
      ],
      [
        "Nominal size",
        "120 cm"
      ],
      [
        "Function",
        "Light diffusion and shaping"
      ]
    ],
    "kit": [
      "Confirm the supplied diffusion panels, mounting ring, grid and carry bag. Included accessories depend on the selected package."
    ]
  },
  {
    "slug": "5-in-1-reflector-110-cm",
    "name": "5 in 1 Reflector 110 cm",
    "category": "modifiers",
    "image": "products/5-in-1-reflector-110-cm",
    "tag": "Shape available light",
    "summary": "Bounce, soften or reduce light with a versatile 110 cm reflector. Its interchangeable surfaces help you adjust the look of a portrait or product setup without adding another powered light.",
    "benefits": [
      "Use white or silver surfaces to lift shadows.",
      "Add warmth with the gold surface or reduce reflection with black.",
      "Use the translucent surface to diffuse direct light."
    ],
    "overviewTitle": "A different surface for each lighting need",
    "overview": "Work with daylight or studio lighting by choosing the surface that gives the effect you need. Bring the reflector closer for stronger fill, or change its angle to direct light onto the subject. The black surface can help reduce unwanted bounced light.",
    "specs": [
      [
        "Type",
        "5 in 1 reflector"
      ],
      [
        "Nominal size",
        "110 cm"
      ],
      [
        "Surfaces",
        "White, silver, gold, black and translucent"
      ]
    ],
    "kit": [
      "Confirm the reflector cover arrangement and carry pouch included with the selected set."
    ]
  },
  {
    "slug": "ap620",
    "name": "AP620",
    "category": "lighting",
    "image": "products/ap620",
    "tag": "Creative colour",
    "summary": "Add colour and directional accents with the AP620 RGB LED stick light. Its elongated shape is useful for lighting details, separating a subject from the background and experimenting with colour.",
    "benefits": [
      "Introduce coloured accents into portraits and video.",
      "Position a narrow light source alongside your subject.",
      "Build background separation with edge lighting."
    ],
    "overviewTitle": "Colour where you need it",
    "overview": "Place the AP620 beside a subject to outline its shape, or use it on a background to introduce colour into the frame. The stick format offers a different lighting shape from a conventional panel. Ask us to check the power and mounting options for your setup.",
    "specs": [
      [
        "Model",
        "AP620"
      ],
      [
        "Type",
        "LED stick light"
      ],
      [
        "Colour capability",
        "RGB"
      ]
    ],
    "kit": [
      "Confirm the supplied power accessories, support and carry case before ordering."
    ]
  },
  {
    "slug": "300w-bi-color",
    "name": "300W Bi Color",
    "category": "lighting",
    "image": "products/300w-bi-color",
    "tag": "Studio key light",
    "summary": "Build your lighting setup around a 300W bi-colour source. Adjust the warmth of the light to suit the scene while shaping the result with compatible lighting accessories.",
    "benefits": [
      "Adjust warm and cool white light to suit the scene.",
      "Use a dedicated source for portraits and video work.",
      "Pair with compatible modifiers for different lighting styles."
    ],
    "overviewTitle": "A practical foundation for studio lighting",
    "overview": "Use a bi-colour key light to help balance your subject with the surrounding light. A suitable modifier can soften the source for faces or shape it for product work. Tell us which modifiers and stand you plan to use so we can check the complete setup.",
    "specs": [
      [
        "Product",
        "300W Bi Color"
      ],
      [
        "Rated class",
        "300W"
      ],
      [
        "Colour capability",
        "Bi-colour white light"
      ]
    ],
    "kit": [
      "Confirm the reflector, power cable, adapter, case and any stand or modifier supplied with your package."
    ]
  },
  {
    "slug": "ap11ii-11-inch-panel-light-with-remote",
    "name": "AP11II 11 Inch Panel Light with Remote",
    "category": "lighting",
    "image": "products/ap11ii-11-inch-panel-light-with-remote",
    "tag": "Desk friendly light",
    "summary": "Light close-up content, calls and small product setups with an 11-inch panel. The AP11II package pairs the light with remote control for convenient adjustments.",
    "benefits": [
      "Use a panel source for portraits and video.",
      "Adjust placement to control shadows and facial modelling.",
      "Check stand and power compatibility for your shooting space."
    ],
    "overviewTitle": "Light within easy reach",
    "overview": "Set the panel beside a desk or small filming area, then use the remote to make adjustments without repeatedly reaching for the light. It is a useful format for close subjects and compact recording spaces. Ask us to help match the package to your space.",
    "specs": [
      [
        "Model",
        "AP11II"
      ],
      [
        "Type",
        "LED panel light"
      ],
      [
        "Nominal size",
        "11 inches"
      ]
    ],
    "kit": [
      "Confirm the supplied remote, power accessories, mounting parts and stand. Package contents vary; the AP11II listing selected here includes a remote."
    ]
  },
  {
    "slug": "ap19-19-inch-panel-light",
    "name": "AP19 19 Inch Panel Light",
    "category": "lighting",
    "image": "products/ap19-19-inch-panel-light",
    "tag": "Everyday studio light",
    "summary": "Bring a broad panel source to your portrait, tutorial or video setup. The AP19 19-inch format offers a practical lighting surface for everyday content creation.",
    "benefits": [
      "Use a panel source for portraits and video.",
      "Adjust placement to control shadows and facial modelling.",
      "Check stand and power compatibility for your shooting space."
    ],
    "overviewTitle": "A dedicated light for your setup",
    "overview": "Position the panel to one side for shape or closer to the camera direction for a more frontal look. A dedicated panel helps you establish a repeatable lighting arrangement when filming regularly in the same space. Ask us to help match the package to your space.",
    "specs": [
      [
        "Model",
        "AP19"
      ],
      [
        "Type",
        "LED panel light"
      ],
      [
        "Nominal size",
        "19 inches"
      ]
    ],
    "kit": [
      "Confirm whether a remote, power adapter and stand are included in the selected package."
    ]
  },
  {
    "slug": "ap24-24-inch-panel-light",
    "name": "AP24 24 Inch Panel Light",
    "category": "lighting",
    "image": "products/ap24-24-inch-panel-light",
    "tag": "Broad panel lighting",
    "summary": "Light your subject with a large 24-inch panel. The AP24 provides a broad source for portrait sessions, studio video and content creation.",
    "benefits": [
      "Use a panel source for portraits and video.",
      "Adjust placement to control shadows and facial modelling.",
      "Check stand and power compatibility for your shooting space."
    ],
    "overviewTitle": "A larger surface for your subject",
    "overview": "A larger panel can provide a broader apparent source when placed close to the subject. Use its position and distance to control coverage and shadow direction, and leave enough space for a suitable supporting stand. Ask us to help match the package to your space.",
    "specs": [
      [
        "Model",
        "AP24"
      ],
      [
        "Type",
        "LED panel light"
      ],
      [
        "Nominal size",
        "24 inches"
      ]
    ],
    "kit": [
      "Confirm whether a remote, power adapter and stand are included in the selected package."
    ]
  },
  {
    "slug": "ap3250",
    "name": "AP3250",
    "category": "lighting",
    "image": "products/ap3250",
    "tag": "Portable colour",
    "summary": "Introduce colour and fill light into a compact shooting setup with the AP3250 RGB LED light. Use it to lift a close subject or add a coloured accent to the scene.",
    "benefits": [
      "Add RGB colour to creative photo and video setups.",
      "Use a compact source for close fill lighting.",
      "Position an accent light without a large studio fixture."
    ],
    "overviewTitle": "Small light with a creative role",
    "overview": "The AP3250 can complement your main light by adding colour to a background or filling a darker area near the subject. Keep the light close when working with small objects, and choose a suitable mounting position for the shot.",
    "specs": [
      [
        "Model",
        "AP3250"
      ],
      [
        "Type",
        "LED fill light"
      ],
      [
        "Colour capability",
        "RGB"
      ]
    ],
    "kit": [
      "Ask us to confirm the charging cable, mounting adapter and other supplied accessories."
    ]
  },
  {
    "slug": "ap3150",
    "name": "AP3150",
    "category": "lighting",
    "image": "products/ap3150",
    "tag": "Colour in reach",
    "summary": "Add a compact RGB light to your photography or video kit. The AP3150 is useful for close fill, coloured details and small creative lighting arrangements.",
    "benefits": [
      "Add colour to a subject or nearby background.",
      "Use a compact LED source for close-up work.",
      "Supplement your main light with a separate accent."
    ],
    "overviewTitle": "Build the look one light at a time",
    "overview": "A small additional source can change the mood of a frame without rebuilding the whole setup. Use the AP3150 to pick out an object or introduce colour behind your subject. Ask us about mounting and power arrangements that suit your equipment.",
    "specs": [
      [
        "Model",
        "AP3150"
      ],
      [
        "Type",
        "Compact LED light"
      ],
      [
        "Colour capability",
        "RGB"
      ]
    ],
    "kit": [
      "Confirm the supplied charging and mounting accessories before ordering."
    ]
  },
  {
    "slug": "led-600-pro",
    "name": "LED 600 Pro",
    "category": "lighting",
    "image": "products/led-600-pro",
    "tag": "Controlled fill",
    "summary": "Bring a dedicated panel source to interviews, portraits and product video. The LED 600 Pro offers a practical way to add continuous light to a camera setup.",
    "benefits": [
      "Preview the lighting effect before you record.",
      "Use the panel as a main or supplementary source.",
      "Change the angle to shape light across your subject."
    ],
    "overviewTitle": "See the light as you compose",
    "overview": "Continuous lighting lets you judge the effect on the subject while setting up the frame. Position the LED 600 Pro to add fill or establish the main lighting direction, then balance it with the available light. Tell us your intended power setup before ordering.",
    "specs": [
      [
        "Model",
        "LED 600 Pro"
      ],
      [
        "Type",
        "LED panel"
      ],
      [
        "Lighting mode",
        "Continuous"
      ]
    ],
    "kit": [
      "Confirm the supplied adapter, battery options, mounting parts and case. Do not assume batteries are included."
    ]
  },
  {
    "slug": "100-pro-bi",
    "name": "100 Pro Bi",
    "category": "lighting",
    "image": "products/100-pro-bi",
    "tag": "Balanced white light",
    "summary": "Create a consistent key light with the 100 Pro Bi. Its bi-colour output lets you adjust warm and cool white light for portraits, interviews and product content.",
    "benefits": [
      "Adjust white light to complement the scene.",
      "Use a continuous source for photography and video.",
      "Shape the output with compatible light modifiers."
    ],
    "overviewTitle": "Match the light to the setting",
    "overview": "Use a warmer setting to complement warm interiors or a cooler setting for a daylight-oriented look. The 100 Pro Bi provides a dedicated source you can position around the subject. We can help check modifier compatibility and the right supporting stand.",
    "specs": [
      [
        "Model",
        "100 Pro Bi"
      ],
      [
        "Type",
        "Continuous LED video light"
      ],
      [
        "Colour capability",
        "Bi-colour"
      ]
    ],
    "kit": [
      "Confirm the included reflector, power accessories and case. Ask separately about stands and softboxes."
    ]
  },
  {
    "slug": "100-pro-rgb",
    "name": "100 Pro RGB",
    "category": "lighting",
    "image": "products/100-pro-rgb",
    "tag": "Cord free creativity",
    "summary": "Combine white and coloured lighting with the 100 Pro RGB and its built-in battery. It gives you a flexible source for creative portraits, product scenes and video setups.",
    "benefits": [
      "Add RGB colour or work with white light.",
      "Use the built-in battery for greater placement flexibility.",
      "Create a distinct background or accent lighting effect."
    ],
    "overviewTitle": "Take colour into the scene",
    "overview": "Use coloured light to set the mood, separate a subject or highlight an area of the background. The built-in battery gives you more options when placing the light away from a nearby socket. Ask us about charging requirements and suitable modifiers.",
    "specs": [
      [
        "Model",
        "100 Pro RGB"
      ],
      [
        "Colour capability",
        "RGB and white light"
      ],
      [
        "Power feature",
        "Built-in battery"
      ]
    ],
    "kit": [
      "Confirm the charging accessories, reflector and case supplied with the selected package."
    ]
  },
  {
    "slug": "3350-pro",
    "name": "3350 Pro",
    "category": "lighting",
    "image": "products/3350-pro",
    "tag": "Adaptable panel light",
    "summary": "Set up a continuous panel source for portraits, tutorials and video. The 3350 Pro provides bi-colour lighting to help you adjust the warmth of the scene.",
    "benefits": [
      "Adjust warm and cool white light for your subject.",
      "Preview shadows and highlights while composing.",
      "Use a panel format in a dedicated recording setup."
    ],
    "overviewTitle": "Keep your lighting consistent",
    "overview": "A repeatable lighting position helps keep a series of recordings visually consistent. Use the 3350 Pro for your main light or as fill alongside another source. Tell us how you plan to power and support the light so we can check your package.",
    "specs": [
      [
        "Model",
        "3350 Pro"
      ],
      [
        "Type",
        "LED video light"
      ],
      [
        "Colour capability",
        "Bi-colour"
      ]
    ],
    "kit": [
      "Confirm the supplied power adapter, mounting hardware, batteries and carrying accessories."
    ]
  },
  {
    "slug": "ap275",
    "name": "AP275",
    "category": "lighting",
    "image": "products/ap275",
    "tag": "Small colour accents",
    "summary": "Add a compact stick light to your creative kit with the AP275. Its RGB capability makes it useful for coloured accents, small subjects and close background details.",
    "benefits": [
      "Introduce coloured light into tight compositions.",
      "Place a narrow source close to products or props.",
      "Add a separate accent beside your main light."
    ],
    "overviewTitle": "Pick out the details",
    "overview": "Use the AP275 to bring attention to a small area of the frame, such as an edge, prop or background surface. Close placement helps you direct its effect where it matters. Ask us to check the mounting and charging accessories for your setup.",
    "specs": [
      [
        "Model",
        "AP275"
      ],
      [
        "Type",
        "LED stick light"
      ],
      [
        "Colour capability",
        "RGB"
      ]
    ],
    "kit": [
      "Confirm the charging cable and any stand, mount or carry accessories included with the light."
    ]
  },
  {
    "slug": "ap475",
    "name": "AP475",
    "category": "lighting",
    "image": "products/ap475",
    "tag": "Creative edge light",
    "summary": "Shape an accent around your subject with the AP475 stick light. Its elongated form suits edge lighting, background details and creative photo or video arrangements.",
    "benefits": [
      "Position a slender light source beside your subject.",
      "Use an accent to distinguish foreground from background.",
      "Experiment with placement in product and portrait scenes."
    ],
    "overviewTitle": "Give shape to the frame",
    "overview": "A light placed along an edge can help reveal the outline of a face or object. Use the AP475 as part of a layered lighting setup and adjust its position to control where the effect appears. Ask us to confirm the available colour modes and power arrangement.",
    "specs": [
      [
        "Model",
        "AP475"
      ],
      [
        "Type",
        "Stick light"
      ],
      [
        "Use",
        "Photography and video accent lighting"
      ]
    ],
    "kit": [
      "Confirm the supplied support, power accessories and carry case before ordering."
    ]
  },
  {
    "slug": "120-pro-bi-color",
    "name": "120 Pro Bi Color",
    "category": "lighting",
    "image": "products/120-pro-bi-color",
    "tag": "Versatile key light",
    "summary": "Build a portrait or video setup with the 120 Pro Bi Color. Its adjustable white-light character helps you work with warm interiors and cooler shooting environments.",
    "benefits": [
      "Adjust the warmth of your continuous light.",
      "Establish a key light for interviews and portraits.",
      "Use compatible modifiers to change softness and coverage."
    ],
    "overviewTitle": "Shape a consistent look",
    "overview": "Place the 120 Pro Bi Color to define the main direction of light across your subject. A compatible modifier gives you further control over softness and spill. Tell us about your studio space and existing accessories so we can help check the fit.",
    "specs": [
      [
        "Model",
        "120 Pro Bi"
      ],
      [
        "Type",
        "Continuous video light"
      ],
      [
        "Colour capability",
        "Bi-colour"
      ]
    ],
    "kit": [
      "Confirm the reflector, power accessories and case supplied with your chosen package. Stand and modifier inclusion should be checked separately."
    ]
  },
  {
    "slug": "ap1000",
    "name": "AP1000",
    "category": "lighting",
    "image": "products/ap1000",
    "tag": "Colour along the frame",
    "summary": "Bring an elongated RGB source into portraits, product scenes and video. The AP1000 stick light offers a useful shape for coloured accents and background lighting.",
    "benefits": [
      "Add RGB colour to creative scenes.",
      "Position an elongated source along a subject or background.",
      "Build separation with an independently placed accent."
    ],
    "overviewTitle": "Extend your lighting options",
    "overview": "The AP1000 can bring colour to areas that sit outside the reach of your main light. Place it alongside a subject for an edge effect or direct it onto the background. Ask us about suitable mounting and power accessories for the way you shoot.",
    "specs": [
      [
        "Model",
        "AP1000"
      ],
      [
        "Type",
        "LED stick light"
      ],
      [
        "Colour capability",
        "RGB"
      ]
    ],
    "kit": [
      "Confirm the included support, power accessories and carrying case with your order."
    ]
  },
  {
    "slug": "ap25w-torch-light",
    "name": "AP25W Torch Light",
    "category": "lighting",
    "image": "products/ap25w-torch-light",
    "tag": "Directional lighting",
    "summary": "Add a compact torch-style light to your kit with the AP25W. Its format offers a practical way to direct light onto a nearby subject or highlight a detail in the frame.",
    "benefits": [
      "Aim a compact source at the area you want to illuminate.",
      "Use directional light to reveal shape and texture.",
      "Add a separate light for close subject details."
    ],
    "overviewTitle": "Direct attention with light",
    "overview": "Move the AP25W around a small subject to explore how the lighting angle changes texture and contrast. It can play a useful role beside your main source when you need attention on a specific detail. Ask us to confirm the available colour modes before ordering.",
    "specs": [
      [
        "Model",
        "AP25W"
      ],
      [
        "Format",
        "Torch-style video light"
      ],
      [
        "Use",
        "Directional photography and video lighting"
      ]
    ],
    "kit": [
      "Confirm the supplied charging, mounting and light-shaping accessories for the selected version."
    ]
  },
  {
    "slug": "ap-f970-battery",
    "name": "AP-F970 Battery",
    "category": "accessories",
    "image": "products/ap-f970-battery",
    "tag": "Power on hand",
    "summary": "Keep a spare AP-F970 battery ready for compatible equipment. It is a practical addition to a kit that uses the NP-F970 battery format.",
    "benefits": [
      "Keep a spare battery available during a shoot.",
      "Use with equipment specified for the compatible battery format.",
      "Swap power sources when a charged replacement is needed."
    ],
    "overviewTitle": "Prepare for the next take",
    "overview": "A spare battery helps you manage power between recordings and locations. Match the AP-F970 to your device requirements and use a compatible charger. Tell us your light or monitor model so we can help check compatibility before you order.",
    "specs": [
      [
        "Model",
        "AP-F970"
      ],
      [
        "Type",
        "Rechargeable battery"
      ],
      [
        "Battery format",
        "NP-F970 style"
      ]
    ],
    "kit": [
      "Confirm the number of batteries supplied and whether a charger is included. Capacity and electrical ratings should be checked against the actual battery label."
    ]
  },
  {
    "slug": "super-camera-clamp-mount",
    "name": "Super Camera Clamp Mount",
    "category": "accessories",
    "image": "products/super-camera-clamp-mount",
    "tag": "Mount in place",
    "summary": "Create a mounting point on a suitable support with this camera clamp mount. It is useful for positioning compatible accessories when a conventional stand is inconvenient.",
    "benefits": [
      "Attach compatible equipment to a suitable clamping surface.",
      "Build a compact mounting arrangement around your setup.",
      "Reposition accessories without adding a full-size stand."
    ],
    "overviewTitle": "Make use of the space around you",
    "overview": "A clamp can help place equipment on a suitable desk edge, rail or support, provided the surface and load are appropriate. Share the mounting location and accessory weight so we can help confirm the correct arrangement.",
    "specs": [
      [
        "Product",
        "Super Camera Clamp Mount"
      ],
      [
        "Type",
        "Clamp mounting accessory"
      ],
      [
        "Fit",
        "Depends on surface size and equipment mount"
      ]
    ],
    "kit": [
      "Confirm whether an arm, adapter or mounting screw is supplied with the clamp."
    ]
  },
  {
    "slug": "ds1-mobile-rig",
    "name": "DS1 Mobile Rig",
    "category": "accessories",
    "image": "products/ds1-mobile-rig",
    "tag": "Better phone handling",
    "summary": "Build a more practical smartphone filming setup with the DS1 mobile rig. Its cage format gives you a dedicated way to hold the phone and attach compatible recording accessories.",
    "benefits": [
      "Use a two-handed grip while filming.",
      "Add compatible accessories through the rig mounting points.",
      "Organise a compact smartphone recording setup."
    ],
    "overviewTitle": "Give your phone a filming setup",
    "overview": "The DS1 is useful for handheld phone video when you want a more comfortable grip and a place for additional equipment. Match the holder to your phone width and case, then choose suitable light and microphone accessories for the shot.",
    "specs": [
      [
        "Model",
        "DS1"
      ],
      [
        "Type",
        "Smartphone filming rig"
      ],
      [
        "Format",
        "Phone cage with handles and accessory mounts"
      ]
    ],
    "kit": [
      "Confirm the rig package and supplied adapters. Phone, microphone, light and mini tripod are separate unless explicitly included."
    ]
  },
  {
    "slug": "f550-dual-digital-charger",
    "name": "F550 Dual Digital Charger",
    "category": "accessories",
    "image": "products/f550-dual-digital-charger",
    "tag": "Two charging bays",
    "summary": "Keep compatible batteries organised with a dual digital charger. The two-bay design and display make it easier to manage charging as part of your shooting routine.",
    "benefits": [
      "Use two charging bays for compatible batteries.",
      "View charging information on the digital display.",
      "Prepare spare batteries before a recording session."
    ],
    "overviewTitle": "Keep your charging routine organised",
    "overview": "A dedicated charging station helps you prepare batteries between shoots. Confirm that the charger plates and electrical specifications match your battery model before use. Send us the battery label so we can help check compatibility with this F550-listed charger.",
    "specs": [
      [
        "Listed model",
        "F550 Dual Digital Charger"
      ],
      [
        "Charging bays",
        "Two"
      ],
      [
        "Display",
        "Digital"
      ]
    ],
    "kit": [
      "Confirm the included cable or power adapter and supported battery models. Batteries should not be assumed to be included."
    ]
  },
  {
    "slug": "tp50-head",
    "name": "TP50 Head",
    "category": "accessories",
    "image": "products/tp50-head",
    "tag": "Controlled camera movement",
    "summary": "Refine camera positioning with the TP50 tripod and monopod head. Its pan handle provides a convenient way to guide movement and adjust the shot.",
    "benefits": [
      "Guide camera movement with a pan handle.",
      "Set the shooting angle on a compatible support.",
      "Adapt a tripod or monopod for video framing."
    ],
    "overviewTitle": "Take control of the camera angle",
    "overview": "A suitable head helps you frame a static shot and guide deliberate camera movements. Pair the TP50 with a compatible support, plate and camera combination. Let us know your equipment weight and mounting requirements so we can help check the fit.",
    "specs": [
      [
        "Model",
        "TP50"
      ],
      [
        "Type",
        "Tripod and monopod head"
      ],
      [
        "Control",
        "Pan handle"
      ]
    ],
    "kit": [
      "Confirm the supplied quick-release plate, handle and mounting screws. Tripod or monopod legs are separate unless specified."
    ]
  },
  {
    "slug": "aa-cells-2700-mah",
    "name": "AA Cells 2700 mAh",
    "category": "accessories",
    "image": "products/aa-cells-2700-mah",
    "tag": "Recharge and reuse",
    "summary": "Keep rechargeable AA cells ready for compatible photography accessories. APKINA 2700 mAh cells offer a reusable power option for equipment that accepts the appropriate rechargeable AA battery type.",
    "benefits": [
      "Use rechargeable AA power in compatible devices.",
      "Prepare a spare set for battery-powered accessories.",
      "Recharge with a charger matched to the cell chemistry."
    ],
    "overviewTitle": "Keep a spare set ready",
    "overview": "A prepared set of AA cells can make changing batteries more convenient during a shoot. Check your device requirements, charge the cells with a suitable charger and keep matched sets together. Ask us to confirm the pack quantity before ordering.",
    "specs": [
      [
        "Brand",
        "APKINA"
      ],
      [
        "Cell size",
        "AA"
      ],
      [
        "Labelled capacity",
        "2700 mAh"
      ]
    ],
    "kit": [
      "Confirm the number of cells in the pack and whether a storage case is supplied. Charger inclusion must be checked separately."
    ]
  }
];

export const productWhatsApp = (product: Product, quantity = 1) => whatsapp(`Hello Apkina! I'd like to order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\n\nProduct image: ${SITE_ORIGIN}${assetImage(product.image)}\nProduct page: ${SITE_ORIGIN}/products/${product.slug}\n\nPlease confirm the current price, availability and delivery options.`);
