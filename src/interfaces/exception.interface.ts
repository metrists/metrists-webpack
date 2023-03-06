import { MESSAGES } from '../ui/messages';

export interface Exception {
  MESSAGE_TITLE?: keyof typeof MESSAGES;
}
