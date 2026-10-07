'use client';
import { css } from '@/lib/css';
import { useChrome } from '@/components/layout/ChromeContext';
import PageMain from '@/components/layout/PageMain';
import TextLink from '@/components/common/TextLink';
import { PROFILE } from '@/lib/data';
import type { ReactNode } from 'react';

const P = 'margin:0;line-height:23px';

function linkedCopy(text: string, links: [string, string][]): ReactNode {
  const match = links
    .map(([label, href]) => ({ label, href, index: text.indexOf(label) }))
    .filter((link) => link.index >= 0)
    .sort((left, right) => left.index - right.index)[0];
  if (!match) return text;
  return <>{text.slice(0, match.index)}<TextLink href={match.href}>{match.label}</TextLink>{linkedCopy(text.slice(match.index + match.label.length), links)}</>;
}

export default function HomePage() {
  const { openEmail } = useChrome();
  return (
    <PageMain>
      <section style={css('max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;text-align:left;box-sizing:border-box')}>
        <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 60ms both')}>{PROFILE.fullName}</h1>
        <p className="p light" data-anim="1" style={css('margin:8px 0 0;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 110ms both')}>{PROFILE.tagline}</p>
        <div aria-hidden="true" data-anim="1" style={css('width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both')}></div>
        <p className="p light" data-anim="1" style={css('margin:16px 0 0;max-width:520px;line-height:23px;text-align:left;animation:fadeUp .7s var(--ease) 160ms both')}>
          {linkedCopy(PROFILE.studyIntro, [['UBC', 'https://www.ubc.ca/']] )}
        </p>
      </section>
      <section style={css('max-width:var(--content-width);margin:0 auto;padding:32px var(--page-gutter) 0;box-sizing:border-box')}>
        <div data-anim="1" style={css('max-width:520px;margin:0;display:flex;flex-direction:column;gap:12px;text-align:left;animation:fadeUp .7s var(--ease) 380ms both')}>
          <p className="p light" style={css(P)}>{linkedCopy(PROFILE.recentWork, [['Berribot', 'https://www.berribot.com/']])}</p>
          <p className="p light" style={css(P)}>{linkedCopy(PROFILE.thirdSlatePocketlink, [['ThirdSlate', 'https://github.com/thrns/thirdslate'], ['Pocketlink', 'https://github.com/thrns/pocketlink']])}</p>
          <p className="p light" style={css(P)}>{linkedCopy(PROFILE.hyrAgroBot, [['Hyr', 'https://hyr.works/'], ['UBC AgroBot', 'https://ubcagrobot.com/']])}</p>
          <p className="p light" style={css(P)}>{PROFILE.research}</p>
          <p className="p light" style={css(P)}>{PROFILE.researchInterest}</p>
          <p className="p light" style={css(P)}>{PROFILE.pastInterests}</p>
          <p className="p light" style={css(P)}>{linkedCopy(PROFILE.workLink, [['here', '/work']])}</p>
        </div>
        <div className="p light" data-anim="1" style={css('animation:fadeUp .7s var(--ease) 480ms both;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:16px;margin-top:24px')}>
          <TextLink href={'mailto:' + PROFILE.email} onClick={openEmail}>Email</TextLink>
          <TextLink href="https://www.linkedin.com/in/thrn">LinkedIn</TextLink>
          <TextLink href="https://github.com/thrns">GitHub</TextLink>
        </div>
      </section>
    </PageMain>
  );
}
