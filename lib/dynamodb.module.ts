import { DynamicModule, Module } from "@nestjs/common";
import { createDynamodbProviders } from "./dynamodb.provider";
import { DataMapperConfiguration } from "@aws/dynamodb-data-mapper";
import { DynamodbCoreModule } from "./dynamodb-core.module";

@Module({})
export class DynamodbModule {
  static forRoot(options: DataMapperConfiguration): DynamicModule {
    return {
      module: DynamodbModule,
      imports: [DynamodbCoreModule.forRoot(options)]
    };
  }

  static forFeature(): DynamicModule {
    const providers = createDynamodbProviders();
    return {
      module: DynamodbModule,
      providers: providers,
      exports: providers
    };
  }

  static forRootAsync(): DynamicModule {
    return {
      module: DynamodbModule,
      imports: []
    };
  }
}
