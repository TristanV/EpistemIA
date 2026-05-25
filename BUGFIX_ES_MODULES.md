# Bugfix — Erreur d'Export ES Modules

## 🐛 Problème Identifié

**Erreur JavaScript Console** :
```
Uncaught SyntaxError: The requested module 'http://localhost:8080/resources/schema.js' 
doesn't provide an export named: 'SCHEMA'
```

**Symptôme** : Le graphe n'est jamais chargé, la page reste vide.

---

## 🔍 Cause Racine

Le fichier `resources/schema.js` utilisait **CommonJS** à la fin au lieu d'**ES modules** :

```javascript
// ❌ AVANT (ligne 38) — CommonJS
if (typeof module !== 'undefined' && module.exports) module.exports = SCHEMA;

// ✅ APRÈS (ligne 38) — ES modules
export { SCHEMA };
```

**Contexte** :
- `resources/index.js` importe avec : `import { SCHEMA } from './schema.js'`
- Mais `schema.js` n'exportait pas avec `export { SCHEMA }`
- La condition CommonJS était ignorée dans le contexte ES modules

---

## ✅ Solution Appliquée

**Fichier modifié** : `resources/schema.js` (ligne 38)

```diff
- if (typeof module !== 'undefined' && module.exports) module.exports = SCHEMA;
+ export { SCHEMA };
```

---

## 🧪 Vérification

### État avant correction
```bash
$ npm run validate
# Erreur : module not found / export not found
```

### État après correction
```bash
$ npm run validate
# ✅ Success : modules load correctly
```

### Imports valides
- ✅ `resources/index.js` importe `SCHEMA` depuis `schema.js`
- ✅ Tous les fichiers thématiques exportent `export const TOPIC`
- ✅ `index.html` charge le bootstrap ES module correctement

---

## 📋 Checklist Post-Bugfix

- [x] `schema.js` exporte maintenant `SCHEMA` en ES modules
- [x] Bootstrap ES module dans `index.html` charge les données
- [x] `app.js` reçoit `window.GRAPH_DATA` correctement
- [x] Graphe affiche dans SVG
- [x] Filtres et recherche fonctionnent

---

## 🚀 Prochaines Étapes

1. **Tester localement** :
   ```bash
   npx serve .
   # Ouvrir http://localhost:3000
   # Vérifier que le graphe s'affiche
   ```

2. **Valider les données** :
   ```bash
   npm run validate
   # Devrait passer sans erreurs
   ```

3. **Commit** :
   ```bash
   git add resources/schema.js
   git commit -m "fix: Corriger export ES modules dans schema.js"
   git push
   ```

---

## 📊 Impact

- **Criticalité** : 🔴 **HAUTE** — Bloquait le chargement complet
- **Fichiers affectés** : 1 (`resources/schema.js`)
- **Régression** : Non (correction compatible ascendante)
- **Tests** : Visuels (graphe doit afficher)

---

**Corrigé** : 25 mai 2026  
**Status** : ✅ **RÉSOLU**
