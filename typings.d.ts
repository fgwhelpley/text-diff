declare module '@fgwhelpley/text-diff' {
	export interface Diffs {}
	export class Diff {
		main(left: string, right: string): Diffs[];
		cleanupSemantic(d: Diffs): void;
		prettyHtml(d: Diffs): string;
	}
}
