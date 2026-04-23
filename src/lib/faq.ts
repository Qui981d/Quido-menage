/**
 * FAQ data — shared between the client-side FAQ component and server-side JSON-LD generation.
 * This file is intentionally NOT "use client" so it can be imported from Server Components.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqItems(cityName?: string): FaqItem[] {
  const defaultRegion = "au Pays de Gex";
  const localizedRegion = cityName ? `à ${cityName}` : defaultRegion;
  const inRegion = cityName ? `à ${cityName}` : "dans le Pays de Gex";

  return [
    {
      question: `Comment sont sélectionnés vos intervenants ${localizedRegion} ?`,
      answer: `Chaque candidat passe par un processus rigoureux : vérification d'identité, d'expérience et de références. Nous réalisons des entretiens personnels pour nous assurer de leur fiabilité et de leur savoir-être. Tous nos agents de propreté ${localizedRegion} sont déclarés, assurés RC Pro, et formés à nos protocoles de nettoyage premium.`,
    },
    {
      question: "Puis-je garder le même intervenant à chaque fois ?",
      answer: `Absolument. Nous favorisons la continuité en vous attribuant un(e) intervenant(e) attitré(e) qui connaît vos habitudes et vos préférences. C'est d'ailleurs notre force ${localizedRegion} : nos agents travaillent à nos côtés depuis des années.`,
    },
    {
      question: "Quels produits d'entretien sont utilisés ?",
      answer: `Nos intervenants utilisent des produits professionnels écologiques, sans COV nocifs : pas de javel ni d'ammoniac. Nous privilégions des gammes éco-labelisées et la puissance de la vapeur sèche. Vous pouvez aussi fournir vos propres produits. Notre démarche éco-responsable protège votre famille, vos animaux et l'environnement ${inRegion}.`,
    },
    {
      question: "Comment modifier ou annuler une réservation ?",
      answer: "Modifiez ou annulez en ligne jusqu'à 24h avant le créneau prévu. Aucun frais dans ce délai. La flexibilité est au cœur de notre service.",
    },
    {
      question: "Êtes-vous assurés ?",
      answer: `Oui, chaque intervention ${localizedRegion} est couverte par notre assurance responsabilité civile professionnelle (RC Pro). En cas de casse accidentelle sur vos biens, tout est pris en charge sans aucune démarche de votre part.`,
    },
    {
      question: `Quelles sont vos zones d'intervention ${inRegion} ?`,
      answer: cityName
        ? `Nous intervenons prioritairement à ${cityName} et dans toutes les communes limitrophes. Renseignez votre code postal lors de la réservation pour confirmer la disponibilité.`
        : "Nous intervenons dans l'ensemble du Pays de Gex (01) : Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Cessy, Prévessin-Moëns, Thoiry, Ornex, Ségny, Crozet, Versonnex et Échenevex. Renseignez votre code postal lors de la réservation.",
    },
    {
      question: `Proposez-vous le ménage pour les locations Airbnb ${localizedRegion} ?`,
      answer: `Oui, nous proposons un service de ménage Airbnb et de conciergerie locative sur-mesure ${inRegion}. Nettoyage entre chaque voyageur, préparation du linge, mise en place — nous gérons l'intégralité de l'entretien de vos locations saisonnières avec la même exigence premium que pour nos clients particuliers.`,
    },
    {
      question: "Le ménage à domicile ouvre-t-il droit au crédit d'impôt de 50% ?",
      answer: "Oui. En tant qu'entreprise agréée Services à la Personne (SAP), nos prestations de ménage à domicile ouvrent droit au crédit d'impôt immédiat de 50%. Concrètement, 200€ de ménage ne vous coûtent que 100€. L'avance immédiate URSSAF est disponible, vous ne payez que le montant net dès la facturation.",
    },
    {
      question: `Combien coûte un service de ménage ${localizedRegion} ?`,
      answer: `Le tarif de nos prestations de ménage ${localizedRegion} dépend de la surface de votre logement, de la fréquence souhaitée et du type de prestation (ménage régulier, grand nettoyage, fin de bail). Grâce au crédit d'impôt de 50%, le coût réel est divisé par deux. Obtenez une estimation personnalisée gratuite en 2 minutes via notre formulaire de réservation en ligne.`,
    },
    {
      question: "Quelle est la différence entre un ménage régulier et un grand nettoyage (Deep Clean) ?",
      answer: `Le ménage régulier est un entretien courant de votre domicile (aspiration, dépoussiérage, nettoyage des surfaces et sanitaires) effectué chaque semaine ou toutes les deux semaines par le même intervenant attitré. Le grand nettoyage (Deep Clean) est une intervention en profondeur, du sol au plafond : lessivage des murs, nettoyage derrière les meubles, dégraissage complet de la cuisine, détartrage intensif des salles de bain. Idéal en changement de saison ou avant un événement.`,
    },
  ];
}
