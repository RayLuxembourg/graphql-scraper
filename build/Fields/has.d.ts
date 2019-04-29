import { ScrapperFields } from "./typing";
declare const args: {
    selector: {
        type: import("graphql/type/definition").GraphQLScalarType;
        description: string;
    };
};
export declare const has: ScrapperFields.Field<typeof args>;
export {};
