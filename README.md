# expo-notifications-issue-1

Minimal code example of expo notifications type issue
`App.tsx` file, `getAllScheduledNotifications()` function

Trying to know about local notifications but there are problems with types returned by `getAllScheduledNotificationsAsync(): NotificationRequest[]`.
`NotificationRequest` represents a `trigger` property of type `NotificationTrigger` which is used to know about when a notification is going to be triggered.
But problem is with identifying `SchedulableNotificationTriggerInput` type, which is a union and all types of this union should represent a `type` property that is used to identify what scheduled type is returned.
There is this `type` property in all `SchedulableNotificationTriggerInput` union types but one of them (`DateTriggerInput`) is causing `type` property not be useful. (`type` property not identified by typescript).

```typescript
// returned type after null checking trigger property ...
export type SchedulableNotificationTriggerInput =
  | CalendarTriggerInput
  | TimeIntervalTriggerInput
  | DailyTriggerInput
  | WeeklyTriggerInput
  | MonthlyTriggerInput
  | YearlyTriggerInput
  | DateTriggerInput;

// all other types have `type` property except this one which is a union and makes
// type property useless and not known by typescript
// should Date and number be removed?!🤔
export type DateTriggerInput =
  | Date
  | number
  | {
      type: SchedulableTriggerInputTypes.DATE;
      channelId?: string;
      date: Date | number;
    };
```

### using trigger and no type property exists:

![image](https://github.com/user-attachments/assets/3289b6af-3062-4e53-92b1-a9465bdf0195)
