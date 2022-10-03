// import { NotificationCreator } from '../notificationCreator';
import { v4 as uuid } from '../uuid';
import { Notification, NotificationPayload, NotificationType, ResourceType } from '../notificationTypes';
import DispatchFunction from '../dispatchFunction';

export const createJoinDemandNotification = (
    resourceId: string,
    type: NotificationType,
    notificationPayload: NotificationJoinDemandPayload
): Notification => {
    return {
        id: uuid(),
        type,
        resourceId: resourceId,
        resourceType: ResourceType.USER,
        notification: notificationPayload
    }
}

export type NotificationJoinDemandPayload = NotificationPayload<{
    csvKey: string;
}>

export type DispatchJoinDemandNotification = DispatchFunction<
    NotificationType.JOIN_DEMAND,
    NotificationJoinDemandPayload
>
