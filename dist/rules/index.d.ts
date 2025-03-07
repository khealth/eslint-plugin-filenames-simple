export declare const rules: {
    casing: {
        meta: {
            deprecated: boolean;
            replacedBy: string[];
            docs?: {
                description?: string | undefined;
                category?: string | undefined;
                recommended?: boolean | undefined;
                url?: string | undefined;
                suggestion?: boolean | undefined;
            } | undefined;
            messages?: {
                [messageId: string]: string;
            } | undefined;
            fixable?: "code" | "whitespace" | undefined;
            schema?: import("json-schema").JSONSchema4 | import("json-schema").JSONSchema4[] | undefined;
            type?: "problem" | "suggestion" | "layout" | undefined;
        };
        create(context: import("eslint").Rule.RuleContext): import("eslint").Rule.RuleListener;
    };
    extension: import("eslint").Rule.RuleModule;
    extname: import("eslint").Rule.RuleModule;
    'named-export': import("eslint").Rule.RuleModule;
    'naming-convention': import("eslint").Rule.RuleModule;
    'no-index': import("eslint").Rule.RuleModule;
    pluralize: import("eslint").Rule.RuleModule;
    'typescript-module-declaration': import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"invalidFilename", [], import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleListener>;
};
