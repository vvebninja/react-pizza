#!/usr/bin/env node
/*
 Generates a Conventional Commits–style message summarizing all current changes.

 Usage examples:
   pnpm commit:message
   pnpm commit:message | git commit -F -

 The message contains a subject and a body grouped by change type.
*/

import { execSync } from 'node:child_process';

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trimEnd();
}

function nowStamp() {
  const d = new Date();
  // ISO-like but friendlier: YYYY-MM-DD HH:MM
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function parseStatusLine(line) {
  // Keep original for path parsing
  const raw = line;
  // Untracked
  if (line.startsWith('?? ')) {
    return { type: 'Added', path: line.slice(3) };
  }

  // Two-character status (XY) followed by a space
  const status = line.slice(0, 2);
  const rest = line.slice(3);

  // Renames/Copies include "old -> new"
  if (status[0] === 'R') {
    return { type: 'Renamed', path: rest };
  }
  if (status[0] === 'C') {
    return { type: 'Copied', path: rest };
  }

  // Conflicts
  if (status === 'UU') {
    return { type: 'Conflicted', path: rest };
  }

  // Added/Modified/Deleted heuristics (consider staged X column first)
  const x = status[0];
  const y = status[1];
  const pick = (ch) => ({ A: 'Added', M: 'Modified', D: 'Deleted' }[ch] || null);
  const primary = pick(x) || pick(y) || 'Changed';
  return { type: primary, path: rest || raw }; // fallback
}

function groupChanges(lines) {
  const groups = new Map();
  for (const line of lines) {
    if (!line) continue;
    const { type, path } = parseStatusLine(line);
    if (!groups.has(type)) groups.set(type, []);
    groups.get(type).push(path);
  }
  return groups;
}

function buildSubject(groups) {
  // Build a concise subject like: "chore: update 68 files (Added, Modified, Deleted)"
  const types = Array.from(groups.keys());
  const total = Array.from(groups.values()).reduce((n, arr) => n + arr.length, 0);
  const kinds = types.join(', ');
  return `chore: update ${total} file${total === 1 ? '' : 's'} (${kinds})`;
}

function buildBody(groups) {
  const lines = [];
  lines.push(`Generated at: ${nowStamp()}`);
  lines.push('');
  for (const [type, files] of groups) {
    lines.push(`${type}:`);
    for (const f of files) {
      lines.push(`- ${f}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  let output = '';
  try {
    output = run('git status --porcelain=v1 --untracked-files=all');
  } catch (e) {
    console.error('Error: not a git repository or git is unavailable.');
    process.exit(2);
  }

  const lines = output.split('\n').filter(Boolean);
  if (lines.length === 0) {
    console.error('No changes detected.');
    process.exit(1);
  }

  const groups = groupChanges(lines);
  const subject = buildSubject(groups);
  const body = buildBody(groups);

  // Print final commit message to stdout
  process.stdout.write(subject + '\n\n' + body + '\n');
}

main();
