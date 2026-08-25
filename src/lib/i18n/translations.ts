import type { Lang } from "@/lib/i18n/languages";

export type Translations = {
  nav: { about: string; work: string; ideas: string; contact: string };
  hero: {
    eyebrowSuffix: string;
    tagline: string;
    blurb: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    valueProps: [string, string, string];
    stats: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string },
    ];
  };
  work: {
    eyebrow: string;
    heading: string;
    items: [
      { description: string; tags: [string, string] },
      { description: string; tags: [string, string] },
      { description: string; tags: [string, string] },
    ];
  };
  ideas: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: [
      { title: string; description: string; tag: string },
      { title: string; description: string; tag: string },
      { title: string; description: string; tag: string },
      { title: string; description: string; tag: string },
    ];
  };
  services: {
    eyebrow: string;
    heading: string;
    items: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  contact: { eyebrow: string; heading: string; location: string };
  footer: { builtWith: string; and: string };
  time: { eyebrow: string; viewingFrom: string };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { about: "About", work: "Work", ideas: "Ideas", contact: "Contact" },
    hero: {
      eyebrowSuffix: "Software Studio",
      tagline: "Professional software, without the agency price tag.",
      blurb:
        "HiQ-Apps is a dedicated team designing and engineering web and mobile products people actually enjoy using. We move fast, price fairly, and sweat every detail so you don't have to.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See our work",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About",
      heading:
        "A dedicated team that prefers finished work over busywork. Clean code, considered design, and honest pricing from people who've shipped this stuff before.",
      valueProps: [
        "Dedicated team",
        "Transparent, fair pricing",
        "Fast, focused delivery",
      ],
      stats: [
        { label: "Founded", value: "2024" },
        { label: "Shipped", value: "20+ products" },
        { label: "Based", value: "Remote-first" },
      ],
    },
    work: {
      eyebrow: "Work",
      heading: "A few things we've shipped",
      items: [
        {
          description:
            "A direct-to-consumer storefront for an Oakland craft cannabis cultivator, built around strain education, terpene profiles, and a living-soil, slow-grown brand story.",
          tags: ["Web Design", "E-commerce"],
        },
        {
          description:
            "An editorial and lifestyle site for sustainable living, covering sustainable fashion, natural design, and eco-friendly home upgrades built around thoughtful consumption.",
          tags: ["Web Design", "Editorial"],
        },
        {
          description:
            "A visual explorer for Git repositories, mapping commits, branches, and contributor activity into an interactive, navigable universe.",
          tags: ["Web App", "Developer Tools"],
        },
      ],
    },
    ideas: {
      eyebrow: "Ideas",
      heading: "What we build",
      subheading:
        "From content sites to full-stack products, here's where we spend most of our time.",
      items: [
        {
          title: "Blogs & Editorial",
          description:
            "Content-first sites built for readers: fast pages, clean typography, and a CMS your team can actually use without our help.",
          tag: "Frontend",
        },
        {
          title: "E-commerce",
          description:
            "Storefronts, product catalogs, and checkout flows tuned for conversion, from a handful of SKUs to a full inventory.",
          tag: "Full-stack",
        },
        {
          title: "Business Sites",
          description:
            "Brochure sites and landing pages that make a strong first impression and turn visitors into leads.",
          tag: "Frontend",
        },
        {
          title: "Full-Stack Apps",
          description:
            "Dashboards, internal tools, and products with real logic behind them, databases, auth, and everything in between.",
          tag: "Full-stack",
        },
      ],
    },
    services: {
      eyebrow: "What we do",
      heading: "Capabilities",
      items: [
        {
          title: "Web Applications",
          description:
            "Fast, accessible product interfaces built on modern frameworks, taking you from first prototype to production without the bloat.",
        },
        {
          title: "Mobile Apps",
          description:
            "Native-feeling iOS and Android apps, built for speed and polish across the whole experience.",
        },
        {
          title: "Product Design",
          description:
            "Interfaces that stay out of the way: clear systems, considered motion, and a visual identity people remember.",
        },
        {
          title: "Cloud & DevOps",
          description:
            "Infrastructure that scales quietly, with CI/CD, observability, and cloud architecture handled right the first time.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Have a project in mind? Get in touch.",
      location: "Remote, Worldwide",
    },
    footer: { builtWith: "Built with", and: "and Next.js" },
    time: { eyebrow: "Your local time", viewingFrom: "Viewing from" },
  },
  es: {
    nav: { about: "Nosotros", work: "Trabajo", ideas: "Ideas", contact: "Contacto" },
    hero: {
      eyebrowSuffix: "Estudio de Software",
      tagline: "Software profesional, sin el precio de agencia.",
      blurb:
        "HiQ-Apps es un equipo dedicado que diseña y desarrolla productos web y móviles que a la gente le encanta usar. Nos movemos rápido, cobramos con justicia y cuidamos cada detalle para que tú no tengas que hacerlo.",
      ctaPrimary: "Contáctanos",
      ctaSecondary: "Ver nuestro trabajo",
      scroll: "Desplázate",
    },
    about: {
      eyebrow: "Nosotros",
      heading:
        "Un equipo dedicado que prefiere el trabajo terminado antes que el ajetreo. Código limpio, diseño cuidado y precios honestos de gente que ya ha lanzado esto antes.",
      valueProps: [
        "Equipo totalmente dedicado",
        "Precios justos y transparentes",
        "Entrega rápida y enfocada",
      ],
      stats: [
        { label: "Fundada", value: "2024" },
        { label: "Lanzados", value: "20+ productos" },
        { label: "Sede", value: "100% remoto" },
      ],
    },
    work: {
      eyebrow: "Trabajo",
      heading: "Algunas cosas que hemos lanzado",
      items: [
        {
          description:
            "Una tienda directa al consumidor para un cultivador artesanal de cannabis en Oakland, construida en torno a la educación sobre variedades, perfiles de terpenos y una historia de marca de cultivo lento en suelo vivo.",
          tags: ["Diseño web", "E-commerce"],
        },
        {
          description:
            "Un sitio editorial y de estilo de vida sobre sostenibilidad, que cubre moda sostenible, diseño natural y mejoras ecológicas para el hogar, construido en torno al consumo consciente.",
          tags: ["Diseño web", "Editorial"],
        },
        {
          description:
            "Un explorador visual de repositorios de Git que transforma commits, ramas y actividad de colaboradores en un universo interactivo y navegable.",
          tags: ["Aplicación web", "Herramientas para desarrolladores"],
        },
      ],
    },
    ideas: {
      eyebrow: "Ideas",
      heading: "Lo que construimos",
      subheading:
        "Desde sitios de contenido hasta productos full-stack, aquí es donde pasamos la mayor parte de nuestro tiempo.",
      items: [
        {
          title: "Blogs y editoriales",
          description:
            "Sitios centrados en el contenido, pensados para lectores: páginas rápidas, tipografía limpia y un CMS que tu equipo podrá usar sin nuestra ayuda.",
          tag: "Frontend",
        },
        {
          title: "E-commerce",
          description:
            "Tiendas online, catálogos de productos y flujos de pago optimizados para la conversión, desde unos pocos productos hasta un inventario completo.",
          tag: "Full-stack",
        },
        {
          title: "Sitios de negocio",
          description:
            "Sitios corporativos y landing pages que causan una gran primera impresión y convierten visitantes en clientes potenciales.",
          tag: "Frontend",
        },
        {
          title: "Aplicaciones full-stack",
          description:
            "Paneles de control, herramientas internas y productos con lógica real detrás: bases de datos, autenticación y todo lo demás.",
          tag: "Full-stack",
        },
      ],
    },
    services: {
      eyebrow: "Qué hacemos",
      heading: "Capacidades",
      items: [
        {
          title: "Aplicaciones web",
          description:
            "Interfaces de producto rápidas y accesibles, construidas con frameworks modernos, que te llevan del primer prototipo a producción sin sobrecarga.",
        },
        {
          title: "Apps móviles",
          description:
            "Apps nativas para iOS y Android, construidas para la velocidad y el pulido en toda la experiencia.",
        },
        {
          title: "Diseño de producto",
          description:
            "Interfaces que no estorban: sistemas claros, movimiento cuidado y una identidad visual memorable.",
        },
        {
          title: "Nube y DevOps",
          description:
            "Infraestructura que escala en silencio, con CI/CD, observabilidad y arquitectura en la nube bien resuelta desde el principio.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading: "¿Tienes un proyecto en mente? Escríbenos.",
      location: "Remoto, en todo el mundo",
    },
    footer: { builtWith: "Hecho con", and: "y Next.js" },
    time: { eyebrow: "Tu hora local", viewingFrom: "Nos visitas desde" },
  },
  fr: {
    nav: { about: "À propos", work: "Travaux", ideas: "Idées", contact: "Contact" },
    hero: {
      eyebrowSuffix: "Studio Logiciel",
      tagline: "Du logiciel professionnel, sans le prix d'une agence.",
      blurb:
        "HiQ-Apps est une équipe dévouée qui conçoit et développe des produits web et mobiles que les gens aiment vraiment utiliser. Nous allons vite, facturons honnêtement et soignons chaque détail pour que vous n'ayez pas à le faire.",
      ctaPrimary: "Nous contacter",
      ctaSecondary: "Voir nos réalisations",
      scroll: "Défiler",
    },
    about: {
      eyebrow: "À propos",
      heading:
        "Une équipe dévouée qui préfère le travail terminé à l'agitation. Du code propre, un design réfléchi et des prix honnêtes, par des gens qui ont déjà livré ce genre de projet.",
      valueProps: [
        "Équipe entièrement dévouée",
        "Tarifs justes et transparents",
        "Livraison rapide et ciblée",
      ],
      stats: [
        { label: "Fondée", value: "2024" },
        { label: "Livrés", value: "20+ produits" },
        { label: "Basée", value: "100% à distance" },
      ],
    },
    work: {
      eyebrow: "Travaux",
      heading: "Quelques réalisations récentes",
      items: [
        {
          description:
            "Une boutique en vente directe pour un cultivateur artisanal de cannabis à Oakland, construite autour de l'éducation aux variétés, des profils de terpènes et d'une histoire de marque basée sur une culture lente en sol vivant.",
          tags: ["Design web", "E-commerce"],
        },
        {
          description:
            "Un site éditorial et lifestyle dédié à la vie durable, couvrant la mode responsable, le design naturel et les améliorations écologiques de l'habitat, construit autour d'une consommation réfléchie.",
          tags: ["Design web", "Éditorial"],
        },
        {
          description:
            "Un explorateur visuel de dépôts Git qui transforme commits, branches et activité des contributeurs en un univers interactif et navigable.",
          tags: ["Application web", "Outils pour développeurs"],
        },
      ],
    },
    ideas: {
      eyebrow: "Idées",
      heading: "Ce que nous construisons",
      subheading:
        "Des sites de contenu aux produits full-stack, voici où nous passons le plus clair de notre temps.",
      items: [
        {
          title: "Blogs et éditorial",
          description:
            "Des sites pensés pour les lecteurs : pages rapides, typographie soignée et un CMS que votre équipe pourra utiliser seule.",
          tag: "Frontend",
        },
        {
          title: "E-commerce",
          description:
            "Boutiques en ligne, catalogues produits et parcours d'achat optimisés pour la conversion, de quelques références à un inventaire complet.",
          tag: "Full-stack",
        },
        {
          title: "Sites d'entreprise",
          description:
            "Sites vitrines et landing pages qui font forte impression et transforment les visiteurs en prospects.",
          tag: "Frontend",
        },
        {
          title: "Applications full-stack",
          description:
            "Tableaux de bord, outils internes et produits avec une vraie logique métier : bases de données, authentification et tout le reste.",
          tag: "Full-stack",
        },
      ],
    },
    services: {
      eyebrow: "Ce que nous faisons",
      heading: "Compétences",
      items: [
        {
          title: "Applications web",
          description:
            "Des interfaces produit rapides et accessibles, construites sur des frameworks modernes, du premier prototype à la production sans surcharge.",
        },
        {
          title: "Applications mobiles",
          description:
            "Des apps iOS et Android au rendu natif, pensées pour la rapidité et le soin sur toute l'expérience.",
        },
        {
          title: "Design produit",
          description:
            "Des interfaces discrètes : des systèmes clairs, une animation réfléchie et une identité visuelle mémorable.",
        },
        {
          title: "Cloud & DevOps",
          description:
            "Une infrastructure qui monte en charge en silence, avec CI/CD, observabilité et architecture cloud bien pensées dès le départ.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Un projet en tête ? Écrivez-nous.",
      location: "À distance, dans le monde entier",
    },
    footer: { builtWith: "Fait avec", and: "et Next.js" },
    time: { eyebrow: "Votre heure locale", viewingFrom: "Vous nous visitez depuis" },
  },
  zh: {
    nav: { about: "关于", work: "作品", ideas: "创意", contact: "联系" },
    hero: {
      eyebrowSuffix: "软件工作室",
      tagline: "专业水准的软件开发，没有代理商的高昂价格。",
      blurb:
        "HiQ-Apps 是一支专注的团队，致力于设计和开发人们真正喜欢使用的网页与移动产品。我们行动迅速、定价公道，并把每一个细节都打磨到位，让你无需操心。",
      ctaPrimary: "联系我们",
      ctaSecondary: "查看作品",
      scroll: "向下滚动",
    },
    about: {
      eyebrow: "关于我们",
      heading:
        "一支专注的团队，更看重完成的作品，而非忙碌的表象。来自曾多次成功交付项目的人们，带来干净的代码、周全的设计和诚实的定价。",
      valueProps: ["全心投入的团队", "透明公道的定价", "快速专注的交付"],
      stats: [
        { label: "成立于", value: "2024" },
        { label: "已交付", value: "20+ 个产品" },
        { label: "所在地", value: "全远程办公" },
      ],
    },
    work: {
      eyebrow: "作品",
      heading: "我们交付过的一些项目",
      items: [
        {
          description:
            "为奥克兰一家精品大麻种植商打造的直销电商网站，围绕品种知识科普、萜烯成分档案以及活土慢生长的品牌故事而构建。",
          tags: ["网页设计", "电子商务"],
        },
        {
          description:
            "一个关注可持续生活方式的编辑型网站，涵盖可持续时尚、自然设计和环保家居升级，围绕理性消费理念构建。",
          tags: ["网页设计", "编辑内容"],
        },
        {
          description:
            "一个 Git 仓库可视化探索工具，将提交、分支和贡献者活动映射成一个可交互、可导航的宇宙。",
          tags: ["网页应用", "开发者工具"],
        },
      ],
    },
    ideas: {
      eyebrow: "创意",
      heading: "我们能做什么",
      subheading: "从内容型网站到全栈产品，这里是我们花费大部分精力的地方。",
      items: [
        {
          title: "博客与内容网站",
          description:
            "为读者打造的内容优先型网站：加载迅速的页面、简洁的排版，以及一个你的团队无需我们协助也能使用的内容管理系统。",
          tag: "前端",
        },
        {
          title: "电子商务",
          description:
            "从少量商品到完整库存，专为转化率优化的商城、商品目录与结账流程。",
          tag: "全栈",
        },
        {
          title: "企业官网",
          description:
            "能给人留下深刻第一印象、并把访客转化为潜在客户的宣传型网站与落地页。",
          tag: "前端",
        },
        {
          title: "全栈应用",
          description:
            "具备真实业务逻辑的仪表盘、内部工具与产品：数据库、身份验证，以及其他一切。",
          tag: "全栈",
        },
      ],
    },
    services: {
      eyebrow: "我们的服务",
      heading: "核心能力",
      items: [
        {
          title: "网页应用",
          description:
            "基于现代框架构建的快速、无障碍的产品界面，从最初的原型一路推进到生产环境，不带任何冗余。",
        },
        {
          title: "移动应用",
          description:
            "体验接近原生的 iOS 与 Android 应用，在整个体验中兼顾速度与打磨细节。",
        },
        {
          title: "产品设计",
          description:
            "不喧宾夺主的界面：清晰的系统、经过推敲的动效，以及令人印象深刻的视觉识别。",
        },
        {
          title: "云与运维",
          description:
            "能够悄然扩展的基础设施，一次性做好 CI/CD、可观测性与云架构。",
        },
      ],
    },
    contact: {
      eyebrow: "联系方式",
      heading: "有项目想法？联系我们吧。",
      location: "远程办公，服务全球",
    },
    footer: { builtWith: "用", and: "和 Next.js 打造" },
    time: { eyebrow: "您的本地时间", viewingFrom: "访问来自" },
  },
};
