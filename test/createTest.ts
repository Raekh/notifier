// import { NotificationCreator } from '../notificationCreator';
import { v4 as uuid } from '../uuid';
import { Notification, NotificationPayload, NotificationType, ResourceType } from '../notificationTypes';
import DispatchFunction from '../dispatchFunction';

export const createTestNotification = (
    resourceId: string,
    type: NotificationType,
    notificationPayload: NotificationTestPayload
): Notification => {
    return {
        id: uuid(),
        type,
        resourceId: resourceId,
        resourceType: ResourceType.USER,
        notification: notificationPayload
    }
}

export type NotificationTestPayload = NotificationPayload<{
    test: string;
}>

export type DispatchTestNotification = DispatchFunction<
    NotificationType.TEST,
    NotificationTestPayload
>
