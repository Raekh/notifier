// import { NotificationCreator } from '../notificationCreator';
import { v4 as uuid } from '../uuid';
import { Notification, NotificationPayload, NotificationType, ResourceType } from '../notificationTypes';
import DispatchFunction from '../dispatchFunction';

export const createBabuNotification = (
    resourceId: string,
    type: NotificationType,
    notificationPayload: NotificationBabuPayload
): Notification => {
    return {
        id: uuid(),
        type,
        resourceId: resourceId,
        resourceType: ResourceType.USER,
        notification: notificationPayload
    }
}

export type NotificationBabuPayload = NotificationPayload<{
    love: boolean;
}>

export type DispatchBabuNotification = DispatchFunction<
    NotificationType.BABU,
    NotificationBabuPayload
>
