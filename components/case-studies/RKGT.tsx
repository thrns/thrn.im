import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';

export default function RKGTArticle({ toc }: { toc: ReactNode }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <Link href="/case-studies" aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</Link>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>RK&GT: Applied ML & Document Intelligence</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>I built two Python ML systems: RFID localization from signal data, and document search with custom NER, QA and OCR.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>400+</div>
          <div className="p light" style={css("margin-top:6px")}>tagged products</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>RFID localization</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>2K+</div>
          <div className="p light" style={css("margin-top:6px")}>labeled samples</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>simulation-generated</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>8</div>
          <div className="p light" style={css("margin-top:6px")}>office zones</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>classification targets</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>20%</div>
          <div className="p light" style={css("margin-top:6px")}>lower ingestion latency</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>4-stream + schema redesign</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 500ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://www.python.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Python</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pandas</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>TensorFlow</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://keras.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Keras</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.nltk.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>NLTK</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://spacy.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>spaCy</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://haystack.deepset.ai" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Haystack</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>FAISS</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>PostgreSQL</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://pypdf2.readthedocs.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>PyPDF2</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/jsvine/pdfplumber" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pdfplumber</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://pymupdf.readthedocs.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>PyMuPDF</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/Belval/pdf2image" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pdf2image</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/madmaze/pytesseract" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pytesseract</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.pygame.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pygame</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] RFID localization</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>RFID localization architecture</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>From simulated signal observations to product-level location classes.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Two primary systems</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Two separate ML projects: locating things indoors and understanding documents.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-1">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-1" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · RFID localization and document intelligence are independent paths.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>End-to-end flow</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Signal readings are turned into a fixed input for location classification.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-2">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-2" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · From office simulation to product output.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>Indoor RFID localization: simulated office readings → RSSI modeling → time alignment → fixed-width features → one of eight locations.</p>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Office model</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Item</span>
              <span>Count</span>
              <span>Detail</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Active landmarks</span>
              <span className="p light" data-label="Count">8</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>One per zone</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Passive landmarks</span>
              <span className="p light" data-label="Count">32</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Four per zone</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Total landmarks</span>
              <span className="p light" data-label="Count">40</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Signal/location model</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Simulation products</span>
              <span className="p light" data-label="Count">496</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Checked-in config</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Observation contract</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Per reading</span>Captured</span>
              <span className="p light" data-label="Detail">Distance · timestamp · RSSI · identity.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Expected class</span>Target</span>
              <span className="p light" data-label="Detail">Location label tied to product/landmark context.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Signal model</span>Propagation</span>
              <span className="p light" data-label="Detail">RSSI = A - 10 · n · log10(distance), with n = 2.</span>
            </div>
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Simulation let me generate repeatable data without live RFID hardware for every experiment.</p>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Features</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Feature engineering & classifier</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A fixed RSSI and count input feeding an eight-class neural classifier.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Feature pipeline</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Signal readings arrive at uneven times and are converted to a fixed-width input.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-3">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-3" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · From raw rows to 82 numeric features.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>82-feature composition</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Group</span>
              <span>Composition</span>
              <span>Features</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Product</span>
              <span className="p light" data-label="Composition">RSSI + count</span>
              <span className="p light" data-label="Features" style={css("color:var(--muted-foreground)")}>2 numeric features</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Active landmarks</span>
              <span className="p light" data-label="Composition">8 RSSI/count pairs</span>
              <span className="p light" data-label="Features" style={css("color:var(--muted-foreground)")}>16 numeric features</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Passive landmarks</span>
              <span className="p light" data-label="Composition">32 RSSI/count pairs</span>
              <span className="p light" data-label="Features" style={css("color:var(--muted-foreground)")}>64 numeric features</span>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Classifier (saved model)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A dense classifier maps 82 features to one of eight location classes.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-4">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-4" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · 82 inputs, two dense layers, eight outputs.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>±200 ms window</span>Temporal alignment</span>
              <span className="p light" data-label="Detail">Turn asynchronous readings into fixed features.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>82 deterministic inputs</span>Feature contract</span>
              <span className="p light" data-label="Detail">Clear preprocessing ↔ inference boundary.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Stronger RSSI first</span>Signal filtering</span>
              <span className="p light" data-label="Detail">Reduce weaker/noisier observations.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>L0 to L7 classes</span>Output mapping</span>
              <span className="p light" data-label="Detail">Map prediction back to tagged product.</span>
            </div>
          </div>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] Documents</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Document intelligence systems</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Semantic ranking, extractive QA, evidence highlighting, <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>OCR</a> and structured output.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Primary semantic ranking</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Semantic similarity and entity matching are combined before candidates are ranked.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-5">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-5" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Semantic similarity and custom NER combine into one rank.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>The output is ranked sentence-level context, as JSON for downstream document workflows.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Extractive QA path (Haystack / FAISS)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Page-preserving retrieval → answer extraction → evidence generation.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-6">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-6" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · From PDF pages to answer evidence.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Document outputs</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Sentence-level context</span>Ranked search</span>
              <span className="p light" data-label="Detail">Semantic + <a href="https://en.wikipedia.org/wiki/Named-entity_recognition" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>NER</a> relevance.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Matched evidence regions</span>Highlighted PDF</span>
              <span className="p light" data-label="Detail">Source artifact.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Evidence</span>QA evidence</span>
              <span className="p light" data-label="Detail">Answer + context + page + score; drop answers below 0.05.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">
                <span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Sections · questions · options · answers</span>
                <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>OCR</a> / JSON
              </span>
              <span className="p light" data-label="Detail">Text or scanned PDFs.</span>
            </div>
          </div>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Ingestion</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Ingestion & data engineering</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Parallel processing, normalized schemas and clear data boundaries.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Ingestion path</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Four parallel streams and a normalized <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>PostgreSQL</a> schema. The wider project parallelized four ingestion streams and redesigned the <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>PostgreSQL</a> schemas.</p>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>20%</div>
              <div className="p light" style={css("margin-top:6px")}>lower ingestion latency</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>4 streams + normalized schemas</div>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Structured data boundaries</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Capture, preprocessing, features, inference and output stay separate.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-rkgt-7">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-rkgt-7" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · Each stage hands off an inspectable artifact.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Data & persistence</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Store</span>
              <span>Contents</span>
              <span>Role</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">CSV</span>
              <span className="p light" data-label="Contents">RFID observations + engineered features</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>Inspectable handoffs</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">JSON</span>
              <span className="p light" data-label="Contents">Predictions + document outputs</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>Machine-readable results</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">SavedModel</span>
              <span className="p light" data-label="Contents">Trained <a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>TensorFlow</a> model directories</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>Local model artifact</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>FAISS</a></span>
              <span className="p light" data-label="Contents">Local retrieval experiment storage</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>Document QA</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Temp text</span>
              <span className="p light" data-label="Contents">Page-level processing intermediates</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>Document workflows</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>PostgreSQL</a></span>
              <span className="p light" data-label="Contents">Normalized broader ingestion schemas</span>
              <span className="p light" data-label="Role" style={css("color:var(--muted-foreground)")}>4-stream working path</span>
            </div>
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The repo snapshot passes data through local CSV and JSON files. The <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>PostgreSQL</a> ingestion belongs to the wider project and isn't in the snapshot.</p>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Results</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Results, decisions & scope</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Confirmed scale, trade-offs and what is safe to publish.</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Result</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">RFID localization</span>
              <span className="p light" data-label="Result">400+ tagged products across 8 zones</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Confirmed project scale</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Signal model</span>
              <span className="p light" data-label="Result">40 landmark tags · 2K+ samples</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Simulation-generated samples</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Feature contract</span>
              <span className="p light" data-label="Result">82 numeric RSSI/count inputs</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Saved classifier</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Ingestion</span>
              <span className="p light" data-label="Result">20% lower latency</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>4 streams + schemas</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Simulation snapshot</span>
              <span className="p light" data-label="Result">496 products</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Checked-in configuration</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Repeatable signal generation</span>Simulation</span>
              <span className="p light" data-label="Detail">Avoid hardware dependency every iteration.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>±200 ms association window</span>Temporal alignment</span>
              <span className="p light" data-label="Detail">Make asynchronous signals explicit.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Prioritize stronger RSSI</span>Strong-signal filter</span>
              <span className="p light" data-label="Detail">Reduce weaker/noisier observations.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Semantic + NER relevance</span>Entity-aware ranking</span>
              <span className="p light" data-label="Detail">Combine meaning with entity information.</span>
            </div>
          </div>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>This covers applied ML, NLP, RFID localization, document processing and data pipelines. I make no claims about web apps, auth, cloud deployment, <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Kubernetes</a>, CI/CD, uptime, traffic or revenue.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on signal modeling, feature contracts, or document retrieval.</p>
        <div className="p light" data-reveal="1" style={css("display:flex;flex-wrap:wrap;gap:16px;margin-top:20px")}>
          <a href="mailto:sv.tharunpranav@gmail.com" style={css("text-decoration-color:var(--clay)")}>Email</a>
          {' '}
          <a href="https://www.linkedin.com/in/thrn" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LinkedIn</a>
          {' '}
          <a href="https://github.com/thrns" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>GitHub</a>
        </div>
      </section>
    </article>
  );
}
