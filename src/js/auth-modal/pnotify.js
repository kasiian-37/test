import { defaults, alert } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';

defaults.styling = 'material';

export function pushError(
  text = 'Something went wrong',
  type = '',
  delay = 3000,
) {
  const options = {
    text,
    type,
    delay,
  };
  alert(options);
}
