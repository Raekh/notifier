import { Notification, NotificationType, NotificationPayload } from './notificationTypes';
import Finder from './finder';
import Persister from './persister';
import User from './user';
// import { NotificationCreator } from './notificationCreator';
import { createJoinDemandNotification, DispatchJoinDemandNotification} from './demands/joinDemand';
import { createTestNotification, DispatchTestNotification} from './test/createTest';
import { createBabuNotification, DispatchBabuNotification} from './babu/createBabu';
import { createLastWordsNotification, DispatchLastWordsNotification} from './lastWords/createLastWords';
import Model from './model';

const allNotificationCreatorFunctions = {
    [NotificationType.JOIN_DEMAND]: createJoinDemandNotification,
    [NotificationType.TEST]: createTestNotification,
    [NotificationType.LAST_WORDS]: createLastWordsNotification,
    [NotificationType.BABU]: createBabuNotification,
}

type AllDispatchFunctions =
    DispatchJoinDemandNotification
    & DispatchTestNotification
    & DispatchLastWordsNotification
    & DispatchBabuNotification;


class NotifierService {
    constructor(
        private resourceRepository: Finder<Model>,
        private notificationRepository: Persister<Notification>,
    ) {}

    dispatch: AllDispatchFunctions = async (
        notificationType: NotificationType,
        resourceId: string,
        notificationPayload: NotificationPayload<any>
    ): Promise<void> => {
        // fetch resource
        const resource = this.resourceRepository.findOrFail({
            id: resourceId
        })

        // get correct notification creator function
        const createNotificationFunction = allNotificationCreatorFunctions[notificationType];

        // create notification using function
        const notification = createNotificationFunction(resource.id, notificationType, notificationPayload);

        // dispatch it
        this.notificationRepository.persist(notification);
    }
}

class Tester {
    constructor() {
        const notifierService = new NotifierService(
            new Finder<User>,
            new Persister<Notification>
        );
        notifierService.dispatch(
            NotificationType.JOIN_DEMAND,
            'userId',
            {
                csvKey: 'true',
            }
        );
        notifierService.dispatch(
            NotificationType.TEST,
            'userId',
            {
                test: 'alsoTrue'
            }
        )
        notifierService.dispatch(
            NotificationType.LAST_WORDS,
            'userId',
            {
                loveYouAll: true
            }
        )
        notifierService.dispatch(
            NotificationType.BABU,
            'userId',
            {
                love: true
            }
        )
    }
}

new Tester();

export default NotifierService;
