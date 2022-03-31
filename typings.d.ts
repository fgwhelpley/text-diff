declare module '@fgwhelpley/text-diff' {
	export class diff {
		main(left: string, right: string): any[];
		cleanupSemantic(d: any): void;
		prettyHtml(d: any): string;
	}
}
