import { v4 as uuid } from '../uuid';
import { Notification, NotificationPayload, NotificationType, ResourceType } from '../notificationTypes';
import DispatchFunction from '../dispatchFunction';

export const createLastWordsNotification = (
    resourceId: string,
    type: NotificationType,
    notificationPayload: NotificationLastWordsPayload
): Notification => {
    return {
        id: uuid(),
        type,
        resourceId,
        resourceType: ResourceType.USER,
        notification: notificationPayload
    }
}

export type NotificationLastWordsPayload = NotificationPayload<{
    loveYouAll: boolean
}>

export type DispatchLastWordsNotification = DispatchFunction<
    NotificationType.LAST_WORDS,
    NotificationLastWordsPayload
>
