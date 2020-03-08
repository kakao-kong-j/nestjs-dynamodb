import {
  DynamicModule,
  Global,
  Inject,
  Module,
  OnApplicationShutdown,
  Provider
} from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { DataMapperConfiguration } from "@aws/dynamodb-data-mapper";

@Global()
@Module({})
export class DynamodbCoreModule implements OnApplicationShutdown {
  constructor(
    @Inject()
    private readonly options: DataMapperConfiguration,
    private readonly moduleRef: ModuleRef
  ) {}
  static forRoot(options: DataMapperConfiguration): DynamicModule {
    const dynamodbModuleOptions = {
      provide: "",
      useValue: options
    };
    //   const entityManagerProvider = this.createEntityManagerProvider(
    //     options as ConnectionOptions
    //   );
    const entityManagerProvider = ("" as unknown) as Provider;
    return {
      module: DynamodbCoreModule,
      providers: [entityManagerProvider, dynamodbModuleOptions],
      exports: [entityManagerProvider]
    };
  }
  async onApplicationShutdown() {
    "";
  }
}
