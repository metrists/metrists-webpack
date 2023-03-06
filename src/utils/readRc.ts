import { join } from 'path';
import { existsSync, readFileSync, promises } from 'fs';
import type { RcFile } from '../interfaces/rc.interface';

export async function readRc(): Promise<RcFile | void> {
  const rcPath = join(process.cwd(), '.metristsrc');
  if (existsSync(rcPath)) {
    return JSON.parse(await promises.readFile(rcPath, 'utf8')) as RcFile;
  }
  return;
}

export function readRcSync(): RcFile | void {
  const rcPath = join(process.cwd(), '.metristsrc');
  if (existsSync(rcPath)) {
    return JSON.parse(readFileSync(rcPath, 'utf8')) as RcFile;
  }
  return;
}
