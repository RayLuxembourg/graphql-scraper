import { GraphQLObjectType } from 'graphql';
import * as functions from "firebase-functions";
export declare const ElementType: GraphQLObjectType<Element, any, {
    [key: string]: any;
}>;
export declare const service: functions.HttpsFunction;
