import {Notification} from './notificationTypes';

export type NotificationCreator<T, U> = (
    resource: string,
    type: T,
    payload: U
) => Notification;
