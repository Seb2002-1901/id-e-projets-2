/** Flux critique 1 : onboarding-triage (branche verte). LUC-49. */
const { device, element, by, expect: dexpect } = require('detox');

describe('Onboarding — branche verte', () => {
  beforeAll(async () => { await device.launchApp({ delete: true }); });

  it('affiche la promesse puis traverse le triage vert', async () => {
    await dexpect(element(by.id('welcome-screen'))).toBeVisible();
    await element(by.text('Commencer')).tap();
    await element(by.text('Réduire ma consommation')).tap();
    await element(by.text('Sommeil')).tap();
    await element(by.text('Continuer')).tap();
    // AUDIT-C bas → vert
    await element(by.text('2-4×/mois')).tap();
    await element(by.text('1-2')).tap();
    await element(by.text('Jamais')).atIndex(0).tap();
    await element(by.text('Continuer')).tap();
    // Sécurité : tout à Non / Jamais
    for (let i = 0; i < 3; i++) await element(by.text('Non')).atIndex(i).tap();
    for (let i = 0; i < 2; i++) await element(by.text('Jamais')).atIndex(i).tap();
    await element(by.text('Valider')).tap();
    await dexpect(element(by.text('Qu’est-ce qui te donne envie de boire ?'))).toBeVisible();
  });
});
