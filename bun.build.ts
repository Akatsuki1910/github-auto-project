import html from "bun-plugin-html";

(async () => {
  await Bun.build({
    entrypoints: ["./src/index.html"],
    outdir: "./dist",
    plugins: [html()],
  });
})();
