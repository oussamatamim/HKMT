# Contenu du site — HKMT Solutions

Ce document liste les sections de la page d'accueil, le composant qui les affiche,
le namespace de traduction utilisé et leur rôle. Tout le texte affiché vient de
`messages/{fr,en}.json` — aucun texte n'est en dur dans les composants.

| Section | Composant | Ancre | Namespace i18n | Rôle |
|---|---|---|---|---|
| En-tête | [`components/Header.tsx`](components/Header.tsx) | — | `nav` | Logo, navigation vers les sections, sélecteur de langue, CTA contact. Sticky, menu mobile. |
| Hero | [`components/Hero.tsx`](components/Hero.tsx) | `#hero` | `hero` | Accroche principale : badge, titre, texte, deux CTA (contact / services). |
| Services | [`components/Services.tsx`](components/Services.tsx) | `#services` | `services` | Grille des 6 domaines d'expertise (conseil & audit, développement, cybersécurité, cloud, IA, formation). Responsive 3/2/1 colonnes. |
| Pourquoi HKMT | [`components/WhyHKMT.tsx`](components/WhyHKMT.tsx) | — | `whyHKMT` | Quatre piliers de confiance : proximité, solutions sur mesure, sécurité et innovation. |
| À propos | [`components/About.tsx`](components/About.tsx) | `#about` | `about` | Positionnement de la société, deux paragraphes, deux statistiques clés. |
| Méthodologie | [`components/Methodology.tsx`](components/Methodology.tsx) | — | `methodology` | Parcours en quatre étapes : écoute, conception, déploiement et accompagnement. |
| Contact | [`components/Contact.tsx`](components/Contact.tsx) | `#contact` | `contact` | Coordonnées (email, lieu) + formulaire fonctionnel via Formspree, validation client, états loading/succès/erreur. |
| Pied de page | [`components/Footer.tsx`](components/Footer.tsx) | — | `footer` | Logo, liens de navigation, email, copyright. |
| Sélecteur de langue | [`components/LanguageSwitcher.tsx`](components/LanguageSwitcher.tsx) | — | `languageSwitcher` | Bascule FR / EN, conserve la page courante. |

## Internationalisation

- Routing par préfixe (`/fr`, `/en`) via `next-intl`, configuré dans
  [`i18n/routing.ts`](i18n/routing.ts), [`i18n/navigation.ts`](i18n/navigation.ts),
  [`i18n/request.ts`](i18n/request.ts) et [`middleware.ts`](middleware.ts).
- Détection de la langue du navigateur en fallback (comportement par défaut du
  middleware `next-intl` : `localeDetection` actif, `defaultLocale: "fr"`).
- Police : `Plus Jakarta Sans`, chargée via `next/font/google` dans
  [`app/[locale]/layout.tsx`](app/[locale]/layout.tsx).

## Formulaire de contact

- Validation client dans [`lib/validation.ts`](lib/validation.ts) (nom, email,
  message ≥ 10 caractères), messages d'erreur traduits (`contact.form.errors.*`).
- Soumission par `fetch` JSON vers l'endpoint **Formspree**, déclaré dans
  [`lib/formspree.ts`](lib/formspree.ts). L'endpoint est public par conception ;
  le destinataire se configure dans le tableau de bord Formspree.
- Formspree gère les notifications de soumission et les protections anti-spam.

## Marque

- Couleurs : bleu marine `#1b3764`, orange `#f39200`, fond crème `#faf7f2`
  (définies dans [`tailwind.config.ts`](tailwind.config.ts)).
- Logo : [`public/hkmt-logo.svg`](public/hkmt-logo.svg) (utilisé par `Header`) et sa
  variante blanche [`public/hkmt-logo-white.svg`](public/hkmt-logo-white.svg)
  (utilisée par `Footer` sur fond navy, trait orange conservé). Remplacer les
  deux fichiers si un nouveau logo est fourni.
- Favicon : [`public/favicon.svg`](public/favicon.svg) (monogramme "H").

## Accès restreint (authentification HTTP Basic)

- [`middleware.ts`](middleware.ts) exige une authentification HTTP Basic sur
  toutes les pages avant d'appliquer le routing `next-intl`, tant que les
  variables d'environnement `BASIC_AUTH_USER` et `BASIC_AUTH_PASSWORD` sont
  définies (si l'une des deux est absente, la protection est désactivée).
- Identifiants stockés localement dans `.env.local` (jamais commité, voir
  `.gitignore`) ; `.env.example` documente les variables attendues.
- Sur Netlify : ajouter `BASIC_AUTH_USER` et `BASIC_AUTH_PASSWORD` dans
  **Site settings → Environment variables**, puis redéployer.
