import QRcode from 'qrcode';
import { json } from '@sveltejs/kit';
export function GET({ url }) {
	let svg;
	QRcode.toString(
		url.searchParams.get('url'),
		{
			errorCorrectionLevel: 'H',
			type: 'svg'
		},
		function (e, data) {
			if (e) throw e;
			svg = data;
		}
	);
	console.log(svg);
	return json({ success: true, svg: svg });
}
