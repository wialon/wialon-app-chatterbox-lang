!function($, _) {
	if (_.isUndefined(APP) || !APP.config) return false;
	APP.config = $.extend(true, APP.config, {
		L10n: {
			'lang'												: 'sk',
			'locale'											: 'sk_SK',
			'Something wrong'									: 'Chyba pri načítaní aplikácie.',
			'Please, fill the correct data in configuration'	: 'Nesprávne prihlasovacie údaje.',
			'Oh! %%module%% didn\'t load!'						: 'Chyba pri načítaní aplikácie.',
			'Oh! Unfortunately, you can\'t login'				: 'Nesprávne prihlasovacie údaje.',
			'Oh! Unfortunately, we can\'t load SDK'				: 'Chyba pri načítaní aplikácie.',
			'Oh! We can\'t fetch information'					: 'Nepodarilo sa získať informácie.',
			'Oh! We can\'t remove this message'					: 'Túto správu nie je možné odstrániť.',
			'Oh! We can\'t create command'						: 'Nemožno vytvoriť príkaz',
			'Not enought rights or something else bad'			: 'Žiadne pripojenie',
			'Oh! Unfortunately, we can\'t send coordinates'		: 'Nie je možné odoslať súradnice',
			'%%type%% are not available'						: 'Žiadne pripojenie',
			'The message was removed'							: 'Správa vymazaná.',
			'Send coordinates'									: 'Pozícia ako',
			'Sent coordinates'									: 'Súradnice',
			'Points'											: 'súradnice',
			'Address'											: 'adresa',
			'Drag to change<br />Double click to send'			: 'Ťahaním presunúť.<br />Dvojklikom odoslať.',
			'There are no message to export'					: 'Žiadne správy pre export.',
			'Message is not delivered'							: 'Nedoručené.',
			'Session has been lost'								: 'Relácia stratená.',
			'XML comments'										: 'Atribúty msgset: *name: Názov vozidla alebo vodiča; *type: typ (vozidlo, vodič); *phones: dostupné telefónne čísla. Atribúty msg: *ts: čas správy (UTC); *type: typ správy (out - odoslané, in - doručené); *link: typ komunikácie (tcp alebo sms); *flag: vlajky (1 - text, 2 - obrázok, 3 - súradnice, 4 - poplach); *text - tvar správy.'
		},
		localization: {
			'days'												: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
			'days_short'										: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
			'months'											: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
			'months_short'										: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
		}
	});
}(jQuery, _);
