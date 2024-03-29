---
layout: 'layouts/simple-page.njk'
title: Conditions Générales d'Utilisation
pageName: terms-conditions
permalink: /{{ locale }}/{{ pageName }}/
---

# {{ title }}

## Responsabilité  
En utilisant les services d'Altertek, vous êtes responsables des contenus générés et/ou transférés sur nos services.  
Vous ne pouvez pas utiliser les services Altertek à des fins malveillantes ou illégales.  
Tout commerce ou revente de comptes est strictement interdit.  
La création de comptes utilisateurs par des robots ou de manière automatique n'est pas autorisée sauf exception liée à un service spécifique.  
Vous vous engagez à respecter les autres utilisateurs et la communauté dans son ensemble.  
En cas de non respect des conditions générales d'utilisation, Altertek se réserve le droit de fermer vos comptes et accès aux services.  

Altertek vous fourni des services et outils tel quels.  
L'association ne peut être tenue responsable de tous dommages directs, indirects, ou fortuits, liées à l'indisponibilité des services Altertek, d'erreurs ou de corruption de données.  

L’association s’efforce de permettre l’accès à ses services 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d’un événement hors du contrôle de l’Association,
et sous réserve d'éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du site et des services.  


## Modification des conditions d’utilisation  
L’Association se réserve la possibilité de modifier, à tout moment et sans préavis, les présentes conditions d’utilisation afin de les adapter aux évolutions des services et/ou de leur exploitation.  

## Chartes et Manifestes  
Altertek adhère sans restriction aux valeurs du collectif CHATONS telles que stipulées dans [le manifeste](https://chatons.org/manifeste) et [la charte](https://chatons.org/charte).  
Altertek soutien le [Contrat pour the web](https://contractfortheweb.org) de la Web foundation.  
Altertek a aussi signé ces manifestes:  
- [Sustainable Web Manifesto](https://www.sustainablewebmanifesto.com/)  
- [Web0 Manifesto](https://web0.small-web.org/)  

## Sécurité  
Alterek accorde une grande importance à la sécurité et à l’intégrité de vos données personnelles.  
L'association prend tous les mesures nécessaires pour garantir la sécurité des utilisateurs sur ses services, elle s'engage à répondre rapidement aux signalements relatifs à ce sujet.  
Les personnes ayant des droits sur l'infrastructure sont uniquement des membres accrédités ayant signé une clause de confidentialité.  

## Données personnelles  
Altertek ne transfère pas vos données personnelles sans votre consentement explicite à des tiers.  
Conformément au RPGD, Altertek garantit à l’utilisateur un droit d’opposition, d’accès et de rectification sur les données nominatives le concernant.  
L’utilisateur a la possibilité d’exercer ce droit en utilisant la page de contact mise à sa disposition.  

Altertek s'engage à ne s’attribuer aucun droit de propriété des contenus et données produites par les utilisateurs des services.

## Réquisitions judiciares  
Altertek respecte la loi dans les pays dans elle opère et gère son infrastructure.  
L'association ne répond qu'aux réquisitions judiciares en bonne et due forme et à aucun autre intérêt.  
Altertek utilisera tous les moyens légaux à sa disposition pour protéger ses utilisateurs si elle constate que des demandes ne sont pas sufisamment motivées.  

## Transferts de Données  
Altertek ne transfère pas vos données en dehors de l’Europe.
Tout est hebergé sur des serveurs présents sur le continent; y compris pour nos prestataires.  

## Cookies  
Le site Altertek.org n'utilise aucun cookie  
Il est possible que les services hébergés par Altertek utilisent des cookies techniques et/ou de connexion, merci de consulter leur conditions d'utilisation.  

## Prestataires  
Vous pouvez consulter la liste des prestataires sur [cette page de documentation](https://docs.altertek.org/#/content/subprocessors).  

## Publicité  
Altertek n'intègre aucune publicité externe et n'a aucune intention d'en mettre en place à l'avenir.  

## Mesure d'audience  
Altertek mesure l'audience de ses services grâce à une instance auto-hébergée de Plausible.  

- Aucune donnée personelle n'est collectée.
- Toutes les données sont uniquement sous forme d'agrégats.
- Les adresses IP ne sont pas stockées.
- Aucun cookie ou autre identifiant persistant n'est stocké dans le navigateur.
- Aucune information n'est récupérée dans le cadre de tendances de comportement.
- Aucune analyse personelle ou comportementale n'est effectée.

L'instance est sur un serveur qui est géré par Altertek sans partage à des tiers.  

Vous pourrez consulter les statistiques publiquement prochainement.

### S'exclure des statistiques

Cliquez sur le lien ci-dessous pour vous retirer des statistiques de ce site.

<div>Actuellement vous <span id="plausible_not">n'excluez pas</span><span id="plausible_yes">excluez</span> vos visites.</div>
<a id="plausible_button" href="javascript:toggleExclusion()">Exclure mes visites</a>
</div>

<script>
    window.addEventListener('load', function (e) {
      var exclusionState = window.localStorage.plausible_ignore == "true"
      if (exclusionState) {
         document.getElementById("plausible_not").style.display = "none"
         document.getElementById("plausible_yes").style.display = "inline"
         document.getElementById("plausible_button").innerHTML = "Arreter d'exclure mes visites"
      } else {
        document.getElementById("plausible_yes").style.display = "none"
        document.getElementById("plausible_not").style.display = "inline"
        document.getElementById("plausible_button").innerHTML = 'Exclure mes visites'
      }
    });

    function toggleExclusion(e) {
	  var exclusionState = window.localStorage.plausible_ignore == "true"

      if (exclusionState) {
         delete window.localStorage.plausible_ignore
         document.getElementById("plausible_yes").style.display = "none"
         document.getElementById("plausible_not").style.display = "inline"
         document.getElementById("plausible_button").innerHTML = 'Exclure mes visites'
      } else {
        window.localStorage.plausible_ignore = "true"
        document.getElementById("plausible_not").style.display = "none"
        document.getElementById("plausible_yes").style.display = "inline"
        document.getElementById("plausible_button").innerHTML = "Arreter d'exclure mes visites"
      }
    }
</script>
