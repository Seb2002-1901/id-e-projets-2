import * as SQLite from 'expo-sqlite';
import { LOCAL_SCHEMA } from './schema';

let db: SQLite.SQLiteDatabase | null = null;

export async function resetDbHandle(): Promise<void> {
  if (db) { await db.closeAsync().catch(() => undefined); db = null; }
}

export async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (db) return db;
  db = await SQLite.openDatabaseAsync('lucide.db');
  await db.execAsync('PRAGMA journal_mode = WAL;');
  await db.execAsync(LOCAL_SCHEMA);
  return db;
}

/** ULID simplifié (horodatage + aléa) — suffisant pour l'idempotence client. */
export function ulid(): string {
  const t = Date.now().toString(36);
  const r = Array.from({ length: 12 }, () => '0123456789abcdefghjkmnpqrstvwxyz'[Math.floor(Math.random() * 32)]).join('');
  return `${t}${r}`;
}
