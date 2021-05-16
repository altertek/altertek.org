---
layout: 'layouts/simple-page.njk'
title: "Le nouveau projet d'Altertek: whatimupto"
description: Une alternative low-tech et open source à linktree.
date: 2021-03-03
tags:
  - newsFr
permalink: /{{ locale }}/news/{{ title | slug }}/
---

<h1 class="section-title">{{ title }}</h1>

<p class="lead-text">{{ description }}</p>

<hr/>

Nous sommes heureux d'annoncer la finalisation de notre dernier projet: Whatimupto. C'est une alternative libre du service Linktree, un référenceur de liens personnel.

## Un concept simple mais utile

Un Linktree est une micro-page Web contenant tous les liens que vous souhaitez partager. Le service a été initialement conçu pour contourner la limite d'instagram empêchant de mettre plus d'un lien dans sa biographie.

Bien que le concept reste simple, la marque à su attirer des personnalités célèbres comme Selena Gomez, Alicia Keys et Arnold Schwarzenegger.
On y trouve également des marques commerciales et même des ONG comme Greenpeace. Vous l'aurez compris, peu importe l'industrie, le concept de linktree reste pertinent pour garder à jour son actualité sur les réseaux sociaux.



Mais les moyens déployés posent quelques interrogations. Est-ce que l'offre proposée est assez conséquente pour que l'on ait à payer un abonnement ? Est-ce qu'un service aussi simple néccessite vraiment une base de données pour fonctionner ?
Ce sont des questions auxquelles notre alternative tente de répondre.

## Les résultats

Notre objectif était de conserver la plus value principale du service (le référencement de liens) en utilisant des technologies low-tech, et en proposant un outil respectueux de la vie privée et moins couteux.

Après quelques jours de dévelopement, Whatimupto:
- N'utilise aucune base de données ! Les informations sont stockées dans des fichiers
- Est libre et peut être auto-hébergé où vous le souhaitez. Vous n'aurez de compte à rendre à personne
- Vos données vous appartiennent et ne sont pas partagées
- Est low-tech ! Le contenu produit étant statique, il peut être hébergé sur des offres d'hébergement gratuites !
- Possède un tableau de bord utilisable en local

Une instance de démonstration est visible [ici](https://altertek.github.io/whatimupto/).

<br/><br/>

<p class="text-center"><a class="btn btn-lg btn-altertek text-center" href="https://github.com/altertek/whatimupto" role="button" rel="noopener noreferrer" target="_blank">Voir le code source</a></p>
