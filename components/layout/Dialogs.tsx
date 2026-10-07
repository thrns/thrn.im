'use client';
import { css } from '@/lib/css';
import { Button, Icon } from '@/components/ui';
import { Tag } from '@/components/common/Tag';
import { KeyCap } from '@/components/common/Tag';
import TextLink from '@/components/common/TextLink';
import { EMAIL, GUIDE_L, GUIDE_R } from '@/lib/chrome';
import { useChrome } from './ChromeContext';
import { Modal, ModalHeader, ModalRow } from './Modal';

export function EmailDialog() {
  const { s, closeEmail, copyAddr, dialogOpeners } = useChrome();
  return (
    <Modal open={s.email} onClose={closeEmail} zIndex={56} label="Email" titleId="email-dialog-title" descriptionId="email-dialog-description" opener={dialogOpeners.current.email} maxWidth={640} padding="32px 32px 28px" dataR="dlg">
      <ModalHeader
        title="Email me" titleId="email-dialog-title" descriptionId="email-dialog-description" titleStyle="font-size:24px;line-height:32px"
        subtitle={EMAIL} subtitleStyle="margin:10px 0 0;max-width:var(--measure)"
        closeLabel="Close email" onClose={closeEmail}
      />
      <div style={css('margin-top:32px;border-top:1px solid var(--foreground)')}>
        <ModalRow align="center">
          <Tag hint="K">Copy</Tag>
          <div style={css('display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap')}>
            <p className="p light" style={css('margin:0')}>Copy the address to your clipboard.</p>
            <span data-copy="1" style={css('display:inline-flex')}>
              <Button variant="outline" onClick={copyAddr}><span style={css('display:inline-flex;align-items:center;gap:6px')}><Icon name={s.copied ? 'LucideCheck' : 'LucideCopy'} size={16} />{s.copied ? 'Copied' : 'Copy address'}</span></Button>
            </span>
          </div>
        </ModalRow>
        <ModalRow align="center">
          <Tag hint="J">Mail app</Tag>
          <div style={css('display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap')}>
            <p className="p light" style={css('margin:0')}>Open a new message in your mail app.</p>
            <Button variant="primary" onClick={() => { window.location.href = 'mailto:' + EMAIL; }}>Open mail app</Button>
          </div>
        </ModalRow>
      </div>
    </Modal>
  );
}

function GuideColumn({ rows }: { rows: [string, string][] }) {
  return (
    <div style={css('border-top:1px solid var(--foreground)')}>
      {rows.map(([label, k]) => (
        <div key={label} style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)')}>
          <span className="light" style={css('font-size:15px;line-height:22px;letter-spacing:-0.011em;color:var(--foreground)')}>{label}</span>
          <span style={css('display:inline-flex;align-items:center;gap:8px')}><KeyCap>{k}</KeyCap></span>
        </div>
      ))}
    </div>
  );
}

export function GuideDialog() {
  const { s, closeGuide, dialogOpeners } = useChrome();
  return (
    <Modal open={s.guide} onClose={closeGuide} zIndex={55} label="Keyboard shortcuts" titleId="guide-dialog-title" descriptionId="guide-dialog-description" opener={dialogOpeners.current.guide} maxWidth={820} padding="40px 40px 36px">
      <ModalHeader
        title="Guide for the lazy" titleId="guide-dialog-title" descriptionId="guide-dialog-description" titleStyle="font-size:28px;line-height:36px"
        subtitle={<>Less clicking. More wandering.<br />Press a letter from anywhere.</>} subtitleStyle="margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)"
        closeLabel="Close guide" onClose={closeGuide}
      />
      <div style={css('margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0 48px;align-items:start')}>
        <GuideColumn rows={GUIDE_L} />
        <GuideColumn rows={GUIDE_R} />
      </div>
    </Modal>
  );
}
