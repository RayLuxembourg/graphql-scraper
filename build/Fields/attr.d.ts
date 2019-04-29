import { ScrapperFields } from "./typing";
declare const args: {
    selector: {
        type: import("graphql/type/definition").GraphQLScalarType;
        description: string;
    };
    name: {
        type: import("graphql/type/definition").GraphQLNonNull<import("graphql/type/definition").GraphQLNullableType>;
        description: string;
    };
};
export declare const attr: ScrapperFields.Field<typeof args>;
export {};
