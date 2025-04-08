# 🍃 Animated Vertical List

<p align="center">
  <video src="https://github.com/user-attachments/assets/1d63585f-2381-494c-a5f7-728496df7293"/>
</p>

## 📌 Objectif

Ce projet vise à reproduire l’animation verticale de type “carousel” inspirée de l’app Perplexity AI, en utilisant un Animated.FlatList sous React Native. L’objectif est de créer une expérience de défilement fluide, avec un effet de mise en avant de l’élément actif.

## 🎯 Fonctionnalités principales

- **Défilement vertical animé** grâce à React Native Reanimated.
- **Gestion du défilement (scroll.Y)** via useAnimatedScrollHandler pour capturer les offsets en temps réel.
- **Interpolation personnalisée** (interpolate) pour animer la taille, l’opacité ou la position des items de la liste.
- **Effet “carousel** avec snapToInterval et decelerationRate pour un scroll qui se cale sur chaque élément.
- **Expérience immersive** : l’élément actif se retrouve centré à l’écran et les autres items se mettent en retrait.

## ⚙️ Technologies utilisées

L'application est développée avec :

- **React Native (via Expo)** pour le frontend mobile.
- **React Native Reanimated (v3)** pour la création d’animations performantes et fluides.
- **TypeScript** (optionnel) si tu préfères un typage statique.

## 📦 Bibliothèques principales

🔄 Animations et Gestes

- react-native-reanimated pour l’API d’animations déclaratives et performantes.
- react-native-gesture-handler (souvent nécessaire en complément de Reanimated).

📋 Liste et Navigation

- FlatList natif de React Native, exploité ici via un composant Animated.FlatList.
- (Optionnel) react-navigation si tu intègres le projet dans une appli plus large.

### 🎨 **Animations & UX**

- react-native-reanimated
- react-native-gesture-handler
- expo-vector-icon

## 🚀 Comment démarrer ?

### 1️⃣ Cloner le projet

`git clone https://github.com/VirtuozTM/animated-vertical-list.git`
`cd animated-vertical-list`

### 2️⃣ Installer les dépendances

`npm install`

# ou

`yarn install`

### 3️⃣ Lancer l'application en mode développement

`expo start`

📌 **Astuce** : Utilisez l'application Expo Go sur votre téléphone pour tester immédiatement l'application !

## 📬 Contact

Si vous avez des questions ou suggestions, n'hésitez pas à me contacter ! 😊

**Armand PETIT**

🖥️ Développeur React Native

📧 [armand_petit@outlook.fr](mailto:armand_petit@outlook.fr)

📅 [Réserver un appel](https://calendly.com/armand_petit/30min)

# realtime-chat
