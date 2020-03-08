import { Provider } from "@nestjs/common";

export const createDynamodbProviders = (): Provider[] => {
  const repositories = [""].map(element => ({
    provide: element,
    useFactory: "" as any,
    inject: []
  }));

  return repositories;
};
