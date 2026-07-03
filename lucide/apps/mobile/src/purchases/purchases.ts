/** Achats : abstraction unique. RevenueCat quand la clé + le module natif sont présents ; sinon simulation dev.
 *  TODO(LUC-43): `npm i react-native-purchases` + build EAS (module natif, PAS Expo Go), puis :
 *    Purchases.configure({ apiKey: process.env.EXPO_PUBLIC_REVENUECAT_APPLE_KEY! })
 *  et remplacer DevPurchases par l'implémentation RC (offering "default", packages annual/monthly).
 *  L'UI (paywall) ne change pas : elle ne connaît que cette interface. */
import type { SubStatus } from '@lucide/shared';

export interface Offering { annualPrice: string; monthlyPrice: string; trialDays: number }
export interface PurchasesApi {
  ready(): boolean;
  offering(): Promise<Offering>;
  purchase(plan: 'annual' | 'monthly'): Promise<SubStatus>;
  restore(): Promise<SubStatus>;
}

class DevPurchases implements PurchasesApi {
  ready(): boolean { return false; } // false = mode simulé (affiché dans l'UI)
  async offering(): Promise<Offering> {
    return { annualPrice: '79,99 €', monthlyPrice: '14,99 €', trialDays: 7 };
  }
  async purchase(): Promise<SubStatus> { return 'trial'; }
  async restore(): Promise<SubStatus> { return 'free'; }
}

export function makePurchases(): PurchasesApi {
  // Le module natif RC ne peut pas être importé dans Expo Go : détection par env uniquement.
  return new DevPurchases();
}
export const purchases = makePurchases();
