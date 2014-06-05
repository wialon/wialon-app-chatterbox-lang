!function($, _) {
	if (_.isUndefined(APP) || !APP.config) return false;
	APP.config = $.extend(true, APP.config, {
		L10n: {
			'lang'												: 'en',
			'locale'											: 'en_GB',
			'Something wrong'									: 'Error loading the app.',
			'Please, fill the correct data in configuration'	: 'Incorrect login data.',
			'Oh! %%module%% didn\'t load!'						: 'Error loading the app.',
			'Oh! Unfortunately, you can\'t login'				: 'Incorrect login data.',
			'Oh! Unfortunately, we can\'t load SDK'				: 'Error loading the app.',
			'Oh! We can\'t fetch information'					: 'Unable to retrieve information.',
			'Oh! We can\'t remove this message'					: 'Unable to remove this message.',
			'Oh! We can\'t create command'						: 'Unable to create command',
			'Not enought rights or something else bad'			: 'No connection',
			'Oh! Unfortunately, we can\'t send coordinates'		: 'Unable to send coordinates',
			'%%type%% are not available'						: 'No connection',
			'The message was removed'							: 'Message deleted.',
			'Send coordinates'									: 'Position as',
			'Sent coordinates'									: 'Coordinates',
			'Points'											: 'coordinates',
			'Address'											: 'address',
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