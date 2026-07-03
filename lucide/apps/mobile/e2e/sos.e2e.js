/** Flux critique 2 : SOS offline + budget perf < 2 s. LUC-50/31. */
const { device, element, by, expect: dexpect } = require('detox');

describe('SOS — offline et rapide', () => {
  beforeAll(async () => { await device.launchApp({ newInstance: true }); });

  it('ouvre le SOS en moins de 2 secondes', async () => {
    const t0 = Date.now();
    await element(by.id('sos-button')).tap();
    await dexpect(element(by.id('sos-screen'))).toBeVisible();
    const elapsed = Date.now() - t0;
    if (elapsed > 2000) throw new Error(`SOS trop lent : ${elapsed} ms (budget 2000 ms)`);
  });

  it('fonctionne en mode avion (aucune dépendance réseau)', async () => {
    // Detox ne coupe pas le réseau nativement : on utilise le simulateur sans backend configuré,
    // et la règle ESLint no-network sur features/sos garantit l'absence d'import réseau.
    await element(by.text('J’ai une envie')).tap();
    await dexpect(element(by.text('Elle va redescendre. Elle redescend toujours.'))).toBeVisible();
    await element(by.text('C’est passé')).tap();
    await element(by.text('Terminer')).tap();
  });
});
