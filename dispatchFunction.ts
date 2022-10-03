type DispatchFunction<T,U> = (
    notificationType: T,
    resourceId: string,
    notificationPayload: U
) => Promise<void>

export default DispatchFunction;
