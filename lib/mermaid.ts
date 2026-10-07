type MermaidConfig = Record<string, unknown>;

let mermaidModule: Promise<typeof import('mermaid').default> | undefined;
let renderQueue = Promise.resolve();

function getMermaid() {
  mermaidModule ??= import('mermaid').then((module) => module.default);
  return mermaidModule;
}

/** Mermaid keeps configuration globally; serialize renders so each feature gets its own settings. */
export function renderMermaid(
  id: string,
  definition: string,
  config: MermaidConfig,
  parseFirst = false,
): Promise<{ svg: string }> {
  const render = renderQueue.then(async () => {
    const mermaid = await getMermaid();
    mermaid.initialize(config as Parameters<typeof mermaid.initialize>[0]);
    if (parseFirst) await mermaid.parse(definition);
    return mermaid.render(id, definition);
  });

  renderQueue = render.then(() => undefined, () => undefined);
  return render;
}
