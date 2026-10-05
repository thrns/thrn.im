import Hyr from './Hyr';
import * as hyr from '@/lib/case-studies/hyr';
import Pocketlink from './Pocketlink';
import * as pocketlink from '@/lib/case-studies/pocketlink';
import RKGT from './RKGT';
import * as rkgt from '@/lib/case-studies/rkgt';
import Tekkscope from './Tekkscope';
import * as tekkscope from '@/lib/case-studies/tekkscope';
import ThirdSlate from './ThirdSlate';
import * as thirdslate from '@/lib/case-studies/thirdslate';
import TraceBox from './TraceBox';
import * as tracebox from '@/lib/case-studies/tracebox';
import Berribot from './Berribot';
import * as berribot from '@/lib/case-studies/berribot';

export type Study = { Article: any; SRC: Record<string, string>; THEME_CSS: string; IDS: string[]; TOC: string[][] };
export const REGISTRY: Record<string, Study> = {
  hyr: { Article: Hyr, SRC: hyr.SRC, THEME_CSS: hyr.THEME_CSS, IDS: hyr.IDS, TOC: hyr.TOC },
  pocketlink: { Article: Pocketlink, SRC: pocketlink.SRC, THEME_CSS: pocketlink.THEME_CSS, IDS: pocketlink.IDS, TOC: pocketlink.TOC },
  rkgt: { Article: RKGT, SRC: rkgt.SRC, THEME_CSS: rkgt.THEME_CSS, IDS: rkgt.IDS, TOC: rkgt.TOC },
  tekkscope: { Article: Tekkscope, SRC: tekkscope.SRC, THEME_CSS: tekkscope.THEME_CSS, IDS: tekkscope.IDS, TOC: tekkscope.TOC },
  thirdslate: { Article: ThirdSlate, SRC: thirdslate.SRC, THEME_CSS: thirdslate.THEME_CSS, IDS: thirdslate.IDS, TOC: thirdslate.TOC },
  tracebox: { Article: TraceBox, SRC: tracebox.SRC, THEME_CSS: tracebox.THEME_CSS, IDS: tracebox.IDS, TOC: tracebox.TOC },
  berribot: { Article: Berribot, SRC: berribot.SRC, THEME_CSS: berribot.THEME_CSS, IDS: berribot.IDS, TOC: berribot.TOC },
};
