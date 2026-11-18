// オンライン対戦（後で Durable Objects とつなぐ）。いまは入口の画面だけ
import type { Game } from '../engine/game';
import type { Move } from '../engine/position';
import { h } from './dom';

export interface OnlineSession {
  state(): { game: Game; you: 0 | 1; names: [string, string]; message: string };
  send(m: Move): void;
  resign(): void;
  declare(): void;
  leave(): void;
  clocks(): [string, string] | null;
}
export const onlineSession: { pendingCode: string | null } = { pendingCode: null };

export function renderOnlineEntry(hd: { render: () => void }): HTMLElement {
  void hd;
  return h('div', { class: 'title-main' }, h('h1', {}, 'オンライン対戦'), h('p', {}, '準備中です。'));
}
