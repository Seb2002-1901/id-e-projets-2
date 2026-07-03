/** Flux critique 3 : écart → protocole R → rebond (jamais de remise à zéro). LUC-51. */
const { element, by, expect: dexpect } = require('detox');

describe('Écart → rebond', () => {
  it('déclare un écart depuis Repères et complète le protocole', async () => {
    await element(by.text('Repères')).tap();
    await element(by.text('J’ai eu un écart')).tap();
    await dexpect(element(by.text('Content de te revoir'))).toBeVisible();
    await element(by.text('3 questions — 2 minutes')).tap();
    await element(by.text('À la maison')).tap();
    await element(by.text('Seule')).tap();
    await element(by.text('Stress')).tap();
    await element(by.text('Un plan')).tap();
    await element(by.text('Continuer')).tap();
    await element(by.text('Mettre à jour mon si-alors')).tap();
    await dexpect(element(by.text('Ton plan a appris'))).toBeVisible();
    await element(by.text('On continue')).tap();
  });
});
