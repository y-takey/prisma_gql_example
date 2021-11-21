import { makeSchema, queryType } from "nexus";
import { join } from "path";

const Query = queryType({
  definition(t) {
    t.string("hello", { resolve: () => "hello world!" });
    t.string("ok", { resolve: () => "ok bokujo!" });
  },
});

export const schema = makeSchema({
  types: [Query],
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts",
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
});
