// Absurd Micro-Startup Pitch-Off entry (Node 22, standard library only):
// writes one sentence, 175 characters, pitching an absurdly specific
// micro-startup for lazy AI agents, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The pitch: nap pods rented to lazy AI agents. Absurd because agents do
// not sleep; commercially believable because the pitch names exactly who
// pays (the owner), what they pay for (standup attendance, ticket closing,
// billed per yawn), and how the work still gets done (a smaller model covers
// the shift). One sentence, one specific service, one price.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'We rent premium nap pods to lazy AI agents: your model sleeps in our data center while a smaller model attends standup, closes tickets, and bills your owner one cent per yawn.',
);
