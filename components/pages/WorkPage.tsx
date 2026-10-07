'use client';
import { css } from '@/lib/css';
import { ROLES, type Role } from '@/lib/data';
import { useScrollRail } from '@/hooks/useScrollRail';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';

const ROLE_LINK = 'text-decoration:none;border-radius:4px;letter-spacing:-0.011em;font-size:14px;line-height:21px';

function RoleItem({ r, i, last }: { r: Role; i: number; last: boolean }) {
  const [t1, t2] = r.title.split(' | ');
  return (
    <div>
      <div data-r="rolepad" data-anim="1" style={css(`padding:0 0 ${last ? '0' : '48px'} 35px;animation:fadeUp .7s var(--ease) ${300 + i * 70}ms both`)}>
        <h2 style={css('margin:0;display:flex;flex-direction:column;align-items:flex-start;gap:6px')}>
          <span style={css('display:flex;flex-wrap:wrap;align-items:baseline;gap:0 10px')}>
            <a className="role-link" href={r.url} target="_blank" rel="noopener noreferrer" style={css(`${ROLE_LINK};font-weight:600`)}>{t1}</a>
            {!!r.summary2 && <span aria-hidden="true" style={css('font-size:14px;line-height:21px;font-weight:300;color:var(--muted-foreground)')}>|</span>}
            {!!r.summary2 && <a className="role-link" href={r.url} target="_blank" rel="noopener noreferrer" style={css(`${ROLE_LINK};font-weight:600`)}>{t2 || ''}</a>}
          </span>
          <a className="role-link" href={r.url} target="_blank" rel="noopener noreferrer" style={css(`${ROLE_LINK};font-weight:300;font-style:italic`)}>{r.company}</a>
        </h2>
        <p className="p light" style={css('margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)')}>
          {r.summary}{' '}
          <span style={css('text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px;color:var(--muted-foreground)')}>{r.highlight}</span>
        </p>
        {!!r.summary2 && <p className="p light" style={css('margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)')}>{r.summary2}</p>}
        {!!r.stack && <div data-stack="1" className="p-sm light" style={css('color:var(--muted-foreground)')}>{r.stack}</div>}
      </div>
    </div>
  );
}

export default function WorkPage() {
  useScrollRail();
  return (
    <PageMain>
      <PageSection id="work">
        <PageHeading title="Work" intro="Ten roles across startups, robotics and applied AI." sorted />
        <div id="rail-wrap" style={css('margin-top:56px;position:relative')}>
          <div id="rail-fill" data-anim="1" style={css('position:absolute;left:0;top:0;width:2px;height:48px;background:var(--foreground);transform-origin:top;will-change:height;animation:growY 1s var(--ease) 200ms both')}></div>
          {ROLES.map((r, i, a) => (
            <RoleItem key={r.company} r={r} i={i} last={i === a.length - 1} />
          ))}
        </div>
      </PageSection>
    </PageMain>
  );
}
