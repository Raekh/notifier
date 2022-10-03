export enum NotificationType {
    'JOIN_DEMAND' = 'JOIN_DEMAND',
    'TEST' = 'TEST',
    'LAST_WORDS' = 'LAST_WORDS',
    'BABU' = 'BABU',
}

export enum ResourceType {
    'USER' = 'USER',
    'ORGANISATION' = 'ORGANISATION'
}

export interface Notification {
    id: string;
    type: NotificationType;
    resourceId: string;
    resourceType: ResourceType;
    notification: Record<string, unknown>
}

export type NotificationPayload<T> = T;
