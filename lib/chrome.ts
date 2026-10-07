export const EMAIL = 'sv.tharunpranav@gmail.com';
export const DEFAULT_MO: Record<string, boolean> = { caret: false, arrow: true, soft: false, liquid: true, drop: false, morph: true, rot: false };
export const SHAPES = ['circle', 'triangle', 'diamond'];

export const PATH: Record<string, string> = { home: '/', work: '/work', projects: '/projects', cases: '/case-studies', stack: '/stack', resume: '/resume' };
export const NAV: [string, string, string][] = [['W', 'Work', 'work'], ['P', 'Projects', 'projects'], ['T', 'Case studies', 'cases'], ['S', 'Stack', 'stack'], ['R', 'Resume', 'resume']];

/** Which nav item a pathname belongs to. */
export const activeOf = (p: string) => (p === '/' ? 'home' : p.startsWith('/work') ? 'work' : p.startsWith('/projects') ? 'projects' : p.startsWith('/case-studies') ? 'cases' : p.startsWith('/stack') ? 'stack' : p.startsWith('/resume') ? 'resume' : '');

export const MOMENTS: [string, string, string][] = [
  ['caret', 'Text caret', '<text x="1" y="16" font-family="Georgia,serif" font-size="14" fill="currentColor" opacity=".55">Aa</text><rect x="22" y="4" width="2" height="14" rx="1" fill="currentColor"/>'],
  ['arrow', 'Link arrow', '<path d="M9 15L17 7M10.5 7H17v6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20h22" stroke="currentColor" opacity=".4"/>'],
  ['soft', 'Soft buttons', '<rect x="2" y="4" width="24" height="14" rx="5" fill="none" stroke="currentColor" opacity=".5"/><rect x="10" y="7" width="8" height="8" rx="2.5" fill="currentColor"/>'],
  ['liquid', 'Liquid clicks', '<circle cx="14" cy="11" r="9" fill="none" stroke="currentColor" opacity=".5"/><circle cx="14" cy="11" r="4" fill="currentColor"/>'],
  ['drop', 'Motion droplet', '<circle cx="5" cy="11" r="2" fill="currentColor" opacity=".6"/><circle cx="18" cy="11" r="4.5" fill="currentColor"/>'],
  ['morph', 'Smooth morphs', '<rect x="11" y="2" width="6" height="18" rx="3" fill="currentColor"/>'],
  ['rot', 'Shape rotation', '<polygon points="14,2 22,7 21,16 14,20 7,16 6,7" fill="currentColor"/>'],
];

export const GUIDE_L: [string, string][] = [['Home', 'H'], ['Work', 'W'], ['Projects', 'P'], ['Case studies', 'T'], ['Stack', 'S'], ['Resume', 'R'], ['Cursor on / off', 'O'], ['Cursor shape', 'F'], ['Little moments', 'L']];
export const GUIDE_R: [string, string][] = [['Ask Bixxie', '/'], ['Email me', 'M'], ['Day / night mode', 'D'], ['Cursor settings', 'C'], ['This guide', '?'], ['Stack: all, active, planned, inactive', 'E U N I'], ['Stack: category', 'G'], ['Copy email address', 'K'], ['Open mail app', 'J'], ['Close a window', 'Esc']];

export const SUGS = ['Me', 'Projects', 'Skills', 'Fun', 'Contact', 'More'];
export const SUG_ICON: Record<string, string> = { Me: 'LucideGraduationCap', Projects: 'LucideBriefcase', Skills: 'LucideLayers', Fun: 'LucideSparkles', Contact: 'LucideMail', More: 'LucideEllipsis' };
export const MORE_QUESTIONS = [
  "What are Tharun's hobbies and interests?",
  'What are some fun facts and quirks about Tharun?',
  "What is Tharun's personality like?",
  "What are Tharun's favorite movies, music, and food?",
  'What values and beliefs guide Tharun?',
  'Where did Tharun grow up, and how did he get into coding?',
  'What sports did Tharun play growing up?',
  'What is Tharun focused on right now?',
];

export const hide = (open: boolean) => ({ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }) as any;
export const dlgTf = (open: boolean) => (open ? 'none' : 'translateY(12px) scale(.98)');
export const dropTf = (open: boolean) => (open ? 'none' : 'translateY(-6px)');
