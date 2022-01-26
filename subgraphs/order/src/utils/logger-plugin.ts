import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from "apollo-server-plugin-base";
import {
  BaseContext,
  GraphQLRequestContext,
  GraphQLRequestContextDidEncounterErrors,
} from "apollo-server-types";
import logger from "./logger";

const graphqlErrorHandler: ApolloServerPlugin<BaseContext> = {
  async requestDidStart(
    requestContext: GraphQLRequestContext<{}>
  ): Promise<GraphQLRequestListener<BaseContext>> {
    return {
     async didEncounterErrors(
        requestContext: GraphQLRequestContextDidEncounterErrors<BaseContext>
      ): Promise<void> {
        for (const error of requestContext.errors) {
          logger.error(error);
        }
      },
    };
  },
};

export default graphqlErrorHandler;
