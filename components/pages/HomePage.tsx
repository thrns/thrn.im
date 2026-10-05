'use client';
import { css } from '@/lib/css';
import { EMAIL } from '@/lib/chrome';
import { useChrome } from '@/components/layout/ChromeContext';
import PageMain from '@/components/layout/PageMain';
import TextLink from '@/components/common/TextLink';

const P = 'margin:0;line-height:23px';

export default function HomePage() {
  const { openEmail } = useChrome();
  return (
    <PageMain>
      <section style={css('max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;text-align:left;box-sizing:border-box')}>
        <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 60ms both')}>Tharun Pranav Sakthivel</h1>
        <p className="p light" data-anim="1" style={css('margin:8px 0 0;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 110ms both')}>Build a compass to wander.</p>
        <div aria-hidden="true" data-anim="1" style={css('width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both')}></div>
        <p className="p light" data-anim="1" style={css('margin:16px 0 0;max-width:520px;line-height:23px;text-align:left;animation:fadeUp .7s var(--ease) 160ms both')}>
          Hi there! I&apos;m TP, an AI engineer in my last year at <TextLink href="https://www.ubc.ca/">UBC</TextLink>, studying Physics, Statistics, and Environmental Sciences.
        </p>
      </section>
      <section style={css('max-width:var(--content-width);margin:0 auto;padding:32px var(--page-gutter) 0;box-sizing:border-box')}>
        <div data-anim="1" style={css('max-width:520px;margin:0;display:flex;flex-direction:column;gap:12px;text-align:left;animation:fadeUp .7s var(--ease) 380ms both')}>
          <p className="p light" style={css(P)}>Most recently, I was an AI Engineer at <TextLink href="https://www.berribot.com/">Berribot</TextLink>, where I built and ran the system that matches candidates to job descriptions and ranks them for recruiters.</p>
          <p className="p light" style={css(P)}>Before that, I co-founded <TextLink href="https://github.com/thrns/thirdslate">ThirdSlate</TextLink>, a platform that helps people learn more efficiently, and <TextLink href="https://github.com/thrns/pocketlink">Pocketlink</TextLink>, where creators can publish, sell, and grow their work all in one place.</p>
          <p className="p light" style={css(P)}>I also worked as a Technical Consultant at <TextLink href="https://hyr.works/">Hyr</TextLink> and as an AI Engineer at <TextLink href="https://ubcagrobot.com/">UBC AgroBot</TextLink>, where I got to use AI on agriculture problems.</p>
          <p className="p light" style={css(P)}>These days I&apos;m deep in the research side of AI, exploring it and building as I go.</p>
          <p className="p light" style={css(P)}>In a past life, I was into electronics and circuitry, and I spent a lot of time on debate and athletics.</p>
          <p className="p light" style={css(P)}>You can learn more about my work <TextLink href="/work">here</TextLink>.</p>
        </div>
        <div className="p light" data-anim="1" style={css('animation:fadeUp .7s var(--ease) 480ms both;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:16px;margin-top:24px')}>
          <TextLink href={'mailto:' + EMAIL} onClick={openEmail}>Email</TextLink>
          <TextLink href="https://www.linkedin.com/in/thrn">LinkedIn</TextLink>
          <TextLink href="https://github.com/thrns">GitHub</TextLink>
        </div>
      </section>
    </PageMain>
  );
}
