import { FactoryProvider } from "@angular/core";

export const UpgradeHelperService = {
    upgradeService(serviceName: string): FactoryProvider {
        return {
            provide: serviceName,
            useFactory: (injector: any) => injector.get(serviceName),
            deps: ['$injector']
        };
    }
};