# Prompts pour Claude Code — Refonte du site HKMT Solutions

Copie-colle le **Prompt 1** en premier message dans Claude Code (dans le dossier du projet). Une fois qu'il a terminé, utilise les prompts suivants un par un pour affiner.

---

## Prompt 1 — Setup + architecture + contenu (le prompt principal)

```
Construis un site vitrine moderne pour "HKMT Solutions", une société de conseil IT basée
au Luxembourg. Tu pars de zéro : ignore tout code existant dans ce dossier, propose une
nouvelle direction de design (je ne veux pas un clone de l'ancien site).

CONTEXTE MÉTIER
- Nom : HKMT Solutions S.à r.l. — Luxembourg
- Secteur : conseil et solutions IT (audit, développement logiciel, cybersécurité, cloud,
  IA, formation)
- Ton : professionnel, chaleureux, orienté PME et particuliers, pas corporate-froid
- Couleurs de marque à respecter : bleu marine #1b3764, orange #f39200, fond crème #faf7f2
- Logo : fichier "hkmt-logo.png" (je te le fournis / je le place dans /public)
- Le site doit être trilingue : français (langue par défaut), anglais, arabe (avec bascule
  RTL complète en arabe — layout, alignement du texte, direction de la navigation)

STACK TECHNIQUE (obligatoire)
- Next.js 14+ (App Router) avec TypeScript strict
- Tailwind CSS pour le style
- next-intl (ou équivalent) pour l'i18n FR/EN/AR avec routing par préfixe de langue
  (/fr, /en, /ar) et détection de la langue du navigateur en fallback
- ESLint + Prettier configurés et sans erreurs
- Architecture en composants réutilisables dans /components, contenu texte séparé dans
  /content ou /messages (fichiers JSON par langue), pas de texte en dur dans les composants
- Le site doit pouvoir être exporté en statique (next export ou adapter Netlify officiel)
  pour être déployé sur Netlify sans backend Node à maintenir

ARCHITECTURE ATTENDUE
- app/[locale]/layout.tsx, app/[locale]/page.tsx
- components/ : Header, Hero, Services, About, Contact, Footer, LanguageSwitcher — chacun
  dans son propre fichier, typé, sans logique métier mélangée à l'UI
- messages/fr.json, messages/en.json, messages/ar.json — toutes les chaînes de texte
- lib/ pour les utilitaires (ex: validation de formulaire)
- Un fichier CONTENT.md ou constants documentant les sections et leur rôle

CONTENU RÉEL À UTILISER (ne pas inventer d'autre texte, traduire/adapter si besoin mais
garder le sens) :

FR:
- Nav: Accueil, Services, À propos, Contact
- Badge hero: "Conseil & solutions IT — Luxembourg"
- Titre hero: "La technologie au service de vos ambitions"
- Texte hero: "HKMT Solutions accompagne entreprises et particuliers dans la conception,
  le développement et la sécurisation de leurs systèmes d'information — du conseil à
  l'exploitation, avec écoute et proximité."
- CTA: "Parlons de votre projet" / "Découvrir nos services"
- Services (titre + texte x6):
  1. Conseil & audit IT — Analyse, audit et conception de vos systèmes d'information et
     infrastructures technologiques.
  2. Développement logiciel — Développement, intégration et maintenance de logiciels,
     applications et solutions digitales sur mesure.
  3. Cybersécurité — Protection de vos systèmes et gestion sécurisée de vos données, selon
     les meilleurs standards.
  4. Cloud computing — Migration, hébergement et exploitation de vos infrastructures dans
     le cloud, en toute fiabilité.
  5. IA & transformation digitale — Intelligence artificielle et accompagnement de bout en
     bout dans votre transformation numérique.
  6. Formation & assistance — Formation de vos équipes et assistance technique continue
     dans tous nos domaines d'expertise.
- À propos titre: "Une société luxembourgeoise, proche de ses clients"
- À propos texte 1: "Basée au Grand-Duché de Luxembourg, HKMT Solutions est née d'une
  conviction simple : les meilleures solutions technologiques naissent d'une écoute
  attentive, guidée par la sagesse."
- À propos texte 2: "Nous privilégions des relations durables, un langage clair et des
  solutions pragmatiques — pour les entreprises comme pour les particuliers."
- Stats: "6" domaines d'expertise / "FR · EN · AR" accompagnement multilingue
- Contact titre: "Contactez-nous"
- Contact texte: "Un projet, une question, un besoin d'audit ? Écrivez-nous, nous vous
  répondons rapidement."
- Email: info@hkmt.lu — Lieu: Luxembourg
- Footer: "© 2026 HKMT Solutions S.à r.l. — Luxembourg"

EN: traduis fidèlement l'ensemble ci-dessus (Home/Services/About/Contact, "IT consulting
& solutions — Luxembourg", "Technology in the service of your ambitions", etc.)

AR: traduis fidèlement en arabe soutenu, prévoir le RTL complet.

FONCTIONNALITÉS
- Header sticky avec logo, nav ancré vers les sections, sélecteur de langue FR/EN/AR
- Hero, Services (grille responsive 3/2/1 colonnes), À propos, Contact, Footer
- Formulaire de contact fonctionnel via Netlify Forms (form statique détectable au build +
  soumission fetch), avec validation côté client et états loading/succès/erreur
- Responsive mobile-first, testé mentalement sur 375px, 768px, 1440px
- Accessibilité : contrastes suffisants, labels de formulaire, navigation clavier, alt text
- SEO de base : meta title/description par langue, Open Graph, favicon

CE QUE JE NE VEUX PAS
- Pas de texte factice "Lorem ipsum"
- Pas de dépendance à un CMS externe
- Pas de framework UI lourd (pas de Material UI / Ant Design) — Tailwind pur ou shadcn/ui
  si besoin de composants (dialog, input) tout en gardant un design original

LIVRABLE
Une fois terminé, donne-moi la liste des commandes pour lancer le site en local, et
confirme comment le déployer sur Netlify (build command + publish directory).
```

---

## Prompt 2 — Design (à utiliser après le Prompt 1, si tu veux itérer sur le visuel)

```
Le contenu et l'architecture sont bons. Maintenant affine le design visuel :
- Propose une direction plus distinctive que "template SaaS générique" — inspire-toi de
  cabinets de conseil premium (typographie soignée, hiérarchie claire, un peu d'espace
  négatif, une seule accroche visuelle forte plutôt que des dégradés partout)
- Garde le bleu marine #1b3764 et l'orange #f39200 comme couleurs d'accent, mais tu peux
  introduire une palette neutre plus riche (gris chauds, blancs cassés) autour
- Ajoute des micro-interactions discrètes (hover sur les cartes de services, transition de
  la nav au scroll) sans animation excessive
- Vérifie que le mode RTL (arabe) n'a aucun élément qui reste aligné à gauche par erreur
```

---

## Prompt 3 — Qualité de code (à lancer en fin de projet, avant déploiement)

```
Fais une passe de qualité sur tout le projet :
- Lance le linter et corrige toutes les erreurs/warnings
- Vérifie qu'il n'y a aucun "any" TypeScript non justifié
- Vérifie que chaque composant a une seule responsabilité claire
- Vérifie l'accessibilité (aria-label sur les boutons icône, focus visible, contrastes)
- Vérifie que le site fonctionne correctement en export statique (pas d'API routes
  incompatibles avec l'export, pas d'image non optimisée cassée)
- Résume les éventuelles dettes techniques restantes dans un fichier TODO.md
```

---

### Notes avant de commencer

- Le logo (`hkmt-logo.png`) et les traductions ci-dessus sont les seules sources de vérité
  — si Claude Code invente un autre texte ou une autre couleur, corrige-le en pointant vers
  ce document.
- Si Claude Code te demande de choisir entre plusieurs options (routing i18n, librairie de
  formulaire, etc.), les recommandations par défaut ci-dessus (Next.js App Router,
  next-intl, Tailwind, Netlify Forms) sont suffisantes — tu peux répondre "vas-y avec tes
  recommandations par défaut" si tu ne veux pas trancher toi-même.
