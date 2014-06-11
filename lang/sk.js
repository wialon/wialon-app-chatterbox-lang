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
			'Drag to change<br />Double click to send'			: 'Drag to relocate.<br />Double-click to send.',
			'There are no message to export'					: 'No messages to export.',
			'Message is not delivered'							: 'Not delivered.',
			'Session has been lost'								: 'Session lost.',
			'XML comments'										: 'Attributes msgset: *name: unit or driver name; *type: type (unit, driver); *phones: available phone numbers. Attributes msg: *ts: message time (UTC); *type: message type (out - outgoing, in - incoming); *link: communication type (tcp ot sms); *flag: flags (1 - text, 2 - image, 3 - coordinates, 4 - alert); *text - message body.'
		},
		localization: {
			'days'												: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			'days_short'										: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			'months'											: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			'months_short'										: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		}
	});
}(jQuery, _);
