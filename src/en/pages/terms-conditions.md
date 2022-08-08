---
layout: 'layouts/simple-page.njk'
title: Terms of use
pageName: terms-conditions
permalink: /{{ locale }}/{{ pageName }}/
---

# {{ title }}

## Responsability  
By using Altertek's services, you are responsible for the content generated and/or transferred to our services.
You may not use Altertek services for malicious or illegal purposes.  
Any trade or account resale is strictly prohibited.  
The creation of user accounts by robots or automated means is not allowed.  
You are committed to respecting other users and the community as a whole.  
In case of non-compliance with the general terms of use, Altertek reserves the right to close your accounts and access to services.  
Altertek provides you with services and tools as is.  
The association cannot be held liable for any direct, indirect, or incidental damages related to the availability of alternate services, errors or data corruption.  
The association shall endeavor to allow access to its services 24 hours a day, 7 days a week, except in case of force majeure or an event outside the control of the Association, and subject to any failures and maintenance interventions necessary for the proper functioning of the site and the services.  

## Modifying Terms of Use  
The Association reserves the right to modify, at any time and without prior notice, these Terms of Use in order to adapt them to the changes of the services and/or their operation.  

## Charters and Manifestos  
Altertek fully adheres to the values of the CHATONS collective as stipulated in [the manifesto](https://chatons.org/en/manifeste) and [the charter](https://chatons.org/en/charte).  
Altertek endorses the [Contract for the web](https://contractfortheweb.org) from the Web foundation.  
Altertek also signed the following manifestos:  
- [Sustainable Web Manifesto](https://www.sustainablewebmanifesto.com/)  
- [Web0 Manifesto](https://web0.small-web.org/)  

## Security  
Alterek attaches great importance to the security and integrity of your personal data.  
The association takes all necessary measures to guarantee the safety of users on its services, it undertakes to respond promptly to reports on this subject.  
People with internal access to the infrastructure are only accredited members who have signed a privacy clause.  

## Personnal data
Altertek does not transfer your personal data without your explicit consent to third parties.

In accordance with the GDPR, Altertek guarantees the user a right of opposition, access and rectification on the personal data concerning him.  
The user has the opportunity to exercise this right by using the contact page provided to him.  

Altertek will not claim any ownership rights to content and data produced by the users of the services.

## Judicial inquiries  
Altertek respects the law in the countries in which it operates and manages its infrastructure.  
The association only responds to formal judicial requests and no other interests.  
Altertek will use all legal means at its disposal to protect its users if it finds that requests are not sufficiently motivated.  

## Data Transfer  
Altertek does not transfer your data outside Europe.  
Everything is hosted on servers on the mainland; including our service providers.  

## Cookies  
Altertek.org does not use any cookies  
It is possible that the services hosted by Altertek use technical and/or login cookies, please consult their terms of use.  

## Third parties  
Our subprocessors are listed in [this documentation page](https://docs.altertek.org/#/content/subprocessors)  

## Advertising  
Altertek does not include any external advertising and has no intention of implementing any such advertising in the future.  

## Metrics  
Altertek measures the audience of the web services with a self-hosted version of Plausible.   
- No personal information is collected.
- All data is in aggregate only.
- IP addresses are not stored.
- No cookies and other persistent identifiers are stored in the browser.
- No information is mined and harvested for personal and behavioral trends.

The instance is on a server that is managed by Altertek without sharing data to third parties.  

You will be able to view the statistics publicly in the near future.

### Opt-out of the statistics

Click the link below to toggle your exclusion in analytics for this site.

<div>You currently <span id="plausible_not">are not</span><span id="plausible_yes">are</span>
excluding your visits.</div>
<a id="plausible_button" href="javascript:toggleExclusion()">Exclude my visits</a>
</div>

<script>
    window.addEventListener('load', function (e) {
      var exclusionState = window.localStorage.plausible_ignore == "true"
      if (exclusionState) {
         document.getElementById("plausible_not").style.display = "none"
         document.getElementById("plausible_yes").style.display = "inline"
         document.getElementById("plausible_button").innerHTML = "Stop excluding my visits"
      } else {
        document.getElementById("plausible_yes").style.display = "none"
        document.getElementById("plausible_not").style.display = "inline"
        document.getElementById("plausible_button").innerHTML = 'Exclude my visits'
      }
    });

    function toggleExclusion(e) {
      var exclusionState = window.localStorage.plausible_ignore == "true"

      if (exclusionState) {
         delete window.localStorage.plausible_ignore
         document.getElementById("plausible_yes").style.display = "none"
         document.getElementById("plausible_not").style.display = "inline"
         document.getElementById("plausible_button").innerHTML = 'Exclude my visits'
      } else {
        window.localStorage.plausible_ignore = "true"
        document.getElementById("plausible_not").style.display = "none"
        document.getElementById("plausible_yes").style.display = "inline"
        document.getElementById("plausible_button").innerHTML = "Stop excluding my visits"
      }
    }
</script>
