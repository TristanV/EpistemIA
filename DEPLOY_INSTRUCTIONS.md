# Instructions de Déploiement sur GitHub Pages

## 🔴 Situation Actuelle

Le graphe **fonctionne correctement localement** mais ne s'affiche pas sur GitHub Pages à cause d'un **manque de synchronisation Git**.

### Cause

Les fichiers ont été modifiés et créés localement, mais ils n'ont **pas été committés et poussés** vers le dépôt GitHub.

```
Local (C:\AIDEV\epistemIA/)          GitHub (https://github.com/tristanV/epistemIA/)
├── ✅ schema.js CORRIGÉ             ├── ❌ schema.js ANCIEN (CommonJS)
├── ✅ CONTRIBUTING.md NOUVEAU       ├── ❌ CONTRIBUTING.md ABSENT
├── ✅ package.json NOUVEAU          ├── ❌ package.json ABSENT
├── ✅ .gitignore AMÉLIORÉ           ├── ❌ .gitignore ANCIEN
└── ✅ Autres fichiers CRÉÉS          └── ❌ (non synchronisés)
```

---

## 🚀 Solution : Committer et Pousser vers GitHub

### Étape 1 : Vérifier le statut (opcional)

```bash
cd C:\AIDEV\epistemIA
git status
# Devrait afficher les fichiers modifiés en rouge
```

### Étape 2 : Ajouter les fichiers

```bash
# Ajouter tous les changements
git add -A

# Ou ajouter sélectivement (plus sûr)
git add .gitignore
git add resources/schema.js
git add CONTRIBUTING.md
git add AUDIT_COHÉRENCE.md
git add BUGFIX_ES_MODULES.md
git add CHANGES_2026-05-25.md
git add package.json
git add tools/validate.js
git add docs/ARCHITECTURE.md
```

### Étape 3 : Créer un commit

```bash
git commit -m "chore: Ajouter documentation et corriger export ES modules

- fix: Corriger export CommonJS → ES modules dans resources/schema.js
- feat: Ajouter CONTRIBUTING.md (guide complet contributeurs)
- feat: Ajouter package.json (métadonnées npm + scripts)
- feat: Ajouter tools/validate.js (validateur de cohérence)
- docs: Ajouter docs/ARCHITECTURE.md (architecture technique)
- docs: Ajouter AUDIT_COHÉRENCE.md (rapport d'audit)
- docs: Ajouter CHANGES_2026-05-25.md (résumé des changements)
- docs: Ajouter BUGFIX_ES_MODULES.md (documentation bugfix)
- chore: Améliorer .gitignore

Ce commit résout le problème de chargement du graphe et ajoute
la documentation nécessaire pour les contributions futures.
"
```

### Étape 4 : Pousser vers GitHub

```bash
# Pousser vers la branche main
git push origin main
```

### Étape 5 : Vérifier le déploiement

```bash
# Attendre 30-60 secondes pour GitHub Pages
# Puis ouvrir : https://tristanv.github.io/EpistemIA/
```

---

## 🔍 Vérifier le Déploiement

### Sur GitHub Pages (après push)

1. **Vérifier le commit** :
   - Aller sur https://github.com/tristanV/epistemIA/commits/main
   - Vérifier que le nouveau commit y apparaît

2. **Vérifier l'affichage** :
   - Ouvrir https://tristanv.github.io/EpistemIA/
   - Vérifier que le graphe s'affiche
   - Ouvrir la console JavaScript (F12)
   - Vérifier qu'il n'y a pas d'erreurs

3. **Tester les filtres** :
   - Rechercher un nœud
   - Filtrer par type
   - Zoomer/panner

---

## ⏱️ Timeline GitHub Pages

| Action | Durée |
|--------|-------|
| `git push` | Immédiat |
| GitHub Pages détecte le changement | 10-30 secondes |
| Pages recrée et déploie | 20-60 secondes |
| **Site accessible** | **1-2 minutes** |

---

## 🛠️ Si ça ne marche pas

### Vérifier les Actions GitHub

1. Aller sur https://github.com/tristanV/epistemIA/actions
2. Vérifier que la dernière action (déploiement) est ✅ SUCCESS
3. Si elle est 🔴 FAILED :
   - Cliquer pour voir les détails
   - Lire les messages d'erreur
   - Corriger localement et re-pousser

### Forcer le cache du navigateur

```bash
# Dans la console navigateur (F12)
# Ou faire un hard refresh
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

### Vérifier les fichiers sur GitHub

1. Aller sur https://github.com/tristanV/epistemIA
2. Vérifier que les fichiers sont présents :
   - ✅ `resources/schema.js` avec `export { SCHEMA }`
   - ✅ `CONTRIBUTING.md`
   - ✅ `package.json`
   - ✅ `.gitignore` amélioré

---

## 📋 Checklist de Déploiement

- [ ] `git status` montre les changements
- [ ] `git add -A` effectué
- [ ] `git commit` avec message descriptif
- [ ] `git push origin main` réussi
- [ ] GitHub Page Actions ✅ terminée (vérifier)
- [ ] https://tristanv.github.io/EpistemIA/ charge le graphe
- [ ] Console JavaScript sans erreurs
- [ ] Filtres/recherche fonctionnent
- [ ] Commit visible sur GitHub

---

## 🎉 Si tout marche

Bravo ! Le site GitHub Pages est maintenant à jour avec :
- ✅ Le bugfix du schema.js (graphe s'affiche)
- ✅ La documentation de contribution
- ✅ Les outils de validation
- ✅ L'architecture documentée

Vous pouvez maintenant :
1. Partager le lien https://tristanv.github.io/EpistemIA/
2. Ouvrir les contributions externes via CONTRIBUTING.md
3. Valider les PRs avec `npm run validate`

---

**Important** : C'est la **première fois** que vous deployez après les corrections. Assurez-vous que tout fonctionne correctement avant de promouvoir le projet aux contributeurs.

---

*Instructions générées : 25 mai 2026*
